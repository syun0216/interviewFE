(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{532:function(r,t,a){"use strict";a.r(t);var _=a(45),e=Object(_.a)({},(function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h3",{attrs:{id:"文件上传漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件上传漏洞"}},[r._v("#")]),r._v(" 文件上传漏洞")]),r._v(" "),a("p",[r._v("文件上传漏洞是指用户上传了一个可执行的脚本文件，并通过此脚本文件获得了执行服务器端命令的能力。这种攻击方式是最为直接和有效的，攻击成功有三个条件：")]),r._v(" "),a("ol",[a("li",[r._v("上传的文件能够被web容器解释执行。")]),r._v(" "),a("li",[r._v("用户能够从web上访问这个文件。")]),r._v(" "),a("li",[r._v("用户上传的文件若被安全检查、格式化、图片压缩等功能改变了内容，则也可能导致攻击不成功")])]),r._v(" "),a("hr"),r._v(" "),a("p",[r._v("Apache文件解析问题：Apache对于文件名的解析是从后往前解析的，知道遇见一个apache认识的文件类型位置，因此phpshell.php.rar.rar.rar 因为Apache不认识rar这个文件类型，所以会一直遍历到后缀.php\nIIS文件解析问题 截断;分号"),a("br"),r._v("\nPHP CGI路径解析问题 cgi.fix_pathinfo = 1")]),r._v(" "),a("hr"),r._v(" "),a("h3",{attrs:{id:"设计安全的文件上传功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计安全的文件上传功能"}},[r._v("#")]),r._v(" 设计安全的文件上传功能")]),r._v(" "),a("ol",[a("li",[r._v("文件上传的目录设置为不可执行")]),r._v(" "),a("li",[r._v("判断文件的类型")]),r._v(" "),a("li",[r._v("使用随机数改写文件名和文件路径")]),r._v(" "),a("li",[r._v("单独设置文件服务器的域名")])]),r._v(" "),a("hr")])}),[],!1,null,null,null);t.default=e.exports}}]);