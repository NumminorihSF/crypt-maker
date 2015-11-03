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
 *      Класс работы с зашифрованными сообщениями.
 * @class CryptMaker
 */

/**
 * Constructor.
 *      Конструктор.
 * @method constructor
 * @param {Object} options Options for CryptMaker
 *      Настройки для CryptMaker
 * @param {String} [options.EOM='\r\n\r\n'] End of message symbol.
 *      Разделитель между сообщениями.
 * @param {String} [options.SOP='\r\n'] Separator of message parts symbol.
 *      Символ разделитель мужду частями сообщения.
 * @param {String} [options.algorithm='aes128'] Algorithm to use. Use 'no' if doesn't need crypt.
 *      Алгоритм шифрования сообщений. Используйте 'no', если шифрования не нужно.
 * @param {String} [options.key] Key to use in crypt. If no key and algorithm !== 'no' throw CryptMaker.EmptyKeyError
 *      Ключ, используемый для шифрования. Если ключа нет и алгоритм не 'no', выбросит CryptMaker.EmptyKeyError
 * @param {Boolean} [options.headerEncrypted=false] true if need encrypt header of false if need not.
 *      true если нужно шифровать заголовок, false если нет.
 * @throws {CryptMaker.EmptyKeyError}
 * @returns {CryptMaker} - Logger object. Объект логгера
 */
function CryptMaker (options){
  options = options || {};
  this.eom = options.EOM || CryptMaker._EOM;
  this.eomRE = new RegExp(this.eom+'$');
  this.sop = options.SOP || CryptMaker._SOP;
  this.algorithm = options.algorithm || CryptMaker._algorithm;
  this.key = String(options.key);
  if (this.algorithm !== 'no' && !this.key) throw new (require(__dirname+'/emptyKeyError.js'))(this.algorithm);
  this.headerEncrypted = Boolean(options.headerEncrypted) || false;
}


/**
 * Default separator of message parts
 *      Разделитель между частими сообщения по умолчанию
 * @static
 * @private
 * @type {String}
 */
CryptMaker._SOP = '\r\n';


/**
 * Default separator of messages
 *      Разделитель между сообщеними по умолчанию
 * @static
 * @private
 * @type {String}
 */
CryptMaker._EOM = '\r\n\r\n';

/**
 * Default algorithm of encryption.
 *      Алгоритм шифрования по умолчанию
 * @static
 * @private
 * @type {String}
 */
CryptMaker._algorithm = 'aes128';

CryptMaker._crypto = require('crypto');


/**
 * Encrypt string.
 *      Зашифровывает строку.
 * @param {String} string
 * @returns {String|null} If no string - return null. If algorithm == 'no' returns string.
 *      Если нет string - возвращает null. Если algorithm == 'no' возвращает string.
 */
CryptMaker.prototype.encrypt = function(string){
  if (!string) return null;
  if (this.algorithm === 'no') return string;
  var cipher = CryptMaker._crypto.createCipher(this.algorithm, this.key);
  return cipher.update(string, 'utf8', 'hex') + cipher.final('hex');
};

/**
 * Decrypt string.
 *      Расшифровывает строку.
 * @param {String} string
 * @returns {String|null} If no string - return null. If algorithm == 'no' returns string.
 *      Если нет string - возвращает null. Если algorithm == 'no' возвращает string.
 */
CryptMaker.prototype.decrypt = function(string){
  if (!string) return null;
  if (this.algorithm === 'no') return string;
  var decipher = CryptMaker._crypto.createDecipher(this.algorithm, this.key);
  return this._safeDecrypt(decipher, string);
};

/**
 *  * Decrypt string safety.
 *      Безопасно расшифровывает строку.
 * @param {Decipher} decipher
 * @param {String} string
 * @return {*}
 * @private
 */
CryptMaker.prototype._safeDecrypt = function(decipher, string){
  var res = null;
  try {
    res = decipher.update(string, 'hex', 'utf8') + decipher.final('utf8');
  }
  catch(e){
    res = null;
  }
  return res;
};

