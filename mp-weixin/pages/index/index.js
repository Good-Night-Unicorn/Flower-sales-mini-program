(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{5916:function(n,e,t){"use strict";(function(n){t("d8d8");i(t("66fd"));var e=i(t("ff88"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},6872:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t("a34a")),o=r(t("54cb"));function r(n){return n&&n.__esModule?n:{default:n}}function u(n,e){var t;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=a(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var i=0,o=function(){};return{s:o,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,u=!0,c=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return u=n.done,n},e:function(n){c=!0,r=n},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw r}}}}function a(n,e){if(n){if("string"===typeof n)return c(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(n,e):void 0}}function c(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function l(n,e,t,i,o,r,u){try{var a=n[r](u),c=a.value}catch(l){return void t(l)}a.done?e(c):Promise.resolve(c).then(i,o)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(i,o){var r=n.apply(e,t);function u(n){l(r,i,o,u,a,"next",n)}function a(n){l(r,i,o,u,a,"throw",n)}u(void 0)}))}}t("9f92");var f=function(){Promise.all([t.e("common/vendor"),t.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(t("92b9"))}.bind(null,t)).catch(t.oe)},d={components:{uniIcons:f},data:function(){return{rows:2,column:4,iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"],role:"",menuList:[],swiperMenuList:[],user:{},tableName:"",autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],xianhuaxinxilist:[],homegonggaoxinxilist:[],news:[]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=this;return s(i.default.mark((function t(){var r,u,a;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.role=n.getStorageSync("role"),r=n.getStorageSync("nowTable"),t.next=4,e.$api.session(r);case 4:u=t.sent,e.user=u.data,e.tableName=r,a=o.default.list(),e.menuList=a,e.menuList.forEach((function(n,t){e.role==n.roleName&&n.frontMenu.forEach((function(n,t){n.child[0].buttons.indexOf("查看")>-1&&e.swiperMenuList.push(n)}))}));case 10:case"end":return t.stop()}}),t)})))()},onShow:function(){var n=this;return s(i.default.mark((function e(){var t,o,r,a,c;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.next=3,n.$api.page("config",{page:1,limit:5});case 3:o=e.sent,r=u(o.data.list);try{for(r.s();!(a=r.n()).done;)c=a.value,c.name.indexOf("picture")>=0&&c.value&&""!=c.value&&null!=c.value&&t.push({img:c.value,title:c.name})}catch(i){r.e(i)}finally{r.f()}return t&&(n.swiperList=t),e.next=9,n.$api.recommend("xianhuaxinxi",1,4);case 9:return o=e.sent,n.xianhuaxinxilist=o.data.list,e.next=13,n.$api.list("gonggaoxinxi",{page:1,limit:4});case 13:o=e.sent,n.homegonggaoxinxilist=o.data.list;case 15:case"end":return e.stop()}}),e)})))()},methods:{onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,e){this.$utils.jump("../".concat(n,"/detail?id=").concat(e))},onPageTap:function(e){n.navigateTo({url:"../".concat(e,"/list"),fail:function(){n.switchTab({url:"../".concat(e,"/list")})}})},onPageTap2:function(e){n.setStorageSync("useridTag",0),n.navigateTo({url:e,fail:function(){n.switchTab({url:e})}})}}};e.default=d}).call(this,t("543d")["default"])},bc8c:function(n,e,t){"use strict";t.r(e);var i=t("6872"),o=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);e["default"]=o.a},e4e7:function(n,e,t){"use strict";var i=t("e9ce"),o=t.n(i);o.a},e9ce:function(n,e,t){},f5e8:function(n,e,t){"use strict";var i;t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return i}));var o=function(){var n=this,e=n.$createElement,t=(n._self._c,n.__map(n.menuList,(function(e,t){var i=n.__get_orig(e),o=n.__map(e.frontMenu,(function(t,i){var o=n.__get_orig(t),r=n.role==e.roleName?n.__map(t.child,(function(e,t){var i=n.__get_orig(e),o=n.__map(e.buttons,(function(t,i){var o=n.__get_orig(t),r="查看"==t&&"yifahuodingdan"!=e.tableName&&"yituikuandingdan"!=e.tableName&&"yiquxiaodingdan"!=e.tableName&&"weizhifudingdan"!=e.tableName&&"yizhifudingdan"!=e.tableName&&"yiwanchengdingdan"!=e.tableName?e.menu.split("列表"):null;return{$orig:o,g0:r}}));return{$orig:i,l0:o}})):null;return{$orig:o,l1:r}}));return{$orig:i,l2:o}}))),i=n.__map(n.xianhuaxinxilist,(function(e,t){var i=n.__get_orig(e),o=e.xianhuatupian?e.xianhuatupian.split(","):null;return{$orig:i,g1:o}})),o=n.__map(n.homegonggaoxinxilist,(function(e,t){var i=n.__get_orig(e),o=e.tupian?e.tupian.split(","):null;return{$orig:i,g2:o}}));n.$mp.data=Object.assign({},{$root:{l3:t,l4:i,l5:o}})},r=[]},ff88:function(n,e,t){"use strict";t.r(e);var i=t("f5e8"),o=t("bc8c");for(var r in o)"default"!==r&&function(n){t.d(e,n,(function(){return o[n]}))}(r);t("e4e7");var u,a=t("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=c.exports}},[["5916","common/runtime","common/vendor"]]]);