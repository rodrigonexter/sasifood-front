(function(t){function e(e){for(var r,c,s=e[0],i=e[1],l=e[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],r=!0,s=1;s<o.length;s++){var i=o[s];0!==a[i]&&(r=!1)}r&&(n.splice(e--,1),t=c(c.s=o[0]))}return t}var r={},a={app:0},n=[];function c(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=r,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(o,r,function(e){return t[e]}.bind(null,r));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=i;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"2c16":function(t,e,o){},3031:function(t,e,o){"use strict";o("832e")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("nav",[o("Header")],1),o("router-view"),o("footer",[o("Footer")],1)],1)},n=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",{attrs:{app:"",color:"#F29C46",dark:""}},[o("div",{staticClass:"d-flex align-center"},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Usefood Logo",contain:"",src:"#",transition:"scale-transition",width:"40"}}),o("h1",[t._v(" SASIFOOD ")])],1),o("v-spacer"),o("v-btn",{attrs:{href:"./assets/logo-usefood.png",target:"_blank",text:""}},[o("span",{staticClass:"mr-2"},[t._v("Sair")]),o("v-icon",[t._v("mdi-logout")])],1)],1)},s=[],i={},l=i,u=o("2877"),d=o("6544"),p=o.n(d),v=o("40dc"),f=o("8336"),m=o("132d"),g=o("adda"),b=o("2fa4"),h=Object(u["a"])(l,c,s,!1,null,null,null),_=h.exports;p()(h,{VAppBar:v["a"],VBtn:f["a"],VIcon:m["a"],VImg:g["a"],VSpacer:b["a"]});var x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{attrs:{bottom:"",padless:""}},[o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),o("strong",[t._v("SASIFOOD")])])],1)},C=[],y={},k=y,w=o("62ad"),V=o("553a"),O=Object(u["a"])(k,x,C,!1,null,null,null),j=O.exports;p()(O,{VCol:w["a"],VFooter:V["a"]});var F={components:{Header:_,Footer:j},data:function(){return{}}},P=F,S=o("7496"),$=Object(u["a"])(P,a,n,!1,null,null,null),I=$.exports;p()($,{VApp:S["a"]});var E=o("f309");r["a"].use(E["a"]);var D=new E["a"]({theme:{themes:{light:{primary:"#C14D19",secondary:"",accent:"",colorBlack:"#262626",colorGray:"#262626"}}}}),B=(o("8df1"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-main",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("ul",{staticClass:"d-flex justify-center"},[t._l(t.categories,(function(e,r){return o("li",{key:r},[o("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"colorGray",small:""},on:{click:function(o){return t.getProductsFromFilter(e._id)}}},[t._v(" "+t._s(e.name)+" ")])],1)})),o("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"colorGray",small:""},on:{click:function(e){return t.getProducts()}}},[t._v(" todos ")]),o("li")],2)])],1)],1),o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"3"}},[o("div",{staticClass:"usefood-flex-container usefood-flex-align-end"},[o("v-icon",{attrs:{"x-large":""}},[t._v("mdi-shopping")]),o("span",{staticClass:"subtitle"},[t._v("Produtos cadastrados")])],1)]),o("v-col",{attrs:{cols:"6"}},[o("v-text-field",{attrs:{outlined:"",label:"Buscar na categoria","prepend-inner-icon":"mdi-magnify"},on:{keyup:function(e){return t.getProductsSearch()}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),o("v-col",{attrs:{cols:"3"}},[o("v-combobox",{attrs:{outlined:"",items:t.orderOptions,"item-value":"Menor preço",label:"Ordenar por"},on:{change:function(e){return t.orderProducts()}},model:{value:t.selectOrder,callback:function(e){t.selectOrder=e},expression:"selectOrder"}})],1)],1)],1),t._l(t.products,(function(e,r){return o("div",{key:r},[o("CardProduct",{attrs:{product:t.products[r]},on:{"emit-click":t.removeProductById}})],1)})),o("v-container",[o("v-row",{attrs:{justify:"center"}},[o("v-col",{staticClass:"\n            usefood-flex-container\n            usefood-flex-align-center\n            usefood-flex-justify-content-center\n          ",attrs:{cols:"12"}},[o("v-btn",{staticClass:"buttonRegister",attrs:{depressed:"",color:"primary",to:"/register"}},[t._v(" Cadastrar Produto ")])],1)],1)],1)],2)],1)}),A=[],M=(o("4e827"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"d-flex justify-center"},[o("div",{staticClass:"card-container"},[o("v-row",{staticClass:"card"},[o("v-col",{attrs:{cols:"2"}},[o("img",{staticClass:"image-product",attrs:{src:t.product.image,alt:"image product"}})]),o("v-col",{staticClass:"description-product d-flex flex-column justify-space-between",attrs:{cols:"4"}},[o("span",{staticClass:"card-title"},[t._v(t._s(t.product.name))]),o("span",{staticClass:"color-active serve"},[t._v(t._s(t.product.count_serves))]),o("p",[t._v(t._s(t.product.description))]),o("span",{staticClass:"price-product"},[t._v("R$"+t._s(t.product.price))])]),o("v-col",{attrs:{cols:"2"}},[o("div",{staticClass:"d-flex justify-space-between card-actions"},[o("div",[o("v-icon",{attrs:{large:"",color:"#F29C46"}},[t._v(" mdi-pencil ")])],1),o("div",[o("v-icon",{attrs:{large:"",color:"#F29C46"},on:{click:function(e){t.dialog=!0}}},[t._v(" mdi-delete ")])],1)])])],1),o("v-row",[o("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",{staticClass:"d-flex flex-column dialog-card align-center"},[o("div",[o("span",{staticClass:"dialog-title"},[t._v("Apagar produto")])]),o("div",[o("span",[t._v("Deseja realmente apagar este produto?")])]),o("v-card-actions",{staticClass:"d-flex justify-center"},[o("v-btn",{attrs:{color:"primary",block:"",depressed:""},on:{click:function(e){return t.emitClick(t.product._id)}}},[t._v(" Sim, apagar ")]),o("v-btn",{attrs:{color:"primary",block:"",outlined:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Não ")])],1)],1)],1)],1)],1)])}),R=[],T={props:["product"],data:function(){return{dialog:!1}},methods:{emitClick:function(t){this.$emit("emit-click",t),console.log(t),this.dialog=!1}}},G=T,H=(o("c503"),o("b0af")),N=o("99d9"),q=o("a523"),J=o("169a"),z=o("0fd9"),L=Object(u["a"])(G,M,R,!1,null,"9e744320",null),U=L.exports;p()(L,{VBtn:f["a"],VCard:H["a"],VCardActions:N["a"],VCol:w["a"],VContainer:q["a"],VDialog:J["a"],VIcon:m["a"],VRow:z["a"]});var Y=o("bc3a"),K=o.n(Y),Q="http://localhost:3000";function W(t){return K.a.post("".concat(Q,"/products/"),t)}function X(){return K.a.get("".concat(Q,"/products?limit=60&page=0&sort=price&direction=desc"))}function Z(t){return K.a.delete("".concat(Q,"/products/").concat(t))}function tt(t){return K.a.get("".concat(Q,"/products?limit=30&page=0&search=").concat(t,"&sort=price&direction=desc"))}function et(t){return K.a.get("".concat(Q,"/products/categories/").concat(t,"?limit=10&page=0&sort=price&direction=desc"))}function ot(){return K.a.get("".concat(Q,"/categories/"))}var rt={name:"home",components:{CardProduct:U},data:function(){return{orderOptions:["Maior preço","Menor preço"],categories:[],products:[],keyword:"",selectOrder:"",productId:""}},methods:{getProducts:function(){var t=this;X().then((function(e){t.products=e.data,console.log(t.products)}))},getProductsSearch:function(){var t=this;tt(this.keyword).then((function(e){t.products=e.data,console.log(t.products)}))},getCategories:function(){var t=this;ot().then((function(e){t.categories=e.data}))},getProductsFromFilter:function(t){var e=this;et(t).then((function(t){e.products=t.data}))},orderProducts:function(){"Menor preço"===this.selectOrder?this.products.sort((function(t,e){return t.price-e.price})):this.products.sort((function(t,e){return e.price-t.price})),console.log(this.products)},removeProductById:function(t){var e=this;console.log("funçao chamada"),Z(t).then((function(t){console.log(t),console.log("Chegou aqui"),e.getProducts()}))},openDialog:function(){this.dialog=!0}},mounted:function(){this.getProducts(),this.getCategories(),this.orderProducts()}},at=rt,nt=(o("b474"),o("2b5d")),ct=o("f6c4"),st=o("8654"),it=Object(u["a"])(at,B,A,!1,null,"3ed823aa",null),lt=it.exports;p()(it,{VApp:S["a"],VBtn:f["a"],VCol:w["a"],VCombobox:nt["a"],VContainer:q["a"],VIcon:m["a"],VMain:ct["a"],VRow:z["a"],VTextField:st["a"]});var ut=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-main",[o("v-container",{attrs:{fluid:""}},[o("v-row",[o("v-col",{attrs:{cols:"2"}},[o("v-btn",{staticClass:"ma-2",attrs:{color:"black",dark:"",to:"/",text:""}},[o("v-icon",{attrs:{dark:"",left:""}},[t._v(" mdi-arrow-left ")])],1)],1),o("v-col",{attrs:{cols:"10"}},[o("div",{staticClass:"d-flex align-end\n"},[o("v-icon",{attrs:{large:"",color:"black"}},[t._v("mdi-shopping")]),o("h1",[t._v("Cadastrar novo produto")])],1)])],1)],1),o("v-container",[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"8"}},[o("form",{ref:"form"},[o("div",{directives:[{name:"show",rawName:"v-show",value:1==t.stepForm,expression:"stepForm == 1"}],attrs:{id:"step-1"}},[o("div",[o("span",[t._v("Etapa 1 de 2")])]),o("div",[o("v-text-field",{attrs:{label:"Nome do produto",outlined:""},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}}),o("v-text-field",{attrs:{label:"Descrição",outlined:""},model:{value:t.product.description,callback:function(e){t.$set(t.product,"description",e)},expression:"product.description"}}),o("v-text-field",{attrs:{label:"Valor (R$)",outlined:""},model:{value:t.product.price,callback:function(e){t.$set(t.product,"price",e)},expression:"product.price"}}),o("v-select",{attrs:{items:t.product.items,label:"Categoria",outlined:""},model:{value:t.product.category,callback:function(e){t.$set(t.product,"category",e)},expression:"product.category"}}),o("h3",[t._v("Para quantas pessoas?")]),o("v-radio-group",{attrs:{column:""},model:{value:t.product.count_serves,callback:function(e){t.$set(t.product,"count_serves",e)},expression:"product.count_serves"}},[o("v-radio",{attrs:{label:"Serve 1 pessoa",value:"Serve 1 pessoa"}}),o("v-radio",{attrs:{label:"Serve 2 pessoas",value:"Serve 2 pessoas"}})],1),o("h3",[t._v("Disponibilidade do produto para o público")]),o("v-radio-group",{attrs:{column:""},model:{value:t.product.is_available,callback:function(e){t.$set(t.product,"is_available",e)},expression:"product.is_available"}},[o("v-radio",{attrs:{label:"Disponível",value:"true"}}),o("v-radio",{attrs:{label:"Indisponível",value:"false"}})],1)],1),o("div",{staticClass:"d-flex justify-end"},[o("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.nextStepForm()}}},[t._v(" Próximo ")])],1)]),o("div",{directives:[{name:"show",rawName:"v-show",value:2==t.stepForm,expression:"stepForm == 2"}],attrs:{id:"step-2"}},[o("div",[o("span",[t._v(" Etapa 2 de 2")])]),o("span",[t._v("Selecionar a foto do produto")]),o("div",{staticClass:"d-flex flex-column align-center"},[o("DragImage")],1),o("div",{staticClass:"d-flex justify-space-between actionButtons"},[o("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(e){return t.backStepForm()}}},[t._v(" voltar ")]),o("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.registerProduct()}}},[t._v(" Cadastrar ")])],1)])])])],1)],1)],1)},dt=[],pt=(o("d81d"),o("b0c0"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dragArea"},[o("input",{ref:"fileInput",staticClass:"d-none",attrs:{type:"file",enctype:"multipart/form-data"},on:{change:t.setImage}}),o("div",{staticClass:"drag-drop-box size-default",on:{click:function(e){return t.$refs.fileInput.click()},drop:function(e){return e.preventDefault(),t.setImage.apply(null,arguments)},dragover:function(e){return e.preventDefault(),t.setImage.apply(null,arguments)}}},[t._m(0)])])}),vt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-column align-center"},[r("img",{attrs:{src:o("c93a"),width:"150",alt:""}}),r("span",{staticClass:"d-black mt-3"},[t._v(" Arraste a imagem para upload ")])])}],ft={methods:{setImage:function(t){console.log(t)}}},mt=ft,gt=(o("e6ff"),Object(u["a"])(mt,pt,vt,!1,null,null,null)),bt=gt.exports,ht={components:{DragImage:bt},data:function(){return{File:[],stepForm:1,itemsAux:"",routes:Mt,product:{name:"",count_serves:"",category:{_id:"",name:"",label:""},image:"",is_available:!0,is_on_sale:!1,price:"",description:"",items:[]}}},methods:{reset:function(){this.$refs.form.reset()},registerProduct:function(){var t=this.product;W(t),console.log("cadastrando")},getCategories:function(){var t=this;ot().then((function(e){var o=e.data;t.product.items=o.map((function(t){return{text:t.name,value:t._id}}))}))},nextStepForm:function(){this.stepForm=2},backStepForm:function(){this.stepForm=1}},mounted:function(){this.getCategories()}},_t=ht,xt=(o("3031"),o("67b6")),Ct=o("43a6"),yt=o("b974"),kt=Object(u["a"])(_t,ut,dt,!1,null,"6e1d20c6",null),wt=kt.exports;p()(kt,{VBtn:f["a"],VCol:w["a"],VContainer:q["a"],VIcon:m["a"],VMain:ct["a"],VRadio:xt["a"],VRadioGroup:Ct["a"],VRow:z["a"],VSelect:yt["a"],VTextField:st["a"]});var Vt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("EditFormHeader")},Ot=[],jt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:""}},[o("br"),o("br"),o("br"),o("v-row",[o("v-col",{attrs:{cols:"2"}},[o("v-btn",{staticClass:"ma-2",attrs:{color:"black",dark:"",to:"/",text:""}},[o("v-icon",{attrs:{dark:"",left:""}},[t._v(" mdi-arrow-left ")])],1)],1),o("v-col",{attrs:{cols:"10"}},[o("div",{staticClass:"usefood-flex-container"},[o("v-icon",{attrs:{"x-large":""}},[t._v("mdi-shopping")]),o("h1",{staticClass:".color-gray"},[t._v("Editar produto")])],1)])],1)],1)},Ft=[],Pt={},St=Pt,$t=Object(u["a"])(St,jt,Ft,!1,null,null,null),It=$t.exports;p()($t,{VBtn:f["a"],VCol:w["a"],VContainer:q["a"],VIcon:m["a"],VRow:z["a"]});var Et={components:{EditFormHeader:It},mounted:function(){var t=this.$route.params.id;console.log(t)}},Dt=Et,Bt=Object(u["a"])(Dt,Vt,Ot,!1,null,null,null),At=Bt.exports,Mt=[{path:"",component:lt,titulo:lt},{path:"/register",component:wt,titulo:wt},{path:"/edit/:id",component:At,titulo:At}],Rt=o("8c4f");r["a"].config.productionTip=!1,r["a"].use(Rt["a"]);var Tt=new Rt["a"]({routes:Mt});new r["a"]({vuetify:D,router:Tt,render:function(t){return t(I)}}).$mount("#app")},"68a9":function(t,e,o){},"832e":function(t,e,o){},"8df1":function(t,e,o){},b474:function(t,e,o){"use strict";o("b47a")},b47a:function(t,e,o){},c503:function(t,e,o){"use strict";o("2c16")},c93a:function(t,e,o){t.exports=o.p+"img/upload.bcd7efe9.svg"},e6ff:function(t,e,o){"use strict";o("68a9")}});
//# sourceMappingURL=app.a2e35fea.js.map