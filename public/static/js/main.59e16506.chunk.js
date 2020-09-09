(this.webpackJsonppresentation=this.webpackJsonppresentation||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),s=a.n(r),o=(a(28),a(21)),l=a(2),u=a(1),i=a(9),d=a(4),m=a.n(d),p=a(8),h=function(e){var t=function(){var t=Object(p.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({bool:!e.product.status})},t.next=3,fetch("".concat("/api","/products/").concat(e.product._id),a);case 3:return t.next=5,e.getProducts();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c.a.createElement("tr",null,c.a.createElement("td",null,e.product.name),c.a.createElement("td",null,e.product.quantity),c.a.createElement("td",null,"$",e.product.price),c.a.createElement("td",null,e.product.status?"Active":"Not active"),c.a.createElement("td",null,e.product.status?c.a.createElement("button",{onClick:t,className:"deactivate"},"Deactivate"):c.a.createElement("button",{onClick:t,className:"activate"},"Activate"),c.a.createElement("button",{className:"update",onClick:function(){return e.changeDisplay("single",e.product)}},"Update")))},b=a(14),f=a.n(b),E=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,c.a.createElement("i",null,"Select all that apply")),c.a.createElement("div",{className:"tags"},c.a.createElement("input",{type:"checkbox",id:"shirt",name:"shirt",checked:e.shirt,onChange:e.handleCheck}),c.a.createElement("label",{htmlFor:"shirt"}," Shirt"),c.a.createElement("input",{type:"checkbox",id:"shoes",name:"shoes",checked:e.shoes,onChange:e.handleCheck}),c.a.createElement("label",{htmlFor:"shoes"}," Shoes"),c.a.createElement("input",{type:"checkbox",id:"pants",name:"pants",checked:e.pants,onChange:e.handleCheck}),c.a.createElement("label",{htmlFor:"pants"}," Pants"),c.a.createElement("input",{type:"checkbox",id:"hoodie",name:"hoodie",checked:e.hoodie,onChange:e.handleCheck}),c.a.createElement("label",{htmlFor:"hoodie"}," Hoodie"),c.a.createElement("input",{type:"checkbox",id:"socks",name:"socks",checked:e.socks,onChange:e.handleCheck}),c.a.createElement("label",{htmlFor:"socks"}," Socks"),c.a.createElement("input",{type:"checkbox",id:"jacket",name:"jacket",checked:e.jacket,onChange:e.handleCheck}),c.a.createElement("label",{htmlFor:"jacket"}," Jacket")))},j=function(e){var t=Object(n.useState)(e.product.name),a=Object(u.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)(e.product.quantity),l=Object(u.a)(o,2),d=l[0],h=l[1],b=Object(n.useState)(e.product.price),j=Object(u.a)(b,2),g=j[0],y=j[1],O=Object(n.useState)(""),k=Object(u.a)(O,2),v=k[0],S=k[1],x=Object(n.useState)(""),C=Object(u.a)(x,2),w=C[0],N=C[1],P=Object(n.useState)(""),D=Object(u.a)(P,2),A=D[0],T=D[1],_=Object(n.useState)(""),F=Object(u.a)(_,2),J=F[0],U=F[1],q=Object(n.useState)(!1),M=Object(u.a)(q,2),W=M[0],I=M[1],L=Object(n.useState)(!1),B=Object(u.a)(L,2),H=B[0],Q=B[1],z=Object(n.useState)(!1),G=Object(u.a)(z,2),R=G[0],Y=G[1],$=Object(n.useState)(!1),K=Object(u.a)($,2),V=K[0],X=K[1],Z=Object(n.useState)(!1),ee=Object(u.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(!1),ce=Object(u.a)(ne,2),re=ce[0],se=ce[1],oe=Object(n.useState)(!1),le=Object(u.a)(oe,2),ue=le[0],ie=le[1],de=Object(n.useState)(!1),me=Object(u.a)(de,2),pe=me[0],he=me[1],be=Object(n.useState)(!1),fe=Object(u.a)(be,2),Ee=fe[0],je=fe[1],ge=function(){var t=Object(p.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("/api","/images/").concat(e.product._id));case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,U(n[0]),S(n);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){for(var t=0;t<e.product.style.length;t++)"shirt"===e.product.style[t]&&Y(!0),"shoes"===e.product.style[t]&&X(!0),"pants"===e.product.style[t]&&ae(!0),"hoodie"===e.product.style[t]&&se(!0),"socks"===e.product.style[t]&&ie(!0),"jacket"===e.product.style[t]&&he(!0);ge()}),[]);var ye=function(){var t=Object(p.a)(m.a.mark((function t(){var a,n,c,s,o,l;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==r&&""!==d&&""!==g&&"invalid"!==v){t.next=3;break}return Q(!0),t.abrupt("return");case 3:if(je(!0),""===w){t.next=8;break}return a={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)},t.next=8,fetch("".concat("/api","/images"),a);case 8:if(n=[],""===A){t.next=17;break}return c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A)},t.next=13,fetch("".concat("/api","/images/").concat(e.product._id),c);case 13:return s=t.sent,t.next=16,s.json();case 16:n=t.sent;case 17:return o={name:r,quantity:d,price:g,images:[].concat(Object(i.a)(v),Object(i.a)(n)),status:e.product.status,style:[]},R&&o.style.push("shirt"),V&&o.style.push("shoes"),te&&o.style.push("pants"),re&&o.style.push("hoodie"),ue&&o.style.push("socks"),pe&&o.style.push("jacket"),l={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)},t.next=27,fetch("".concat("/api","/products/").concat(e.product._id),l);case 27:return t.next=29,e.getProducts();case 29:e.changeDisplay("All","");case 30:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Oe=function(){var t=Object(p.a)(m.a.mark((function t(){var a,n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.confirm("You cannot recover this product once it is deleted. Are you sure you want to continue?")){t.next=3;break}return t.abrupt("return");case 3:return I(!0),a={method:"DELETE"},t.next=7,fetch("".concat("/api","/products/").concat(e.product._id),a);case 7:return n=v.map((function(e){return e._id})),c={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},console.log(c),t.next=12,fetch("".concat("/api","/images"),c);case 12:return t.next=14,e.getProducts();case 14:e.changeDisplay("All","");case 15:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{onClick:function(){return e.changeDisplay("All",{})}},c.a.createElement("i",{style:{margin:"0px 10px 0 5%",border:"none !important"},className:"fa fa-arrow-left"})," Return"),c.a.createElement("div",{className:"display-product-page"},c.a.createElement("section",{style:{textAlign:"center"}},c.a.createElement("div",{className:"main-image"},function(){if(""!==J)return c.a.createElement("img",{src:J.imageData,alt:""})}()),c.a.createElement("div",{className:"sub-images"},function(){if(""!==v&&"invalid"!==v)return v.map((function(e){return v.length>1?c.a.createElement("span",{key:e._id,className:"delete-photos"},c.a.createElement("img",{src:e.imageData,alt:"",onClick:function(){return U(e)}}),c.a.createElement("i",{className:"fa fa-trash",onClick:function(){return function(e){var t=Object(i.a)(v),a=t.findIndex((function(t){return e._id===t._id})),n=Object(i.a)(w);n.push(t[a]._id),t.splice(a,1),0===a&&U(v[1]),S(t),N(n)}(e)}})):c.a.createElement("img",{key:e._id,src:e.imageData,alt:"",onClick:function(){return U(e)}})}))}())),c.a.createElement("section",{className:"display-product display-product-container"},c.a.createElement("label",null,"Name:"),c.a.createElement("input",{value:r,onChange:function(e){var t=e.target;return s(t.value)}}),c.a.createElement("label",null,"Quantity:"),c.a.createElement("input",{value:d,onChange:function(e){var t=e.target;return h(t.value)}}),c.a.createElement("label",null,"Price:"),c.a.createElement("input",{value:g,onChange:function(e){var t=e.target;return y(t.value)}}),c.a.createElement("label",null,"Add Images:"),c.a.createElement(f.a,{type:"file",multiple:!0,onDone:function(t){for(var a=[],n=0;n<t.length;n++){if("image/jpeg"!==t[n].type)return void S("invalid");var c={imageName:"base-image-"+Date.now(),imageData:t[n].base64.toString(),productId:e.product._id};a.push(c)}I(!1),T(a)}}),c.a.createElement("div",{style:{margin:"25px 0px"}}),c.a.createElement(E,{handleCheck:function(e){switch(e.target.name){case"shirt":Y(!R);break;case"shoes":X(!V);break;case"pants":ae(!te);break;case"hoodie":se(!re);break;case"socks":ie(!ue);break;default:he(!pe)}},shirt:R,shoes:V,pants:te,hoodie:re,socks:ue,jacket:pe}),H?c.a.createElement("div",{className:"danger"},"All fields must be filled and only JPEG images are allowed."):"",c.a.createElement("button",{style:{width:"100%"},onClick:ye},"Update"),Ee?c.a.createElement("div",{className:"loading"},"Updating Product - Do not refresh browser or return to home page"):"",W?c.a.createElement("div",{className:"loading"},"Deleting product - Do not refresh browser or return to home page"):"",c.a.createElement("button",{style:{width:"100%",background:"red",color:"white",marginBottom:"15px"},onClick:Oe},"Delete product"))))},g=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)("All"),l=Object(u.a)(o,2),d=l[0],b=l[1],f=Object(n.useState)(""),E=Object(u.a)(f,2),g=E[0],y=E[1],O=Object(n.useState)(""),k=Object(u.a)(O,2),v=k[0],S=k[1];Object(n.useEffect)((function(){x()}),[]);var x=function(){var e=Object(p.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/api","/products"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(e,t){b(e),y(t)},w=function(e){var t=Object(i.a)(r);t.sort((function(t,a){return v===e?+a[e]-+t[e]:+t[e]-+a[e]})),s(t),S(v===e?"":e)};return c.a.createElement(c.a.Fragment,null,"All"===d?c.a.createElement(c.a.Fragment,null,c.a.createElement("main",null,c.a.createElement("table",{className:"table table-bordered product-table"},c.a.createElement("thead",{className:"table-head"},c.a.createElement("tr",null,c.a.createElement("th",{scope:"col",style:{width:"".concat(window.innerWidth/5,"px")}},"Product ",c.a.createElement("i",{onClick:function(){var e=Object(i.a)(r);e.sort((function(e,t){var a=e.name.toUpperCase(),n=t.name.toUpperCase();return"name"===v?a>n?-1:a<n?1:0:a<n?-1:a>n?1:0})),s(e),S("name")},className:"fa fa-sort"})),c.a.createElement("th",{scope:"col",style:{width:"".concat(window.innerWidth/5,"px")}},"Quantity ",c.a.createElement("i",{onClick:function(){return w("quantity")},className:"fa fa-sort"})),c.a.createElement("th",{scope:"col",style:{width:"".concat(window.innerWidth/5,"px")}},"Price ",c.a.createElement("i",{onClick:function(){return w("price")},className:"fa fa-sort"})),c.a.createElement("th",{scope:"col",style:{width:"".concat(window.innerWidth/5,"px")}},"Status ",c.a.createElement("i",{onClick:function(){var e=Object(i.a)(r);e.sort((function(e,t){return"status"===v?!0===e.status&&e.status!==t.status?-1:!1===e.status&&e.status!==t.status?1:0:!0===e.status&&e.status!==t.status?1:!1===e.status&&e.status!==t.status?-1:0})),s(e),S("status"!==v?"status":"")},className:"fa fa-sort"})),c.a.createElement("th",{scope:"col",style:{width:"".concat(window.innerWidth/5,"px")}},"Actions"))),c.a.createElement("tbody",null,r.map((function(e){return c.a.createElement(h,{key:e._id,product:e,changeDisplay:C,getProducts:x})})))))):c.a.createElement(c.a.Fragment,null,c.a.createElement(j,{product:g,getProducts:x,changeDisplay:C})))},y=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),o=Object(u.a)(s,2),l=o[0],i=o[1],d=Object(n.useState)(""),h=Object(u.a)(d,2),b=h[0],j=h[1],g=Object(n.useState)(!0),y=Object(u.a)(g,2),O=y[0],k=y[1],v=Object(n.useState)(""),S=Object(u.a)(v,2),x=S[0],C=S[1],w=Object(n.useState)(!1),N=Object(u.a)(w,2),P=N[0],D=N[1],A=Object(n.useState)(!1),T=Object(u.a)(A,2),_=T[0],F=T[1],J=Object(n.useState)(!1),U=Object(u.a)(J,2),q=U[0],M=U[1],W=Object(n.useState)(!1),I=Object(u.a)(W,2),L=I[0],B=I[1],H=Object(n.useState)(!1),Q=Object(u.a)(H,2),z=Q[0],G=Q[1],R=Object(n.useState)(!1),Y=Object(u.a)(R,2),$=Y[0],K=Y[1],V=Object(n.useState)(!1),X=Object(u.a)(V,2),Z=X[0],ee=X[1],te=Object(n.useState)(!1),ae=Object(u.a)(te,2),ne=ae[0],ce=ae[1],re=Object(n.useState)(!1),se=Object(u.a)(re,2),oe=se[0],le=se[1],ue=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n,c,s,o,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a&&""!==l&&""!==b){e.next=3;break}return F(!0),e.abrupt("return");case 3:return F(!1),t=[],q&&t.push("shirt"),L&&t.push("shoes"),z&&t.push("pants"),$&&t.push("hoodie"),Z&&t.push("socks"),ne&&t.push("jacket"),n={name:a,quantity:l,price:b,status:O,style:t,images:x},c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},le(!0),e.next=16,fetch("".concat("/api","/images"),c);case 16:return s=e.sent,e.next=19,s.json();case 19:return o=e.sent,u=o._id,e.next=23,fetch("".concat("/api","/images/").concat(u),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o.images)});case 23:r(""),i(""),j(""),k(!0),C(""),D(!1),F(!1),M(!1),B(!1),G(!1),K(!1),ee(!1),ce(!1),le(!1);case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(e){switch(e.target.name){case"status":k(!O);break;case"shirt":M(!q);break;case"shoes":B(!L);break;case"pants":G(!z);break;case"hoodie":K(!$);break;case"socks":ee(!Z);break;default:ce(!ne)}};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"add-product"},c.a.createElement("form",null,c.a.createElement("input",{type:"text",placeholder:"Product name",value:a,onChange:function(e){var t=e.target;return r(t.value)}}),c.a.createElement("input",{type:"text",placeholder:"Quantity",value:l,onChange:function(e){var t=e.target;return i(t.value)}}),c.a.createElement("input",{type:"text",placeholder:"Price",value:b,onChange:function(e){var t=e.target;return j(t.value)}}),c.a.createElement("div",{className:"is-active"},c.a.createElement("input",{type:"checkbox",name:"status",checked:O,onChange:ie}),c.a.createElement("label",{style:{color:"#7d7d7d"}},"Product active")),c.a.createElement("hr",null),c.a.createElement(E,{handleCheck:ie,shirt:q,shoes:L,pants:z,hoodie:$,socks:Z,jacket:ne}),c.a.createElement(f.a,{type:"file",multiple:!0,onDone:function(e){for(var t=[],a=0;a<e.length;a++){if("image/jpeg"!==e[a].type)return void C("invalid");var n={imageName:"base-image-"+Date.now(),imageData:e[a].base64.toString()};t.push(n)}D(!1),C(t)}})),c.a.createElement("button",{onClick:ue},"Add Product"),oe?c.a.createElement("div",{className:"loading"},"Uploading product - Do not refresh browser or return to home page"):"",_?c.a.createElement("div",{style:{color:"red"}},"All fields are required"):"",P?c.a.createElement("div",{style:{color:"red"}},"File type not supported"):""))},O=function(){return c.a.createElement("div",null)},k=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)("Manage Products"),o=Object(u.a)(s,2),l=o[0],i=o[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",null,c.a.createElement("i",{className:"fa fa-bars",style:{fontSize:"30px"},onClick:function(){r(!a)}}),c.a.createElement("h1",{className:"logo"},"La'Borh")),c.a.createElement("aside",{className:a?"":"hidden"},c.a.createElement("div",{className:"sidebar"},c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(){return i("Manage Products")}},c.a.createElement("i",{className:"fa fa-eye"})," Manage products"),c.a.createElement("li",{onClick:function(){return i("Add Product")}},c.a.createElement("i",{className:"fa fa-plus"})," Add product")))),c.a.createElement("div",{className:a?"right-side":""},"Manage Products"===l?c.a.createElement(g,null):"Add Product"===l?c.a.createElement(y,null):c.a.createElement(O,null)))};var v=function(){return c.a.createElement(o.a,null,c.a.createElement(l.a,{exact:!0,path:"/",render:function(e){return c.a.createElement(k,e)}}))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.59e16506.chunk.js.map