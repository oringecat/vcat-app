(function(e){function t(t){for(var c,a,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(c=!1)}c&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},a={app:0},r={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-4651b6cf":"e770ed4b","chunk-59b859c4":"5b1aec44","chunk-72998c8a":"82e66b62","chunk-20353e60":"2c1931d1","chunk-491a72f5":"e61a3e20","chunk-7ed350f7":"1036e270","chunk-92decc10":"ed099a28","chunk-a43b10a0":"bc40195f","chunk-faa36a0e":"5be1256b"}[e]+".js"}function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-4651b6cf":1,"chunk-59b859c4":1,"chunk-72998c8a":1,"chunk-20353e60":1,"chunk-491a72f5":1,"chunk-7ed350f7":1,"chunk-92decc10":1,"chunk-a43b10a0":1,"chunk-faa36a0e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-4651b6cf":"f194f775","chunk-59b859c4":"17912cf3","chunk-72998c8a":"e0d7ac71","chunk-20353e60":"0e433876","chunk-491a72f5":"7742897c","chunk-7ed350f7":"ece42785","chunk-92decc10":"0e433876","chunk-a43b10a0":"1ea99bcc","chunk-faa36a0e":"0e433876"}[e]+".css",r=u.p+c,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===c||l===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===c||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var c=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)t.push(c[2]);else{var o=new Promise((function(t,n){c=r[e]=[t,n]}));t.push(c[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",d.name="ChunkLoadError",d.type=c,d.request=a,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n("5502"),a={namespaced:!0,state:{loading:!1},mutations:{SET_LOADING:function(e,t){e.loading=t}},actions:{setLoading:function(e,t){e.commit("SET_LOADING",t)}}},r=n("5530"),o=function(){var e=localStorage.getItem("loginInfo")||sessionStorage.getItem("loginInfo")||"{}";return JSON.parse(e)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?localStorage.setItem("loginInfo",JSON.stringify(e)):sessionStorage.setItem("loginInfo",JSON.stringify(e))},u={namespaced:!0,state:{loginInfo:o()},getters:{loginInfo:function(e){return e.loginInfo}},mutations:{SET_LOGIN_INFO:function(e,t){e.loginInfo=t,i(t)},UPDATE_LOGIN_INFO:function(e,t){e.loginInfo=Object(r["a"])(Object(r["a"])({},e.loginInfo),t),i(e.loginInfo)},LOGOUT:function(e,t){e.loginInfo={id:0,account:"guest",realname:"访客",token:""},localStorage.removeItem("loginInfo"),sessionStorage.removeItem("loginInfo"),t&&t()}},actions:{setLoginInfo:function(e,t){e.commit("SET_LOGIN_INFO",t)},updateLoginInfo:function(e,t){e.commit("UPDATE_LOGIN_INFO",t)},logout:function(e,t){e.commit("LOGOUT",t)}}},s=Object(c["createStore"])({modules:{app:a,user:u}});
/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-08-01
 */},"08c3":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return i}));
/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-08-18
 */
var c=function(e){Object.prototype.hasOwnProperty.call(window,"plus")?e(window):document.addEventListener("plusready",(function(){e(window)}))},a=function(e){c((function(t){t.plus.navigator.setStatusBarStyle(e)}))},r=function(){c((function(e){e.plus.navigator.setFullscreen(!0)}))},o=function(){c((function(e){e.plus.navigator.setFullscreen(!1)}))},i=function(e){c((function(t){t.plus.runtime.openURL(e)}))}},1:function(e,t){},"132d":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var c=n("3835"),a=n("b85c"),r=(n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("a15b"),n("25f0"),n("bc3a")),o=n.n(r),i=n("4328"),u=n.n(i),s=n("3452"),l=n.n(s),d=n("0613"),f=n("d399");n("e7e5");
/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-08-04
 */
