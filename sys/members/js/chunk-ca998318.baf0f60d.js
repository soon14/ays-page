(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca998318"],{"238a":function(t,s,e){},9267:function(t,s,e){},"96a4":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"Search"},[a("div",{staticClass:"Da-search"},[a("div",{staticClass:"searchBox"},[a("div",{staticClass:"return-icon",on:{click:t.calendar}},[a("img",{attrs:{src:e("f5a4")}})]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.listQuery.title,expression:"listQuery.title"}],staticClass:"inp",attrs:{placeholder:"请输入关键词搜索"},domProps:{value:t.listQuery.title},on:{input:function(s){s.target.composing||t.$set(t.listQuery,"title",s.target.value)}}}),t.showMes?a("div",{staticClass:"calendar",on:{click:function(s){return t.souClick("取消")}}},[t._v("取消")]):a("div",{staticClass:"calendar",on:{click:function(s){return t.souClick("搜索")}}},[t._v("搜索")])])]),t.showMes?a("div",{staticClass:"content"},[t.orderlist.length>0?a("Orderlist",{attrs:{orderlist:t.orderlist,num:t.num}}):a("div",{staticClass:"content-not"},[t._v("暂无更多信息")])],1):t._e()])},i=[],r=(e("a4d3"),e("4de4"),e("4160"),e("1d1c"),e("7a82"),e("e439"),e("dbb4"),e("b64b"),e("159b"),e("2fa7")),n=e("f8b7"),c=e("debc"),o=e("2f62");function u(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}function d(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?u(e,!0).forEach((function(s){Object(r["a"])(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(e).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}var l={name:"Ordersou",data:function(){return{value:"",showMes:!1,num:0,listQuery:{limit:20,page:1,shop_id:void 0},orderlist:[]}},computed:d({},Object(o["b"])(["userInfo"])),components:{Orderlist:c["a"]},created:function(){},methods:{getlist:function(){var t=this;this.listQuery.openid=this.userInfo.openid,Object(n["a"])(this.listQuery).then((function(s){t.orderlist=s.data.data,console.log(t.orderlist)}))},calendar:function(){this.$router.go(-1)},souClick:function(t){"搜索"===t?(this.showMes=!0,this.getlist()):(this.showMes=!1,this.value="")}}},p=l,v=(e("b12f"),e("2877")),A=Object(v["a"])(p,a,i,!1,null,"4c02b1ab",null);s["default"]=A.exports},b12f:function(t,s,e){"use strict";var a=e("9267"),i=e.n(a);i.a},debc:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"orderlist"},t._l(t.orderlist,(function(s,a){return e("div",{key:a,staticClass:"content",on:{click:function(e){return t.Orderdetails(s.id)}}},[e("van-skeleton",{attrs:{title:"",animate:"",row:5,loading:t.loading}},[e("div",{staticClass:"contentBox"},[e("div",{staticClass:"price"},[e("div",{staticClass:"price-left"},[e("span",{staticClass:"nums"},[t._v(t._s(s.id))])]),e("div",{staticClass:"price-time"},[e("div",[t._v(t._s(s.create_time))])])]),e("div",{staticClass:"state"},[e("div",{staticClass:"state-status"},[e("span",[t._v("状态：")]),"驳回"===s.status?e("span",{staticClass:"judge"},[t._v("待处理")]):e("span",{staticClass:"judge"},[t._v(t._s(s.status)+" "),1===s.is_eva?e("span",[t._v("(已评价)")]):t._e()])])]),e("div",{staticClass:"product"},[e("span",[t._v("产品：")]),e("span",{staticClass:"product-names"},[t._v(t._s(s.product_titile))])]),e("div",{staticClass:"product"},[e("span",[t._v("车型：")]),e("span",{staticClass:"product-names"},[t._v(t._s(s.model_title))])]),e("div",{staticClass:"product"},[e("span",[t._v("联系人：")]),e("span",{staticClass:"product-names"},[t._v(t._s(s.contact)+t._s(s.tel))])]),"待处理"!==s.status&&"待确认(业务)"!==s.status&&"待确认(门店)"!==s.status?e("div",{staticClass:"product"},[e("span",[t._v("门店：")]),e("span",{staticClass:"product-names"},[t._v(t._s(s.shop_title))])]):t._e(),"待处理"!==s.status||"待确认(业务)"!==s.status||"待确认(门店)"!==s.status?e("div",{staticClass:"product"},[e("span",[t._v("安装联系：")]),e("span",{staticClass:"product-names"},[t._v(t._s(s.shop_tel))])]):t._e(),"待处理"!==s.status||"待确认(业务)"!==s.status||"待确认(门店)"!==s.status?e("div",{staticClass:"product"},[e("span",[t._v("地址：")]),e("span",{staticClass:"product-names"},[t._v(t._s(s.shop_location))])]):t._e()])])],1)})),0)},i=[],r={name:"Orderlist",props:["orderlist","num"],data:function(){return{loading:!0}},methods:{Orderdetails:function(t){var s=t;this.$router.push({path:"/order/orderdetails",query:{id:s}})}},mounted:function(){setTimeout(function(){this.loading=!1}.bind(this),1e3)}},n=r,c=(e("fda4"),e("2877")),o=Object(c["a"])(n,a,i,!1,null,"51d0c2ff",null);s["a"]=o.exports},f5a4:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABhUlEQVR4Xu3Zy03EMBSF4WunAGiBDkzSAFQMHUADtlICHRAKSIIiMZsRy/s4R3Y2s7Pyf7azuJOk8yd13i8DYJyAzgXGFej8APB8BEspJef8llLaaq3PWhtHcQX+4j9SSo8i8lNrvX5VHniA+/h931/WdV1V6kWwr4B1/IUIewI84mEBvOIhATzj4QC846EAIuJhAKLiIQAi48MBouNDARDiwwBQ4kMAkOLdAdDiXQEQ490AUONdAJDjzQHQ400BGOLNAFjiTQCY4tUB2OLVAeZ5/r6NrrWnt1pT4Pt1VIeiy7JsIvJwnud2HMer5viaAuC6AtM0fTIhqJ6Aa5fYENQB2BBMAJgQzABYEEwBGBDMAdARXACQEdwAUBFcARAR3AHQEEIAkBDCAFAQQgEQEMIBohEgACIRYACiEKAAIhDgALwRIAE8EWABvBCgATwQ4AH+QfhqrT1pjckpAG4IOed3Edlaa6U7AK1g03+GrF7Scl2aK2CFMACsZFnWHSeAZaes3vMXMBn6UISvQ8QAAAAASUVORK5CYII="},f8b7:function(t,s,e){"use strict";e.d(s,"a",(function(){return i})),e.d(s,"b",(function(){return r})),e.d(s,"c",(function(){return n})),e.d(s,"d",(function(){return c}));var a=e("b775");function i(t){return Object(a["a"])({url:"/Order/GetDataByList",method:"get",params:t})}function r(t){return Object(a["a"])({url:"/Order/GetIdBydetails",method:"get",params:{id:t}})}function n(t){return Object(a["a"])({url:"/Order/PostDataByAdd",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/Order/PostEavByAdd",method:"post",data:t})}},fda4:function(t,s,e){"use strict";var a=e("238a"),i=e.n(a);i.a}}]);
//# sourceMappingURL=chunk-ca998318.baf0f60d.js.map