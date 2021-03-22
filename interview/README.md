---
title: README
date: 2020-01-11 18:39:52
permalink: /pages/094e7e/
categories:
tags:
  - 
---
前端面试题汇总

### HTML
- HTML5新增了哪些内容或API，使用过哪些
> 多媒体：video、audio、
游戏：canvas、webgl、
存储：localstorage、sessonstorage、websql、indexedDB
网络：websocket
- input和textarea的区别
- 用一个div模拟textarea的实现

### CSS
- 左右布局：左边定宽、右边自适应，不少于3种方法
- CSS3用过哪些新特性
- BFC、IFC
- 对栅格的理解
- （水平）居中有哪些实现方式
- 1像素边框问题

### JavaScript
- 图片懒加载
- 实现页面加载进度条
- 事件委托
- 实现extend函数
- 为什么会有跨域的问题以及解决方式
- jsonp原理、postMessage原理
- 实现拖拽功能，比如把5个兄弟节点中的最后一个节点拖拽到节点1和节点2之间
- 动画：setTimeout何时执行，requestAnimationFrame的优点
- 手写parseInt的实现：要求简单一些，把字符串型的数字转化为真正的数字即可，但不能使用JS原生的字符串转数字的API，比如Number()
- 编写分页器组件的时候，为了减少服务端查询次数，点击“下一页”怎样能确保还有数据可以加载（请求数据不会为空）？
- ES6新增了哪些特性，使用过哪些，也有当场看代码说输出结果的
- JS模块化的实践
- require.js的实现原理（如果使用过webpack，进一步会问，两者打包的异同及优缺点）
- promise的实现原理，进一步会问async、await是否使用过
- 实现gulp的功能
- 使用前端框架（angular/vue/react）带来哪些好处，相对于使用jQuery
- vue双向数据绑定的实现
- 单页应用，如何实现其路由功能


### 性能优化
- 项目中使用过哪些优化方法
- 输入一个URL，Enter之后发生了什么
（承上）页面的渲染过程
- 优化中会提到缓存的问题，问：静态资源或者接口等如何做缓存优化
- 页面DOM节点太多，会出现什么问题？如何优化？

### 项目经历

这些大公司招聘都是高级工程师起步，所以对简历上的项目会刨根问底。很多很多问题都是由项目中拓展开的，像优化相关的东西，还有前面提到的require.js、promise、gulp，项目中用到了某项技术，高级工程师的要求是：不仅会用，更要知道其原理。对自己的提醒：项目中用到的技术，不能说完全掌握其原理吧，但大致的实现还是有必要了解一下的。

---
- 介绍一下你做的这个项目，进一步细问：整个项目有哪些模块，你主要负责哪些
- 你在项目中的角色
- 你在项目中做的最出彩的一个地方
- 碰到过什么样的困难，怎么解决的
（如果你是这个项目的负责人），任务怎么分配的，有没有关注过团队成员的成长问题
前端安全问题：CSRF和XSS

### 其他
- 为什么选择做前端（我靠，我都快转前端两年了，还在问这个问题啊...）
- 你希望进入一个什么样的团队
- 你有什么问题想问我（面试官）的吗？