f["a"].allowMultiple();var b=new Map,p=function(e){var t=[e.method,e.url,u.a.stringify(e.params),u.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new o.a.CancelToken((function(e){b.has(t)||b.set(t,e)}))},v=function(e){var t=[e.method,e.url,u.a.stringify(e.params),u.a.stringify(e.data)].join("&");if(b.has(t)){var n=b.get(t);n(t),b.delete(t)}},m=function(){var e,t=Object(a["a"])(b);try{for(t.s();!(e=t.n()).done;){var n=Object(c["a"])(e.value,2),r=n[0],o=n[1];o(r)}}catch(i){t.e(i)}finally{t.f()}b.clear()},O=o.a.create({baseURL:"https://localhost:44314",timeout:3e4});O.interceptors.request.use((function(e){v(e),p(e);var t=d["a"].getters["user/loginInfo"],n={token:t.token||"",signsecret:"qz7qWOMXKTMT5JlDs5w4NTPwWeR3xhF1v6wqbZ9cExmP6cc3spvNAp1wJJ1SqRI5",timestamp:(new Date).getTime()};return e.headers={authorization:n.token,signid:"eecd3f37625f4501b88e9f0fa14b4b51",sign:l.a.SHA256(u.a.stringify(n)).toString(),timestamp:n.timestamp},e}),(function(e){return f["a"].fail("网络异常"),Promise.reject(e)})),O.interceptors.response.use((function(e){return v(e),e}),(function(e){return o.a.isCancel(e)||f["a"].fail("网络异常"),Promise.reject(e)})),t["b"]=O},"182f":function(e,t,n){"use strict";n("3c56")},"18be":function(e,t,n){"use strict";n("42e0")},"38ef":function(e,t,n){},"3c56":function(e,t,n){},"42e0":function(e,t,n){},"49ed":function(e,t,n){"use strict";n("bbdb")},5944:function(e,t,n){"use strict";n("af69")},"64b6":function(e,t,n){},"6b18":function(e,t,n){"use strict";n("dcb5")},"71ea":function(e,t,n){e.exports=n.p+"img/boot.f7257a09.svg"},af69:function(e,t,n){},b7c7:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));
/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-08-27
 */
