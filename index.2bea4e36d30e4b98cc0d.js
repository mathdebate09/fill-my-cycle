"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[826],{756:(e,n,t)=>{t.d(n,{Z:()=>v});var r=t(81),a=t.n(r),i=t(645),l=t.n(i),o=t(667),c=t.n(o),d=new URL(t(985),t.b),f=new URL(t(951),t.b),s=new URL(t(690),t.b),u=l()(a()),p=c()(d),m=c()(f),h=c()(s);u.push([e.id,`/* RESET */\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nbody {\n  line-height: 1.5;\n  text-rendering: optimizeSpeed;\n  -webkit-font-smoothing: antialiased;\n}\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\ninput, button, textarea, select {\n  font: inherit;\n}\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n\n/* FONT FACES */\n\n@font-face {\n  font-family: Body-ff;\n  src: url(${p});\n}\n\n@font-face {\n  font-family: Heading-ff;\n  src: url(${m});\n}\n\n@font-face {\n  font-family: Header-ff;\n  src: url(${h});\n}\n\n\n:root {\n  --bg-primary: #fffcf2;\n  --bg-secondary:#ccc5b9;\n\n  --clr-font: #333333;\n\n  --ff-body-h:"Heading-ff", sans-serif;\n  --ff-body:"Body-ff", sans-serif;\n  --ff-header:"Header-ff", sans-serif;\n\n  --fs-header: 2rem;\n  --fs-primary: 1.2rem;\n  --fs-secondary: 1rem;\n\n}\n\n.container {\n  font-family:var(--ff-body);\n  background-color: var(--bg-primary);\n  font-size: var(--fs-secondary);\n}\n\n.container > * {\n  margin-left:1.2rem;\n}\n\n/* Header */\nheader {\n  font-family: var(--ff-header);\n  font-size: var(--fs-header);\n  text-align:center;\n  margin-bottom:1rem;\n}\n\n.inst-help {\n  font-size: var(--fs-secondary);\n  text-align:center;\n}\n\np > button, .text-left > li > button {\n  all: initial;\n  font-size: var(--fs-secondary);\n  font-family: var(--ff-body-h);\n  text-decoration: underline 4px var(--bg-secondary);\n\n}\n\n/* cycle-entry */\n\n.cycle-entry {\n  display:grid;\n  grid-template-columns: repeat(2, auto);\n  place-items:center;\n  font-size:var(--ff-body);\n  gap:1rem;\n  margin-top:1rem;\n}\n\ntable.mrg.ind {\n  margin:0 auto;\n  margin-bottom:0.5rem;\n}\n\n.man-mode-div {\n  margin-bottom:1.2rem;\n  display:grid;\n  place-items:center;\n} \n\n.man-mode-div > button {\n  background:none;\n  border-color:#ccc5b9;\n  border-radius:5px;\n}\n\n.cycle  input {\n  margin-top:0.2rem;\n}\n/* Table */\n.check {\n  width:100%;\n}\n\n.check-table .table {\n    border-collapse: collapse;\n    width:fit-content;\n}\n\n.check-table .table > thead > tr > th {\n  border: 2px solid black;\n  width:0.875rem;\n  height:0.875rem;\n  margin: 0 auto;\n}\n\n.check-table .table > tbody > tr > th,\n.check-table .table > tbody > tr > td {\n  border: 2px solid black;\n  width:0.875rem;\n  height:0.875rem;\n  margin: 0 auto;\n}\n\n.check-table .table > tbody > tr > th,\n.check-table .table > thead > tr > th {\n  background-color: var(--bg-secondary);\n  padding:0.2em;\n  \n}\n\n.check-table {\n  display:grid;\n  gap:1.5rem;\n  min-width:14rem;\n  place-items:center;\n  font-family: var(--ff-body);\n  font-weight:600;\n  font-size:var(--fs-primary);\n  text-align:center;\n}\n\nform > .reset {\n  width:4em;\n  background-color: #DC5D6D;\n  color:var(--bg-primary);\n  border:none;\n  cursor:pointer;\n  place-self:center;\n  margin:1rem 1rem;\n  border-radius:3px;\n}\n\nform {\n  display:grid;\n}\n\n.text-primary {\n  font-family: var(--ff-body-h);\n  font-size: var(--fs-primary);\n}\n\n/* Footer */\n\nfooter {\n  display:grid;\n  place-items:center;\n  height:2rem;\n  background-color:#CFBBA9;\n  margin-top:1rem;\n  font-family: var(--ff-header);\n  font-size:var(--fs-secondary);\n}\n\nfooter > p > a {\n  font-family: var(--ff-header);\n  font-size:var(--fs-secondary);\n  color:#333333;\n}\n\n/* Input box */\ninput {\n  border:1px;\n  outline:1px solid #a9a59c;\n}\n\ninput:focus {\n  \n  outline:1px solid #333333;\n}`,""]);const v=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(l[c]=!0)}for(var d=0;d<e.length;d++){var f=[].concat(e[d]);r&&l[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),t&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=t):f[2]=t),a&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=a):f[4]="".concat(a)),n.push(f))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},l=[],o=0;o<e.length;o++){var c=e[o],d=r.base?c[0]+r.base:c[0],f=i[d]||0,s="".concat(d," ").concat(f);i[d]=f+1;var u=t(s),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var m=a(p,r);r.byIndex=o,n.splice(o,0,{identifier:s,updater:m,references:1})}l.push(s)}return l}function a(e,n){var t=n.domAPI(n);t.update(e);return function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var l=0;l<i.length;l++){var o=t(i[l]);n[o].references--}for(var c=r(e,a),d=0;d<i.length;d++){var f=t(i[d]);0===n[f].references&&(n[f].updater(),n.splice(f,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},108:(e,n,t)=>{var r=t(379),a=t.n(r),i=t(795),l=t.n(i),o=t(569),c=t.n(o),d=t(565),f=t.n(d),s=t(216),u=t.n(s),p=t(589),m=t.n(p),h=t(756),v={};v.styleTagTransform=m(),v.setAttributes=f(),v.insert=c().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=u();a()(h.Z,v);h.Z&&h.Z.locals&&h.Z.locals;const b=t.p+"1799602ec475f3ee553e.svg",g=document.createElement("link");g.rel="icon",g.href=`${b}`,document.head.appendChild(g);const y=t.p+"ad4084649109809b8e1c.svg";var x=!1;function E(e,n){var t=parseFloat(n.value);if(2==n.value.length&&"10"!=n.value&&t<=20&&(n.value=t=20),t>100&&(n.value=t=100),t>=20&&t<=100){t%2!=0&&(t%2<1?t-=t%2:t+=2-t%2,n.value=t);var r=0,a=[5,5,5,5,5],i=[6,6,2,2,4],l=(t-t%20)/20+Math.ceil(t%20/20);for(a[0]=a[1]=a[2]=a[3]=a[4]=l,r=t%20!=0?20-t%20:0;r;)r>=6&&(a[1]--,r-=6),r>=4&&(a[4]--,r-=4),r>=2&&r<=4&&(a[2]--,r-=2),r>=6&&(a[0]--,r-=6),r>=2&&(a[3]--,r-=2);for(var o=0;o<5;o++)for(var c=1;c<6;c++)e.children[o].children[c].innerHTML="";for(o=0;o<5;o++)e.children[o].children[6-a[o]].innerHTML=`<img class="check" src="${y}">`,i[o]*=a[o];return i.push(t),i}return!1}function k(){var e=document.getElementById("tbl1"),n=document.getElementById("tbl2"),t=document.getElementById("ip1"),r=document.getElementById("ip2");if(9==event.keyCode||16==event.keyCode)return!1;var a=event.target||event.srcElement;a.value&&a.value.length>=2&&"10"!=a.value&&(a==t?$(r).focus():a==r&&($(a).blur(),location.replace("#result")));var i=[];t.value&&(i[0]=E(e,t)),r.value&&(i[1]=E(n,r)),S(i[0],i[1])}function C(e){for(var n=0,t=e.children.length,r=0;r<t;r++){if(!e.children[r].lastElementChild.firstElementChild.value)return!1;n+=parseInt(e.children[r].lastElementChild.firstElementChild.value)}(n/=t)<20&&(n=20),n%2!=0&&(n%2<1?n-=n%2:n+=2-n%2),e==$("#tbl01")[0]?$("#ip1").val(n):$("#ip2").val(n)}function I(){C(document.getElementById("tbl01")),C(document.getElementById("tbl02")),k()}function T(){var e=parseInt($("#c10").text()),n=parseInt($("#c11").val()),t=document.getElementById("tbl01"),r=document.getElementById("tbl02"),a=document.getElementById("tbl3");if(n||0==n){n<=e&&(n=e,$("#c11").val(n));var i=t.children.length,l=parseInt($("#c20").text()),o=parseInt($("#c21").val());""==$("#c21").val()&&(o=l+$("#tbl02").children().length-1);var c=n+1;if($("#c20").text(c),n<i)for(var d=i-n;d--;)$("#tbl02 tr:first").before(t.lastElementChild);else if(n>=i){if(n>=o){for(var f=o-i;f--;)$("#tbl01").append(r.firstElementChild);$("#tbl02").append("<tr>\t\t\t\t\t<td>"+c+'</td>\t\t\t\t\t<td><input class="form-control input-sm exp" type="number" min="0" max="100" step="1"/></td>\t\t\t\t\t</tr>');d=n-o;for(var s=o+1;d--;)$("#tbl01").append("<tr>\t\t\t\t\t\t<td>"+s+'</td>\t\t\t\t\t\t<td><input class="form-control input-sm exp" type="number" min="0" max="100" step="1"/></td>\t\t\t\t\t\t</tr>'),s++}else for(d=n-i;d--;)$("#tbl01").append(r.firstElementChild);$("input.exp").on("keyup",w),$("input.exp").on("change",I)}I()}var u=t.children.length,p=r.children.length;a.children[0].children[0].innerText="1 to "+u,a.children[1].children[0].innerText=u+1+" to "+(u+p)}function B(){var e=parseInt($("#c21").val()),n=document.getElementById("tbl01"),t=document.getElementById("tbl02"),r=document.getElementById("tbl3");if(e||0==e){var a=parseInt($("#c20").text());(e=parseInt($("#c21").val()))<=a&&(e=a,$("#c21").val(e));var i=e-a+1-t.children.length;if(i<0)for(i*=-1;i--;)t.removeChild(t.lastElementChild);else{for(var l=a+t.children.length;i--;)$("#tbl02").append("<tr>\t\t\t\t\t<td>"+l+'</td>\t\t\t\t\t<td><input class="form-control input-sm exp" type="number" min="0" max="100" step="1"/></td>\t\t\t\t\t</tr>'),l++;$("input.exp").on("keyup",w),$("input.exp").on("change",I)}I()}var o=n.children.length,c=t.children.length;r.children[0].children[0].innerText="1 to "+o,r.children[1].children[0].innerText=o+1+" to "+(o+c)}function w(){if(9==event.keyCode||16==event.keyCode)return!1;var e=event.target||event.srcElement;if(e.value&&e.value.length>=2&&"10"!=e.value){var n=e.parentElement.parentElement.nextElementSibling;n&&(n=n.lastElementChild.firstElementChild);var t=e.parentElement.parentElement.parentElement.lastElementChild.lastElementChild.firstElementChild,r=document.getElementById("tbl02").lastElementChild.lastElementChild.firstElementChild,a=parseInt(e.value);a<0?e.value=0:a>100&&(e.value=100),e==r?($(e).blur(),location.replace("#result")):e==t?$("#tbl02 tr input:first").focus():$(n).focus()}I()}function M(){x=!x,$("input[type=number]").prop("disabled",x),$("button.reset").click(),$("#man_mode").prop("checked",x)}function H(e){var n,t,r,a=$(e.target||e.srcElement);if(x&&"TD"==a[0].tagName){for(var i=a.parent(),l=i.parent(),o=l.children().index(i),c=i.children().index(a)-1,d=1;d<6;d++)l[0].children[o].children[d].innerHTML="";l[0].children[o].children[c+1].innerHTML=`<img class="check" src="${y}">`,n=document.getElementById("tbl1"),t=document.getElementById("tbl2"),(r=[])[0]=L(n),r[1]=L(t),S(r[0],r[1])}}function L(e){for(var n=[6,6,2,2,4,0],t=0;t<5;t++){var r=$(e.children[t]),a=r.children().children("img").parent(),i=r.children().index(a)-1;if(i<0)return!1;n[t]*=5-i,n[5]+=n[t]}return n}function S(e,n){var t=document.getElementById("tbl1"),r=document.getElementById("tbl2"),a=document.getElementById("tbl3"),i=[];if(i[0]=e,i[1]=n,i[2]=[],i[3]=[],i[0])for(var l=0;l<6;l++)a.children[0].children[1+l].innerText=i[0][l];else{if(!x)for(l=0;l<5;l++)for(var o=1;o<6;o++)t.children[l].children[o].innerHTML="";for(l=0;l<6;l++)a.children[0].children[1+l].innerText=""}if(i[1])for(l=0;l<6;l++)a.children[1].children[1+l].innerText=i[1][l];else{if(!x)for(l=0;l<5;l++)for(o=1;o<6;o++)r.children[l].children[o].innerHTML="";for(l=0;l<6;l++)a.children[1].children[1+l].innerText=""}if(i[0]&&i[1])for(l=0;l<6;l++)i[2][l]=i[0][l]+i[1][l],i[3][l]=i[2][l]/2,a.children[2].children[1+l].innerText=i[2][l],a.children[3].children[1+l].innerText=i[3][l];else for(l=0;l<6;l++)a.children[2].children[1+l].innerText="",a.children[3].children[1+l].innerText=""}$(document).ready((function(){$("#c11").focus(),$("#c11").click(),$("#c11").trigger("click"),$("#c11").on("keyup",(function(){if(9==event.keyCode||16==event.keyCode||event.keyCode>=37&&event.keyCode<=40)return!1;var e=event.target||event.srcElement,n=parseInt($("#c10").text()),t=parseInt($("#c11").val());t>15&&$("#c11").val(15),t>n&&T(),e.value.length>=1&&"1"!=e.value&&$("#c21").focus()})),$("#c11").on("change",T),$("#c21").on("keyup",(function(){if(9==event.keyCode||16==event.keyCode||event.keyCode>=37&&event.keyCode<=40)return!1;var e=event.target||event.srcElement,n=parseInt($("#c20").text()),t=parseInt($("#c21").val());t>30&&$("#c21").val(30),t>=n&&B(),e.value.length>=1&&"1"!=e.value&&"2"!=e.value&&"3"!=e.value&&$("#tbl01 tr input:first").focus()})),$("#c21").on("change",B),$("input.exp").on("keyup",w),$("input.exp").on("change",I),$("input.ip").on("keyup",k),$("input.ip").on("change",k),$("button.reset").on("click",(function(){$("input").val(""),I();for(var e=document.getElementById("tbl1"),n=document.getElementById("tbl2"),t=document.getElementById("tbl3"),r=0;r<5;r++)for(var a=1;a<6;a++)e.children[r].children[a].innerHTML="";for(r=0;r<5;r++)for(a=1;a<6;a++)n.children[r].children[a].innerHTML="";for(a=0;a<4;a++)for(r=0;r<6;r++)t.children[a].children[1+r].innerText="";x?location.replace("#man_mode_br"):(location.replace("#"),$("#c11").focus())})),$("#man_mode").on("click",M),$("#tbl1 td").click(H),$("#tbl2 td").click(H),$(".instr-ref").click((function(){location.replace("#instructions")})),$(".man-mode-ref").click((function(){location.replace("#man_mode_br")}))}))},951:(e,n,t)=>{e.exports=t.p+"f8a6adeeee2d88b5e4e6.ttf"},985:(e,n,t)=>{e.exports=t.p+"713a2f7a5993dd85cac9.ttf"},690:(e,n,t)=>{e.exports=t.p+"757abe402eb07a0ab739.ttf"}},e=>{var n;n=108,e(e.s=n)}]);