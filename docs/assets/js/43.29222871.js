(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{364:function(s,e,a){"use strict";a.r(e);var n=a(0),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("参考"),a("a",{attrs:{href:"https://juejin.im/post/5d2284dc51882579df4a4cee",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://juejin.im/post/5d2284dc51882579df4a4cee"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"set-有何不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-有何不同"}},[s._v("#")]),s._v(" Set 有何不同")]),s._v(" "),a("p",[s._v("最根本的区别是数组是一个索引集合，这说明数组中的数据值按索引进行排序。"),a("br"),s._v("\nset是一个键的集合。set不适用索引，而是使用键对数据排序。set中的元素按从插入顺序是可迭代的，他不能包含任何重复的数据。")]),s._v(" "),a("h3",{attrs:{id:"set的好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set的好处"}},[s._v("#")]),s._v(" set的好处")]),s._v(" "),a("ul",[a("li",[s._v("查看元素：使用indexOf或includes检查数组中的项是否存在比较慢")]),s._v(" "),a("li",[s._v("删除元素：根据value来删除该项")]),s._v(" "),a("li",[s._v("保存NaN：数组不能使用indexOf或includes来查找NaN，而set可以保存此值。")]),s._v(" "),a("li",[s._v("删除重复项：Set对象志存存唯一的值")])]),s._v(" "),a("h3",{attrs:{id:"时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度"}},[s._v("#")]),s._v(" 时间复杂度")]),s._v(" "),a("p",[s._v("数组在搜索元素方法时间复杂度为0(N)。也就是运行时间的增长速度与数组的长度相同。"),a("br"),s._v("\nSet用于搜索、删除和插入元素时间复杂度都只有0(1)")]),s._v(" "),a("h3",{attrs:{id:"比较set和array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较set和array"}},[s._v("#")]),s._v(" 比较Set和Array")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let arr = [], set = new Set(), n = 100000;\nfor(let i=0;i<n;i++) {\n  arr.push(i);\n  set.add(i);\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("查找元素")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let result;\nconsole.time('Array'); \nresult = arr.indexOf(123123) !== -1; \nconsole.timeEnd('Array');\nconsole.time('Set'); \nresult = set.has(123123); \nconsole.timeEnd('Set');\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("Array: 0.173ms"),a("br"),s._v("\nSet: 0.023ms")]),s._v(" "),a("ul",[a("li",[s._v("添加元素")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("console.time('Array'); \narr.push(n);\nconsole.timeEnd('Array');\nconsole.time('Set'); \nset.add(n);\nconsole.timeEnd('Set');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("Array: 0.018ms"),a("br"),s._v("\nSet: 0.003ms")]),s._v(" "),a("ul",[a("li",[s._v("删除元素")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const deleteFromArr = (arr, item) => {\n  let index = arr.indexOf(item);\n  return index !== -1 && arr.splice(index, 1);\n}\n\nconsole.time('Array'); \ndeleteFromArr(arr, n);\nconsole.timeEnd('Array');\nconsole.time('Set'); \nset.delete(n);\nconsole.timeEnd('Set');\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("Array: 1.122ms"),a("br"),s._v("\nSet: 0.015ms")]),s._v(" "),a("h3",{attrs:{id:"案例1：从数组中删除重复值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例1：从数组中删除重复值"}},[s._v("#")]),s._v(" 案例1：从数组中删除重复值")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const duplicateCollection = [1,2,1,3,2,4];\nlet uniqueCollection = [...new Set(duplicateCollection)]; // [1,2,3,4];\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"案例2：谷歌面试题问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例2：谷歌面试题问题"}},[s._v("#")]),s._v(" 案例2：谷歌面试题问题")]),s._v(" "),a("p",[s._v("给定一个整数无序数组和变量 sum，如果存在数组中任意两项和使等于 sum 的值，则返回true。否则,返回false。例如，数组[3,5,1,4]和 sum = 9，函数应该返回true，因为4 + 5 = 9。")]),s._v(" "),a("p",[s._v("解决这个问题的一个很好的方法是遍历数组，创建 Set保存相对差值。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const findSum = (arr, val) => {\n  let searchValues = new Set();\n  searchValues.add(val - arr[0]);\n  for (let i = 1, length = arr.length; i < length; i++) {\n    let searchVal = val - arr[i];\n    if (searchValues.has(arr[i])) {\n      return true;\n    } else {\n      searchValues.add(searchVal);\n    }\n  };\n  return false;\n};\n\n//简洁版\nconst findSum = (arr, sum) =>\n  arr.some((set => n => set.has(n) || !set.add(sum - n))(new Set));\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("因为Set.prototype.has()的时间复杂度仅为O(1)，所以使用 Set 来代替数组，最终使整个解决方案的线性运行时为O(N)。\n如果使用 Array.prototype.indexOf()或Array.prototype.includes()，它们的时间复杂度都为 O(N)，则总运行时间将为O(N²)，慢得多！")])])}),[],!1,null,null,null);e.default=t.exports}}]);