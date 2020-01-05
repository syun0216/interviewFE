(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{368:function(t,a,v){"use strict";v.r(a);var e=v(0),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"http协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[t._v("#")]),t._v(" HTTP协议")]),t._v(" "),v("h3",{attrs:{id:"http有哪些方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http有哪些方法"}},[t._v("#")]),t._v(" HTTP有哪些方法")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("1.0：GET、POST和HEAD")])]),t._v(" "),v("li",[v("p",[t._v("1.1：OPTIONS,PUT,DELETE,TRACE和CONNECT")])]),t._v(" "),v("li",[v("p",[t._v("GET: 请求服务器发送某些资源")])]),t._v(" "),v("li",[v("p",[t._v("HEAD: 请求资源的头部信息，并且和GET方法返回的一致。该方法的使用场景是下载大文件前先获取大小再决定是否下载")])]),t._v(" "),v("li",[v("p",[t._v("POST:发送数据给服务器")])]),t._v(" "),v("li",[v("p",[t._v("PUT:用于新增资源或者请求中的有效负载替换目标资源的表现形式")])]),t._v(" "),v("li",[v("p",[t._v("DELETE: 删除指定资源")])]),t._v(" "),v("li",[v("p",[t._v("PATCH: 资源部分修改")])]),t._v(" "),v("li",[v("p",[t._v("CONNECT: HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器")])]),t._v(" "),v("li",[v("p",[t._v("TRACE:回显服务器收到的请求，主要用于测试或者诊断")])])]),t._v(" "),v("h3",{attrs:{id:"get-post区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#get-post区别"}},[t._v("#")]),t._v(" GET POST区别")]),t._v(" "),v("ul",[v("li",[t._v("数据传输方式不同：GET请求通过URL传输，POST是请求体")]),t._v(" "),v("li",[t._v("安全性不同：POST在请求体有一定安全保障；GET在URL很容易查到数据")]),t._v(" "),v("li",[t._v("数据类型不同： GET只允许ASCII字符，POST没有限制")]),t._v(" "),v("li",[t._v("GET无害：刷新后退对请求无害，POST可能会重复提交表单")]),t._v(" "),v("li",[t._v("特性不同：GET是安全(只读特性，就是不会引起服务器状态变化)且幂等(幂等的概念是指同一个请求方法执行多次和执行一次的效果完全相同)，而post是非安全幂等")])]),t._v(" "),v("h3",{attrs:{id:"put和post都是给服务器发送新增资源，区别？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#put和post都是给服务器发送新增资源，区别？"}},[t._v("#")]),t._v(" PUT和POST都是给服务器发送新增资源，区别？")]),t._v(" "),v("p",[t._v("PUT和POST的区别，PUT方式幂等；连续调用多次的效果是相同的，而POST方法是非幂等的。"),v("br"),t._v("\nPUT的uri指向是单一具体的资源，POST可以指向资源集合")]),t._v(" "),v("p",[t._v("eg:创建一篇文章如果多次post则会创建多篇；若使用put则修改一次")]),t._v(" "),v("h3",{attrs:{id:"put和patch区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#put和patch区别"}},[t._v("#")]),t._v(" PUT和PATCH区别")]),t._v(" "),v("p",[t._v("PUT和PATCH都是更新资源，而PATCH可以对资源进行局部更新。比如我们有一篇文章地址 https://www.jianshu.com/articles/1234")]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[t._v(" article "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   author"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   creationDate"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-09-01'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   content"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cxk'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   id"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),t._v("\n "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("p",[t._v("修改文章作者事发送的数据：")]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// put")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  author"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'miro'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  creationDate"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-09-01'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  content"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cxk'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  id"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//patch")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  author"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'miro'")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("h3",{attrs:{id:"http的请求报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http的请求报文"}},[t._v("#")]),t._v(" http的请求报文")]),t._v(" "),v("ul",[v("li",[t._v("请求行")]),t._v(" "),v("li",[t._v("请求头")]),t._v(" "),v("li",[t._v("空行")]),t._v(" "),v("li",[t._v("请求体")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/6bb3600c998901243aa7b3934e5c7ffc.png",alt:"2019-06-14-11-24-10"}})]),t._v(" "),v("ul",[v("li",[t._v("请求行包括：请求方法字段、URL字段、HTTP协议版本字段。它们用空格分隔。例如，GET /index.html HTTP/1.1。")]),t._v(" "),v("li",[t._v("请求头部:请求头部由关键字/值对组成，每行一对，关键字和值用英文冒号“:”分隔")])]),t._v(" "),v("ol",[v("li",[t._v("User-Agent：产生请求的浏览器类型。")]),t._v(" "),v("li",[t._v("Accept：客户端可识别的内容类型列表。")]),t._v(" "),v("li",[t._v("Host：请求的主机名，允许多个域名同处一个IP地址，即虚拟主机。")])]),t._v(" "),v("h3",{attrs:{id:"http的响应报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http的响应报文"}},[t._v("#")]),t._v(" http的响应报文")]),t._v(" "),v("ul",[v("li",[t._v("响应行")]),t._v(" "),v("li",[t._v("响应头")]),t._v(" "),v("li",[t._v("空行")]),t._v(" "),v("li",[t._v("响应体")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/1b6f58868e31fb23d0688b8ca0ca619f.png",alt:"2019-06-14-11-37-02"}})]),t._v(" "),v("ul",[v("li",[t._v("响应行： 由协议版本，状态码和状态码的原因短语组成，例如"),v("code",[t._v("HTTP/1.1 200 OK")]),t._v("。")]),t._v(" "),v("li",[t._v("响应头：响应部首组成")]),t._v(" "),v("li",[t._v("响应体：服务器响应的数据")])]),t._v(" "),v("h3",{attrs:{id:"http部首"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http部首"}},[t._v("#")]),t._v(" HTTP部首")]),t._v(" "),v("h4",{attrs:{id:"通用首部字段-general-header-fields-：请求报文和响应报文都会使用首部"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通用首部字段-general-header-fields-：请求报文和响应报文都会使用首部"}},[t._v("#")]),t._v(" 通用首部字段(General Header Fields)：请求报文和响应报文都会使用首部")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("Cache-Control 控制缓存")])]),t._v(" "),v("li",[v("strong",[t._v("Connection连接管理、逐条首部")])]),t._v(" "),v("li",[t._v("Upgrade升级为其他协议")]),t._v(" "),v("li",[t._v("via代理服务器相关信息")]),t._v(" "),v("li",[t._v("Wraning错误和警告通知")]),t._v(" "),v("li",[t._v("Transfor-Encoding报文主体的传输编码方式")]),t._v(" "),v("li",[t._v("Trailer 报文末端的首部一览")]),t._v(" "),v("li",[t._v("Prama报文指令")]),t._v(" "),v("li",[t._v("Date创建报文日期")])]),t._v(" "),v("h4",{attrs:{id:"请求首部字段-request-header-fields-client-2-server-使用的首部"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求首部字段-request-header-fields-client-2-server-使用的首部"}},[t._v("#")]),t._v(" 请求首部字段(Request Header Fields) client 2 server 使用的首部")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("Accept客户端或者代理能够处理的媒体类型")])]),t._v(" "),v("li",[t._v("Accept-Encoding 优先可处理的编码方式")]),t._v(" "),v("li",[t._v("Accept-Language 优先可处理的自然语言")]),t._v(" "),v("li",[t._v("Accept-Charset 优先可处理的字符集")]),t._v(" "),v("li",[t._v("If-Match比较实体标记(ETag)")]),t._v(" "),v("li",[t._v("If-None-Match 与If-Match相反")]),t._v(" "),v("li",[v("strong",[t._v("If-Modified-Since 比较资源更新时间（Last-Modified）")])]),t._v(" "),v("li",[v("strong",[t._v("If-Unmodified-Since比较资源更新时间（Last-Modified），与 If-Modified-Since相反")])]),t._v(" "),v("li",[t._v("If-Rnages 资源未更新时发送实体byte的范围请求")]),t._v(" "),v("li",[v("strong",[t._v("Range 实体的字节范围请求")])]),t._v(" "),v("li",[v("strong",[t._v("Authorization web的认证信息")])]),t._v(" "),v("li",[t._v("Proxy-Authorization 代理服务器要求web认证信息")]),t._v(" "),v("li",[v("strong",[t._v("Host 请求资源所在服务器")])]),t._v(" "),v("li",[t._v("From 用户的邮箱地址")]),t._v(" "),v("li",[v("strong",[t._v("User-Agent 客户端程序信息")])]),t._v(" "),v("li",[t._v("Max-Forwrads 最大的逐跳次数")]),t._v(" "),v("li",[t._v("TE 传输编码的优先级")]),t._v(" "),v("li",[t._v("Referer 请求原始放的url")]),t._v(" "),v("li",[t._v("Expect 期待服务器的特定行为")])]),t._v(" "),v("h4",{attrs:{id:"响应首部字段-response-header-fields-server-2-client"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应首部字段-response-header-fields-server-2-client"}},[t._v("#")]),t._v(" 响应首部字段(Response Header Fields) server 2 client")]),t._v(" "),v("ul",[v("li",[t._v("Accept-Ranges 能接受的字节范围")]),t._v(" "),v("li",[t._v("Age 推算资源创建经过时间")]),t._v(" "),v("li",[v("strong",[t._v("Location 令客户端重定向的URI")])]),t._v(" "),v("li",[t._v("vary  代理服务器的缓存信息")]),t._v(" "),v("li",[v("strong",[t._v("ETag 能够表示资源唯一资源的字符串")])]),t._v(" "),v("li",[t._v("WWW-Authenticate 服务器要求客户端的验证信息")]),t._v(" "),v("li",[t._v("Proxy-Authenticate 代理服务器要求客户端的验证信息")]),t._v(" "),v("li",[v("strong",[t._v("Server 服务器的信息")])]),t._v(" "),v("li",[t._v("Retry-After 和状态码503 一起使用的首部字段，表示下次请求服务器的时间")])]),t._v(" "),v("h4",{attrs:{id:"实体首部字段-entiy-header-fields-：针对请求报文和响应报文的实体部分使用首部"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实体首部字段-entiy-header-fields-：针对请求报文和响应报文的实体部分使用首部"}},[t._v("#")]),t._v(" 实体首部字段(Entiy Header Fields)：针对请求报文和响应报文的实体部分使用首部")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("Allow 资源可支持http请求的方法")])]),t._v(" "),v("li",[t._v("Content-Language 实体的资源语言")]),t._v(" "),v("li",[t._v("Content-Encoding 实体的编码格式")]),t._v(" "),v("li",[t._v("Content-Length 实体的大小（字节）")]),t._v(" "),v("li",[t._v("Content-Type 实体媒体类型")]),t._v(" "),v("li",[t._v("Content-MD5 实体报文的摘要")]),t._v(" "),v("li",[t._v("Content-Location 代替资源的yri")]),t._v(" "),v("li",[t._v("Content-Rnages 实体主体的位置返回")]),t._v(" "),v("li",[v("strong",[t._v("Last-Modified 资源最后的修改资源")])]),t._v(" "),v("li",[v("strong",[t._v("Expires 实体主体的过期资源")])])]),t._v(" "),v("h3",{attrs:{id:"http状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http状态码"}},[t._v("#")]),t._v(" HTTP状态码")]),t._v(" "),v("p",[t._v("2xx 成功")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("200 ok 请求正确处理")])]),t._v(" "),v("li",[t._v("201 Created 请求已经被实现，有一个新资源已经依据请求的需要而建立")]),t._v(" "),v("li",[t._v("202 Accepted 请求已被接受，但还没执行，不保证完成")]),t._v(" "),v("li",[t._v("204 No content,成功不含实体的主体部分")]),t._v(" "),v("li",[v("strong",[t._v("206 Partial Content 进行范围请求")])])]),t._v(" "),v("p",[t._v("3xx 重定向")]),t._v(" "),v("ul",[v("li",[t._v("301 moved permanently, 永久重定向，资源已被重新分配了新的url")]),t._v(" "),v("li",[v("strong",[t._v("302 found，临时重定向")])]),t._v(" "),v("li",[t._v("303 see other,资源存在着另一个url")]),t._v(" "),v("li",[t._v("304 not modified, 表示服务器允许访问资源，但未满足条件")]),t._v(" "),v("li",[t._v("307 temporary redirect 临时重定向，同302")])]),t._v(" "),v("p",[t._v("4XX 客户端错误")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("400 bad request，请求报文存在语法错误")])]),t._v(" "),v("li",[v("strong",[t._v("401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息")])]),t._v(" "),v("li",[v("strong",[t._v("403 forbidden，表示对请求资源的访问被服务器拒绝")])]),t._v(" "),v("li",[v("strong",[t._v("404 not found，表示在服务器上没有找到请求的资源")])]),t._v(" "),v("li",[t._v("408 Request timeout, 客户端请求超时")]),t._v(" "),v("li",[t._v("409 Confict, 请求的资源可能引起冲突")])]),t._v(" "),v("p",[t._v("5XX 服务器错误")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("500 internal sever error，表示服务器端在执行请求时发生了错误")])]),t._v(" "),v("li",[t._v("501 Not Implemented 请求超出服务器能力范围，例如服务器不支持当前请求所需要的某个功能，或者请求是服务器不支持的某个方法")]),t._v(" "),v("li",[t._v("503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求")]),t._v(" "),v("li",[t._v("505 http version not supported 服务器不支持，或者拒绝支持在请求中使用的 HTTP 版本")])]),t._v(" "),v("h3",{attrs:{id:"同样是重定向-307、303、302的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#同样是重定向-307、303、302的区别"}},[t._v("#")]),t._v(" 同样是重定向 307、303、302的区别")]),t._v(" "),v("p",[t._v("302是http1.0协议状态码，http1.1细化了302出来303和307。"),v("br"),t._v("\n303明确表示客户端应当采用get方法获取资源，会把post请求变为get请求进行重定向。"),v("br"),t._v("\n307会遵照浏览器标准们不会将post变为get。")]),t._v(" "),v("h3",{attrs:{id:"http-keep-alive"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-keep-alive"}},[t._v("#")]),t._v(" http keep alive")]),t._v(" "),v("p",[t._v("HTTP1.0中保持长连接在请求头加上Connection:keep-alive")]),t._v(" "),v("p",[t._v("keep-alive的优点：")]),t._v(" "),v("ul",[v("li",[t._v("较少的CPU和内存的使用（由于同时打开的连接的减少了）")]),t._v(" "),v("li",[t._v("允许请求和应答的HTTP管线化")]),t._v(" "),v("li",[t._v("降低拥塞控制 （TCP连接减少了）")]),t._v(" "),v("li",[t._v("减少了后续请求的延迟（无需再进行握手）")]),t._v(" "),v("li",[t._v("报告错误无需关闭TCP连")])]),t._v(" "),v("h3",{attrs:{id:"为什么有https"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么有https"}},[t._v("#")]),t._v(" 为什么有HTTPS")]),t._v(" "),v("p",[t._v("https是安全版的http，因为http协议的数据都是明文进行传输的，所以对于一些敏感信息的传输就很不安全，HTTPS就是为了解决HTTP的不安全而生的。")]),t._v(" "),v("h3",{attrs:{id:"https是如何保证安全的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https是如何保证安全的"}},[t._v("#")]),t._v(" HTTPS是如何保证安全的")]),t._v(" "),v("p",[t._v("对称加密：通信双方使用同一个秘钥进行加密，简单性能也好，单无法解决首次发给对方的问题，容易被截获"),v("br"),t._v("\n非对称加密：")]),t._v(" "),v("ul",[v("li",[t._v("私钥+公钥=秘钥对")]),t._v(" "),v("li",[t._v("即用私钥加密的数据,只有对应的公钥才能解密,用公钥加密的数据,只有对应的私钥才能解密")]),t._v(" "),v("li",[t._v("因为通信双方的手里都有一套自己的密钥对,通信之前双方会先把自己的公钥都先发给对方")]),t._v(" "),v("li",[t._v("然后对方再拿着这个公钥来加密数据响应给对方,等到到了对方那里,对方再用自己的私钥进行解密")])]),t._v(" "),v("p",[t._v("解决方案")]),t._v(" "),v("p",[t._v("那么结合两种加密方式，将对称加密的密钥使用非对称加密的公钥进行加密，然后发送出去，接收方使用私钥进行解密得到对称加密的密钥，然后双方可以使用对称加密来进行沟通。"),v("br"),t._v("\n此时又带来了一个问题，中间人问题：\n如果客户端和服务器之间存在一个中间人，这个人只需要把原本双方通信互发的公钥，就可以轻松解密通信双方发送的所有数据"),v("br"),t._v("\n所以这个时候需要一个安全的第三方颁发证书（CA），证明身份的身份，防止被中间人攻击。"),v("br"),t._v("\n证书中包括：签发者、证书用途、使用者公钥、使用者私钥、使用者的HASH算法、证书到期时间等")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/66bc3fc4f003205c419dd6ada8ae8392.png",alt:"2019-06-14-12-30-18"}})]),t._v(" "),v("p",[t._v("但是问题来了，如果中间人篡改了证书，那么身份证明是不是就无效了？这个证明就白买了，这个时候需要一个新的技术，数字签名。")]),t._v(" "),v("p",[t._v("数字签名就是用CA自带的HASH算法对证书的内容进行HASH得到一个摘要，再用CA的私钥加密，最终组成数字签名。")]),t._v(" "),v("p",[t._v("当别人把他的证书发过来的时候,我再用同样的Hash算法,再次生成消息摘要，然后用CA的公钥对数字签名解密,得到CA创建的消息摘要,两者一比,就知道中间有没有被人篡改了。")]),t._v(" "),v("p",[t._v("这个时候就能最大程度保证通信的安全了。")]),t._v(" "),v("h3",{attrs:{id:"http2相对于http1-x有什么优势和特点？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http2相对于http1-x有什么优势和特点？"}},[t._v("#")]),t._v(" HTTP2相对于HTTP1.X有什么优势和特点？")]),t._v(" "),v("h4",{attrs:{id:"二进制分帧"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二进制分帧"}},[t._v("#")]),t._v(" 二进制分帧")]),t._v(" "),v("p",[t._v("帧：HTTP/2 数据通信的最小单位消息：指 HTTP/2 中逻辑上的 HTTP 消息。例如请求和响应等，消息由一个或多个帧组成。")]),t._v(" "),v("p",[t._v("流：存在于连接中的一个虚拟通道。流可以承载双向消息，每个流都有一个唯一的整数ID")]),t._v(" "),v("p",[t._v("HTTP/2 采用二进制格式传输数据，而非 HTTP 1.x 的文本格式，二进制协议解析起来更高效。")]),t._v(" "),v("h3",{attrs:{id:"头部压缩"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#头部压缩"}},[t._v("#")]),t._v(" 头部压缩")]),t._v(" "),v("p",[t._v("HTTP/1.x会在请求和响应中中重复地携带不常改变的、冗长的头部数据，给网络带来额外的负担。")]),t._v(" "),v("ul",[v("li",[t._v("HTTP/2在客户端和服务器端使用“首部表”来跟踪和存储之前发送的键－值对，对于相同的数据，不再通过每次请求和响应发送")]),t._v(" "),v("li",[t._v("首部表在HTTP/2的连接存续期内始终存在，由客户端和服务器共同渐进地更新;")]),t._v(" "),v("li",[t._v("每个新的首部键－值对要么被追加到当前表的末尾，要么替换表中之前的值。")])]),t._v(" "),v("blockquote",[v("p",[t._v("你可以理解为只发送差异数据，而不是全部发送，从而减少头部的信息量")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/33caf22f81643e1ec11f0f46b50e2155.png",alt:"2019-06-14-12-52-59"}})]),t._v(" "),v("h3",{attrs:{id:"服务器推送"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务器推送"}},[t._v("#")]),t._v(" 服务器推送")]),t._v(" "),v("p",[t._v("服务端可以在发送页面HTML时主动推送其它资源，而不用等到浏览器解析到相应位置，发起请求再响应。例如服务端可以主动把JS和CSS文件推送给客户端，而不需要客户端解析HTML时再发送这些请求。")]),t._v(" "),v("p",[t._v("服务端可以主动推送，客户端也有权利选择是否接收。如果服务端推送的资源已经被浏览器缓存过，浏览器可以通过发送RST_STREAM帧来拒收。主动推送也遵守同源策略，服务器不会随便推送第三方资源给客户端。")]),t._v(" "),v("h3",{attrs:{id:"多路复用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多路复用"}},[t._v("#")]),t._v(" 多路复用")]),t._v(" "),v("p",[t._v("HTTP 1.x 中，如果想并发多个请求，必须使用多个 TCP 链接，且浏览器为了控制资源，还会对单个域名有 6-8个的TCP链接请求限制。")]),t._v(" "),v("p",[t._v("HTTP2中：")]),t._v(" "),v("ul",[v("li",[t._v("同域名下所有通信都在单个连接上完成。")]),t._v(" "),v("li",[t._v("单个连接可以承载任意数量的双向数据流。")]),t._v(" "),v("li",[t._v("数据流以消息的形式发送，而消息又由一个或多个帧组成，多个帧之间可以乱序发送，因为根据帧首部的流标识可以重新组装")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/823eb09ae4446ba7dc9c06f4e39372e8.png",alt:"2019-06-14-12-58-50"}})]),t._v(" "),v("blockquote",[v("p",[t._v("拓展阅读："),v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/30166894",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP/2特性及其在实际应用中的表现"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"http的缓存的过程是怎样的？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http的缓存的过程是怎样的？"}},[t._v("#")]),t._v(" HTTP的缓存的过程是怎样的？")]),t._v(" "),v("p",[t._v("通常情况下的步骤是:")]),t._v(" "),v("ol",[v("li",[t._v("客户端向服务器发出请求，请求资源")]),t._v(" "),v("li",[t._v("服务器返回资源，并通过响应头决定缓存策略")]),t._v(" "),v("li",[t._v("客户端根据响应头的策略决定是否缓存资源（这里假设是），并将响应头与资源缓存下来")]),t._v(" "),v("li",[t._v("在客户端再次请求且命中资源的时候，此时客户端去检查上次缓存的缓存策略，根据策略的不同、是否过期等判断是直接读取本地缓存还是与服务器协商缓存")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/0718a83e37b6ab7d8da67ada5c36834b.png",alt:"2019-06-14-19-56-32"}})]),t._v(" "),v("h2",{attrs:{id:"什么时候会触发强缓存或者协商缓存？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么时候会触发强缓存或者协商缓存？"}},[t._v("#")]),t._v(" 什么时候会触发强缓存或者协商缓存？")]),t._v(" "),v("h3",{attrs:{id:"强缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),v("p",[t._v("强缓存离不开两个响应头"),v("code",[t._v("Expires")]),t._v("与"),v("code",[t._v("Cache-Control")])]),t._v(" "),v("ul",[v("li",[t._v("Expires：Expires是http1.0提出的一个表示资源过期时间的header，它描述的是一个绝对时间，由服务器返回，Expires 受限于本地时间，如果修改了本地时间，可能会造成缓存失效")])]),t._v(" "),v("p",[v("code",[t._v("Expires: Wed, 11 May 2018 07:20:00 GMT")])]),t._v(" "),v("ul",[v("li",[t._v("Cache-Control: Cache-Control 出现于 HTTP / 1.1，优先级高于 Expires ,表示的是相对时间")])]),t._v(" "),v("p",[v("code",[t._v("Cache-Control: max-age=315360000")])]),t._v(" "),v("p",[t._v("目前主流的做法使用"),v("code",[t._v("Cache-Control")]),t._v("控制缓存，除了"),v("code",[t._v("max-age")]),t._v("控制过期时间外，还有一些不得不提")]),t._v(" "),v("ul",[v("li",[t._v("Cache-Control: public可以被所有用户缓存，包括终端和CDN等中间代理服务器")]),t._v(" "),v("li",[t._v("Cache-Control: private只能被终端浏览器缓存，不允许中继缓存服务器进行缓存")]),t._v(" "),v("li",[t._v("Cache-Control: no-cache,先缓存本地，但是在命中缓存之后必须与服务器验证缓存的新鲜度才能使用")]),t._v(" "),v("li",[t._v("Cache-Control: no-store，不会产生任何缓存")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/b6dfe07b73d4fd62d167e6024d6fa2e1.png",alt:"2019-06-15-00-08-57"}})]),t._v(" "),v("p",[t._v("在缓存有效期内命中缓存，浏览器会直接读取本地的缓存资源，当缓存过期之后会与服务器进行协商。")]),t._v(" "),v("h3",{attrs:{id:"协商缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),v("p",[t._v("当第一次请求时服务器返回的响应头中没有Cache-Control和Expires或者Cache-Control和Expires过期抑或它的属性设置为no-cache时，那么浏览器第二次请求时就会与服务器进行协商。")]),t._v(" "),v("p",[t._v("如果缓存和服务端资源的最新版本是一致的，那么就无需再次下载该资源，服务端直接返回304 Not Modified 状态码，如果服务器发现浏览器中的缓存已经是旧版本了，那么服务器就会把最新资源的完整内容返回给浏览器，状态码就是200 Ok。")]),t._v(" "),v("p",[t._v("服务器判断缓存是否是新鲜的方法就是依靠HTTP的另外两组信息")]),t._v(" "),v("h4",{attrs:{id:"last-modified-if-modified-since"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-if-modified-since"}},[t._v("#")]),t._v(" Last-Modified/If-Modified-Since")]),t._v(" "),v("p",[t._v("客户端首次请求资源时，服务器会把资源的最新修改时间"),v("code",[t._v("Last-Modified:Thu, 19 Feb 2019 08:20:55 GMT")]),t._v("通过响应部首发送给客户端，当再次发送请求是，客户端将服务器返回的修改时间放在请求头"),v("code",[t._v("If-Modified-Since:Thu, 19 Feb 2019 08:20:55 GMT")]),t._v("发送给服务器，服务器再跟服务器上的对应资源进行比对，如果服务器的资源更新，那么返回最新的资源，此时状态码200，当服务器资源跟客户端的请求的部首时间一致，证明客户端的资源是最新的，返回304状态码，表示客户端直接用缓存即可。")]),t._v(" "),v("h4",{attrs:{id:"etag-if-none-match"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match"}},[t._v("#")]),t._v(" ETag/If-None-Match")]),t._v(" "),v("p",[t._v("ETag的流程跟Last-Modified是类似的，区别就在于ETag是根据资源内容进行hash，生成一个信息摘要，只要资源内容有变化，这个摘要就会发生巨变，通过这个摘要信息比对，即可确定客户端的缓存资源是否为最新，这比Last-Modified的精确度要更高。")]),t._v(" "),v("blockquote",[v("p",[t._v("响应头")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/be24a51fb3b4c5052cd4b26010d2789f.png",alt:"2019-06-15-00-51-13"}})]),t._v(" "),v("p",[t._v("因此整体的缓存流程图如下：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://user-images.githubusercontent.com/25027560/38223505-d8ab53da-371d-11e8-9263-79814b6971a5.png",alt:"缓存"}})]),t._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://github.com/xiaomuzhu/front-end-interview/blob/master/docs/guide/http.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xiaomuzhu/front-end-interview/blob/master/docs/guide/http.md"),v("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=_.exports}}]);