/**
 * Parse JSON from string.
 *      Парсит JSON из строки.
 * @param {String} messagePart
 * @private
 * @returns {Object|null} If no message part or can't parse message - return null. Else return message object.
 *      Если нет части сообщения или его не получается распарсить - возвращает null.
 *      Иначе возвращает объект части сообщения.
 */
CryptMaker.prototype._parseMessagePart = function(messagePart){
  if (!messagePart) return null;
  try{
    var part = JSON.parse(messagePart);
  }
  catch (e){
    return null;
  }
  return part;
};

/**
 * Parse JSON from string.
 *      Парсит JSON из строки.
 * @param {String} message
 * @deprecated
 * @returns {Object|null} If no message or can't parse message - return null. Else return message object.
 *      Если нет сообщения или сообщение не получается распарсить - возвращает null.
 *      Иначе возвращает объект сообщения.
 */
CryptMaker.prototype.parse = function(message){
  if (!message) return null;
  try{
    var mes = JSON.parse(message);
  }
  catch (e){
    return null;
  }
  return mes;
};

/**
 * Make string from JSON.
 *      Возвращает JSON-строку.
 * @param {Object} data
 * @private
 * @returns {String}
 */
CryptMaker.prototype._format = function(data){
  return JSON.stringify(data);
};

/**
 * Make string from JSON.
 *      Возвращает JSON-строку.
 * @param {Object} data
 * @deprecated
 * @returns {String}
 */
CryptMaker.prototype.format = function(data){
  return JSON.stringify(data);
};

/**
 * Get header from encrypted message.
 *      Возвращает заголовок сообщения.
 * @param {String} message Encrypted message.
 *      Зашифрованное сообщение.
 * @returns {Object|null} If can't parse message - return null. Else return header Object.
 *      Если не получается распарсить сообщение - возвращает null. Иначе - объект заголовка.
 */
CryptMaker.prototype.getHeader = function(message){
  if (typeof message === 'undefined' || message.length == 0) return null;
  if (message.indexOf(this.sop) === -1) return null;
  if (this.headerEncrypted) return this._parseMessagePart(this.decrypt(message.split(this.sop)[0]));
  return this._parseMessagePart(message.split(this.sop)[0]);
};

/**
 * Get header from encrypted message.
 * @param {String} message Encrypted message.
 * @param {Function} callback
 * @returns {Object|null} If can't parse message - return null. else return header Object
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
        header = this._parseMessagePart(header);
      }
      catch (e){return callback(e)}
      return setImmediate(function(){return callback(null, header);});
    }.bind(this));
  }.bind(this));
};

/**
 * Get body from encrypted message.
 *      Возвращает тело зашифрованного сообщения.
 * @param {String} message Encrypted message.
 *      Зашифрованное сообщение.
 * @returns {Object|null} If can't parse message - return null. Else return body Object.
 *      Если не получается распарсить сообщение - возвращает null. Иначе возвращает объект тела сообщения.
 */
CryptMaker.prototype.getBody = function(message){
  if (typeof message === 'undefined' || message.length == 0) return null;
  message = message.replace(this.eomRE, '');
  if (message.indexOf(this.sop) === -1) return null;
  return this._parseMessagePart(this.decrypt(message.split(this.sop)[1]));
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
        body = this._parseMessagePart(body);
      }
      catch (e){return callback(e)}
      return setImmediate(function(){return callback(null, body);});
    }.bind(this));
  }.bind(this));
};

/**
 * Make encrypt message.
 *      Создает зашифрованное сообщение.
 * @param {Object} message Message object. If body is defined - message param should be just header of message.
 *      Объект сообщения. Если передается параметр body - данный параметр должен быть заголовком.
 * @param {Object} [message.header] Message header.
 *      Заголовок сообщения.
 * @param {Object} [message.body] Message body.
 *      Тело сообщения.
 * @param {Object} [body] Message body.
 *      Тело сообщения.
 *
 *     @example
 *     cm.makeMessage({header: {some: "header"}, body: {awesome: "body"}});
 *     cm.makeMessage({some: "header"}, {awesome: "body"}); //this calls are same
 * @returns {String} encrypted message.
 */
