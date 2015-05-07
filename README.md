 crypt-maker
===========================

Use node.js crypt api for make encrypted messages. Works sync. For async crypt-maker - see crypt-maker-async

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

## cm.decrypt(message) 

Return decrypted string. If `algorithm == 'no'` returns `message`.

Parameters:

Name      |Type    |Description
----------|--------|-----------
`message` |	string | 	


## cm.encrypt(message)

Return encrypted string. If `algorithm == 'no'` returns `message`.

Parameters:

Name 	  | Type   | Description
----------|--------|------------
`message` | string | 	


## cm.format(data)

Make string from JSON

Parameters:

Name    | Type                 | Description
--------|----------------------|-------------
`data` 	| any, except function |

## cm.parse(data)
Unformat message back to Object | Boolean | String | Number

Parameters:

Name 	| Type | Description
--------|------|------------
data 	|string| 	


## cm.getBody(message)

Get body from encrypted message. If `typeof message == undefined || message length == 0` 
or no SOP at message, returns `null`. Else if can't parse message - return `null`.

Parameters:

Name 	| Type   |	Description
--------|--------|--------------------
message | string |	encrypted message


## cm.getBodyAsync(message, callback)

Same as sync version. But doesn't return `null`, and returns error objects.
**Is not realy async!**

Parameters:

Name 	 | Type    | Description
---------|---------|------------------
message  | string  | encrypted message
callback | function| 	


## cm.getHeader(message)

Get header from encrypted message. If `typeof message == undefined || message.length == 0` 
or no SOP at message, returns `null`. Else if can't parse message - return `null`.

Parameters:

Name 	| Type   |	Description
--------|--------|--------------------
message | string |	encrypted message


## cm.getHeaderAsync(message, callback)

Same as sync version. But doesn't return `null`, and returns error objects.
**Is not realy async!**

Parameters:

Name 	 | Type    | Description
---------|---------|------------------
message  | string  | encrypted message
callback | function| 	


## cm.makeMessage(message)

Make encrypt message form object.

Parameters:

Name          |	Type           |	Description
--------------|----------------|----------------
message       | Object         | Properties	
message.header|	Object, string |
message.body  |	Object, string |	



## cm.makeMessageAsync(message, callback)

Same as sync version. But doesn't return `null`, and returns error objects.
**Is not realy async!**


Parameters:

Name          |	Type           |	Description
--------------|----------------|----------------
message       | Object         | Properties	
message.header|	Object, string |
message.body  |	Object, string |	
callback      | function       | 




## cm.parseMessage(message)

Decrypt message form object. Returns Object `{header: ... , body: ... }`

Parameters:

Name     |	Type  |	Description
---------|--------|----------------
message  | string | 


## cm.splitMessages(raw)

Splits many messages to array of messages.

Parameters:

Name 	| Type   |	Description
--------|--------|---------------
raw 	| string |	raw messages string

Returns:
return `[]` if no EOMs at the end of raw strings


## cm.splitMessagesAsync(raw)

Splits many messages to array.

Parameters:

Name 	 | Type   | 	Description
---------|--------|---------------
raw 	 |string  | 	messages
callback |function| 	

Returns:
return `[]` if no EOMs at the end of raw strings

## cm.addEom(string)

Splits many messages to array.

Parameters:

Name 	 | Type   | 	Description
---------|--------|---------------
string 	 |string  | 	one encrypted message
	

Returns:
return string+EOM symbol.



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