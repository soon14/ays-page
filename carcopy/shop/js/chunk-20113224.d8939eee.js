(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20113224"],{2048:function(t,e,s){t.exports=s.p+"img/give1.7fd0ac4a.jpg"},"5e59":function(t,e,s){"use strict";var r=s("9760"),i=s.n(r);i.a},8071:function(t,e,s){"use strict";var r=s("9c19"),i=s.n(r);i.a},8935:function(t,e,s){t.exports=s.p+"img/sc.fedbbd76.png"},"951d":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"voucher"},[r("van-popup",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[r("van-loading",{attrs:{size:"24px"}},[t._v("上传中...")])],1),r("div",{on:{click:t.toggleRetun}},[r("Toptitle",{attrs:{title:t.title}})],1),r("div",{staticClass:"voucher-up"},[r("div",{staticClass:"up-title"},[t._v("上传凭证")]),r("van-uploader",{attrs:{multiple:"","max-count":1,"after-read":t.afterRead},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}},[r("div",{staticClass:"upBtn"},[r("div",{staticClass:"upBtn-img"},[r("img",{attrs:{src:s("8935")}})])])])],1),t._m(0),r("div",{staticClass:"fixed"},[r("div",{staticClass:"turn ",attrs:{"data-v-0f60746f":""}},[r("div",{staticClass:"have-btn",on:{click:t.toggleInstall}},[t._v("提交")])])])],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"voucher-give"},[r("div",{staticClass:"give-imgs"},[r("div",{staticClass:"imgs-coms"},[r("img",{attrs:{src:s("2048")}})]),r("div",{staticClass:"imgs-coms"},[r("img",{attrs:{src:s("f027")}})])]),r("div",{staticClass:"give-hint"},[t._v("示例图（含车头、车牌、包装盒）")])])}],n=(s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("2fa7")),o=s("a412"),a=(s("bc3a"),s("e692")),c=s("88e7"),u=s("f121"),d=s("5f87"),l=s("f8b7"),f=s("c24f"),p=s("d399"),h=s("2f62");function v(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function A(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?v(s,!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):v(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var m={name:"Voucher",data:function(){return{show:!1,title:"确认安装",fileList:[],is_send:!0,postFrom:{credentials:"",status:4,id:void 0,shop_id:void 0}}},computed:A({},Object(h["b"])(["userInfo"])),components:{Toptitle:o["a"]},created:function(){var t=this;this.postFrom.id=this.$route.query.id;var e=this.$route.query.shop_id;if(void 0===e){var s=JSON.parse(Object(d["a"])());this.postFrom.shop_id=s.id}else this.postFrom.shop_id=e;void 0!==e&&(console.log("用户进入"),Object(a["h"])(e).then((function(e){console.log(e),t.$store.dispatch("shop/setShop",e.data),Object(f["b"])(e.data.user_id).then((function(e){t.$store.dispatch("user/login",e.data),Object(d["c"])(e.data)}))}))),console.log(this.postFrom)},methods:{afterRead:function(t){var e=this;this.show=!0;var s=c["a"].ossUploadFile(t);s.then((function(t){e.show=!1,e.postFrom.credentials=u["a"].oss_url+t.url}))},toggleRetun:function(){this.$router.go(-1)},toggleInstall:function(){var t=this;if(""!==this.postFrom.credentials){if(!this.is_send)return!0;this.is_send=!1,this.postFrom.user_id=this.userInfo.id,Object(l["e"])(this.postFrom).then((function(e){2e4===e.code?t.$router.push({path:"/install",query:{id:3}}):Object(p["a"])(e.msg)}))}else Object(p["a"])("请检查,凭证是否上传")}}},g=m,b=(s("8071"),s("2877")),O=Object(b["a"])(g,r,i,!1,null,"22e2e953",null);e["default"]=O.exports},9760:function(t,e,s){},"9c19":function(t,e,s){},a412:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"toptitle nb",class:t.shadow?"bm":"",style:t.pstyle},[t._m(0),s("div",{staticClass:"name"},[t._v(t._s(t.title))])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"toptitle-imgs"},[r("img",{attrs:{src:s("f5a4")}})])}],n=(s("b0c0"),{props:{title:{type:String,default:""},colorstr:{type:String,default:"#333"}},data:function(){return{pbstyle:{background:"#ffffff",color:this.colorstr},pstyle:void 0,shadow:void 0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t>150?(this.pstyle=this.pbstyle,this.pstyle.color="#000 !important",this.name={color:"#000"},this.src=2):(this.pstyle="",this.src=1,this.name={color:"#fff"})}}}),o=n,a=(s("5e59"),s("2877")),c=Object(a["a"])(o,r,i,!1,null,"0a693a99",null);e["a"]=c.exports},f027:function(t,e,s){t.exports=s.p+"img/give2.4cb12b16.jpg"},f5a4:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABhUlEQVR4Xu3Zy03EMBSF4WunAGiBDkzSAFQMHUADtlICHRAKSIIiMZsRy/s4R3Y2s7Pyf7azuJOk8yd13i8DYJyAzgXGFej8APB8BEspJef8llLaaq3PWhtHcQX+4j9SSo8i8lNrvX5VHniA+/h931/WdV1V6kWwr4B1/IUIewI84mEBvOIhATzj4QC846EAIuJhAKLiIQAi48MBouNDARDiwwBQ4kMAkOLdAdDiXQEQ490AUONdAJDjzQHQ400BGOLNAFjiTQCY4tUB2OLVAeZ5/r6NrrWnt1pT4Pt1VIeiy7JsIvJwnud2HMer5viaAuC6AtM0fTIhqJ6Aa5fYENQB2BBMAJgQzABYEEwBGBDMAdARXACQEdwAUBFcARAR3AHQEEIAkBDCAFAQQgEQEMIBohEgACIRYACiEKAAIhDgALwRIAE8EWABvBCgATwQ4AH+QfhqrT1pjckpAG4IOed3Edlaa6U7AK1g03+GrF7Scl2aK2CFMACsZFnWHSeAZaes3vMXMBn6UISvQ8QAAAAASUVORK5CYII="},f8b7:function(t,e,s){"use strict";s.d(e,"b",(function(){return i})),s.d(e,"f",(function(){return n})),s.d(e,"e",(function(){return o})),s.d(e,"h",(function(){return a})),s.d(e,"d",(function(){return c})),s.d(e,"c",(function(){return u})),s.d(e,"g",(function(){return d})),s.d(e,"a",(function(){return l}));var r=s("b775");function i(t){return Object(r["a"])({url:"/Order/GetDataByList",method:"get",params:t})}function n(t){return Object(r["a"])({url:"/Order/GetIdBydetails",method:"get",params:{id:t}})}function o(t){return Object(r["a"])({url:"/Order/GetIdByStatus",method:"post",data:t})}function a(t){return Object(r["a"])({url:"/Order/PostNoteByAdd",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/Order/GetIdBy2DayOrder",method:"get",params:t})}function u(t){return Object(r["a"])({url:"Order/GetIdBy2DayImagesOrder",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/Order/PostDataByVideo",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/Order/GetCodeBycheckCode",method:"get",params:t})}}}]);
//# sourceMappingURL=chunk-20113224.d8939eee.js.map