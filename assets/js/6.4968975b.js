(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{328:function(t,s,a){t.exports=a.p+"assets/img/cache1.8a52e0ca.png"},329:function(t,s,a){t.exports=a.p+"assets/img/cache2.9390650e.png"},444:function(t,s,a){t.exports=a.p+"assets/img/nginx_success.e97cffb5.png"},445:function(t,s,a){t.exports=a.p+"assets/img/cache3.aa15f286.png"},446:function(t,s,a){t.exports=a.p+"assets/img/cache4.9f858eb7.png"},447:function(t,s,a){t.exports=a.p+"assets/img/cache5.73f6aa34.png"},448:function(t,s,a){t.exports=a.p+"assets/img/cache6.328a3025.png"},449:function(t,s,a){t.exports=a.p+"assets/img/cache7.582b08e4.png"},450:function(t,s,a){t.exports=a.p+"assets/img/cache8.b2daf010.png"},451:function(t,s,a){t.exports=a.p+"assets/img/cache9.c3ae9935.png"},452:function(t,s,a){t.exports=a.p+"assets/img/cache11.881713c1.png"},572:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"浏览器缓存其实就这么一回事儿"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存其实就这么一回事儿"}},[t._v("#")]),t._v(" 浏览器缓存其实就这么一回事儿")]),t._v(" "),n("h3",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[t._v("说到浏览器缓存，做前端的同学可能也不会陌生，他是我们优化前端性能的重要组成部分。但一说到这个东西，大家又觉得跟自己平时开发的业务需求不太沾边，仅仅是面试的时候才会去背一下相关的知识，所以过会就忘了，而且也没有真正了解他。本文中，小编将带着大家去实践一下浏览器缓存的各种使用场景，其实浏览器缓存就这么一回事儿。")]),t._v(" "),n("h3",{attrs:{id:"准备环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备环境"}},[t._v("#")]),t._v(" 准备环境")]),t._v(" "),n("p",[t._v("本文中，我们会以mac的环境来讲解，所以相关命令也是mac系统的命令。")]),t._v(" "),n("ol",[n("li",[t._v("首先，我们要在mac系统下安装nginx，nginx是什么这里我也不多讲了。输入一下命令，我们便可进行安装。")])]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("brew update "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新homebrew")]),t._v("\nbrew search nginx "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看nginx信息")]),t._v("\nbrew "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nginx "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装nginx")]),t._v("\nnginx "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行nginx")]),t._v("\nnginx -s reload "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重载nginx")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("成功后我们便可看到一下截图：\n"),n("img",{staticStyle:{border:"1px solid #ccc",width:"100%"},attrs:{src:a(444)}})]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("配置nginx的conf")])]),t._v(" "),n("div",{staticClass:"language-hash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("cd /usr/local/etc/nginx  # 进入nginx根目录\nmkdir conf # 创建配置目录\ntouch ./conf/index.conf # 创建我们的nginx配置\nvim nginx.conf # 配置nginx\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("在nginx.conf下的配置以下语句：")])]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("http "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n    include conf/*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 引入所有conf目录下的配置文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[t._v("配置我们刚才创建的index.conf文件")])]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9527")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root html/web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        index index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        try_files "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" /index.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    location ~ .*dll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".js$ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对dll结尾的js文件进行缓存设置")]),t._v("\n        root html/web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("h3",{attrs:{id:"配置我们的静态资源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置我们的静态资源"}},[t._v("#")]),t._v(" 配置我们的静态资源")]),t._v(" "),n("h4",{attrs:{id:"创建静态资源文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建静态资源文件"}},[t._v("#")]),t._v(" 创建静态资源文件")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/var/www "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 到nginx存放html的根目录")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" web "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建我们刚才的web文件夹")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" ./web/index.html ./web/react_dll.js ./web/index.js "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建对应的文件资源, react_dll.js是我们使用 ")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("h4",{attrs:{id:"配置我们的index-html"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置我们的index-html"}},[t._v("#")]),t._v(" 配置我们的index.html")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token doctype"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),n("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello world"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/index.js"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}}),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/react_dll.js"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}}),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br")])]),n("h4",{attrs:{id:"配置index-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置index-js"}},[t._v("#")]),t._v(" 配置index.js")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello world!'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h3",{attrs:{id:"不使用缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不使用缓存"}},[t._v("#")]),t._v(" 不使用缓存")]),t._v(" "),n("p",[t._v("如各位所见，刚才我们配置的index.conf并没有配置浏览器缓存的语句，所以每次请求都会返回200，我们来看下一下截图：\n"),n("img",{staticStyle:{width:"100%"},attrs:{src:a(328)}}),t._v("\n第一次请求，我们从服务器读取我们的资源，当我们刷新一下页面，js资源就会直接从浏览器内存中读取：\n"),n("img",{staticStyle:{width:"100%"},attrs:{src:a(329)}}),t._v("\n可以看到这个memory cache就是从浏览器缓存中读取的意思，这个时候我们不需要消耗时间来请求文件。"),n("br"),t._v("\n那么当我们关掉浏览器的tab，将会看到什么情况呢：\n"),n("img",{staticStyle:{width:"100%"},attrs:{src:a(445)}}),t._v(" "),n("strong",[t._v("那么我们可以得出以下结论：当我们没有配置任何浏览器缓存时，我们每次打开浏览器tab来请求我们的资源都会去服务器取，需要耗时，而当我们刷新页面时，浏览器会在内存中取得这些文件。")])]),t._v(" "),n("h3",{attrs:{id:"使用强缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用强缓存"}},[t._v("#")]),t._v(" 使用强缓存")]),t._v(" "),n("p",[t._v("强缓存(本地缓存)是指浏览器在发送请求前，会先去缓存里查看是否命中强缓存，如果命中，则直接从缓存中读取资源，不会发送请求到服务器。\n"),n("img",{staticStyle:{width:"100%"},attrs:{src:a(446)}})]),t._v(" "),n("h4",{attrs:{id:"expired"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#expired"}},[t._v("#")]),t._v(" Expired")]),t._v(" "),n("p",[t._v("Expired是HTTP/1.0时引入，我们可以设置一个绝对时间，在这个时间之前资源都会走本地缓存而不会去请求服务器。比如我们在index.conf文件中作一下配置：")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("location ~ .*dll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".js$ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对dll结尾的js文件进行缓存设置")]),t._v("\n    root html/web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    expires 1d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一天之后过期")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[t._v("可以看到当我们设置了强缓存，我们首次加载还是会请求我们的服务器:\n"),n("img",{staticStyle:{width:"100%"},attrs:{src:a(328)}}),t._v("\n当我们关掉tab页，再打开，我们发现浏览器会从磁盘直接读取文件：\n"),n("img",{staticStyle:{width:"100%"},attrs:{src:a(447)}}),t._v("\n再次刷新，我们就在浏览器的内存读取文件了：\n"),n("img",{staticStyle:{width:"100%"},attrs:{src:a(329)}}),t._v("\n我们也可以从response headers里看到我们设置的expires时间，这个是一个绝对时间。\n"),n("img",{staticStyle:{width:"100%"},attrs:{src:a(448)}})]),t._v(" "),n("h4",{attrs:{id:"cache-control"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" cache-control")]),t._v(" "),n("p",[t._v("到了HTTP/1.1, Expire已经被Cache-Control替代，原因在于Expire控制员村的原理是使用客户端的时间与服务端返回的时间对比，如果客户端与服务端的时间因为某些原因发生误差，那么强制缓存就会直接失效。"),n("br"),t._v("\nCache-Control的主要取值为：")]),t._v(" "),n("ul",[n("li",[t._v("public: 所有内容都会被缓存(客户端和代理服务器都可缓存)")]),t._v(" "),n("li",[t._v("private: 所有内容只有客户端可以缓存， Cache-Control的默认值")]),t._v(" "),n("li",[t._v("no-cache:客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定")]),t._v(" "),n("li",[t._v("no-store: 所有内容都不会被缓存，即不适用强制缓存也不使用协商缓存")]),t._v(" "),n("li",[t._v("max-age=xxx: 缓存内容将在xxx秒后失效")])]),t._v(" "),n("p",[t._v("我们在index.conf中配置Cache-Control看下真是情况是怎样的：")]),t._v(" "),n("h5",{attrs:{id:"max-age"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#max-age"}},[t._v("#")]),t._v(" max-age")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("location ~ .*dll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".js$ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对dll结尾的js文件进行缓存设置")]),t._v("\n    root html/web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# expires 1d; # 一天之后过期")]),t._v("\n    add_header Cache-Control max-age"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("img",{staticStyle:{width:"100%"},attrs:{src:a(449)}}),t._v("\n首次请求后，我们就会在磁盘中请求文件，如下图显示：\n"),n("img",{staticStyle:{width:"100%"},attrs:{src:a(450)}}),t._v("\n当我们过了30s后再次请求，则会重新向服务器请求资源：\n"),n("img",{staticStyle:{width:"100%"},attrs:{src:a(451)}}),t._v(" "),n("h4",{attrs:{id:"public"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#public"}},[t._v("#")]),t._v(" public")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("location ~ .*dll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".js$ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对dll结尾的js文件进行缓存设置")]),t._v("\n    root html/web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# expires 1d; # 一天之后过期")]),t._v("\n    add_header Cache-Control public"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("h4",{attrs:{id:"no-cahce"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#no-cahce"}},[t._v("#")]),t._v(" no-cahce")]),t._v(" "),n("p",[t._v("可以在本地进行缓存，但每次发请求时，都要向服务器进行验证，如果服务器允许，才能使用本地缓存。跟max-age=0;用法相同。那么当我们设置了这个属性后，浏览器加载资源将会怎么样，我们来看一下流程图：")]),t._v(" "),n("img",{staticStyle:{width:"100%"},attrs:{src:a(452)}}),t._v(" "),n("h3",{attrs:{id:"使用协商缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用协商缓存"}},[t._v("#")]),t._v(" 使用协商缓存")]),t._v(" "),n("p",[t._v("当我们在nginx上写了如下代码：")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("location ~ .*dll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".js$ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对dll结尾的js文件进行缓存设置")]),t._v("\n    root html/web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# expires 1d; # 一天之后过期")]),t._v("\n    add_header Cache-Control no-cache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者设置Cache-Control max-age=0;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("h4",{attrs:{id:"last-modified-if-modified-since"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-if-modified-since"}},[t._v("#")]),t._v(" Last-Modified & If-Modified-Since")]),t._v(" "),n("h4",{attrs:{id:"etag-if-none-match"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match"}},[t._v("#")]),t._v(" Etag & If-None-Match")])])}),[],!1,null,null,null);s.default=e.exports}}]);