!function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,o,i){for(var u,a,c=0,l=[];e.length>c;c++)a=e[c],r[a]&&l.push(r[a][0]),r[a]=0;for(u in o)Object.prototype.hasOwnProperty.call(o,u)&&(t[u]=o[u]);for(n&&n(e,o,i);l.length;)l.shift()()};var o={},r={3:0};e.e=function(t){function n(){u.onerror=u.onload=null,clearTimeout(a);var e=r[t];0!==e&&(e&&e[1](Error("Loading chunk "+t+" failed.")),r[t]=void 0)}if(0===r[t])return Promise.resolve();if(r[t])return r[t][2];var o=new Promise(function(e,n){r[t]=[e,n]});r[t][2]=o;var i=document.getElementsByTagName("head")[0],u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,u.timeout=12e4,e.nc&&u.setAttribute("nonce",e.nc),u.src=e.p+""+({0:"polyfills",1:"route-profile",2:"route-home"}[t]||t)+".chunk."+{0:"906967bd865a58e79868",1:"a17aa8d169ac79292e15",2:"cb9a97a68a24844cb988"}[t]+".js";var a=setTimeout(n,12e4);return u.onerror=u.onload=n,i.appendChild(u),o},e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e.oe=function(t){throw console.error(t),t},e(e.s=12)}([function(t){!function(){"use strict";function e(){}function n(t,n){var o,r,i,u,a=T;for(u=arguments.length;u-- >2;)R.push(arguments[u]);for(n&&null!=n.children&&(R.length||R.push(n.children),delete n.children);R.length;)if((r=R.pop())&&void 0!==r.pop)for(u=r.length;u--;)R.push(r[u]);else!0!==r&&!1!==r||(r=null),(i="function"!=typeof t)&&(null==r?r="":"number"==typeof r?r+="":"string"!=typeof r&&(i=!1)),i&&o?a[a.length-1]+=r:a===T?a=[r]:a.push(r),o=i;var c=new e;return c.nodeName=t,c.children=a,c.attributes=null==n?void 0:n,c.key=null==n?void 0:n.key,void 0!==P.vnode&&P.vnode(c),c}function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e){return n(t.nodeName,o(o({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function i(t){!t.__d&&(t.__d=!0)&&1==A.push(t)&&(P.debounceRendering||setTimeout)(u)}function u(){var t,e=A;for(A=[];t=e.pop();)t.__d&&U(t)}function a(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&c(t,e.nodeName):n||t._componentConstructor===e.nodeName}function c(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function l(t){var e=o({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===e[r]&&(e[r]=n[r]);return e}function p(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}function s(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t,e,n,o,r){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)n&&n(null),o&&o(t);else if("class"!==e||r)if("style"===e){if(o&&"string"!=typeof o&&"string"!=typeof n||(t.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(t.style[i]="");for(var i in o)t.style[i]="number"==typeof o[i]&&!1===S.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===e)o&&(t.innerHTML=o.__html||"");else if("o"==e[0]&&"n"==e[1]){var u=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),o?n||t.addEventListener(e,h,u):t.removeEventListener(e,h,u),(t.__l||(t.__l={}))[e]=o}else if("list"!==e&&"type"!==e&&!r&&e in t)d(t,e,null==o?"":o),null!=o&&!1!==o||t.removeAttribute(e);else{var a=r&&e!==(e=e.replace(/^xlink\:?/,""));null==o||!1===o?a?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof o&&(a?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),o):t.setAttribute(e,o))}else t.className=o||""}function d(t,e,n){try{t[e]=n}catch(t){}}function h(t){return this.__l[t.type](P.event&&P.event(t)||t)}function _(){for(var t;t=E.pop();)P.afterMount&&P.afterMount(t),t.componentDidMount&&t.componentDidMount()}function v(t,e,n,o,r,i){W++||(I=null!=r&&void 0!==r.ownerSVGElement,D=null!=t&&!("__preactattr_"in t));var u=m(t,e,n,o,i);return r&&u.parentNode!==r&&r.appendChild(u),--W||(D=!1,i||_()),u}function m(t,e,n,o,r){var i=t,u=I;if(null==e&&(e=""),"string"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||r)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),b(t,!0))),i.__preactattr_=!0,i;if("function"==typeof e.nodeName)return O(t,e,n,o);if(I="svg"===e.nodeName||"foreignObject"!==e.nodeName&&I,(!t||!c(t,e.nodeName+""))&&(i=p(e.nodeName+"",I),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),b(t,!0)}var a=i.firstChild,l=i.__preactattr_||(i.__preactattr_={}),s=e.children;return!D&&s&&1===s.length&&"string"==typeof s[0]&&null!=a&&void 0!==a.splitText&&null==a.nextSibling?a.nodeValue!=s[0]&&(a.nodeValue=s[0]):(s&&s.length||null!=a)&&y(i,s,n,o,D||null!=l.dangerouslySetInnerHTML),C(i,e.attributes,l),I=u,i}function y(t,e,n,o,r){var i,u,c,l,p=t.childNodes,f=[],d={},h=0,_=0,v=p.length,y=0,g=e?e.length:0;if(0!==v)for(var C=0;v>C;C++){var x=p[C],N=x.__preactattr_,w=g&&N?x._component?x._component.__k:N.key:null;null!=w?(h++,d[w]=x):(N||(void 0!==x.splitText?!r||x.nodeValue.trim():r))&&(f[y++]=x)}if(0!==g)for(var C=0;g>C;C++){c=e[C],l=null;var w=c.key;if(null!=w)h&&void 0!==d[w]&&(l=d[w],d[w]=void 0,h--);else if(!l&&y>_)for(i=_;y>i;i++)if(void 0!==f[i]&&a(u=f[i],c,r)){l=u,f[i]=void 0,i===y-1&&y--,i===_&&_++;break}(l=m(l,c,n,o))&&l!==t&&(v>C?l!==p[C]&&(l===p[C+1]?s(p[C]):t.insertBefore(l,p[C]||null)):t.appendChild(l))}if(h)for(var C in d)void 0!==d[C]&&b(d[C],!1);for(;y>=_;)void 0!==(l=f[y--])&&b(l,!1)}function b(t,e){var n=t._component;n?j(n):(null!=t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),!1!==e&&null!=t.__preactattr_||s(t),g(t))}function g(t){for(t=t.lastChild;t;){var e=t.previousSibling;b(t,!0),t=e}}function C(t,e,n){var o;for(o in n)e&&null!=e[o]||null==n[o]||f(t,o,n[o],n[o]=void 0,I);for(o in e)"children"===o||"innerHTML"===o||o in n&&e[o]===("value"===o||"checked"===o?t[o]:n[o])||f(t,o,n[o],n[o]=e[o],I)}function x(t){var e=t.constructor.name;($[e]||($[e]=[])).push(t)}function N(t,e,n){var o,r=$[t.name];if(t.prototype&&t.prototype.render?(o=new t(e,n),L.call(o,e,n)):(o=new L(e,n),o.constructor=t,o.render=w),r)for(var i=r.length;i--;)if(r[i].constructor===t){o.__b=r[i].__b,r.splice(i,1);break}return o}function w(t,e,n){return this.constructor(t,n)}function k(t,e,n,o,r){t.__x||(t.__x=!0,(t.__r=e.ref)&&delete e.ref,(t.__k=e.key)&&delete e.key,!t.base||r?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,o),o&&o!==t.context&&(t.__c||(t.__c=t.context),t.context=o),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===P.syncComponentUpdates&&t.base?i(t):U(t,1,r)),t.__r&&t.__r(t))}function U(t,e,n,r){if(!t.__x){var i,u,a,c=t.props,p=t.state,s=t.context,f=t.__p||c,d=t.__s||p,h=t.__c||s,m=t.base,y=t.__b,g=m||y,C=t._component,x=!1;if(m&&(t.props=f,t.state=d,t.context=h,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(c,p,s)?x=!0:t.componentWillUpdate&&t.componentWillUpdate(c,p,s),t.props=c,t.state=p,t.context=s),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!x){i=t.render(c,p,s),t.getChildContext&&(s=o(o({},s),t.getChildContext()));var w,O,L=i&&i.nodeName;if("function"==typeof L){var M=l(i);u=C,u&&u.constructor===L&&M.key==u.__k?k(u,M,1,s,!1):(w=u,t._component=u=N(L,M,s),u.__b=u.__b||y,u.__u=t,k(u,M,0,s,!1),U(u,1,n,!0)),O=u.base}else a=g,w=C,w&&(a=t._component=null),(g||1===e)&&(a&&(a._component=null),O=v(a,i,s,n||!m,g&&g.parentNode,!0));if(g&&O!==g&&u!==C){var R=g.parentNode;R&&O!==R&&(R.replaceChild(O,g),w||(g._component=null,b(g,!1)))}if(w&&j(w),t.base=O,O&&!r){for(var T=t,S=t;S=S.__u;)(T=S).base=O;O._component=T,O._componentConstructor=T.constructor}}if(!m||n?E.unshift(t):x||(_(),t.componentDidUpdate&&t.componentDidUpdate(f,d,h),P.afterUpdate&&P.afterUpdate(t)),null!=t.__h)for(;t.__h.length;)t.__h.pop().call(t);W||r||_()}}function O(t,e,n,o){for(var r=t&&t._component,i=r,u=t,a=r&&t._componentConstructor===e.nodeName,c=a,p=l(e);r&&!c&&(r=r.__u);)c=r.constructor===e.nodeName;return r&&c&&(!o||r._component)?(k(r,p,3,n,o),t=r.base):(i&&!a&&(j(i),t=u=null),r=N(e.nodeName,p,n),t&&!r.__b&&(r.__b=t,u=null),k(r,p,1,n,o),t=r.base,u&&t!==u&&(u._component=null,b(u,!1))),t}function j(t){P.beforeUnmount&&P.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?j(n):e&&(e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),t.__b=e,s(e),x(t),g(e)),t.__r&&t.__r(null)}function L(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{}}function M(t,e,n){return v(n,t,{},!1,e,!1)}var P={},R=[],T=[],S=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,A=[],E=[],W=0,I=!1,D=!1,$={};o(L.prototype,{setState:function(t,e){var n=this.state;this.__s||(this.__s=o({},n)),o(n,"function"==typeof t?t(n,this.props):t),e&&(this.__h=this.__h||[]).push(e),i(this)},forceUpdate:function(t){t&&(this.__h=this.__h||[]).push(t),U(this,2)},render:function(){}});var V={h:n,createElement:n,cloneElement:r,Component:L,render:M,rerender:u,options:P};t.exports=V}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=(n.n(o),n(9)),i=(n.n(r),n(3)),u=n(6),a=n(10),c=n(11),l=n.i(o.h)("div",{id:"app"},n.i(o.h)(u.a,null),n.i(o.h)(i.Router,null,n.i(o.h)(a.a,{path:"/"}),n.i(o.h)(c.a,{path:"/profile/",user:"me"}),n.i(o.h)(c.a,{path:"/profile/:user"})));e.default=function(){return l}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){function e(){var e=this;o.Component.call(this);var n=function(t){e.setState({child:t&&t.default||t})},r=t(n);r&&r.then&&r.then(n)}return e.prototype=new o.Component,e.prototype.render=function(t,e){return(0,o.h)(e.child,t)},e};var o=n(0)},function(t,e,n){"use strict";function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e,n){void 0===n&&(n=C);var o,r=/(?:\?([^#]*))?(#.*)?$/,i=t.match(r),a={};if(i&&i[1])for(var c=i[1].split("&"),l=0;c.length>l;l++){var p=c[l].split("=");a[decodeURIComponent(p[0])]=decodeURIComponent(p.slice(1).join("="))}t=u(t.replace(r,"")),e=u(e||"");for(var s=Math.max(t.length,e.length),f=0;s>f;f++)if(e[f]&&":"===e[f].charAt(0)){var d=e[f].replace(/(^\:|[+*?]+$)/g,""),h=(e[f].match(/[+*?]+$/)||C)[0]||"",_=~h.indexOf("+"),v=~h.indexOf("*"),m=t[f]||"";if(!m&&!v&&(0>h.indexOf("?")||_)){o=!1;break}if(a[d]=decodeURIComponent(m),_||v){a[d]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){o=!1;break}return(!0===n.default||!1!==o)&&a}function i(t,e){var n=t.attributes||C,o=e.attributes||C;return n.default?1:o.default?-1:a(n.path)-a(o.path)||n.path.length-o.path.length}function u(t){return c(t).split("/")}function a(t){return(c(t).match(/\/+/g)||"").length}function c(t){return t.replace(/(^\/+|\/+$)/g,"")}function l(t){return null!=t.__preactattr_||"undefined"!=typeof Symbol&&null!=t[Symbol.for("preactattr")]}function p(t,e){void 0===e&&(e="push"),x&&x[e]?x[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function s(){var t;return t=x&&x.location?x.location:x&&x.getCurrentLocation?x.getCurrentLocation():"undefined"!=typeof location?location:k,""+(t.pathname||"")+(t.search||"")}function f(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),d(t)&&p(t,e?"replace":"push"),h(t)}function d(t){for(var e=N.length;e--;)if(N[e].canRoute(t))return!0;return!1}function h(t){for(var e=!1,n=0;N.length>n;n++)!0===N[n].routeTo(t)&&(e=!0);for(var o=w.length;o--;)w[o](t);return e}function _(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return f(e)}}function v(t){if(0==t.button)return _(t.currentTarget||t.target||this),m(t)}function m(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function y(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===(e.nodeName+"").toUpperCase()&&e.getAttribute("href")&&l(e)){if(e.hasAttribute("native"))return;if(_(e))return m(t)}}while(e=e.parentNode)}}function b(){U||("function"==typeof addEventListener&&(x||addEventListener("popstate",function(){return h(s())}),addEventListener("click",y)),U=!0)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"subscribers",function(){return w}),n.d(e,"getCurrentUrl",function(){return s}),n.d(e,"route",function(){return f}),n.d(e,"Router",function(){return O}),n.d(e,"Route",function(){return L}),n.d(e,"Link",function(){return j});var g=n(0),C=(n.n(g),{}),x=null,N=[],w=[],k={},U=!1,O=function(t){function e(e){t.call(this,e),e.history&&(x=e.history),this.state={url:e.url||s()},b()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},e.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},e.prototype.componentWillMount=function(){N.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;x&&(this.unlisten=x.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),N.splice(N.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,u){return t.slice().sort(i).map(function(t){var i=t.attributes||{},a=i.path,c=r(e,a,i);if(c){if(!1!==u){var l={url:e,matches:c};return o(l,c),n.i(g.cloneElement)(t,l)}return t}return!1}).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,r=e.url,i=this.getMatchingChildren(n,r,!0),u=i[0]||null;this._didRoute=!!u;var a=this.previousUrl;return r!==a&&(this.previousUrl=r,"function"==typeof o&&o({router:this,url:r,previous:a,active:i,current:u})),u},e}(g.Component),j=function(t){return n.i(g.h)("a",o({onClick:v},t))},L=function(t){return n.i(g.h)(t.component,t)};O.subscribers=w,O.getCurrentUrl=s,O.route=f,O.Router=O,O.Route=L,O.Link=j,e.default=O},function(t,e,n){"use strict";var o=n(0);"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register("/sw.js");var r=function(t){return t&&t.default||t};if("function"==typeof r(n(1))){var i=document.body.firstElementChild,u=function(){var t=r(n(1));i=(0,o.render)((0,o.h)(t),document.body,i)};"function"==typeof fetch?u():n.e(0).then(function(){n(5),u()}.bind(null,n)).catch(n.oe)}},,function(t,e,n){"use strict";function o(t,e){if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){"function"!=typeof e&&null!==e||(t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e))}n.d(e,"a",function(){return s});var i=n(0),u=(n.n(i),n(7)),a=(n.n(u),n(8)),c=n.n(a),l=n.i(i.h)("h1",null,"Preact App"),p=n.i(i.h)("nav",null,n.i(i.h)(u.Link,{activeClassName:"active",href:"/"},"Home"),n.i(i.h)(u.Link,{activeClassName:"active",href:"/profile"},"Me"),n.i(i.h)(u.Link,{activeClassName:"active",href:"/profile/john"},"John")),s=function(t){function e(){return o(this,t.apply(this,arguments))}return r(e,t),e.prototype.render=function(){return n.i(i.h)("header",{class:c.a.header},l,p)},e}(i.Component)},function(t,e,n){"use strict";function o(t,e){var n={};for(var o in t)0>e.indexOf(o)&&Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}function r(t,e){if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){"function"!=typeof e&&null!==e||(t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e))}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var u=Object.assign||function(t){for(var e=1;arguments.length>e;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},a=n(0),c=n(3),l=e.Match=function(t){function e(){for(var e,n,o,i=arguments.length,u=Array(i),a=0;i>a;a++)u[a]=arguments[a];return e=n=r(this,t.call.apply(t,[this].concat(u))),n.update=function(t){n.nextUrl=t,n.setState({})},o=e,r(n,o)}return i(e,t),e.prototype.componentDidMount=function(){c.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){c.subscribers.splice(c.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,c.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children[0]&&t.children[0]({url:e,path:n,matches:n===t.path})},e}(a.Component),p=function(t){var e=t.activeClassName,n=t.path,r=o(t,["activeClassName","path"]);return(0,a.h)(l,{path:n||r.href},function(t){var n=t.matches;return(0,a.h)(c.Link,u({},r,{class:[r.class||r.className,n&&e].filter(Boolean).join(" ")}))})};e.Link=p,e.default=l,l.Link=p},function(t){t.exports={header:"header__3QGkI",active:"active__3gItZ"}},function(){},function(t,e,n){"use strict";function o(t){n.e(2).then(function(){t(n(13))}.bind(null,n)).catch(n.oe)}var r=n(2);e.a=n.n(r)()(o)},function(t,e,n){"use strict";function o(t){n.e(1).then(function(){t(n(14))}.bind(null,n)).catch(n.oe)}var r=n(2);e.a=n.n(r)()(o)},function(t,e,n){t.exports=n(4)}]);