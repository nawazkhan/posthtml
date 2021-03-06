## Modules

<dl>
<dt><a href="#module_posthtml">posthtml</a> ⇒ <code>function</code></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#PostHTML">PostHTML</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#version">version</a></dt>
<dd><p>PostHTML Instance</p>
</dd>
</dl>

<a name="module_posthtml"></a>

## posthtml ⇒ <code>function</code>
**Returns**: <code>function</code> - posthtml

**Usage**
```js
import posthtml from 'posthtml'
import plugin from 'posthtml-plugin'

const ph = posthtml([ plugin() ])
```  

| Param | Type |
| --- | --- |
| plugins | <code>Array</code> | 

<a name="PostHTML"></a>

## PostHTML
**Kind**: global class  
**Requires**: <code>module:api</code>, <code>module:posthtml-parser</code>, <code>module:posthtml-render</code>  
**Author**: Ivan Voischev (@voischev),
        Ivan Demidov (@scrum)  

* [PostHTML](#PostHTML)
    * [new PostHTML(plugins)](#new_PostHTML_new)
    * [.use(plugin)](#PostHTML+use) ⇒ <code>Constructor</code>
    * [.process(html, options)](#PostHTML+process) ⇒ <code>Object.&lt;{html: String, tree: PostHTMLTree}&gt;</code> \| <code>Promise.&lt;{html: String, tree: PostHTMLTree}&gt;</code>
        * [~options](#PostHTML+process..options) : <code>Object</code>

<a name="new_PostHTML_new"></a>

### new PostHTML(plugins)

| Param | Type | Description |
| --- | --- | --- |
| plugins | <code>Array</code> | An array of PostHTML plugins |

<a name="PostHTML+use"></a>

### postHTML.use(plugin) ⇒ <code>Constructor</code>
**Kind**: instance method of [<code>PostHTML</code>](#PostHTML)  
**Returns**: <code>Constructor</code> - - this(PostHTML)

**Usage**
```js
ph.use((tree) => { tag: 'div', content: tree })
  .process('<html>..</html>', {})
  .then((result) => result))
```  
**this**: <code>posthtml</code>  

| Param | Type | Description |
| --- | --- | --- |
| plugin | <code>function</code> | A PostHTML plugin |

<a name="PostHTML+process"></a>

### postHTML.process(html, options) ⇒ <code>Object.&lt;{html: String, tree: PostHTMLTree}&gt;</code> \| <code>Promise.&lt;{html: String, tree: PostHTMLTree}&gt;</code>
**Kind**: instance method of [<code>PostHTML</code>](#PostHTML)  
**Returns**: <code>Object.&lt;{html: String, tree: PostHTMLTree}&gt;</code> - - Sync Mode<code>Promise.&lt;{html: String, tree: PostHTMLTree}&gt;</code> - - Async Mode (default)

**Usage**

**Sync**
```js
ph.process('<html>..</html>', { sync: true }).html
```

**Async**
```js
ph.process('<html>..</html>', {}).then((result) => result))
```  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>String</code> | Input (HTML) |
| options | <code>Object</code> | PostHTML Options |

<a name="PostHTML+process..options"></a>

#### process~options : <code>Object</code>
## PostHTML Options

**Kind**: inner property of [<code>process</code>](#PostHTML+process)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.sync | <code>Boolean</code> | enables sync mode, plugins will run synchronously, throws an error when used with async plugins |
| options.parser | <code>function</code> | use custom parser, replaces default (posthtml-parser) |
| options.render | <code>function</code> | use custom render, replaces default (posthtml-render) |
| options.skipParse | <code>Boolean</code> | disable parsing |

<a name="version"></a>

## version
PostHTML Instance

**Kind**: global variable  
**Properties**

| Name |
| --- |
| plugins | 
| options | 

