(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangjia/add-or-update"],{"048d":function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return a}));var r=function(){var e=this,n=e.$createElement;e._self._c},u=[]},3258:function(e,n,t){},"333c":function(e,n,t){"use strict";t.r(n);var a=t("44bc"),r=t.n(a);for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);n["default"]=r.a},"44bc":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,a,r,u,i){try{var o=e[u](i),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(a,r)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var i=e.apply(n,t);function o(e){u(i,a,r,o,s,"next",e)}function s(e){u(i,a,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("c816"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{cross:"",ruleForm:{shangpubianhao:"",mima:"",shangpumingcheng:"",shangpudizhi:"",lianxidianhua:"",shangputupian:"",money:"",vip:""},vipOptions:[],vipIndex:0,user:{},ro:{shangpubianhao:!1,mima:!1,shangpumingcheng:!1,shangpudizhi:!1,lianxidianhua:!1,shangputupian:!1,money:!1,vip:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return i(a.default.mark((function r(){var u,i,o,s;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return u=e.getStorageSync("nowTable"),r.next=3,t.$api.session(u);case 3:if(i=r.sent,t.user=i.data,t.vipOptions="是,否".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=14;break}return t.ruleForm.id=n.id,r.next=12,t.$api.info("shangjia",t.ruleForm.id);case 12:i=r.sent,t.ruleForm=i.data;case 14:if(t.cross=n.cross,!n.cross){r.next=54;break}o=e.getStorageSync("crossObj"),r.t0=a.default.keys(o);case 18:if((r.t1=r.t0()).done){r.next=54;break}if(s=r.t1.value,"shangpubianhao"!=s){r.next=24;break}return t.ruleForm.shangpubianhao=o[s],t.ro.shangpubianhao=!0,r.abrupt("continue",18);case 24:if("mima"!=s){r.next=28;break}return t.ruleForm.mima=o[s],t.ro.mima=!0,r.abrupt("continue",18);case 28:if("shangpumingcheng"!=s){r.next=32;break}return t.ruleForm.shangpumingcheng=o[s],t.ro.shangpumingcheng=!0,r.abrupt("continue",18);case 32:if("shangpudizhi"!=s){r.next=36;break}return t.ruleForm.shangpudizhi=o[s],t.ro.shangpudizhi=!0,r.abrupt("continue",18);case 36:if("lianxidianhua"!=s){r.next=40;break}return t.ruleForm.lianxidianhua=o[s],t.ro.lianxidianhua=!0,r.abrupt("continue",18);case 40:if("shangputupian"!=s){r.next=44;break}return t.ruleForm.shangputupian=o[s],t.ro.shangputupian=!0,r.abrupt("continue",18);case 44:if("money"!=s){r.next=48;break}return t.ruleForm.money=o[s],t.ro.money=!0,r.abrupt("continue",18);case 48:if("vip"!=s){r.next=52;break}return t.ruleForm.vip=o[s],t.ro.vip=!0,r.abrupt("continue",18);case 52:r.next=18;break;case 54:t.styleChange();case 55:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},vipChange:function(e){this.vipIndex=e.target.value,this.ruleForm.vip=this.vipOptions[this.vipIndex]},shangputupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.shangputupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(a.default.mark((function t(){var r,u,i,o,s,c,l,p,f,d;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.shangpubianhao){t.next=3;break}return n.$utils.msg("商铺编号不能为空"),t.abrupt("return");case 3:if(n.ruleForm.mima){t.next=6;break}return n.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(n.ruleForm.shangpumingcheng){t.next=9;break}return n.$utils.msg("商铺名称不能为空"),t.abrupt("return");case 9:if(!n.ruleForm.lianxidianhua||n.$validate.isMobile(n.ruleForm.lianxidianhua)){t.next=12;break}return n.$utils.msg("联系电话应输入手机格式"),t.abrupt("return");case 12:if(!n.ruleForm.money||n.$validate.isNumber(n.ruleForm.money)){t.next=15;break}return n.$utils.msg("余额应输入数字"),t.abrupt("return");case 15:if(!n.cross){t.next=31;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){t.next=31;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){t.next=27;break}for(l in c)l==o&&(c[l]=s);return p=e.getStorageSync("crossTable"),t.next=25,n.$api.update("".concat(p),c);case 25:t.next=31;break;case 27:r=Number(e.getStorageSync("userid")),u=c["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 31:if(!u||!r){t.next=53;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=u,f={page:1,limit:10,crossuserid:r,crossrefid:u},t.next=37,n.$api.list("shangjia",f);case 37:if(d=t.sent,!(d.data.total>=i)){t.next=43;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 43:if(!n.ruleForm.id){t.next=48;break}return t.next=46,n.$api.update("shangjia",n.ruleForm);case 46:t.next=50;break;case 48:return t.next=50,n.$api.add("shangjia",n.ruleForm);case 50:n.$utils.msgBack("提交成功");case 51:t.next=61;break;case 53:if(!n.ruleForm.id){t.next=58;break}return t.next=56,n.$api.update("shangjia",n.ruleForm);case 56:t.next=60;break;case 58:return t.next=60,n.$api.add("shangjia",n.ruleForm);case 60:n.$utils.msgBack("提交成功");case 61:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),a=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(t,"-").concat(a,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},"48a1":function(e,n,t){"use strict";(function(e){t("d8d8");a(t("66fd"));var n=a(t("ce4f"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},c3fe:function(e,n,t){"use strict";var a=t("3258"),r=t.n(a);r.a},ce4f:function(e,n,t){"use strict";t.r(n);var a=t("048d"),r=t("333c");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("c3fe");var i,o=t("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"2486b8d2",null,!1,a["a"],i);n["default"]=s.exports}},[["48a1","common/runtime","common/vendor"]]]);