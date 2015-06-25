 crypt-maker
===========================

Use node.js crypt api for make encrypted messages. Works sync.

[Class documentation by jsDuck](http://numminorihsf.github.io/crypt-maker/jsduck). 

There also is documentation on rus.

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

## CM.createCryptMaker()

Is the same as:

## new CM()

* `CM.createCryptMaker({key: '123'}) = crypt.createCryptMaker({key: '123', algorithm:'aes123', EOM:'\r\n\r\n', SOP:'\r\n'})`

If `algorithm !== 'no'` and no key passed to constructor - throws error (EmptyKeyError)

* `key`: key to crypt strings
* `algorithm`: which algorithm use to encrypt messages. Default `aes128`
* `EOM`: which symbols indicate ends of messages. Default `\r\n\r\n`
* `SOP`: which symbols indicate separate between header and message. Default `\r\n`
* `headerEncrypted`: `true` if header should encrypted. Default `false`

## cm.decrypt(str) 

Return decrypted string. If `algorithm == 'no'` returns `str`.

Parameters:

 Name     | Type   | Description
----------|--------|------------------
`str`     |	String | string to decrypt 	


## cm.encrypt(str)

Return encrypted string. If `algorithm == 'no'` returns `str`.

Parameters:

 Name | Type   | Description
------|--------|------------------
`str` | String | string to encrypt


## cm.format(messagePart) Deprecated

Make string from JSON with message part.

Parameters:

 Name         | Type                 | Description
--------------|----------------------|-------------
`messagePart` | any, except function |

## cm.parse(messagePart) Deprecated
Unformat message part back to Object | Boolean | String | Number.

Parameters:

 Name       	| Type   | Description
--------------|--------|------------
`messagePart`	| String | 	


## cm.getBody(message)

Get body from encrypted message. If `typeof message == undefined || message length == 0` 
or no SOP at message, returns `null`. Else if can't parse message - return `null`.

Parameters:

 Name     | Type   |	Description
----------|--------|--------------------
`message` | String | encrypted message


## cm.getBodyAsync(message, callback) Deprecated

Same as sync version. But doesn't return `null`, and returns error objects.
**Is not realy async!**

Parameters:

 Name 	   | Type     | Description
-----------|----------|------------------
`message`  | String   | encrypted message
`callback` | Function | 	


## cm.getHeader(message)

Get header from encrypted message. If `typeof message == undefined || message.length == 0` 
or no SOP at message, returns `null`. Else if can't parse message - return `null`.

Parameters:

 Name  	  | Type   |	Description
----------|--------|--------------------
`message` | String | encrypted message


## cm.getHeaderAsync(message, callback) Deprecated

Same as sync version. But doesn't return `null`, and returns error objects.
**Is not really async!**

Parameters:

 Name 	  | Type     | Description
----------|----------|------------------
`message` | String   | encrypted message
`callback`| Function | 	


## cm.makeMessage(message[, body])

Make encrypt message form object. If body is defined - message should be header of message.

Parameters:

 Name           |	Type    |	Description
----------------|---------|----------------
`message`       | Object  | Message object. If `body` is not defined - should be header object.	
`message.header`|	Object  | Header of message. Only if `body` parameter is not defined.
`message.body`  |	Object  | Body of message. Only if `body` parameter is not defined.
`body`          | Object  | Optional. If defined - body of message.



## cm.makeMessageAsync(message, callback) Deprecated

Same as sync version. But doesn't return `null`, and returns error objects.
**Is not really async!**


Parameters:

 Name            |	Type    |	Description
-----------------|----------|----------------
`message`        | Object   | Message object.	
`message.header` | Object   | Header of message.
`message.body`   | Object   | Body of message.	
`callback`       | Function | Callback function.




## cm.parseMessage(message)

Decrypt message form object. Returns Object like `{header: ... , body: ... }`

Parameters:

 Name     |	Type   | Description
----------|--------|----------------
`message` | String | 


## cm.splitMessages(raw)

Splits many messages to array of messages.

Parameters:

Name 	| Type   | Description
------|--------|--------------------
`raw` | String | raw messages string

Returns:
return `[]` if no EOMs at the end of raw strings


## cm.splitMessagesForce(raw)

Splits many massages at raw string to array. Last element is tail of raw string.
If some message was not fully emitted - it will be this element. If all messages are entire it will be ''.


Parameters:

Name 	  | Type   |	Description
--------|--------|---------------------
`raw` 	| String | raw messages string

Returns:
return `[message1, message2, message3, ... , tail('' or part of messageN)]` tail is `''` if last message fully emitted. 


## cm.splitMessagesAsync(raw, callback) Deprecated

Splits many messages to array.

Parameters:

 Name 	   | Type     |	Description
-----------|----------|---------------
`raw` 	   | String   |	messages
`callback` | Function | 	

Returns:
return `[]` if no EOMs at the end of raw strings

## cm.addEom(string) Deprecated

Add EOM symbol to string if there is not EOM at the end.

Parameters:

 Name 	 | Type   | Description
---------|--------|----------------------
`string` | String | one encrypted message
	

Returns:
return `string+EOM` or `string`.


## cm.replaceHeader(header, message)

Replace header of message to new.

Parameters:

Name 	     | Type   | 	Description
-----------|--------|-------------------------
`header`	 | Object | 	new header for message
`message`	 | String | 	encrypted message
	

Returns:
return `message` with new header.



# LICENSE - "MIT License"

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