/*
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

'use strict';

/**
 * Class for work with encrypted message.
 *          Класс работы с зашифрованными сообщениями.
 * @class CryptMaker
 */

/**
 * Constructor.
 *          Конструктор.
 * @method constructor
 * @param {Object} options
 *          Настройки
 * @param {String} [options.EOM='\r\n\r\n'] End of message symbol.
 *          Разделитель между сообщениями.
 * @param {String} [options.SOP='\r\n'] Separator of parts symbol.
 *          Символ окончания разделителя.
 * @param {String} [options.algorithm='aes128'] Algorithm to use. Use 'no' if doesn't need crypt.
 *          Алгоритм шифрования сообщений. Используйте 'no', если шифрования не нужно.
 * @param {String} [options.key] Key to use in crypt. If no key and algorithm !== 'no' throw CryptMaker.EmptyKeyError
 *          Ключ, используемый для шифрования. Если ключа нет и алгоритм не 'no', выбросит CryptMaker.EmptyKeyError
 * @param {Boolean} [options.headerEncrypted=false] true if need encrypt header of false if need not.
 *          true если нужно шифровать заголовок, false если нет.
 * @throws {CryptMaker.EmptyKeyError}
 * @returns {CryptMaker} - Logger object. Объект логгера
 */
function CryptMaker (options){
  this.eom = options.EOM || CryptMaker._EOM;
  this.eomRE = new RegExp(this.eom+'$');
  this.sop = options.SOP || CryptMaker._SOP;
  this.algorithm = options.algorithm || CryptMaker._algorithm;
  this.key = options.key;
  if (this.algorithm !== 'no' && !this.key) throw require(__dirname+'/emptyKeyError.js')(this.algorithm);
  this.headerEncrypted = Boolean(options.headerEncrypted) || false;
}


/**
 * Default separator of message parts
 * Разделитель между частими сообщения по умолчанию
 * @static
 * @private
 * @type {String}
 */
CryptMaker._SOP = '\r\n';


/**
 * Default separator of messages
 * Разделитель между сообщеними по умолчанию
 * @static
 * @private
 * @type {String}
 */
CryptMaker._EOM = '\r\n\r\n';

/**
 * Default algorithm of encryption.
 * Алгоритм шифрования по умолчанию
 * @static
 * @private
 * @type {String}
 */
CryptMaker._algorithm = 'aes128';

CryptMaker._crypto = require('crypto');


/**
 * Encrypt string.
 * Зашифровывает строку.
 * @param {String} message
 * @returns {String|null} If no message - return null. If algorithm == 'no' returns message.
 * Если нет message - возвращает null. Если algorithm == 'no' возвращает message.
 */
CryptMaker.prototype.encrypt = function(message){
  if (!message) return null;
  if (this.algorithm === 'no') return message;
  var cipher = CryptMaker._crypto.createCipher(this.algorithm, this.key);
  return cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
};

/**
 * Decrypt string.
 * Расшифровывает строку.
 * @param {String} message
 * @returns {String|null} If no message - return null. If algorithm == 'no' returns message.
 * Если нет message - возвращает null. Если algorithm == 'no' возвращает message.
 */
CryptMaker.prototype.decrypt = function(message){
  if (!message) return null;
  if (this.algorithm === 'no') return message;
  var decipher = CryptMaker._crypto.createDecipher(this.algorithm, this.key);
  return decipher.update(message, 'hex', 'utf8') + decipher.final('utf8');
};

/**
 * Parse JSON from string.
 * Парсит JSON из строки.
 * @param {String} data
 * @returns {Object}
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
 * Make string from JSON.
 * Возвращает JSON-строку.
 * @param {Object} data
 * @private
 * @returns {String}
 */
CryptMaker.prototype._format = function(data){
  return JSON.stringify(data);
};

/**
 * Make string from JSON.
 * Возвращает JSON-строку.
 * @param {Object} data
 * @deprecated
 * @returns {String}
 */
CryptMaker.prototype.format = CryptMaker.prototype._format;

/**
 * get header from encrypted message.
 * @param {String} message - encrypted message.
 * @returns {Object|null} if can\t parse message - return null. Else return header Object
 */
CryptMaker.prototype.getHeader = function(message){
  if (typeof message === 'undefined' || message.length == 0) return null;
  if (message.indexOf(this.sop) === -1) return null;
  if (this.headerEncrypted) return this.parse(this.decrypt(message.split(this.sop)[0]));
  return this.parse(message.split(this.sop)[0]);
};

/**
 * get header from encrypted message.
 * @param {String} message - encrypted message.
 * @param {Function} callback
 * @returns {Object|null} if can\t parse message - return null. else return header Object
 * @deprecated
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
 * @param {String} message - encrypted message.
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
 * @param {String} message - encrypted message.
 * @param {Function} callback
 * @deprecated
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
 * @returns {String} encrypted message.
 */
CryptMaker.prototype.makeMessage = function(message, body){
  if (body) message = {header: message, body: body};
  if (this.headerEncrypted) message.header = this.encrypt(this._format(message.header));
  else message.header = this._format(message.header);
  message.body = this.encrypt(this._format(message.body));
  return message.header+this.sop+message.body+this.eom;
};

/**
 * Make encrypt message.
 * @param {Object} message
 * @param {Object|string} message.header
 * @param {Function} callback
 * @deprecated
 * @returns {String} encrypted message.
 */
CryptMaker.prototype.makeMessageAsync = function(message,callback){
  if (this.headerEncrypted) message.header = this.encrypt(this._format(message.header));
  else message.header = this._format(message.header);
  setImmediate(function(){
    message.body = this.encrypt(this._format(message.body));
    setImmediate(function(){
      return callback(null, message.header+this.sop+message.body+this.eom);
    }.bind(this));
  }.bind(this));
};

/**
 * Decrypt massage
 * @param {String} message
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
 * @param {String} raw - messages.
 * @returns {String[]} return [] if no EOM at the end of raw string.
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
 * @param {String} raw - messages.
 * @param {Function} callback.
 * @deprecated
 * @returns {String[]} return [] if no EOM at the end of raw string
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

CryptMaker.prototype.replaceHeader = function(header, message){
  if (!message) return null;
  if (message.indexOf(this.sop) == -1) return null;
  var array = message.split(this.sop);
  array[0] = this.headerEncrypted?this.encrypt(JSON.stringify(header)):JSON.stringify(header);
  return array[0]+this.sop+array[1];
};

module.exports = CryptMaker;