CryptMaker.prototype.makeMessage = function(message, body){
  var mes = {};
  if (body) var m = {header: message, body: body};
  else m = message;
  if (this.headerEncrypted) mes.header = this.encrypt(this._format(m.header));
  else mes.header = this._format(m.header);
  mes.body = this.encrypt(this._format(m.body));
  return mes.header+this.sop+mes.body+this.eom;
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
 * Decrypt message and return message object.
 *      Расшифровывает сообщение и возвращает его объект.
 * @param {String} message Message.
 *      Сообщение.
 * @returns {Object|null} If can't parse message returns null.
 *      Если сообщение не получается распарсить - возвращает null.
 */
CryptMaker.prototype.parseMessage = function(message){
  if (!message) return null;
  if (message.indexOf(this.sop) == -1) return null;
  message = message.replace(this.eomRE, '');
  var array = message.split(this.sop);
  var json = {};
  if (this.headerEncrypted) json.header = this._parseMessagePart(this.decrypt(array[0]));
  else json.header = this._parseMessagePart(array[0]);
  json.body = this._parseMessagePart(this.decrypt(array[1]));
  return json;
};

/**
 * Splits many messages at raw string to array.
 *      Разделяет строку с сообщениями на массив сообщений.
 * @param {String} raw Raw string with messages.
 *      Строка с сообщениями.
 * @returns {String[]} Return empty array if no EOM at the end of raw string.
 *      Возвращает пустой массив, если в конце строки нет символа конца сообщения.
 */
CryptMaker.prototype.splitMessages = function(raw){
  if (!raw.match(this.eomRE)) return [];
  var array = raw.split(this.eom);
  //if (!array.length) return [];
  if (array.pop().length) return [];
  return array;
};

/**
 * Splits many massages at raw string to array. Last element is tail of raw string.
 * If some message was not fully emitted - it will be this element. If all messages are entire it will be ''.
 *      Разделяет строку с сообщениями на массив сообщений. Последний элемент - остаток строки.
 *      Если какое-либо сообщение не доставленно полностью - оно будет этим элементом.
 *      Если все сообщения целые - последний элемент - ''.
 * @param {String} raw
 * @returns {String[]}
 */
CryptMaker.prototype.splitMessagesForce = function(raw){
  return raw.split(this.eom);
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
      array[i] = this._addEom(array[i]);
    }
    return callback(null, array);
  }.bind(this));
};

/**
 * Add EOM symbol to string if there is not EOM at the end.
 *      Добавляет символ конца сообщения к строке, если она не оканчивается им.
 * @param {String} string
 * @returns {String}
 * @private
 */
CryptMaker.prototype._addEom = function(string){
  if (string.match(this.eomRE)) return string;
  return string+this.eom;
};

/**
 * Add EOM symbol to string if there is not EOM at the end.
 *      Добавляет символ конца сообщения к строке, если она не оканчивается им.
 * @param {String} string
 * @returns {String}
 * @deprecated
 */
CryptMaker.prototype.addEom = function(string){
  if (string.match(this.eomRE)) return string;
  return string+this.eom;
};

/**
 * Alternative constructor (without new, just call)
 *      Альтернативный конструктор, без использования new.
 * @param options
 * @static
 * @returns {CryptMaker}
 */
CryptMaker.createCryptMaker = function(options){
  return new CryptMaker(options);
};


/**
 * Replace header of message to new.
 *      Замена заголовка сообщения.
 * @param {Object} header New message header.
 *      Новый заголовок сообщения.
 * @param {String} message Message to replace header.
 *      Сообщение, в котором необходимо изменить заголовок.
 * @returns {String} Encrypted message with new header.
 *      Зашифрованное сообщение с новым заголовком.
 */
CryptMaker.prototype.replaceHeader = function(header, message){
  if (!message) return null;
  if (message.indexOf(this.sop) == -1) return null;
  var array = message.split(this.sop);
  if (!array[1].match(this.eomRE)) array[1] += this.eom;
  array[0] = this.headerEncrypted?this.encrypt(JSON.stringify(header)):JSON.stringify(header);
  return array[0]+this.sop+array[1];
};

module.exports = CryptMaker;

