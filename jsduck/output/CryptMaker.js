Ext.data.JsonP.CryptMaker({"tagname":"class","name":"CryptMaker","autodetected":{},"files":[{"filename":"index.js","href":"index.html#CryptMaker"}],"members":[{"name":"_EOM","tagname":"property","owner":"CryptMaker","id":"static-property-_EOM","meta":{"private":true,"static":true}},{"name":"_SOP","tagname":"property","owner":"CryptMaker","id":"static-property-_SOP","meta":{"private":true,"static":true}},{"name":"_algorithm","tagname":"property","owner":"CryptMaker","id":"static-property-_algorithm","meta":{"private":true,"static":true}},{"name":"constructor","tagname":"method","owner":"CryptMaker","id":"method-constructor","meta":{}},{"name":"_addEom","tagname":"method","owner":"CryptMaker","id":"method-_addEom","meta":{"private":true}},{"name":"_format","tagname":"method","owner":"CryptMaker","id":"method-_format","meta":{"private":true}},{"name":"_parseMessagePart","tagname":"method","owner":"CryptMaker","id":"method-_parseMessagePart","meta":{"private":true}},{"name":"addEom","tagname":"method","owner":"CryptMaker","id":"method-addEom","meta":{"deprecated":{"text":"\n"}}},{"name":"decrypt","tagname":"method","owner":"CryptMaker","id":"method-decrypt","meta":{}},{"name":"encrypt","tagname":"method","owner":"CryptMaker","id":"method-encrypt","meta":{}},{"name":"format","tagname":"method","owner":"CryptMaker","id":"method-format","meta":{"deprecated":{"text":"\n"}}},{"name":"getBody","tagname":"method","owner":"CryptMaker","id":"method-getBody","meta":{}},{"name":"getBodyAsync","tagname":"method","owner":"CryptMaker","id":"method-getBodyAsync","meta":{"deprecated":{"text":"\n"}}},{"name":"getHeader","tagname":"method","owner":"CryptMaker","id":"method-getHeader","meta":{}},{"name":"getHeaderAsync","tagname":"method","owner":"CryptMaker","id":"method-getHeaderAsync","meta":{"deprecated":{"text":"\n"}}},{"name":"makeMessage","tagname":"method","owner":"CryptMaker","id":"method-makeMessage","meta":{}},{"name":"makeMessageAsync","tagname":"method","owner":"CryptMaker","id":"method-makeMessageAsync","meta":{"deprecated":{"text":"\n"}}},{"name":"parse","tagname":"method","owner":"CryptMaker","id":"method-parse","meta":{"deprecated":{"text":"\n"}}},{"name":"parseMessage","tagname":"method","owner":"CryptMaker","id":"method-parseMessage","meta":{}},{"name":"replaceHeader","tagname":"method","owner":"CryptMaker","id":"method-replaceHeader","meta":{}},{"name":"splitMessages","tagname":"method","owner":"CryptMaker","id":"method-splitMessages","meta":{}},{"name":"splitMessagesAsync","tagname":"method","owner":"CryptMaker","id":"method-splitMessagesAsync","meta":{"deprecated":{"text":"\n"}}},{"name":"splitMessagesForce","tagname":"method","owner":"CryptMaker","id":"method-splitMessagesForce","meta":{}},{"name":"createCryptMaker","tagname":"method","owner":"CryptMaker","id":"static-method-createCryptMaker","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-CryptMaker","short_doc":"Class for work with encrypted message. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/index.html#CryptMaker' target='_blank'>index.js</a></div></pre><div class='doc-contents'><p>Class for work with encrypted message.\n     Класс работы с зашифрованными сообщениями.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-_EOM' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-static-property-_EOM' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-static-property-_EOM' class='name expandable'>_EOM</a> : String<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Default separator of messages\n     Разделитель между сообщеними по умолчанию ...</div><div class='long'><p>Default separator of messages\n     Разделитель между сообщеними по умолчанию</p>\n<p>Defaults to: <code>&#39;\\r\\n\\r\\n&#39;</code></p></div></div></div><div id='static-property-_SOP' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-static-property-_SOP' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-static-property-_SOP' class='name expandable'>_SOP</a> : String<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Default separator of message parts\n     Разделитель между частими сообщения по умолчанию ...</div><div class='long'><p>Default separator of message parts\n     Разделитель между частими сообщения по умолчанию</p>\n<p>Defaults to: <code>&#39;\\r\\n&#39;</code></p></div></div></div><div id='static-property-_algorithm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-static-property-_algorithm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-static-property-_algorithm' class='name expandable'>_algorithm</a> : String<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Default algorithm of encryption. ...</div><div class='long'><p>Default algorithm of encryption.\n     Алгоритм шифрования по умолчанию</p>\n<p>Defaults to: <code>&#39;aes128&#39;</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/CryptMaker-method-constructor' class='name expandable'>CryptMaker</a>( <span class='pre'>options</span> ) : <a href=\"#!/api/CryptMaker\" rel=\"CryptMaker\" class=\"docClass\">CryptMaker</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor. ...</div><div class='long'><p>Constructor.\n     Конструктор.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>Options for CryptMaker\n     Настройки для CryptMaker</p>\n<ul><li><span class='pre'>EOM</span> : String (optional)<div class='sub-desc'><p>End of message symbol.\n     Разделитель между сообщениями.</p>\n<p>Defaults to: <code>&#39;\\r\\n\\r\\n&#39;</code></p></div></li><li><span class='pre'>SOP</span> : String (optional)<div class='sub-desc'><p>Separator of message parts symbol.\n     Символ разделитель мужду частями сообщения.</p>\n<p>Defaults to: <code>&#39;\\r\\n&#39;</code></p></div></li><li><span class='pre'>algorithm</span> : String (optional)<div class='sub-desc'><p>Algorithm to use. Use 'no' if doesn't need crypt.\n     Алгоритм шифрования сообщений. Используйте 'no', если шифрования не нужно.</p>\n<p>Defaults to: <code>&#39;aes128&#39;</code></p></div></li><li><span class='pre'>key</span> : String (optional)<div class='sub-desc'><p>Key to use in crypt. If no key and algorithm !== 'no' throw <a href=\"#!/api/CryptMaker.EmptyKeyError\" rel=\"CryptMaker.EmptyKeyError\" class=\"docClass\">CryptMaker.EmptyKeyError</a>\n     Ключ, используемый для шифрования. Если ключа нет и алгоритм не 'no', выбросит <a href=\"#!/api/CryptMaker.EmptyKeyError\" rel=\"CryptMaker.EmptyKeyError\" class=\"docClass\">CryptMaker.EmptyKeyError</a></p>\n</div></li><li><span class='pre'>headerEncrypted</span> : Boolean (optional)<div class='sub-desc'><p>true if need encrypt header of false if need not.\n     true если нужно шифровать заголовок, false если нет.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CryptMaker\" rel=\"CryptMaker\" class=\"docClass\">CryptMaker</a></span><div class='sub-desc'><ul>\n<li>Logger object. Объект логгера</li>\n</ul>\n\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'><a href=\"#!/api/CryptMaker.EmptyKeyError\" rel=\"CryptMaker.EmptyKeyError\" class=\"docClass\">CryptMaker.EmptyKeyError</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_addEom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-_addEom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-_addEom' class='name expandable'>_addEom</a>( <span class='pre'>string</span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Add EOM symbol to string if there is not EOM at the end. ...</div><div class='long'><p>Add EOM symbol to string if there is not EOM at the end.\n     Добавляет символ конца сообщения к строке, если она не оканчивается им.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_format' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-_format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-_format' class='name expandable'>_format</a>( <span class='pre'>data</span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Make string from JSON. ...</div><div class='long'><p>Make string from JSON.\n     Возвращает JSON-строку.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_parseMessagePart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-_parseMessagePart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-_parseMessagePart' class='name expandable'>_parseMessagePart</a>( <span class='pre'>messagePart</span> ) : Object|null<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Parse JSON from string. ...</div><div class='long'><p>Parse JSON from string.\n     Парсит JSON из строки.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>messagePart</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object|null</span><div class='sub-desc'><p>If no message part or can't parse message - return null. Else return message object.\n     Если нет части сообщения или его не получается распарсить - возвращает null.\n     Иначе возвращает объект части сообщения.</p>\n</div></li></ul></div></div></div><div id='method-addEom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-addEom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-addEom' class='name expandable'>addEom</a>( <span class='pre'>string</span> ) : String<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'>Add EOM symbol to string if there is not EOM at the end. ...</div><div class='long'><p>Add EOM symbol to string if there is not EOM at the end.\n     Добавляет символ конца сообщения к строке, если она не оканчивается им.</p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprected</strong> </p>\n        \n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-decrypt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-decrypt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-decrypt' class='name expandable'>decrypt</a>( <span class='pre'>string</span> ) : String|null<span class=\"signature\"></span></div><div class='description'><div class='short'>Decrypt string. ...</div><div class='long'><p>Decrypt string.\n     Расшифровывает строку.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String|null</span><div class='sub-desc'><p>If no string - return null. If algorithm == 'no' returns string.\n     Если нет string - возвращает null. Если algorithm == 'no' возвращает string.</p>\n</div></li></ul></div></div></div><div id='method-encrypt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-encrypt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-encrypt' class='name expandable'>encrypt</a>( <span class='pre'>string</span> ) : String|null<span class=\"signature\"></span></div><div class='description'><div class='short'>Encrypt string. ...</div><div class='long'><p>Encrypt string.\n     Зашифровывает строку.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String|null</span><div class='sub-desc'><p>If no string - return null. If algorithm == 'no' returns string.\n     Если нет string - возвращает null. Если algorithm == 'no' возвращает string.</p>\n</div></li></ul></div></div></div><div id='method-format' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-format' class='name expandable'>format</a>( <span class='pre'>data</span> ) : String<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'>Make string from JSON. ...</div><div class='long'><p>Make string from JSON.\n     Возвращает JSON-строку.</p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprected</strong> </p>\n        \n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBody' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-getBody' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-getBody' class='name expandable'>getBody</a>( <span class='pre'>message</span> ) : Object|null<span class=\"signature\"></span></div><div class='description'><div class='short'>Get body from encrypted message. ...</div><div class='long'><p>Get body from encrypted message.\n     Возвращает тело зашифрованного сообщения.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : String<div class='sub-desc'><p>Encrypted message.\n     Зашифрованное сообщение.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object|null</span><div class='sub-desc'><p>If can't parse message - return null. Else return body Object.\n     Если не получается распарсить сообщение - возвращает null. Иначе возвращает объект тела сообщения.</p>\n</div></li></ul></div></div></div><div id='method-getBodyAsync' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-getBodyAsync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-getBodyAsync' class='name expandable'>getBodyAsync</a>( <span class='pre'>message, callback</span> ) : Object|null<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'>get body from encrypted message. ...</div><div class='long'><p>get body from encrypted message.</p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprected</strong> </p>\n        \n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : String<div class='sub-desc'><ul>\n<li>encrypted message.</li>\n</ul>\n\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object|null</span><div class='sub-desc'><p>if can\\t parse message - return null. else return body Object</p>\n</div></li></ul></div></div></div><div id='method-getHeader' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-getHeader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-getHeader' class='name expandable'>getHeader</a>( <span class='pre'>message</span> ) : Object|null<span class=\"signature\"></span></div><div class='description'><div class='short'>Get header from encrypted message. ...</div><div class='long'><p>Get header from encrypted message.\n     Возвращает заголовок сообщения.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : String<div class='sub-desc'><p>Encrypted message.\n     Зашифрованное сообщение.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object|null</span><div class='sub-desc'><p>If can't parse message - return null. Else return header Object.\n     Если не получается распарсить сообщение - возвращает null. Иначе - объект заголовка.</p>\n</div></li></ul></div></div></div><div id='method-getHeaderAsync' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-getHeaderAsync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-getHeaderAsync' class='name expandable'>getHeaderAsync</a>( <span class='pre'>message, callback</span> ) : Object|null<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'>Get header from encrypted message. ...</div><div class='long'><p>Get header from encrypted message.</p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprected</strong> </p>\n        \n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : String<div class='sub-desc'><p>Encrypted message.</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object|null</span><div class='sub-desc'><p>If can't parse message - return null. else return header Object</p>\n</div></li></ul></div></div></div><div id='method-makeMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-makeMessage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-makeMessage' class='name expandable'>makeMessage</a>( <span class='pre'>message, [body]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Make encrypt message. ...</div><div class='long'><p>Make encrypt message.\n     Создает зашифрованное сообщение.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'><p>Message object. If body is defined - message param should be just header of message.\n     Объект сообщения. Если передается параметр body - данный параметр должен быть заголовком.</p>\n<ul><li><span class='pre'>header</span> : Object (optional)<div class='sub-desc'><p>Message header.\n     Заголовок сообщения.</p>\n</div></li><li><span class='pre'>body</span> : Object (optional)<div class='sub-desc'><p>Message body.\n     Тело сообщения.</p>\n</div></li></ul></div></li><li><span class='pre'>body</span> : Object (optional)<div class='sub-desc'><p>Message body.\n     Тело сообщения.</p>\n\n<pre class='inline-example '><code>cm.makeMessage({header: {some: \"header\"}, body: {awesome: \"body\"}});\ncm.makeMessage({some: \"header\"}, {awesome: \"body\"}); //this calls are same\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>encrypted message.</p>\n</div></li></ul></div></div></div><div id='method-makeMessageAsync' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-makeMessageAsync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-makeMessageAsync' class='name expandable'>makeMessageAsync</a>( <span class='pre'>message, callback</span> ) : String<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'>Make encrypt message. ...</div><div class='long'><p>Make encrypt message.</p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprected</strong> </p>\n        \n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>header</span> : Object|string<div class='sub-desc'>\n</div></li></ul></div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>encrypted message.</p>\n</div></li></ul></div></div></div><div id='method-parse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-parse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-parse' class='name expandable'>parse</a>( <span class='pre'>message</span> ) : Object|null<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'>Parse JSON from string. ...</div><div class='long'><p>Parse JSON from string.\n     Парсит JSON из строки.</p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprected</strong> </p>\n        \n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object|null</span><div class='sub-desc'><p>If no message or can't parse message - return null. Else return message object.\n     Если нет сообщения или сообщение не получается распарсить - возвращает null.\n     Иначе возвращает объект сообщения.</p>\n</div></li></ul></div></div></div><div id='method-parseMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-parseMessage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-parseMessage' class='name expandable'>parseMessage</a>( <span class='pre'>message</span> ) : Object|null<span class=\"signature\"></span></div><div class='description'><div class='short'>Decrypt message and return message object. ...</div><div class='long'><p>Decrypt message and return message object.\n     Расшифровывает сообщение и возвращает его объект.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : String<div class='sub-desc'><p>Message.\n     Сообщение.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object|null</span><div class='sub-desc'><p>If can't parse message returns null.\n     Если сообщение не получается распарсить - возвращает null.</p>\n</div></li></ul></div></div></div><div id='method-replaceHeader' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-replaceHeader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-replaceHeader' class='name expandable'>replaceHeader</a>( <span class='pre'>header, message</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Replace header of message to new. ...</div><div class='long'><p>Replace header of message to new.\n     Замена заголовка сообщения.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>header</span> : Object<div class='sub-desc'><p>New message header.\n     Новый заголовок сообщения.</p>\n</div></li><li><span class='pre'>message</span> : String<div class='sub-desc'><p>Message to replace header.\n     Сообщение, в котором необходимо изменить заголовок.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Encrypted message with new header.\n     Зашифрованное сообщение с новым заголовком.</p>\n</div></li></ul></div></div></div><div id='method-splitMessages' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-splitMessages' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-splitMessages' class='name expandable'>splitMessages</a>( <span class='pre'>raw</span> ) : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Splits many messages at raw string to array. ...</div><div class='long'><p>Splits many messages at raw string to array.\n     Разделяет строку с сообщениями на массив сообщений.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>raw</span> : String<div class='sub-desc'><p>Raw string with messages.\n     Строка с сообщениями.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'><p>Return empty array if no EOM at the end of raw string.\n     Возвращает пустой массив, если в конце строки нет символа конца сообщения.</p>\n</div></li></ul></div></div></div><div id='method-splitMessagesAsync' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-splitMessagesAsync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-splitMessagesAsync' class='name expandable'>splitMessagesAsync</a>( <span class='pre'>raw, callback</span> ) : String[]<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'>Splits many messages to array. ...</div><div class='long'><p>Splits many messages to array.</p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprected</strong> </p>\n        \n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>raw</span> : String<div class='sub-desc'><ul>\n<li>messages.</li>\n</ul>\n\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'><p>return [] if no EOM at the end of raw string</p>\n</div></li></ul></div></div></div><div id='method-splitMessagesForce' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-method-splitMessagesForce' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-method-splitMessagesForce' class='name expandable'>splitMessagesForce</a>( <span class='pre'>raw</span> ) : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Splits many massages at raw string to array. ...</div><div class='long'><p>Splits many massages at raw string to array. Last element is tail of raw string.\nIf some message was not fully emitted - it will be this element. If all messages are entire it will be ''.\n     Разделяет строку с сообщениями на массив сообщений. Последний элемент - остаток строки.\n     Если какое-либо сообщение не доставленно полностью - оно будет этим элементом.\n     Если все сообщения целые - последний элемент - ''.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>raw</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-createCryptMaker' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CryptMaker'>CryptMaker</span><br/><a href='source/index.html#CryptMaker-static-method-createCryptMaker' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CryptMaker-static-method-createCryptMaker' class='name expandable'>createCryptMaker</a>( <span class='pre'>options</span> ) : <a href=\"#!/api/CryptMaker\" rel=\"CryptMaker\" class=\"docClass\">CryptMaker</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Alternative constructor (without new, just call)\n     Альтернативный конструктор, без использования new. ...</div><div class='long'><p>Alternative constructor (without new, just call)\n     Альтернативный конструктор, без использования new.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CryptMaker\" rel=\"CryptMaker\" class=\"docClass\">CryptMaker</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});