var c={appTheme:"theme-default",bootAd:!0},a={get:function(e){var t=localStorage.getItem(e);return"undefined"!==t&&null!==t?JSON.parse(t):c[e]},set:function(e,t){if(void 0!==t&&null!==t){var n=JSON.stringify(t);localStorage.setItem(e,n)}}}},bbdb:function(e,t,n){},c290:function(e,t,n){"use strict";n("38ef")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function a(e,t,n,a,r,o){var i=Object(c["K"])("router-view");return Object(c["C"])(),Object(c["g"])(i)}var r=n("0613"),o=n("b7c7"),i=Object(c["m"])({name:"App",setup:function(){var e=Object(c["e"])((function(){return r["a"].state.user.loginInfo}));return Object(c["E"])("loginInfo",e),Object(c["z"])((function(){var e=document.body.classList;e.add(o["a"].get("appTheme"))})),{loginInfo:e}}});n("5944");i.render=a;var u=i,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),l=n("da4a"),d=n("132d");function f(e,t,n,a,r,o){var i=Object(c["K"])("router-view");return Object(c["C"])(),Object(c["g"])(i,{class:"cat-page"},{default:Object(c["R"])((function(t){var n=t.Component;return[Object(c["l"])(c["d"],{name:e.transitionName},{default:Object(c["R"])((function(){return[(Object(c["C"])(),Object(c["g"])(c["b"],{exclude:e.excludePages},[(Object(c["C"])(),Object(c["g"])(Object(c["L"])(n),{key:e.$route.fullPath}))],1032,["exclude"]))]})),_:2},1032,["name"])]})),_:1})}
/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-08-19
 */var b=Object(c["m"])({name:"CatPage",setup:function(){var e=Object(c["e"])((function(){return l["state"].transitionName})),t=Object(c["e"])((function(){return l["state"].excludePages}));return{transitionName:e,excludePages:t}}});n("49ed");b.render=f,b.__scopeId="data-v-a87cbd26";var p=b,v=[{path:"/:catchAll(.*)",redirect:{name:"HomeIndex"}},{path:"/",redirect:"/home",component:p,children:[{path:"",name:"HomeIndex",component:function(){return Promise.all([n.e("chunk-72998c8a"),n.e("chunk-491a72f5")]).then(n.bind(null,"b8e6"))}}]},{path:"/user",component:p,children:[{path:"",name:"UserIndex",component:function(){return n.e("chunk-92decc10").then(n.bind(null,"9bd3"))}},{path:"login",name:"UserLogin",component:function(){return Promise.all([n.e("chunk-72998c8a"),n.e("chunk-20353e60")]).then(n.bind(null,"cc9c"))}},{path:"register",name:"UserRegister",component:function(){return n.e("chunk-59b859c4").then(n.bind(null,"5d3a"))}}]},{path:"/product",component:p,children:[{path:"",name:"ProductIndex",component:function(){return n.e("chunk-7ed350f7").then(n.bind(null,"d222"))}},{path:"detail/:id",name:"ProductDetail",component:function(){return n.e("chunk-4651b6cf").then(n.bind(null,"90f2"))}}]},{path:"/notice",component:p,children:[{path:"",name:"NoticeIndex",component:function(){return n.e("chunk-faa36a0e").then(n.bind(null,"8f21"))}},{path:"detail/:id",name:"NoticeDetail",component:function(){return n.e("chunk-a43b10a0").then(n.bind(null,"5c01"))},meta:{requireAuth:!0}}]}],m=Object(l["initRouter"])({history:Object(s["createWebHashHistory"])(),routes:v});m.beforeEach((function(e,t,n){Object(d["a"])();var c=r["a"].state.user.loginInfo;e.meta.requireAuth?c.token?n():n({name:"UserLogin",query:{redirect:e.fullPath}}):n()}));var O=m;n("d81d"),n("b0c0");Object(c["F"])("data-v-4f121da1");var j={class:"cat-view"},h={class:"cat-view__header"},g={class:"cat-view__footer"};function y(e,t,n,a,r,o){return Object(c["C"])(),Object(c["i"])("div",j,[Object(c["j"])("div",h,[Object(c["J"])(e.$slots,"header",{},void 0,!0)]),Object(c["j"])("div",{ref:"scrollElement",class:"cat-view__container",style:Object(c["v"])(e.styles)},[Object(c["J"])(e.$slots,"default",{},void 0,!0)],4),Object(c["j"])("div",g,[Object(c["J"])(e.$slots,"footer",{},void 0,!0)])])}Object(c["D"])();n("7db0");var k=n("08c3"),_=Object(c["m"])({name:"CatView",props:{scrollName:{type:String,default:"default"},statusBarStyle:{type:String,default:"dark"},inset:Boolean},setup:function(e){var t=0,n=Object(c["G"])({}),a=Object(c["H"])(),r=[];e.inset&&(n={padding:".24rem"});var o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=r.find((function(t){return t.name===e.scrollName}));return null==n?(r.push({name:e.scrollName,top:t}),r[r.length-1]):n},i=function(e){clearTimeout(t),t=setTimeout((function(){var t=e.target.scrollTop,n=o(t);n.top=t}),50)};return Object(c["Q"])((function(){return e.statusBarStyle}),(function(e){Object(k["d"])(e)}),{immediate:!0}),Object(c["Q"])((function(){return e.scrollName}),(function(e){var t=r.find((function(t){return t.name===e})),n=a.value;n.style.opacity=0,null!=t?setTimeout((function(){n.scrollTop=t.top,n.style.opacity=1}),0):n.style.opacity=1})),Object(c["w"])((function(){var e=a.value;e.scrollTop=o().top,e.style.opacity=0,setTimeout((function(){e.style.opacity=1,e.addEventListener("scroll",i)}),0)})),Object(c["y"])((function(){var e=a.value;e&&e.removeEventListener("scroll",i)})),{styles:n,scrollElement:a}}});n("c290");_.render=y,_.__scopeId="data-v-4f121da1";var I=_,w=[p,I],C=function(e){w.map((function(t){e.component(t.name,t)}))},S={install:C};
/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-08-07
 */function T(e,t,n,a,r,o){return Object(c["C"])(),Object(c["i"])("div",{class:"cat-statusbar",style:Object(c["v"])(e.styles)},[Object(c["J"])(e.$slots,"default",{},void 0,!0)],4)}n("a9e3");
