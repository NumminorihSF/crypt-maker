crypt-maker
===========================

Use node.js crypt api for make encrypted messages.

Install with:

    npm install crypt-maker


## Usage

Simple example:

```js

    var CM = require("crypt-maker");
    var crypt = new CM({key: 'some-crypt-key'});

    var messageJSON = {
        header: {
            some: 'header',
            another: 'awesome header'
        },
        body: {
            time: '11:22',
            whisp: 'do this' 
        }
    };
    
    var encrypted = crypt.makeMessage(messageJSON);
    
    console.log(encrypted);
    //{"some":"header","another":"awesome header"}
    //a4d355b6522d3d69baca7ff06310f24c992b0fa83ca6ae43e0f7e83340a001e618af6e48e1fb9fca63181acc8162f520
    
    var decrypted = {header: crypt.getHeader(encrypted), body: crypt.getBody(encrypted)};
    console.log(decrypted);
    //{ header: { some: 'header', another: 'awesome header' },
    //  body: { time: '11:22', whisp: 'do this' } }
    var decryptedAll = crypt.parseMessage(encrypted);
    console.log(decryptedAll);
```


# Methods

## CM.createClient()

Is the same as:

## new CM()

* `CM.createClient({key: '123'}) = amiio.createClient({key: '123', algorithm:'aes123', EOM:'\r\n\r\n', SOP:'\r\n'})`

If `algorithm !== 'no'` and no key passed to constructor - throws error

* `key`: key to crypt strings
* `algorithm`: which algorithm use to encrypt messages. Default `aes128`
* `EOM`: which symbols indicate ends of messages. Default `\r\n\r\n`
* `SOP`: which symbols indicate separate between header and message. Default `\r\n`
* `headerEncrypted`: `true` if header should encrypted. Default `false`



## LICENSE - "MIT License"

Copyright (c) 2015 Konstantine Petryaev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.