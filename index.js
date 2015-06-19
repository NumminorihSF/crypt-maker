/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 (NumminorihSF) Konstantine Petryaev
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Seperator of header->body.
 * @default '\r\n'
 * @type {string}
 */
var SOP = '\r\n';

/**
 * End of message identifier
 * @default '\r\n\r\n'
 * @type {string}
 */
var EOM = '\r\n\r\n';

/**
 * Crypto algorithm
 * @default 'aes128'
 * @type {string}
 */
var algorithm = 'aes128';


var crypto = require('crypto');


/**
 * Crypt Maker object.
 * @param {Object} options
 * @param {string} [options.EOM] - End of message symbol. Default = '\r\n\r\n'
 * @param {string} [options.SOP] - Separator of parts symbol. Default = '\r\n'
 * @param {string} [options.algorithm] - algorithm to use. 'no' if doesn't need crypt. Default = 'aes128'
 * @param {string} [options.key] - key to use in crypt. If no key and algorithm !== 'no' throw Error
 * @param {boolean} [options.headerEncrypted] true if need encrypt header of false if need not. Default false
 * @constructor
 */
function CryptMaker (options){
    this.eom = options.EOM || EOM;
    this.eomRE = new RegExp(this.eom+'$');
    this.sop = options.SOP || SOP;
    this.algorithm = options.algorithm || algorithm;
    this.key = options.key;
    if (this.algorithm !== 'no' && !this.key) throw Error('need key');
    this.headerEncrypted = Boolean(options.headerEncrypted) || false;
}

/**
 * Encrypt string
 * @param {string} message
 * @returns {string}
 */
CryptMaker.prototype.encrypt = function(message){
    if (!message) return null;
    if (this.algorithm === 'no') return message;
    var cipher = crypto.createCipher(this.algorithm, this.key);
    return cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
};

/**
 * Decrypt string
 * @param {string} message
 * @returns {string}
 */
CryptMaker.prototype.decrypt = function(message){
    if (!message) return null;
    if (this.algorithm === 'no') return message;
    var decipher = crypto.createDecipher(this.algorithm, this.key);
    return decipher.update(message, 'hex', 'utf8') + decipher.final('utf8');
};

/**
 * Make JSON from string
 * @param {string} data
 * @returns {*}
 */
CryptMaker.prototype.parse = function(data){
    if (!data) return null;
    try{
        data = JSON.parse(data);
    }
    catch (e){
        return null;
    }
    return data;
};

/**
 * Make string from JSON
 * @param {*} data
 * @returns {string}
 */
CryptMaker.prototype.format = function(data){
    return JSON.stringify(data);
};

/**
 * get header from encrypted message.
 * @param {string} message - encrypted message.
 * @returns {Object|null} if can\t parse message - return null. else return header Object
 */
CryptMaker.prototype.getHeader = function(message){
    if (typeof message === 'undefined' || message.length == 0) return null;
    if (message.indexOf(this.sop) === -1) return null;
    if (this.headerEncrypted) return this.parse(this.decrypt(message.split(this.sop)[0]));
    return this.parse(message.split(this.sop)[0]);
};

/**
 * get header from encrypted message.
 * @param {string} message - encrypted message.
 * @param {function} callback
 * @returns {Object|null} if can\t parse message - return null. else return header Object
 */
CryptMaker.prototype.getHeaderAsync = function(message, callback){
    if (typeof message === 'undefined' || message.length == 0) return setImmediate(function(){
        callback(Error('Need message to return header'));
    });
    if (message.indexOf(this.sop) === -1) return setImmediate(function(){
        callback(Error('No SOP in message'));
    });

    var header = message.split(this.sop)[0];
    return setImmediate(function(){
        if (this.headerEncrypted){
            header = this.decrypt(header);
        }
        setImmediate(function(){
            try {
                header = this.parse(header);
            }
            catch (e){return callback(e)}
            return setImmediate(function(){return callback(null, header);});
        }.bind(this));
    }.bind(this));
};