/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-08-19
 */var N=Object(c["m"])({name:"CatStatusbar",setup:function(){var e=Object(c["G"])({paddingTop:"0px"});return Object(k["b"])((function(t){var n=t.plus.navigator.getStatusbarHeight();Number(n)>0&&(e.paddingTop=n+"px")})),{styles:e}}});n("6b18");N.render=T,N.__scopeId="data-v-62f5fdaa";var P=N;Object(c["F"])("data-v-5121e475");var x={class:"cat-navbar__left"},L={key:0},E={class:"cat-navbar__center"},A={class:"cat-navbar__right"};function J(e,t,n,a,r,o){var i=Object(c["K"])("van-icon"),u=Object(c["K"])("cat-statusbar");return Object(c["C"])(),Object(c["g"])(u,{class:"cat-navbar"},{default:Object(c["R"])((function(){return[Object(c["j"])("div",x,[Object(c["j"])("div",null,[Object(c["J"])(e.$slots,"left",{},(function(){return[e.backShow?(Object(c["C"])(),Object(c["i"])("button",{key:0,type:"button",onClick:t[0]||(t[0]=function(){return e.goback&&e.goback.apply(e,arguments)})},[Object(c["l"])(i,{name:"arrow-left",size:".48rem"}),e.backText?(Object(c["C"])(),Object(c["i"])("span",L,Object(c["N"])(e.backText),1)):Object(c["h"])("",!0)])):Object(c["h"])("",!0)]}),{},!0)])]),Object(c["j"])("div",E,[Object(c["j"])("div",null,[Object(c["J"])(e.$slots,"default",{},(function(){return[Object(c["j"])("span",null,Object(c["N"])(e.title),1)]}),{},!0)])]),Object(c["j"])("div",A,[Object(c["j"])("div",null,[Object(c["J"])(e.$slots,"right",{},void 0,!0)])])]})),_:3})}Object(c["D"])();var H=n("ade3"),D=n("ad06"),R=(n("c3a6"),Object(c["m"])({name:"CatNavbar",components:Object(H["a"])({},D["b"].name,D["b"]),props:{title:String,backText:String,backShow:{type:Boolean,default:function(){return!!window.history.state.back}}},setup:function(e,t){var n=t.emit,c=t.attrs,a=Object(s["useRouter"])(),r=function(){c.onBack?n("back"):a.go(-1)};return{goback:r}}}));n("18be");R.render=J,R.__scopeId="data-v-5121e475";var B=R;n("c7cd");Object(c["F"])("data-v-d0328708");var F={class:"cat-tabbar"},U=["onClick"],q=["src","alt"],G=["src","alt"];function M(e,t,n,a,r,o){return Object(c["C"])(),Object(c["i"])("div",F,[Object(c["j"])("div",{class:"cat-tabbar__warpper",style:Object(c["v"])(e.fixed&&"position: fixed;")},[(Object(c["C"])(!0),Object(c["i"])(c["a"],null,Object(c["I"])(e.modelValue,(function(t,n){return Object(c["C"])(),Object(c["i"])("div",{key:n,class:"cat-tabbar__item",onClick:function(c){return e.onClick(t,n)}},[Object(c["J"])(e.$slots,"default",{item:t,index:n},(function(){return[t.icon?(Object(c["C"])(),Object(c["i"])("div",{key:0,class:Object(c["u"])(["icon","icon-"+t.name,e.active===n&&"active"])},[e.active===n?(Object(c["C"])(),Object(c["i"])("img",{key:0,src:t.icon.active,alt:t.label},null,8,q)):(Object(c["C"])(),Object(c["i"])("img",{key:1,src:t.icon.inactive,alt:t.label},null,8,G)),Object(c["j"])("span",null,Object(c["N"])(t.label),1)],2)):(Object(c["C"])(),Object(c["i"])("div",{key:1,class:Object(c["u"])(["icon icon--font","icon-"+t.name,e.active===n&&"active"])},[Object(c["j"])("span",null,Object(c["N"])(t.label),1)],2))]}),!0)],8,U)})),128))],4)])}
