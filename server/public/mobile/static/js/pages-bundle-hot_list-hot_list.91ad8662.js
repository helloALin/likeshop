(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bundle-hot_list-hot_list"],{"11aa":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s}));var s={swipers:n("a74f").default,goodsList:n("5268").default,loadingFooter:n("8000").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"hot-list"},[n("v-uni-view",{staticClass:"header"},[n("v-uni-view",{staticClass:"title row mb20"},[n("v-uni-image",{staticClass:"icon mr20",attrs:{src:"/static/images/icon_paixu.png"}}),n("v-uni-text",{staticClass:"xs white"},[t._v("实时更新热销火爆商品")])],1),n("swipers",{attrs:{pid:15,height:"284rpx",radius:"10rpx"}})],1),n("v-uni-view",{staticClass:"main"},[t.hasHot?n("v-uni-view",[n("goods-list",{attrs:{type:"hot",list:t.goodsList}}),n("loading-footer",{attrs:{status:t.status}})],1):n("v-uni-view",{staticClass:"column-center",staticStyle:{"padding-top":"400rpx"}},[n("v-uni-image",{staticClass:"img-null",attrs:{src:"/static/images/goods_null.png"}}),n("v-uni-text",{staticClass:"lighter"},[t._v("暂无商品~")])],1)],1)],1)},i=[]},1940:function(t,e,n){t.exports=n.p+"static/img/hot_list_bg.32e9ce15.png"},"1de5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},3439:function(t,e,n){"use strict";var s=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=s(n("1da1")),i=n("28c4"),o=n("5ab3"),r=n("6626"),u={data:function(){return{goodsList:[],page:1,status:i.loadingType.LOADING,hasHot:!0}},components:{},props:{},onLoad:function(t){this.getHotGoodsFun()},onReachBottom:function(){this.getHotGoodsFun()},methods:{getHotGoodsFun:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,s,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.page,s=t.status,a=t.goodsList,e.next=3,(0,r.loadingFun)(o.getHotGoods,n,a,s);case 3:if(i=e.sent,i){e.next=6;break}return e.abrupt("return");case 6:t.page=i.page,t.goodsList=i.dataList,t.status=i.status;case 9:case"end":return e.stop()}}),e)})))()}}};e.default=u},3661:function(t,e,n){var s=n("3ec9");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=n("4f06").default;a("186abcb4",s,!0,{sourceMap:!1,shadowMode:!1})},"3ec9":function(t,e,n){var s=n("24fb"),a=n("1de5"),i=n("1940");e=s(!1);var o=a(i);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.hot-list[data-v-747ecb4e]{background:url('+o+") no-repeat;background-size:100% %?330?%;padding:%?62?% %?30?% 0;min-height:100vh;box-sizing:border-box}.hot-list .main[data-v-747ecb4e]{padding:0 0 %?20?%}.hot-list .data-null[data-v-747ecb4e]{padding-top:%?150?%}",""]),t.exports=e},"5530c":function(t,e,n){"use strict";n.r(e);var s=n("11aa"),a=n("e313");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("8647");var o,r=n("f0c5"),u=Object(r["a"])(a["default"],s["b"],s["c"],!1,null,"747ecb4e",null,!1,s["a"],o);e["default"]=u.exports},8647:function(t,e,n){"use strict";var s=n("3661"),a=n.n(s);a.a},e313:function(t,e,n){"use strict";n.r(e);var s=n("3439"),a=n.n(s);for(var i in s)"default"!==i&&function(t){n.d(e,t,(function(){return s[t]}))}(i);e["default"]=a.a}}]);