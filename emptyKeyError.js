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
 * Class of error with empty key.
 *          Класс ошибки при отсутствии ключа.
 * @class CryptMaker.EmptyKeyError
 * @alternateClassName EmptyKeyError
 */

/**
 * Constructor.
 *          Конструктор.
 * @method constructor
 * @param {String} algorithm Algorithm that trying to use.
 *          Используемый алгоритм.
 * @extends Error
 * @returns {EmptyKeyError}
 */
function EmptyKeyError(algorithm){
  this.message = 'Try use "' + algorithm + '" algorithm, but key for encryption is not defined.';
  Error.captureStackTrace(this, EmptyKeyError);
}

(function(){
  require('util').inherit(EmptyKeyError, Error);
})();

/**
 * Name of error.
 * @static
 * @type {string}
 */
EmptyKeyError.prototype.name = 'EmptyKeyError';

module.exports = EmptyKeyError;