(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xianhuafenlei/add-or-update"],{"309b":function(e,t,n){"use strict";(function(e){n("d8d8");r(n("66fd"));var t=r(n("9554"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},5327:function(e,t,n){"use strict";n.r(t);var r=n("9ebe"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},"693b":function(e,t,n){"use strict";var r=n("ebc8"),a=n.n(r);a.a},"6fd7":function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},u=[]},9554:function(e,t,n){"use strict";n.r(t);var r=n("6fd7"),a=n("5327");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("693b");var i,o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"6a507cee",null,!1,r["a"],i);t["default"]=c.exports},"9ebe":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r,a,u,i){try{var o=e[u](i),c=o.value}catch(s){return void n(s)}o.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){u(i,r,a,o,c,"next",e)}function c(e){u(i,r,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("c816"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{cross:"",ruleForm:{leixing:""},user:{},ro:{leixing:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var n=this;return i(r.default.mark((function a(){var u,i,o,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,n.$api.session(u);case 3:if(i=a.sent,n.user=i.data,n.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(n.ruleForm.refid=t.refid,n.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){a.next=13;break}return n.ruleForm.id=t.id,a.next=11,n.$api.info("xianhuafenlei",n.ruleForm.id);case 11:i=a.sent,n.ruleForm=i.data;case 13:if(n.cross=t.cross,!t.cross){a.next=25;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 17:if((a.t1=a.t0()).done){a.next=25;break}if(c=a.t1.value,"leixing"!=c){a.next=23;break}return n.ruleForm.leixing=o[c],n.ro.leixing=!0,a.abrupt("continue",17);case 23:a.next=17;break;case 25:n.styleChange();case 26:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return i(r.default.mark((function n(){var a,u,i,o,c,s,l,f,d,g;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.cross){n.next=16;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){n.next=16;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){n.next=12;break}for(l in s)l==o&&(s[l]=c);return f=e.getStorageSync("crossTable"),n.next=10,t.$api.update("".concat(f),s);case 10:n.next=16;break;case 12:a=Number(e.getStorageSync("userid")),u=s["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 16:if(!u||!a){n.next=38;break}return t.ruleForm.crossuserid=a,t.ruleForm.crossrefid=u,d={page:1,limit:10,crossuserid:a,crossrefid:u},n.next=22,t.$api.list("xianhuafenlei",d);case 22:if(g=n.sent,!(g.data.total>=i)){n.next=28;break}return t.$utils.msg(e.getStorageSync("tips")),n.abrupt("return",!1);case 28:if(!t.ruleForm.id){n.next=33;break}return n.next=31,t.$api.update("xianhuafenlei",t.ruleForm);case 31:n.next=35;break;case 33:return n.next=35,t.$api.add("xianhuafenlei",t.ruleForm);case 35:t.$utils.msgBack("提交成功");case 36:n.next=46;break;case 38:if(!t.ruleForm.id){n.next=43;break}return n.next=41,t.$api.update("xianhuafenlei",t.ruleForm);case 41:n.next=45;break;case 43:return n.next=45,t.$api.add("xianhuafenlei",t.ruleForm);case 45:t.$utils.msgBack("提交成功");case 46:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(n,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])},ebc8:function(e,t,n){}},[["309b","common/runtime","common/vendor"]]]);