/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-08-21
 */Object(c["D"])();var $=Object(c["m"])({name:"CatTabbar",props:{modelValue:Array,fixed:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,a=Object(c["H"])(0),r=function(e,t){a.value=t,n("change",e.name,t)};return{active:a,onClick:r}}});n("182f");$.render=M,$.__scopeId="data-v-d0328708";var K=$,W=n("71ea"),z=n.n(W);Object(c["F"])("data-v-0d62c28d");var V={class:"cat-guide__header"},Q=Object(c["j"])("div",{class:"cat-guide__main"},[Object(c["j"])("img",{class:"ad",src:z.a,title:"ad"})],-1),X={class:"cat-guide__footer"},Z=Object(c["k"])("进入首页");function Y(e,t,n,a,r,o){var i=Object(c["K"])("van-circle"),u=Object(c["K"])("van-button");return Object(c["C"])(),Object(c["g"])(c["c"],{to:"body"},[Object(c["j"])("div",{ref:"guide",class:Object(c["u"])(["cat-guide",e.isClose&&"close"]),style:Object(c["v"])("transition-duration:".concat(e.duration,"ms"))},[Object(c["j"])("div",{class:Object(c["u"])(["cat-guide__wrapper",e.isLoaded&&"show"])},[Object(c["j"])("div",V,[Object(c["l"])(i,{class:"circle","current-rate":e.currentRate,"onUpdate:current-rate":t[0]||(t[0]=function(t){return e.currentRate=t}),rate:e.rate,speed:100,"stroke-width":60,color:"#eee"},{default:Object(c["R"])((function(){return[Object(c["j"])("span",null,Object(c["N"])(e.second),1)]})),_:1},8,["current-rate","rate"])]),Q,Object(c["j"])("div",X,[Object(c["l"])(u,{class:"button-close",type:"primary",onClick:e.close,round:"",block:""},{default:Object(c["R"])((function(){return[Z]})),_:1},8,["onClick"])])],2)],6)])}Object(c["D"])();var ee,te=n("5d26"),ne=(n("e566"),n("b650")),ce=(n("66b9"),Object(c["m"])({name:"CatGuide",components:(ee={},Object(H["a"])(ee,te["a"].name,te["a"]),Object(H["a"])(ee,ne["b"].name,ne["b"]),ee),setup:function(){Object(k["a"])();var e=Object(c["H"])(),t=Object(c["H"])(!1),n=Object(c["H"])(!1),a=Object(c["H"])(500),r=Object(c["H"])(100),o=Object(c["H"])(100),i=Object(c["H"])(10),u=0,s=function(){Object(k["e"])(),n.value=!0,clearInterval(u),setTimeout((function(){e.value.parentNode.removeChild(e.value)}),a.value)};return u=setInterval((function(){i.value--,o.value=10*i.value,i.value<=0&&s()}),1e3),setTimeout((function(){t.value=!0}),0),{guide:e,isClose:n,isLoaded:t,duration:a,currentRate:r,rate:o,second:i,close:s}}}));n("fbbc");ce.render=Y,ce.__scopeId="data-v-0d62c28d";var ae=ce,re=[P,B,K,ae],oe=function(e){re.map((function(t){e.component(t.name,t)}))},ie={install:oe},ue=n("d257");
/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-07-29
 */(function(){Object(k["b"])((function(e){var t=!0,n=e.plus.webview.currentWebview();e.plus.key.addEventListener("backbutton",(function(){n.canBack((function(c){c.canBack?n.back():t?(t=!1,e.plus.nativeUI.toast("再按一次退出应用"),setTimeout((function(){t=!0}),1e3)):e.plus.runtime.quit()}))}))})),document.addEventListener("DOMContentLoaded",(function(){var e=750,t=document.documentElement,n=t.clientWidth;ue["a"].clientAgent.isPc&&(n=e/1.8,document.body.style.width="540px"),n>0&&(t.style.fontSize=n/e*100+"px")}),!1)})();var se=Object(c["f"])(u);se.use(O),se.use(S),se.use(ie),se.mount("#app")},d257:function(e,t,n){"use strict";
/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-08-17
 */var c={clientAgent:function(){var e=navigator.userAgent,t=/(?:Windows Phone)/.test(e),n=/(?:SymbianOS)/.test(e)||t,c=/(?:Android)/.test(e),a=/(?:Firefox)/.test(e),r=/(?:Chrome|CriOS)/.test(e),o=/(?:iPad|PlayBook)/.test(e)||c&&!/(?:Mobile)/.test(e)||a&&/(?:Tablet)/.test(e),i=/(?:iPhone)/.test(e)&&!o,u=!i&&!c&&!n;return{isTablet:o,isiPhone:i,isAndroid:c,isChrome:r,isPc:u}}()};t["a"]=c},dcb5:function(e,t,n){},fbbc:function(e,t,n){"use strict";n("64b6")}});