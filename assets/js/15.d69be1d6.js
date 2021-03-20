(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{423:function(t,a,e){t.exports=e.p+"assets/img/rn@2x.8e095af4.png"},424:function(t,a,e){t.exports=e.p+"assets/img/flutter.e40776ef.png"},425:function(t,a,e){t.exports=e.p+"assets/img/rn_flutter.760908f1.png"},426:function(t,a,e){t.exports=e.p+"assets/img/csrf.455e5f8c.png"},556:function(t,a,e){"use strict";e.r(a);var r=e(45),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"对比rn和flutter的性能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对比rn和flutter的性能"}},[t._v("#")]),t._v(" 对比rn和flutter的性能")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("React Native")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("Flutter")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("语言")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("JavaScript")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("dart")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("环境")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("JSCore")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Flutter Engine")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("发布时间")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("2015")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("2017")])])])]),t._v(" "),r("ul",[r("li",[r("p",[t._v('在Android和iOS上，默认情况下Flutter和React Native都需要一个原生平台的Activity / ViewController支持，且在原生层面属于一个"单页面应用"，而它们之间最大的不同点在于UI构建\nReact Native会在Active会在Activity下加载js文件，然后运行在JavaScriptCore中解析Bundle文件布局，最后堆叠出一列列原生控件进行渲染。'),r("br"),t._v(" "),r("img",{attrs:{src:e(423)}})])]),t._v(" "),r("li",[r("p",[t._v("Flutter 中绝大部分的 Widget 都与平台无关， 开发者基于 Framework 开发 App ，而 Framework 运行在 Engine 之上，由 Engine 进行适配和跨平台支持。这个跨平台的支持过程，其实就是将 Flutter UI 中的 Widget “数据化” ，然后通过 Engine 上的 Skia 直接绘制到屏幕上 。")])])]),t._v(" "),r("img",{attrs:{src:e(424)}}),t._v(" "),r("ul",[r("li",[r("p",[t._v("Widget 在渲染时会经过 Element 变化， 最后转化为 RenderObject 再进行绘制， 而最终组成的 RenderObject 树才是 “真正的渲染 Dom” ， 每次 Widget 树触发的改变，并不一定会导致RenderObject  树的完全更新。")])]),t._v(" "),r("li",[r("p",[t._v("所以在实现原理上 React Native 和 Flutter 是完全不同的思路，虽然都有类似“虚拟 DOM 的概念” ，但是React Native 带有较强的平台关联性，而 Flutter UI 的平台关联性十分薄弱。")])]),t._v(" "),r("li",[r("p",[t._v("先说理论性能，在理论上 Flutter 的设计性能是强于 React Native ，这是框架设计的理念导致的，Flutter 在少了 OEM Widget ，直接与 CPU / GPU 交互的特性，决定了它先天性能的优势。")])])]),t._v(" "),r("h2",{attrs:{id:"为什么rn在ios的性能比android好-他在android上卡在哪里-怎么解决"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么rn在ios的性能比android好-他在android上卡在哪里-怎么解决"}},[t._v("#")]),t._v(" 为什么rn在ios的性能比android好，他在android上卡在哪里，怎么解决")]),t._v(" "),r("p",[t._v("React Native 同等条件下， Android 比 IOS 大很多 ，这是因为 IOS 自带了 JSCore ，而 Android 需要各类动态 so 内置支持，而且这里 Android 的动态库 so 是经过了 ndk 过滤后的大小，不然还会更大。")]),t._v(" "),r("img",{attrs:{src:e(425)}}),t._v(" "),r("h2",{attrs:{id:"flutter的底层原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flutter的底层原理"}},[t._v("#")]),t._v(" flutter的底层原理")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/5d71d2f2518825103e545bdc",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter原理深度解析"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"pwa的工作原理-有没有用过manifest"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pwa的工作原理-有没有用过manifest"}},[t._v("#")]),t._v(" pwa的工作原理，有没有用过manifest")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/5c07493951882516cd70d213",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 PWA"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://lavas.baidu.com/pwa/engage-retain-users/add-to-home-screen/introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("lavas,manifest.json简介"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("manifest.json应该包含如下信息：")]),t._v(" "),r("div",{staticClass:"language-json line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"short_name"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"短名称"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"这是一个完整名称"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"icon"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icon.png"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image/png"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sizes"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"48x48"')]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start_url"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.html"')]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br"),r("span",{staticClass:"line-number"},[t._v("9")]),r("br"),r("span",{staticClass:"line-number"},[t._v("10")]),r("br"),r("span",{staticClass:"line-number"},[t._v("11")]),r("br"),r("span",{staticClass:"line-number"},[t._v("12")]),r("br")])]),r("p",[t._v("使用 link 标签将 manifest.json 部署到 PWA 站点 HTML 页面的头部，如下所示：")]),t._v(" "),r("div",{staticClass:"language-html line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-html"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("manifest"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("path-to-manifest/manifest.json"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("h2",{attrs:{id:"热更新使用的场景、appstore被拒的情况"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#热更新使用的场景、appstore被拒的情况"}},[t._v("#")]),t._v(" 热更新使用的场景、AppStore被拒的情况")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.jianshu.com/p/3bd95bd5c61b",target:"_blank",rel:"noopener noreferrer"}},[t._v("热更新的几种实现方式"),r("OutboundLink")],1),r("br"),t._v("\n1、热更新的技术限制：只能更新js代码，图片等静态资源。原生代码，原生配置都不能（其实能通过jspatch之类的技术能实现，但苹果现在会扫描代码，碰到jspatch会打回）\n2、热更新的政策限制：明面上，苹果，谷歌都不允许热更新，所以提交AppStore和play store审核的时候都不能使用热更新，甚至不能出现检查版本之类的字眼。审核通过后可以开启热更新。但是另一方面，所有的大厂都在明目张胆地进行热更新（微信的小程序不是热更是什么？），所以……总的来说都是睁一只眼闭一只眼，只要不太过分玩换皮，热更新是官方不欢迎但也不拒绝的存在。")]),t._v(" "),r("h2",{attrs:{id:"h5webview跨平台上架被拒的原因和解决"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#h5webview跨平台上架被拒的原因和解决"}},[t._v("#")]),t._v(" h5webview跨平台上架被拒的原因和解决")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://ask.dcloud.net.cn/article/36348",target:"_blank",rel:"noopener noreferrer"}},[t._v("Appstore审核反馈废弃UIWebview APIs问题的说明"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("iOS有UIWebview和WKWebview两种webview。从iOS13开始苹果将UIWebview列为过期API")]),t._v(" "),r("h2",{attrs:{id:"http2新特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http2新特性"}},[t._v("#")]),t._v(" http2新特性")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/5a4dfb2ef265da43305ee2d0",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP----HTTP2.0新特性"),r("OutboundLink")],1),r("br"),t._v("\nHTTP2.0 大幅度的提高了web性能，在HTTP1.1完全语意兼容的基础上，进一步减少了网络的延迟。实现低延迟高吞吐量。")]),t._v(" "),r("ul",[r("li",[t._v("二进制分帧")]),t._v(" "),r("li",[t._v("首部压缩")]),t._v(" "),r("li",[t._v("流量控制")]),t._v(" "),r("li",[t._v("多路复用")]),t._v(" "),r("li",[t._v("请求优先级")]),t._v(" "),r("li",[t._v("服务器推送")])]),t._v(" "),r("h2",{attrs:{id:"https的ssl密钥交换过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#https的ssl密钥交换过程"}},[t._v("#")]),t._v(" https的ssl密钥交换过程")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/lingyejun/p/9210903.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Https之秘钥交换过程分析"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"webpack打包的优化手段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包的优化手段"}},[t._v("#")]),t._v(" webpack打包的优化手段")]),t._v(" "),r("p",[t._v("参考"),r("a",{attrs:{href:"https://www.jianshu.com/p/910b3579c454",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于webpack打包优化总结"),r("OutboundLink")],1)]),t._v(" "),r("ol",[r("li",[t._v("合理配置CommonsChunkPlugin: 对所有依赖的chunk进行公共部分的提取(以module为单位进行提取)")])]),t._v(" "),r("ul",[r("li",[t._v("传入字符串参数，由chunkplugin自动计算提取")]),t._v(" "),r("li",[t._v("有选择的提取公共代码")]),t._v(" "),r("li",[t._v("将entry下所有的模块的公共部分（可指定引用次数）提取到一个通用的chunk中")]),t._v(" "),r("li",[t._v("抽取entry中的一些lib抽取到vendors中")])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("通过externals配置来提取常用库，CDN，导出为umd模式")]),t._v(" "),r("li",[t._v("利用DllPlugin和DllReferencePlugin预编译模块")]),t._v(" "),r("li",[t._v("使用Happypack加速代码构建(webpack4使用thread loader)")]),t._v(" "),r("li",[t._v("增强uglifyPlugin,并行压缩")])]),t._v(" "),r("h2",{attrs:{id:"什么是amd-commonjs和umd"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是amd-commonjs和umd"}},[t._v("#")]),t._v(" 什么是AMD,CommonJS和UMD")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.jianshu.com/p/ec2844e0aea9",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是 AMD，CommonJS 和 UMD？"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"cdn有什么用处-他的原理是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdn有什么用处-他的原理是什么"}},[t._v("#")]),t._v(" cdn有什么用处，他的原理是什么")]),t._v(" "),r("p",[t._v("CDN，Content Distribute Network，可以直译成内容分发网络，CDN解决的是如何将数据快速可靠从源站传递到用户的问题。用户获取数据时，不需要直接从源站获取，通过CDN对于数据的分发，用户可以从一个较优的服务器获取数据，从而达到快速访问，并减少源站负载压力的目的。\n"),r("a",{attrs:{href:"https://blog.csdn.net/lihao21/article/details/52808747",target:"_blank",rel:"noopener noreferrer"}},[t._v("CDN的作用与基本过程"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"有没有遇到过运营商劫持-怎么解决"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#有没有遇到过运营商劫持-怎么解决"}},[t._v("#")]),t._v(" 有没有遇到过运营商劫持，怎么解决")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/5bea7eb4f265da612859a9e4",target:"_blank",rel:"noopener noreferrer"}},[t._v("干货！防运营商劫持"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"csrf的产生和防范的手段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#csrf的产生和防范的手段"}},[t._v("#")]),t._v(" csrf的产生和防范的手段")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/5b6b08956fb9a04fc67c2263",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于csrf,什么是csrf,怎么防范它?"),r("OutboundLink")],1),r("br"),t._v("\n跨站请求伪造(Cross-site requeset forgery)"),r("br"),t._v("\n防范 CSRF 可以遵循以下几种规则：")]),t._v(" "),r("ol",[r("li",[t._v("Get 请求不对数据进行修改")]),t._v(" "),r("li",[t._v("不让第三方网站访问到用户 Cookie")]),t._v(" "),r("li",[t._v("阻止第三方网站请求接口")]),t._v(" "),r("li",[t._v("请求时附带验证信息，比如验证码或者 token")])]),t._v(" "),r("img",{attrs:{src:e(426)}}),t._v(" "),r("h2",{attrs:{id:"网站的性能如何优化-有什么工具-怎么才算一个网站的性能好"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网站的性能如何优化-有什么工具-怎么才算一个网站的性能好"}},[t._v("#")]),t._v(" 网站的性能如何优化，有什么工具，怎么才算一个网站的性能好")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.jianshu.com/p/56faa75fb9be",target:"_blank",rel:"noopener noreferrer"}},[t._v("网站性能优化知识整理"),r("OutboundLink")],1),r("br"),t._v(" "),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/33752746",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lighthouse的使用与Google的移动端最佳实践"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"如何捕获前端某一个文件的报错-并上报到系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何捕获前端某一个文件的报错-并上报到系统"}},[t._v("#")]),t._v(" 如何捕获前端某一个文件的报错，并上报到系统")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://segmentfault.com/a/1190000013983109",target:"_blank",rel:"noopener noreferrer"}},[t._v("谈谈前端异常捕获与上报"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"babel-polyfill-解决了什么问题-具体有哪些-es6会带来什么兼容问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#babel-polyfill-解决了什么问题-具体有哪些-es6会带来什么兼容问题"}},[t._v("#")]),t._v(" Babel polyfill 解决了什么问题，具体有哪些，es6会带来什么兼容问题")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29058936",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel polyfill知多少"),r("OutboundLink")],1)]),t._v(" "),r("ul",[r("li",[t._v("Babel 处于构建时（也就是传统Java等语言的编译时），转译出来的结果在默认情况下并不包括 ES6 对运行时的扩展，例如，builtins（内建，包括 Promise、Set、Map 等）、内建类型上的原型扩展（如 ES6 对 Array、Object、String 等内建类型原型上的扩展）以及Regenerator（用于generators / yield）等都不包括在内。")]),t._v(" "),r("li",[t._v("最后来到 babel-polyfill，它的初衷是模拟（emulate）一整套 ES2015+ 运行时环境，所以它的确会以全局变量的形式 polyfill Map、Set、Promise 之类的类型，也的确会以类似 Array.prototype.includes() 的方式去注入污染原型，这也是官网中提到最适合应用级开发的 polyfill，再次提醒如果你在开发 library 的话，不推荐使用（或者说绝对不要使用）。")])]),t._v(" "),r("p",[t._v("总结：\n"),r("strong",[t._v("babel-polyfill")]),t._v("：需要在你自己的代码中手工引入（最好放在 vendor 里），它会以全局变量污染的方式 polyfill 内建类（如 Map、Set、Promise 等），同时也会通过修改 Array、String、Object 等原型的方式添加实例方法（如 Array.prototype.includes()、String.prototype.padStart() 等），内建类的静态方法（如 Array.from() 等）也会被 polyfill。babel-polyfill 适合于开发独立的业务应用，及时全局污染、prototype 被修改也不会受到太大的影响，babel-polyfill 不适合开发第三方类库。")]),t._v(" "),r("p",[r("strong",[t._v("babel-plugin-transform-runtime")]),t._v("：需要你在 .babelrc 或 Babel 编译选项中将该插件添加到 plugins 中，插件只会 polyfill 你用到的类或方法，由于采用了沙盒（Sandbox）机制，它不会污染全局变量，同时也不会去修改内建类的原型，带来的坏处是它不会 polyfill 原型上的扩展（例如 Array.prototype.includes() 不会被 polyfill，Array.from() 则会被 polyfill）。插件的方式适合于开发第三方类库，不适合开发需要大量使用 Array 等原型链扩展方法的应用。")]),t._v(" "),r("h2",{attrs:{id:"你有为团队写过什么优化的工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#你有为团队写过什么优化的工具"}},[t._v("#")]),t._v(" 你有为团队写过什么优化的工具")]),t._v(" "),r("h2",{attrs:{id:"如何协同交流-保证团队的进度和质量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何协同交流-保证团队的进度和质量"}},[t._v("#")]),t._v(" 如何协同交流，保证团队的进度和质量")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.zhihu.com/question/19798220",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.zhihu.com/question/19798220"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"怎么提高产品提需求的质量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#怎么提高产品提需求的质量"}},[t._v("#")]),t._v(" 怎么提高产品提需求的质量")]),t._v(" "),r("p",[t._v("我们开发真正希望的是产品经理在交代需求时，不要求全面细致，但要重点突出。其实工程师不仅仅要了解产品的方案的核心设计思路，还要知道工程上取舍的条件。这样我们可以集中精力解决对公司对整个产品有巨大回报的问题，同时在那些次要的功能点上做变通。而面对那些重点不突出的需求，越是交代得细致，我们越是反感。因为不知道你真正想解决的问题是什么，我们就不知道一处设定是你重点关注的还是随便拍脑袋的，那我们肯定要到处挑刺啦。此外，如果一个名产品经理知道自己方案的核心要点，也是不会为一些次要的细节被挑刺而乱了阵脚的。只要底线没被触及，完全可以让开发有些发挥的余地，降低下整体的成本呀。相反，越是不知道底线在哪的 PM，面对开发的反馈越敏感，越怕自己的方案有一点的变化。所谓一流产品讲故事，二流产品列单子，三流产品哭鼻子，就是这个道理。")]),t._v(" "),r("h2",{attrs:{id:"如果你要引入一个新的技术-怎么去对他进行评估"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如果你要引入一个新的技术-怎么去对他进行评估"}},[t._v("#")]),t._v(" 如果你要引入一个新的技术，怎么去对他进行评估")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/entry/5794e4fad342d30059e987eb",target:"_blank",rel:"noopener noreferrer"}},[t._v("我脑海中的优秀技术团队"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"说一个你觉得做得最好的项目-并说明好在哪里"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说一个你觉得做得最好的项目-并说明好在哪里"}},[t._v("#")]),t._v(" 说一个你觉得做得最好的项目，并说明好在哪里")]),t._v(" "),r("h2",{attrs:{id:"如何保证架构清晰"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何保证架构清晰"}},[t._v("#")]),t._v(" 如何保证架构清晰")]),t._v(" "),r("h2",{attrs:{id:"有没有关注什么新的技术"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#有没有关注什么新的技术"}},[t._v("#")]),t._v(" 有没有关注什么新的技术")]),t._v(" "),r("h2",{attrs:{id:"未来职业规划"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#未来职业规划"}},[t._v("#")]),t._v(" 未来职业规划")]),t._v(" "),r("h3",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/5d0bac156fb9a07ec56e7f15",target:"_blank",rel:"noopener noreferrer"}},[t._v("全网最全 Flutter 与 React Native 深入对比分析"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);