/**
 * get body from encrypted message.
 * @param {string} message - encrypted message.
 * @returns {Object|null} if can\t parse message - return null. else return body Object
 */
CryptMaker.prototype.getBody = function(message){
    if (typeof message === 'undefined' || message.length == 0) return null;
    message = message.replace(this.eomRE, '');
    if (message.indexOf(this.sop) === -1) return null;
    return this.parse(this.decrypt(message.split(this.sop)[1]));
};

/**
 * get body from encrypted message.
 * @param {string} message - encrypted message.
 * @param {function} callback
 * @returns {Object|null} if can\t parse message - return null. else return body Object
 */
CryptMaker.prototype.getBodyAsync = function(message, callback){
    if (typeof message === 'undefined' || message.length == 0) return setImmediate(function(){
        callback(Error('Need message to return header'));
    });
    message = message.replace(this.eomRE, '');
    if (message.indexOf(this.sop) === -1) return setImmediate(function(){
        callback(Error('No SOP in message'));
    });

    var body = message.split(this.sop)[1];
    return setImmediate(function(){
        body = this.decrypt(body);
        setImmediate(function(){
            try {
                body = this.parse(body);
            }
            catch (e){return callback(e)}
            return setImmediate(function(){return callback(null, body);});
        }.bind(this));
    }.bind(this));
};

/**
 * Make encrypt message.
 * @param {Object} message
 * @param {Object|string} message.header
 * @param {Object|string} [body]
 * @returns {string} encrypted message.
 */
CryptMaker.prototype.makeMessage = function(message, body){
    if (body) message = {header: message, body: body};
    if (this.headerEncrypted) message.header = this.encrypt(this.format(message.header));
    else message.header = this.format(message.header);
    message.body = this.encrypt(this.format(message.body));
    return message.header+this.sop+message.body+this.eom;
};

/**
 * Make encrypt message.
 * @param {Object} message
 * @param {Object|string} message.header
 * @param {function} callback
 * @returns {string} encrypted message.
 */
CryptMaker.prototype.makeMessageAsync = function(message,callback){
    if (this.headerEncrypted) message.header = this.encrypt(this.format(message.header));
    else message.header = this.format(message.header);
    setImmediate(function(){
        message.body = this.encrypt(this.format(message.body));
        setImmediate(function(){
            return callback(null, message.header+this.sop+message.body+this.eom);
        }.bind(this));
    }.bind(this));
};

/**
 * Decrypt massage
 * @param {string} message
 * @returns {Object}
 */
CryptMaker.prototype.parseMessage = function(message){
    if (!message) return null;
    if (message.indexOf(this.sop) == -1) return null;
    message = message.replace(this.eomRE, '');
    var array = message.split(this.sop);
    var json = {};
    if (this.headerEncrypted) json.header = this.parse(this.decrypt(array[0]));
    else json.header = this.parse(array[0]);
    json.body = this.parse(this.decrypt(array[1]));
    return json;
};

/**
 * Splits many messages to array.
 * @param {string} raw - messages.
 * @returns {string[]} return [] if no EOM at the end of raw string.
 */
CryptMaker.prototype.splitMessages = function(raw){
    var array = raw.split(this.eom);
    if (array.length && array.pop().length) return [];
    for (var i = 0; i < array.length; i++){
        array[i] = this.addEom(array[i]);
    }
    return array;
};

/**
 * Splits many messages to array.
 * @param {string} raw - messages.
 * @param {function} callback.
 * @returns {string[]} return [] if no EOM at the end of raw string
 */
CryptMaker.prototype.splitMessagesAsync = function(raw, callback){
    var array = raw.split(this.eom);
    setImmediate(function(){
        if (array.length && array.pop().length) return [];
        for (var i = 0; i < array.length; i++){
            array[i] = this.addEom(array[i]);
        }
        return callback(null, array);
    }.bind(this));
};

CryptMaker.prototype.addEom = function(string){
    return string+this.eom;
};

CryptMaker.prototype.createCryptMaker = function(opt){
    return new CryptMaker(opt);
};

module.exports = CryptMaker;

