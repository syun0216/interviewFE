(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{364:function(e,t,r){"use strict";r.r(t);var a=r(0),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"组件data为什么是函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件data为什么是函数"}},[e._v("#")]),e._v(" 组件data为什么是函数")]),e._v(" "),r("p",[e._v("因为data的私有性，所以必须return一个新对象。")]),e._v(" "),r("h3",{attrs:{id:"vue-loader是什么？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-loader是什么？"}},[e._v("#")]),e._v(" vue-loader是什么？")]),e._v(" "),r("p",[e._v("vue-loader 是一个 webpack 的 loader，可以将单文件组件转换为 JavaScript 模块")]),e._v(" "),r("h3",{attrs:{id:"实现-vue-ssr基本原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现-vue-ssr基本原理"}},[e._v("#")]),e._v(" 实现 Vue SSR基本原理")]),e._v(" "),r("p",[e._v("主要通过vue-server-renderer 将vue组件输出成HTML，过程：")]),e._v(" "),r("ol",[r("li",[e._v("客户端entry-client主要作用挂在到DOM上，服务端entry-server除了创建和返回实例，还进行路由匹配与数据获取")]),e._v(" "),r("li",[e._v("webpack打包客户端为client-bundle，打包服务端为server-bundle")]),e._v(" "),r("li",[e._v("服务端接收请求，根据url来加载相应的组件，然后生成html发送给客户端")]),e._v(" "),r("li",[e._v("客户端激活， Vue 在浏览器端接管由服务端发送的静态 HTML，使其变为由 Vue 管理的动态 DOM，为确保混合成功，客户端与服务器端需要共享同一套数据。在服务端，可以在渲染之前获取数据，填充到 stroe 里，这样，在客户端挂载到 DOM 之前，可以直接从 store 里取数据。首屏的动态数据通过 window.INITIAL_STATE 发送到客户端")])]),e._v(" "),r("h3",{attrs:{id:"对vue-js的template编译的理解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对vue-js的template编译的理解"}},[e._v("#")]),e._v(" 对Vue.js的template编译的理解")]),e._v(" "),r("p",[e._v("template会被编译成AST语法树，AST会经过generate得到render函数，render的返回值是VNode，VNode是Vue的虚拟DOM节点")]),e._v(" "),r("ul",[r("li",[e._v("parse 过程，将 template 利用正则转化成 AST 抽象语法树")]),e._v(" "),r("li",[e._v("optimize 过程，标记静态节点，后 diff 过程跳过静态节点，提升性能")]),e._v(" "),r("li",[e._v("generate 过程，生成 render 字符串")])])])}),[],!1,null,null,null);t.default=v.exports}}]);