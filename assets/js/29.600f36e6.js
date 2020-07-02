(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{201:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("hr"),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("当时这个问题是去年在 ios 中遇到的，在最新版的 ios 系统中，貌似解决了这个 bug，但是为了向下兼容以及防止其他其他机型也出现这个问题，大家可以稍微记一下这个解决方法。")]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("在解决这个问题的时候，有试过下面这种方法:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView",target:"_blank",rel:"noopener noreferrer"}},[t._v("Element.scrollIntoView()"),e("OutboundLink")],1),t._v(":方法"),e("strong",[t._v("让当前的元素滚动到浏览器窗口的可视区域内")]),t._v("。")]),t._v(" "),t._m(9),e("p",[t._v("这个 api 还可以设置对齐方法，选择将 input 放在屏幕的上方/下方，类似的 api 还有:"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoViewIfNeeded",target:"_blank",rel:"noopener noreferrer"}},[t._v("Element.scrollIntoViewIfNeeded()"),e("OutboundLink")],1),t._v("，这两个是解决同一个问题的，选择一个用就可以了。")]),t._v(" "),e("hr"),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("这个就很简单了，只需更改 input 的 type 属性值就可以了。可以看一下 codepen 的"),e("a",{attrs:{href:"https://codepen.io/OBKoro1/pen/VxxgyG",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),e("OutboundLink")],1)]),t._v(" "),t._m(11),e("hr"),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("现在用户输入 emoji 简直已经成为了习惯，如果前后端没有对 emoji 表情进行处理，那么用户在上传的时候，就会请求失败。")]),t._v(" "),t._m(13),t._v(" "),e("p",[t._v("之前看过一篇"),e("a",{attrs:{href:"https://www.bbsmax.com/A/nAJvkxjY5r/",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章"),e("OutboundLink")],1),t._v("，这个文章里面讲了怎么在上传和拿数据下来的时候不会报错，但是不能在显示的时候转换为表情。")]),t._v(" "),t._m(14),t._v(" "),e("p",[t._v("之所以说这个，当表单请求错误的时候各位如果实在找不到问题可以往这方面考虑一下，我真的被坑过的 o(╥﹏╥)o。")]),t._v(" "),e("hr"),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),e("h4",{attrs:{id:"css-属性-white-space"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-属性-white-space","aria-hidden":"true"}},[t._v("#")]),t._v(" Css 属性:"),e("a",{attrs:{href:"http://www.w3school.com.cn/cssref/pr_text_white-space.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("white-space"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("white-space 属性用于设置如何处理元素内的空白，其中包括空白符和换行符。")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),e("hr"),t._v(" "),t._m(22),t._v(" "),e("p",[t._v("输入框清除首尾空格是 input 较为常见的需求，通常在上传的时候将首尾空格去除掉。一般使用:字符串的原生方法"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim",target:"_blank",rel:"noopener noreferrer"}},[t._v("trim()"),e("OutboundLink")],1),t._v(" 从一个字符串的两端删除空白字符。")]),t._v(" "),e("p",[t._v("trim() 方法并不影响原字符串本身，它返回的是一个新的字符串。")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._m(25),t._v(" "),e("p",[t._v("Vue 提供了"),e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/forms.html#trim",target:"_blank",rel:"noopener noreferrer"}},[t._v("修饰符"),e("OutboundLink")],1),t._v("删除首尾空格， 加了修饰符"),e("code",[t._v(".trim")]),t._v("会自动过滤用户输入的首尾空白字符")]),t._v(" "),t._m(26),e("p",[t._v("貌似 angular 也提供了类似过滤的方法，感兴趣的可以自己去查一下。")]),t._v(" "),e("hr"),t._v(" "),t._m(27),t._v(" "),e("p",[t._v("在用户登录或者搜索框的时候，一般都会监听键盘事件绑定回车按键，来执行登录/搜索 等操作。")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),e("p",[t._v("Vue 为监听键盘事件，提供了"),e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/events.html#%E6%8C%89%E9%94%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("按键修饰符"),e("OutboundLink")],1),t._v("，并且为常用的按键提供了别名，使用方法如下:当回车按键在 input 中被按下的时候，会触发里面的函数。")]),t._v(" "),t._m(31),t._v(" "),e("h3",{attrs:{id:"点个star支持我一下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#点个star支持我一下","aria-hidden":"true"}},[t._v("#")]),t._v(" 点个"),e("a",{attrs:{href:"https://github.com/OBKoro1/web_accumulate",target:"_blank",rel:"noopener noreferrer"}},[t._v("Star"),e("OutboundLink")],1),t._v("支持我一下~")]),t._v(" "),e("comment-comment")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"input-的一些坑点分享"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-的一些坑点分享","aria-hidden":"true"}},[this._v("#")]),this._v(" input 的一些坑点分享")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"本文内容包括："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本文内容包括：","aria-hidden":"true"}},[this._v("#")]),this._v(" 本文内容包括：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[t._v("移动端底部 input 被弹出的键盘遮挡。")]),t._v(" "),e("li",[t._v("控制 input 显/隐密码。")]),t._v(" "),e("li",[t._v("在 input 中输入 emoji 表情导致请求失败。")]),t._v(" "),e("li",[t._v("input 多行输入显示换行。")]),t._v(" "),e("li",[t._v("输入框首尾清除空格-trim()")]),t._v(" "),e("li",[t._v("在 input 中监听键盘事件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"移动端底部-input-被弹出的键盘遮挡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动端底部-input-被弹出的键盘遮挡","aria-hidden":"true"}},[this._v("#")]),this._v(" 移动端底部 input 被弹出的键盘遮挡")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("input 输入框是通过"),s("code",[this._v("position:fixed")]),this._v("一直放在页面底部，当点击 input 进行输入的时候，就会出现如下图片情况（有的机型会遮挡一些）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://github.com/OBKoro1/articleImg_src/blob/master/juejin/16353072dcc21218?raw=true",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("s",[this._v("在 input 的 focus 事件中，开启一个定时器，然后每隔 300 毫秒进行一次 document.body.scrollTop=document.body.scrollHeight 的调整，运行 3 次即可。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当时还以为解决了，但是当你底部评论区还有很多内容，你每次点击 input，想要输入的时候，整个页面通过"),s("code",[this._v("scrollTop")]),this._v("就会不断的向下滚动，这个体验不用说自己也知道是相当失败的，然后就再去找解决方法，结果就有了下面这个。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"element-scrollintoview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-scrollintoview","aria-hidden":"true"}},[this._v("#")]),this._v(" Element.scrollIntoView()")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#inputId'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scrollIntoView")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//只要在input的点击事件，或者获取焦点的事件中，加入这个api就好了")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"控制-input-显-隐密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制-input-显-隐密码","aria-hidden":"true"}},[this._v("#")]),this._v(" 控制 input 显/隐密码")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//点击函数，获取dom，判断更改属性。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" input"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inputId"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        input"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        input"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"在-input-中输入-emoji-表情导致请求失败"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-input-中输入-emoji-表情导致请求失败","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 input 中输入 emoji 表情导致请求失败")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("通常这个问题是后端那边处理比较合适的")]),this._v("，前端是做不了这件事的，或者说很难做这件事。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("ps:之前拿微信用户名的时候，有些人可能在微信昵称上面就会包含表情，"),s("strong",[this._v("如果后端没对表情处理转换，那么普通请求也会出错")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"textarea-多行回车换行，显示的时候换行设置："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#textarea-多行回车换行，显示的时候换行设置：","aria-hidden":"true"}},[this._v("#")]),this._v(" textarea 多行回车换行，显示的时候换行设置：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在使用"),s("code",[this._v("textarea")]),this._v("标签输入多行文本的时候，如果没有对多行文本显示处理，会导致没有换行的情况,就比如下面这种情况，用户在"),s("code",[this._v("textarea")]),this._v("是有换行的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://github.com/OBKoro1/articleImg_src/blob/master/juejin/1635388bf4dca899?raw=true",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://github.com/OBKoro1/articleImg_src/blob/master/juejin/16353927aec80539?raw=true",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("只要在"),s("strong",[this._v("显示内容的地方将该属性设置为"),s("code",[this._v("white-space: pre-line")]),this._v("或者"),s("code",[this._v("white-space:pre-wrap")]),this._v("，多行文本就可以换行了")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"设置之后，显示效果："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置之后，显示效果：","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置之后，显示效果：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://github.com/OBKoro1/articleImg_src/blob/master/juejin/1635d9d75136f6d8?raw=true",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"输入框首尾清除空格-trim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入框首尾清除空格-trim","aria-hidden":"true"}},[this._v("#")]),this._v(" 输入框首尾清除空格-trim()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"原生清除方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原生清除方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 原生清除方法:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//原生方法获取值，清除首尾空格上传str2")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inputId'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("trim")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"vue-清除方法："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-清除方法：","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue 清除方法：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model.trim")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("msg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"在-input-中监听键盘事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-input-中监听键盘事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 input 中监听键盘事件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"原生绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原生绑定","aria-hidden":"true"}},[this._v("#")]),this._v(" 原生绑定:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input onkeydown"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keydownMsg(event)"')]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("keydownMsg")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  keyCode "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keyCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取按键代码")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyCode "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//判断按下的是否为回车键")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在input上监听到回车 do something")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"vue-按键修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-按键修饰符","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue 按键修饰符")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@keyup.enter")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("enterActive"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])}],!1,null,null,null);n.options.__file="input的一些坑点分享.md";s.default=n.exports}}]);