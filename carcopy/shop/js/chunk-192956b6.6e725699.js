(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-192956b6"],{2361:function(t,e,s){},"5e59":function(t,e,s){"use strict";var i=s("9760"),c=s.n(i);c.a},"899c":function(t,e,s){"use strict";var i=s("2361"),c=s.n(i);c.a},9760:function(t,e,s){},a412:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"toptitle nb",class:t.shadow?"bm":"",style:t.pstyle},[t._m(0),s("div",{staticClass:"name"},[t._v(t._s(t.title))])])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"toptitle-imgs"},[i("img",{attrs:{src:s("f5a4")}})])}],a=(s("b0c0"),{props:{title:{type:String,default:""},colorstr:{type:String,default:"#333"}},data:function(){return{pbstyle:{background:"#ffffff",color:this.colorstr},pstyle:void 0,shadow:void 0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t>150?(this.pstyle=this.pbstyle,this.pstyle.color="#000 !important",this.name={color:"#000"},this.src=2):(this.pstyle="",this.src=1,this.name={color:"#fff"})}}}),l=a,o=(s("5e59"),s("2877")),n=Object(o["a"])(l,i,c,!1,null,"0a693a99",null);e["a"]=n.exports},a434:function(t,e,s){"use strict";var i=s("23e7"),c=s("23cb"),a=s("a691"),l=s("50c4"),o=s("7b0b"),n=s("65f0"),r=s("8418"),d=s("1dde"),u=s("ae40"),h=d("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,A=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!h||!p},{splice:function(t,e){var s,i,d,u,h,p,m=o(this),C=l(m.length),S=c(t,C),w=arguments.length;if(0===w?s=i=0:1===w?(s=0,i=C-S):(s=w-2,i=A(f(a(e),0),C-S)),C+s-i>v)throw TypeError(g);for(d=n(m,i),u=0;u<i;u++)h=S+u,h in m&&r(d,u,m[h]);if(d.length=i,s<i){for(u=S;u<C-i;u++)h=u+i,p=u+s,h in m?m[p]=m[h]:delete m[p];for(u=C;u>C-i+s;u--)delete m[u-1]}else if(s>i)for(u=C-i;u>S;u--)h=u+i-1,p=u+s-1,h in m?m[p]=m[h]:delete m[p];for(u=0;u<s;u++)m[u+S]=arguments[u+2];return m.length=C-i+s,d}})},e15c:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"manage"},[s("div",{staticClass:"toptitle",on:{click:t.toggleRetun}},[s("Toptitle",{attrs:{title:t.title}})],1),s("div",{staticClass:"offside"},[s("div",{staticClass:"offside-manage",on:{click:t.selecClick}},[t._v("管理")]),t.selectShow?s("div",{staticClass:"offside-add"}):s("div",{staticClass:"offside-add",on:{click:t.toggleAdd}},[t._v("添加产品")])]),s("div",{staticClass:"manageBox"},[s("div",{staticClass:"man-list"},t._l(t.pulist,(function(e,i){return s("div",{key:i,staticClass:"list-warp"},[t.selectShow?s("div",{staticClass:"warp-se"},[s("van-checkbox",{attrs:{"checked-color":"#ea3756","icon-size":"16px"},model:{value:e.checked,callback:function(s){t.$set(e,"checked",s)},expression:"item.checked"}})],1):t._e(),s("div",{staticClass:"listHe",on:{click:function(s){return t.toggleDetails(i,e.status)}}},[t._m(0,!0),s("div",{staticClass:"listHe-right"},[s("div",{staticClass:"right-cons"},[s("div",{staticClass:"cons-title"},[t._v(t._s(e.title))]),s("div",{staticClass:"cons-desc"},[t._v(t._s(e.desc))]),s("div",{staticClass:"cons-money"},[t._v("￥"),s("span",[t._v(t._s(e.price))])])]),s("div",{staticClass:"up-icon",class:{active:1===e.status}},[2===e.status?s("div",[t._v("已下架")]):t._e(),1===e.status?s("div",[t._v("已上架")]):t._e()])])])])})),0)]),t.selectShow?s("div",{staticClass:"detalis-btn",on:{click:t.cilckShowbottom}},[t._v("删除")]):t._e()])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"listHe-img"},[i("img",{attrs:{src:s("f199")}})])}],a=(s("a434"),s("a412")),l={name:"Manage",data:function(){return{title:"产品管理",selectShow:!1,pulist:[{id:1,status:2,title:"飞利浦/PHILIPS 黑暗战士大灯",desc:"UPS海5透镜X2，CNB D1S 5700K氙气灯X2，UPS增强版D1S 安定器X2，原装接线组，说明书",price:1200,checked:!1},{id:2,status:1,title:"飞利浦/PHILIPS 黑暗战士大灯",desc:"UPS海5透镜X2，CNB D1S 5700K氙气灯X2，UPS增强版D1S 安定器X2，原装接线组，说明书",price:1e3,checked:!1}]}},methods:{toggleRetun:function(){this.$router.go(-1)},toggleAdd:function(){this.$router.push({path:"/shop/product/manageAdd"})},selecClick:function(){console.log(111),this.selectShow=!this.selectShow},toggleDetails:function(t,e){this.$router.push({path:"/shop/product/manageDetails",query:{id:t,status:e}})},cilckShowbottom:function(){this.selectShow=!this.selectShow;for(var t=0;t<this.pulist.length;t++)!0===this.pulist[t].checked&&(this.pulist.splice(t,1),console.log(t))}},components:{Toptitle:a["a"]},created:function(){void 0!==this.$route.query.temp.status&&(console.log(this.$route.query.temp.status),this.pulist.push({id:3,status:this.$route.query.temp.status,title:this.$route.query.temp.title,desc:this.$route.query.temp.desc,price:this.$route.query.temp.price,checked:this.$route.query.temp.checked}))}},o=l,n=(s("899c"),s("2877")),r=Object(n["a"])(o,i,c,!1,null,"f62b8228",null);e["default"]=r.exports},f199:function(t,e,s){t.exports=s.p+"img/give1.bb464c4f.png"},f5a4:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABhUlEQVR4Xu3Zy03EMBSF4WunAGiBDkzSAFQMHUADtlICHRAKSIIiMZsRy/s4R3Y2s7Pyf7azuJOk8yd13i8DYJyAzgXGFej8APB8BEspJef8llLaaq3PWhtHcQX+4j9SSo8i8lNrvX5VHniA+/h931/WdV1V6kWwr4B1/IUIewI84mEBvOIhATzj4QC846EAIuJhAKLiIQAi48MBouNDARDiwwBQ4kMAkOLdAdDiXQEQ490AUONdAJDjzQHQ400BGOLNAFjiTQCY4tUB2OLVAeZ5/r6NrrWnt1pT4Pt1VIeiy7JsIvJwnud2HMer5viaAuC6AtM0fTIhqJ6Aa5fYENQB2BBMAJgQzABYEEwBGBDMAdARXACQEdwAUBFcARAR3AHQEEIAkBDCAFAQQgEQEMIBohEgACIRYACiEKAAIhDgALwRIAE8EWABvBCgATwQ4AH+QfhqrT1pjckpAG4IOed3Edlaa6U7AK1g03+GrF7Scl2aK2CFMACsZFnWHSeAZaes3vMXMBn6UISvQ8QAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-192956b6.6e725699.js.map