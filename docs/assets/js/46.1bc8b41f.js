(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{358:function(n,s,a){"use strict";a.r(s);var e=a(0),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("blockquote",[a("p",[n._v("给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。")])]),n._v(" "),a("blockquote",[a("p",[n._v("你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。")])]),n._v(" "),a("p",[n._v("示例:")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("给定 nums = [2, 7, 11, 15], target = 9\n\n因为 nums[0] + nums[1] = 2 + 7 = 9\n所以返回 [0, 1]\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])]),a("p",[n._v("solutions")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(nums, target) {\n    for(var i =0;i<nums.length;i++) {\n        for(var j=i+1;j<nums.length;j++) {\n            if(nums[i] + nums[j] == target) {\n                return [i, j];\n            }\n        }\n    }\n};\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br")])]),a("p",[n._v("来源：力扣（LeetCode）\n链接：https://leetcode-cn.com/problems/two-sum\n著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。")])])}),[],!1,null,null,null);s.default=t.exports}}]);