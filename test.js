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

var CM = require(__dirname+'/index.js');

var _chipers = require('crypto').getCiphers();
var chipers = [];

for(var i = 0; i < _chipers.length; i++){
//  if (_chipers[i].indexOf('-') === -1) chipers.push(_chipers[i]);
  chipers.push(_chipers[i]);
}

var bad_ciphers = [ 'aes-128-cbc-hmac-sha1',
  'aes-128-gcm',
  'aes-128-ccm',
  'aes-128-xts',
  'aes-192-gcm',
  'aes-192-ccm',
  'aes-256-cbc-hmac-sha1',
  'aes-256-gcm',
  'aes-256-ccm',
  'aes-256-xts',
  'id-aes128-wrap',
  'id-aes128-GCM',
  'id-aes128-CCM',
  'id-aes192-wrap',
  'id-aes192-GCM',
  'id-aes192-CCM',
  'id-aes256-wrap',
  'id-aes256-GCM',
  'id-aes256-CCM',
  'id-smime-alg-CMS3DESwrap'];

for (i=0; i < bad_ciphers.length; i++) {
  var index = chipers.indexOf(bad_ciphers[i]);
  chipers.splice(index, 1);
}

var cm123 = [];
var cmASD = [];

for(i = 0; i < chipers.length; i++){
  cm123[i] = new CM({key: '123', algorithm: chipers[i]});
  cmASD[i] = new CM({key: 'asd', algorithm: chipers[i]});
}

var cmK = new CM({algorithm: 'no', key: 123});
var cm = new CM({algorithm: 'no'});

var testString = require('fs').readFileSync(__dirname+'/README.md', {encoding: 'utf8'});

var passed = [];
var failed = [];


for (i = 0; i < chipers.length; i++){

  if (cm123[i].encrypt(testString) === testString) {
    failed.push(chipers[i]);
    console.log(chipers[i]+' fail');
  }
  else if (cmASD[i].encrypt(testString) === testString) {
    failed.push(chipers[i]);
    console.log(chipers[i]+' fail');
  }
  else if (cm123[i].encrypt(testString) === cmASD[i].encrypt(testString)) {
    failed.push(chipers[i]);
    console.log(chipers[i]+' fail');
  }
  else if (cm123[i].decrypt(cm123[i].encrypt(testString)) !== testString) {
    failed.push(chipers[i]);
    console.log(chipers[i]+' fail ');
  }
  else if (cmASD[i].decrypt(cmASD[i].encrypt(testString)) !== testString) {
    failed.push(chipers[i]);
    console.log(chipers[i]+' fail');
  }
  else {
    passed.push(chipers[i]);
    console.log(chipers[i]+' ok');
  }
}

if (cmK.encrypt(testString) !== testString) {
  failed.push('no');
  console.log('no fail');
}
else if (cm.encrypt(testString) !== testString) {
  failed.push('no');
  console.log('no fail');
}
else if (cmK.encrypt(testString) !== cm.encrypt(testString)) {
  failed.push('no');
  console.log('no fail');
}
else if (cmK.decrypt(cmK.encrypt(testString)) !== testString) {
  failed.push('no');
  console.log('no fail');
}
else if (cm.decrypt(cm.encrypt(testString)) !== testString) {
  failed.push('no');
  console.log('no fail');
}
else {
  passed.push('no');
  console.log('no ok');
}




cm = new CM({key:'qweASDzxcQWE'});

var message = {
  header: {
    some0: 'header3',
    some1: 'header2',
    some2: 'header1',
    some3: 'header0'
  },
  body: {
    bsome0: 'refghfsktry',
    bsome1: 'refghfsktry',
    bsome2: 'refghfsktry',
    bsome3: 'refghfsktry',
    bsome4: 'refghfsktry',
    bsome5: 'refghfsktry',
    bsome6: 'refghfsktry',
    bsome7: 'refghfsktry',
    bsome8: 'refghfsktry',
    bsome9: [
      10000,
      20000,
      30000,
      40000,
      50000,
      60000,
      70000,
      80000,
      90000,
      100000,
      110000,
      120000,
      130000,
      140000,
      150000,
      160000,
      170000
    ]
  }
};


var encMes = cm.makeMessage(message);

var string = '';
for(i = 0; i < 100; i++){
  string += encMes;
}

var testMes = cm.splitMessages(encMes)[0];
if (!testMes) {
  console.log('Failed split.');
}
var messages = cm.splitMessages(string);
if (cm.splitMessages('aewrkrelklgnkwnlwlerklnklnklewr\r\n\r\nwrefjhnlwerkljwer').length) {
  console.log('Failed split.');
}

var message2 = cm.parseMessage(encMes);

for(var j in message.header){
  if (message.header[j] !== message2.header[j]) console.log('Failed parse1 ');
}

for(j in message.body){

  if (typeof message.body[j] !=='object') {
    if (message.body[j] !== message2.body[j]) console.log('Failed parse2');
  }
  else {
    for(i=0; i < message.body[j].length; i++){
      if (message.body[j][i] !== message2.body[j][i]) console.log('Failed parse3e');
    }
  }
}





console.log('Passed: ' + Math.floor((passed.length)*100/(chipers.length+1)) + '% of '+ (chipers.length+1) + ' algorithms.');
if (failed.length) {
  console.log('Failed:\n'+failed.join('\n'));
  process.exit(1);
}
