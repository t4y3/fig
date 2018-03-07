!function(){"use strict";function h(e,t){for(var n,r=[],i=[],o=arguments.length;o-- >2;)r.push(arguments[o]);for(;r.length;)if((n=r.pop())&&n.pop)for(o=n.length;o--;)r.push(n[o]);else null!=n&&!0!==n&&!1!==n&&i.push(n);return"function"==typeof e?e(t||{},i):{nodeName:e,attributes:t||{},children:i,key:t&&t.key}}function app(e,t,n,r){var i,o=[],a=r&&r.children[0]||null,c=a&&function e(t,n){return{nodeName:t.nodeName.toLowerCase(),attributes:{},children:n.call(t.childNodes,function(t){return 3===t.nodeType?t.nodeValue:e(t,n)})}}(a,[].map),s=p(e),u=p(t);return f(function e(t,n,r){for(var i in r)"function"==typeof r[i]?function(e,i){r[e]=function(e){return"function"==typeof(e=i(e))&&(e=e(g(t,s),r)),e&&e!==(n=g(t,s))&&!e.then&&f(s=d(t,p(n,e),s)),e}}(i,r[i]):e(t.concat(i),n[i]=n[i]||{},r[i]=p(r[i]))}([],s,u)),u;function l(){i=!i;var e=n(s,u);for(r&&!i&&(a=function e(t,n,r,i,a,c){if(i===r);else if(null==r)n=t.insertBefore(v(i,a),n);else if(i.nodeName&&i.nodeName===r.nodeName){!function(e,t,n,r){for(var i in p(t,n))n[i]!==("value"===i||"checked"===i?e[i]:t[i])&&m(e,i,n[i],r,t[i]);n.onupdate&&o.push(function(){n.onupdate(e,t)})}(n,r.attributes,i.attributes,a=a||"svg"===i.nodeName);for(var s=[],u={},l={},f=0;f<r.children.length;f++){s[f]=n.childNodes[f];var d=r.children[f],g=h(d);null!=g&&(u[g]=[s[f],d])}for(var f=0,b=0;b<i.children.length;){var d=r.children[f],_=i.children[b],g=h(d),S=h(_);if(l[g])f++;else if(null==S)null==g&&(e(n,s[f],d,_,a),b++),f++;else{var w=u[S]||[];g===S?(e(n,w[0],w[1],_,a),f++):w[0]?e(n,n.insertBefore(w[0],s[f]),w[1],_,a):e(n,s[f],null,_,a),b++,l[S]=_}}for(;f<r.children.length;){var d=r.children[f];null==h(d)&&y(n,s[f],d),f++}for(var f in u)l[u[f][1].key]||y(n,u[f][0],u[f][1])}else i.nodeName===r.nodeName?n.nodeValue=i:(n=t.insertBefore(v(i,a),c=n),y(t,c,r));return n}(r,a,c,c=e));e=o.pop();)e()}function f(){i||(i=!i,setTimeout(l))}function p(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n}function d(e,t,n){var r={};return e.length?(r[e[0]]=e.length>1?d(e.slice(1),t,n[e[0]]):t,p(n,r)):t}function g(e,t){for(var n=0;n<e.length;n++)t=t[e[n]];return t}function h(e){return e?e.key:null}function m(e,t,n,r,i){if("key"===t);else if("style"===t)for(var o in p(i,n))e[t][o]=null==n||null==n[o]?"":n[o];else"function"==typeof n||t in e&&!r?e[t]=null==n?"":n:null!=n&&!1!==n&&e.setAttribute(t,n),null!=n&&!1!==n||e.removeAttribute(t)}function v(e,t){var n="string"==typeof e||"number"==typeof e?document.createTextNode(e):(t=t||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName);if(e.attributes){e.attributes.oncreate&&o.push(function(){e.attributes.oncreate(n)});for(var r=0;r<e.children.length;r++)n.appendChild(v(e.children[r],t));for(var i in e.attributes)m(n,i,e.attributes[i],t)}return n}function y(e,t,n,r){function i(){e.removeChild(function e(t,n,r){if(r=n.attributes){for(var i=0;i<n.children.length;i++)e(t.childNodes[i],n.children[i]);r.ondestroy&&r.ondestroy(t)}return t}(t,n))}n.attributes&&(r=n.attributes.onremove)?r(t,i):i()}}var FigTree=function(e){var t=e.state,n=e.action;return h("div",{className:"fig-tree"},h("div",{className:"title"},"Fig"),h("ul",{className:"list"},t.figures.map(function(e,r){return h("li",{className:"list__item"},h("p",{className:"tag-title",onclick:function(){n.toggleTreeAccordion(r)}},e.name,h("i",{className:"material-icons "+(t.figuresOpen[r]?"hide":"")},"keyboard_arrow_right"),h("i",{className:"material-icons "+(t.figuresOpen[r]?"":"hide")},"keyboard_arrow_down")),h("div",{className:"tag-list "+(t.figuresOpen[r]?"":"hide")},e.list.map(function(e,i){return h("p",{className:"tag-list__item "+(r==t.pi&&i==t.ci?"tag-list__item--active":""),onclick:function(){n.changeTree([r,i])}},e.name)})))})))},FigHeader=function(e){var t=e.state;return h("div",{className:"fig-header"},h("i",{class:"material-icons md-18"},"pageview"),h("span",{class:"header-text"},t.figures[t.pi].name," - ",t.figures[t.pi].list[t.ci].name))},format=function(e,t,n){var r=new JSONView(n,t);r.expand(!0),e.innerHTML="",e.appendChild(r.dom)},startX=0,infoWidth=0,onDragstart=function(e,t,n){startX=e.clientX,infoWidth=t.infoWidth},onDrag=function(e,t,n){e.preventDefault();var r=infoWidth+(startX-e.clientX);0===e.clientX||r<=300||n.updateInfoWidth(r)},FigInfo=function(e){var t=e.state,n=e.action;return h("div",{id:"fig-info",className:"fig-info "+(t.isInfo?"":"hide"),style:{flexBasis:t.infoWidth+"px",maxWidth:t.infoWidth+"px"}},h("div",{className:"info-inner"},h("div",{className:"info-title"},t.figures[t.pi].name," - ",t.figures[t.pi].list[t.ci].name),h("div",{className:"code-inner"},h("p",null,"Source"),h("pre",null,h("code",{className:"html",innerHTML:hljs.highlight("html",t.figures[t.pi].list[t.ci].template).value}))),h("div",{className:"opts-inner"},h("p",null,"Opts"),h("div",{className:"table-inner"},h("table",null,h("thead",null,h("tr",null,h("th",{width:"85%"},"Value"))),t.figures.map(function(e,n){return e.list.map(function(e,r){return h("tbody",{className:t.pi==n&&t.ci==r?"":"hide"},Object.keys(e._opts).map(function(t){return h("tr",null,h("td",{width:"85%"},h("div",{oncreate:function(n){format(n,e._opts[t],t)}})))}))})}))))),h("div",{className:"sidebar-gutter"}),h("div",{className:"sidebar-gutter--dummy",draggable:"true",ondragstart:function(e){onDragstart(e,t,n)},ondrag:function(e){onDrag(e,t,n)}}))},loadedCallback=function(e){var t=e.target.contentDocument||e.target.contentWindow.document,n=document.createElement("link");n.href="css/iframe.css",n.type="text/css",n.rel="stylesheet",t.querySelector("head").appendChild(n)},getSrcTemplate=function(e,t,n){var r=e.figures[t].list[n],i=r.template,o=r.template.match(/{(.*?)}/g);if(o){o=o.map(function(e){return e.match(/{ (.*?) }/)[1]});for(var a=0;a<o.length;a++)if(r._opts[o[a]]){var c=new RegExp("({ )"+o[a]+"( })"),s=JSON.stringify(r._opts[o[a]]).replace(/"/g,"'");i=i.replace(c,"$1"+s+"$2")}}var u='<script type="text/javascript" src="'+e.bundle+'"><\/script>';return'\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset="utf-8">\n        '+e.headHtml+"\n        "+u+'\n      </head>\n      <body><div class="fig-inner fig-inner--center">'+i+"</div></body>\n    </html>"},FigView=function(e){var t=e.state;return h("div",{className:"fig-view"},h("div",{className:"view-inner"},t.figures.map(function(e,n){return e.list.map(function(e,r){return h("iframe",{width:"100%",sandbox:"allow-scripts allow-same-origin",className:"view-frame "+(t.pi==n&&t.ci==r?"":"hide"),srcdoc:getSrcTemplate(t,n,r),onload:function(e){loadedCallback(e)}})})})))},FigApp=function(e){var t=e.state,n=e.actions;return h("div",{className:"fig-app"},h("div",{className:"app-inner"},h("div",{className:"app-left "+(t.isTree?"":"hide")},h(FigTree,{state:t,action:n})),h("div",{className:"app-right"},h(FigHeader,{state:t}),h("div",{className:"app-right-top"},h(FigView,{state:t}),h(FigInfo,{state:t,action:n})))))},KEY_EVENTS={TOGGLE_TREE:"command+shift+left",TOGGLE_INFO:"command+shift+right",MOVE_UP:"up",MOVE_DOWN:"down",MOVE_LEFT:"left",MOVE_RIGHT:"right"},STORAGE_KEY="fig-state",commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var mousetrap=createCommonjsModule(function(e){!function(t,n,r){if(t){for(var i,o={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},a={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},c={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},s={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},u=1;u<20;++u)o[111+u]="f"+u;for(u=0;u<=9;++u)o[u+96]=u.toString();h.prototype.bind=function(e,t,n){return e=e instanceof Array?e:[e],this._bindMultiple.call(this,e,t,n),this},h.prototype.unbind=function(e,t){return this.bind.call(this,e,function(){},t)},h.prototype.trigger=function(e,t){return this._directMap[e+":"+t]&&this._directMap[e+":"+t]({},e),this},h.prototype.reset=function(){return this._callbacks={},this._directMap={},this},h.prototype.stopCallback=function(e,t){return!((" "+t.className+" ").indexOf(" mousetrap ")>-1)&&(!function e(t,r){return null!==t&&t!==n&&(t===r||e(t.parentNode,r))}(t,this.target)&&("INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable))},h.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)},h.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);i=null},h.init=function(){var e=h(n);for(var t in e)"_"!==t.charAt(0)&&(h[t]=function(t){return function(){return e[t].apply(e,arguments)}}(t))},h.init(),t.Mousetrap=h,e.exports&&(e.exports=h)}function l(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function f(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return o[e.which]?o[e.which]:a[e.which]?a[e.which]:String.fromCharCode(e.which).toLowerCase()}function p(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function d(e,t,n){return n||(n=function(){if(!i)for(var e in i={},o)e>95&&e<112||o.hasOwnProperty(e)&&(i[o[e]]=e);return i}()[e]?"keydown":"keypress"),"keypress"==n&&t.length&&(n="keydown"),n}function g(e,t){var n,r,i,o=[];for(n=function(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus")).split("+")}(e),i=0;i<n.length;++i)r=n[i],s[r]&&(r=s[r]),t&&"keypress"!=t&&c[r]&&(r=c[r],o.push("shift")),p(r)&&o.push(r);return{key:r,modifiers:o,action:t=d(r,o,t)}}function h(e){var t=this;if(e=e||n,!(t instanceof h))return new h(e);t.target=e,t._callbacks={},t._directMap={};var r,i={},o=!1,a=!1,c=!1;function s(e){e=e||{};var t,n=!1;for(t in i)e[t]?n=!0:i[t]=0;n||(c=!1)}function u(e,n,r,o,a,c){var s,u,l,f,d=[],g=r.type;if(!t._callbacks[e])return[];for("keyup"==g&&p(e)&&(n=[e]),s=0;s<t._callbacks[e].length;++s)if(u=t._callbacks[e][s],(o||!u.seq||i[u.seq]==u.level)&&g==u.action&&("keypress"==g&&!r.metaKey&&!r.ctrlKey||(l=n,f=u.modifiers,l.sort().join(",")===f.sort().join(",")))){var h=!o&&u.combo==a,m=o&&u.seq==o&&u.level==c;(h||m)&&t._callbacks[e].splice(s,1),d.push(u)}return d}function d(e,n,r,i){t.stopCallback(n,n.target||n.srcElement,r,i)||!1===e(n,r)&&(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}(n),function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}(n))}function m(e){"number"!=typeof e.which&&(e.which=e.keyCode);var n=f(e);n&&("keyup"!=e.type||o!==n?t.handleKey(n,function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}(e),e):o=!1)}function v(e,t,n,a){function u(t){return function(){c=t,++i[e],clearTimeout(r),r=setTimeout(s,1e3)}}function l(t){d(n,t,e),"keyup"!==a&&(o=f(t)),setTimeout(s,10)}i[e]=0;for(var p=0;p<t.length;++p){var h=p+1===t.length?l:u(a||g(t[p+1]).action);y(t[p],h,a,e,p)}}function y(e,n,r,i,o){t._directMap[e+":"+r]=n;var a,c=(e=e.replace(/\s+/g," ")).split(" ");c.length>1?v(e,c,n,r):(a=g(e,r),t._callbacks[a.key]=t._callbacks[a.key]||[],u(a.key,a.modifiers,{type:a.action},i,e,o),t._callbacks[a.key][i?"unshift":"push"]({callback:n,modifiers:a.modifiers,action:a.action,seq:i,level:o,combo:e}))}t._handleKey=function(e,t,n){var r,i=u(e,t,n),o={},l=0,f=!1;for(r=0;r<i.length;++r)i[r].seq&&(l=Math.max(l,i[r].level));for(r=0;r<i.length;++r)if(i[r].seq){if(i[r].level!=l)continue;f=!0,o[i[r].seq]=1,d(i[r].callback,n,i[r].combo,i[r].seq)}else f||d(i[r].callback,n,i[r].combo);var g="keypress"==n.type&&a;n.type!=c||p(e)||g||s(o),a=f&&"keydown"==n.type},t._bindMultiple=function(e,t,n){for(var r=0;r<e.length;++r)y(e[r],t,n)},l(e,"keypress",m),l(e,"keydown",m),l(e,"keyup",m)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)}),assign=make_assign(),create=make_create(),trim=make_trim(),Global="undefined"!=typeof window?window:commonjsGlobal,util={assign:assign,create:create,trim:trim,bind:bind,slice:slice,each:each,map:map,pluck:pluck,isList:isList,isFunction:isFunction,isObject:isObject,Global:Global};function make_assign(){return Object.assign?Object.assign:function(e,t,n,r){for(var i=1;i<arguments.length;i++)each(Object(arguments[i]),function(t,n){e[n]=t});return e}}function make_create(){if(Object.create)return function(e,t,n,r){var i=slice(arguments,1);return assign.apply(this,[Object.create(e)].concat(i))};var e=function(){};return function(t,n,r,i){var o=slice(arguments,1);return e.prototype=t,assign.apply(this,[new e].concat(o))}}function make_trim(){return String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}function bind(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}}function slice(e,t){return Array.prototype.slice.call(e,t||0)}function each(e,t){pluck(e,function(e,n){return t(e,n),!1})}function map(e,t){var n=isList(e)?[]:{};return pluck(e,function(e,r){return n[r]=t(e,r),!1}),n}function pluck(e,t){if(isList(e)){for(var n=0;n<e.length;n++)if(t(e[n],n))return e[n]}else for(var r in e)if(e.hasOwnProperty(r)&&t(e[r],r))return e[r]}function isList(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length}function isFunction(e){return e&&"[object Function]"==={}.toString.call(e)}function isObject(e){return e&&"[object Object]"==={}.toString.call(e)}var slice$1=util.slice,pluck$1=util.pluck,each$1=util.each,bind$1=util.bind,create$1=util.create,isList$1=util.isList,isFunction$1=util.isFunction,isObject$1=util.isObject,storeEngine={createStore:_createStore},storeAPI={version:"2.0.12",enabled:!1,get:function(e,t){var n=this.storage.read(this._namespacePrefix+e);return this._deserialize(n,t)},set:function(e,t){return void 0===t?this.remove(e):(this.storage.write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this.storage.remove(this._namespacePrefix+e)},each:function(e){var t=this;this.storage.each(function(n,r){e.call(t,t._deserialize(n),(r||"").replace(t._namespaceRegexp,""))})},clearAll:function(){this.storage.clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},createStore:function(){return _createStore.apply(this,arguments)},addPlugin:function(e){this._addPlugin(e)},namespace:function(e){return _createStore(this.storage,this.plugins,e)}};function _warn(){var e="undefined"==typeof console?null:console;e&&(e.warn?e.warn:e.log).apply(e,arguments)}function _createStore(e,t,n){n||(n=""),e&&!isList$1(e)&&(e=[e]),t&&!isList$1(t)&&(t=[t]);var r=n?"__storejs_"+n+"_":"",i=n?new RegExp("^"+r):null;if(!/^[a-zA-Z0-9_\-]*$/.test(n))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var o=create$1({_namespacePrefix:r,_namespaceRegexp:i,_testStorage:function(e){try{var t="__storejs__test__";e.write(t,t);var n=e.read(t)===t;return e.remove(t),n}catch(e){return!1}},_assignPluginFnProp:function(e,t){var n=this[t];this[t]=function(){var t=slice$1(arguments,0),r=this;var i=[function(){if(n)return each$1(arguments,function(e,n){t[n]=e}),n.apply(r,t)}].concat(t);return e.apply(r,i)}},_serialize:function(e){return JSON.stringify(e)},_deserialize:function(e,t){if(!e)return t;var n="";try{n=JSON.parse(e)}catch(t){n=e}return void 0!==n?n:t},_addStorage:function(e){this.enabled||this._testStorage(e)&&(this.storage=e,this.enabled=!0)},_addPlugin:function(e){var t=this;if(isList$1(e))each$1(e,function(e){t._addPlugin(e)});else if(!pluck$1(this.plugins,function(t){return e===t})){if(this.plugins.push(e),!isFunction$1(e))throw new Error("Plugins must be function values that return objects");var n=e.call(this);if(!isObject$1(n))throw new Error("Plugins must return an object of function properties");each$1(n,function(n,r){if(!isFunction$1(n))throw new Error("Bad plugin property: "+r+" from plugin "+e.name+". Plugins should only return functions.");t._assignPluginFnProp(n,r)})}},addStorage:function(e){_warn("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(e)}},storeAPI,{plugins:[]});return o.raw={},each$1(o,function(e,t){isFunction$1(e)&&(o.raw[t]=bind$1(o,e))}),each$1(e,function(e){o._addStorage(e)}),each$1(t,function(e){o._addPlugin(e)}),o}var Global$1=util.Global,localStorage_1={name:"localStorage",read:read,write:write,each:each$2,remove:remove,clearAll:clearAll};function localStorage(){return Global$1.localStorage}function read(e){return localStorage().getItem(e)}function write(e,t){return localStorage().setItem(e,t)}function each$2(e){for(var t=localStorage().length-1;t>=0;t--){var n=localStorage().key(t);e(read(n),n)}}function remove(e){return localStorage().removeItem(e)}function clearAll(){return localStorage().clear()}var Global$2=util.Global,oldFFGlobalStorage={name:"oldFF-globalStorage",read:read$1,write:write$1,each:each$3,remove:remove$1,clearAll:clearAll$1},globalStorage=Global$2.globalStorage;function read$1(e){return globalStorage[e]}function write$1(e,t){globalStorage[e]=t}function each$3(e){for(var t=globalStorage.length-1;t>=0;t--){var n=globalStorage.key(t);e(globalStorage[n],n)}}function remove$1(e){return globalStorage.removeItem(e)}function clearAll$1(){each$3(function(e,t){delete globalStorage[e]})}var Global$3=util.Global,oldIEUserDataStorage={name:"oldIE-userDataStorage",write:write$2,read:read$2,each:each$4,remove:remove$2,clearAll:clearAll$2},storageName="storejs",doc=Global$3.document,_withStorageEl=_makeIEStorageElFunction(),disable=(Global$3.navigator?Global$3.navigator.userAgent:"").match(/ (MSIE 8|MSIE 9|MSIE 10)\./);function write$2(e,t){if(!disable){var n=fixKey(e);_withStorageEl(function(e){e.setAttribute(n,t),e.save(storageName)})}}function read$2(e){if(!disable){var t=fixKey(e),n=null;return _withStorageEl(function(e){n=e.getAttribute(t)}),n}}function each$4(e){_withStorageEl(function(t){for(var n=t.XMLDocument.documentElement.attributes,r=n.length-1;r>=0;r--){var i=n[r];e(t.getAttribute(i.name),i.name)}})}function remove$2(e){var t=fixKey(e);_withStorageEl(function(e){e.removeAttribute(t),e.save(storageName)})}function clearAll$2(){_withStorageEl(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(storageName);for(var n=t.length-1;n>=0;n--)e.removeAttribute(t[n].name);e.save(storageName)})}var forbiddenCharsRegex=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function fixKey(e){return e.replace(/^\d/,"___$&").replace(forbiddenCharsRegex,"___")}function _makeIEStorageElFunction(){if(!doc||!doc.documentElement||!doc.documentElement.addBehavior)return null;var e,t,n;try{(t=new ActiveXObject("htmlfile")).open(),t.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></iframe>'),t.close(),e=t.w.frames[0].document,n=e.createElement("div")}catch(t){n=doc.createElement("div"),e=doc.body}return function(t){var r=[].slice.call(arguments,0);r.unshift(n),e.appendChild(n),n.addBehavior("#default#userData"),n.load(storageName),t.apply(this,r),e.removeChild(n)}}var Global$4=util.Global,trim$1=util.trim,cookieStorage={name:"cookieStorage",read:read$3,write:write$3,each:each$5,remove:remove$3,clearAll:clearAll$3},doc$1=Global$4.document;function read$3(e){if(!e||!_has(e))return null;var t="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(doc$1.cookie.replace(new RegExp(t),"$1"))}function each$5(e){for(var t=doc$1.cookie.split(/; ?/g),n=t.length-1;n>=0;n--)if(trim$1(t[n])){var r=t[n].split("="),i=unescape(r[0]);e(unescape(r[1]),i)}}function write$3(e,t){e&&(doc$1.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")}function remove$3(e){e&&_has(e)&&(doc$1.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function clearAll$3(){each$5(function(e,t){remove$3(t)})}function _has(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(doc$1.cookie)}var Global$5=util.Global,sessionStorage_1={name:"sessionStorage",read:read$4,write:write$4,each:each$6,remove:remove$4,clearAll:clearAll$4};function sessionStorage(){return Global$5.sessionStorage}function read$4(e){return sessionStorage().getItem(e)}function write$4(e,t){return sessionStorage().setItem(e,t)}function each$6(e){for(var t=sessionStorage().length-1;t>=0;t--){var n=sessionStorage().key(t);e(read$4(n),n)}}function remove$4(e){return sessionStorage().removeItem(e)}function clearAll$4(){return sessionStorage().clear()}var memoryStorage_1={name:"memoryStorage",read:read$5,write:write$5,each:each$7,remove:remove$5,clearAll:clearAll$5},memoryStorage={};function read$5(e){return memoryStorage[e]}function write$5(e,t){memoryStorage[e]=t}function each$7(e){for(var t in memoryStorage)memoryStorage.hasOwnProperty(t)&&e(memoryStorage[t],t)}function remove$5(e){delete memoryStorage[e]}function clearAll$5(e){memoryStorage={}}var all=[localStorage_1,oldFFGlobalStorage,oldIEUserDataStorage,cookieStorage,sessionStorage_1,memoryStorage_1],_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};"object"!==("undefined"==typeof JSON?"undefined":_typeof(JSON))&&(JSON={}),function(){var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,o,a,c=gap,s=t[e];switch(s&&"object"===(void 0===s?"undefined":_typeof(s))&&"function"==typeof s.toJSON&&(s=s.toJSON(e)),"function"==typeof rep&&(s=rep.call(t,e,s)),void 0===s?"undefined":_typeof(s)){case"string":return quote(s);case"number":return isFinite(s)?String(s):"null";case"boolean":case"null":return String(s);case"object":if(!s)return"null";if(gap+=indent,a=[],"[object Array]"===Object.prototype.toString.apply(s)){for(o=s.length,n=0;n<o;n+=1)a[n]=str(n,s)||"null";return i=0===a.length?"[]":gap?"[\n"+gap+a.join(",\n"+gap)+"\n"+c+"]":"["+a.join(",")+"]",gap=c,i}if(rep&&"object"===(void 0===rep?"undefined":_typeof(rep)))for(o=rep.length,n=0;n<o;n+=1)"string"==typeof rep[n]&&(i=str(r=rep[n],s))&&a.push(quote(r)+(gap?": ":":")+i);else for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(i=str(r,s))&&a.push(quote(r)+(gap?": ":":")+i);return i=0===a.length?"{}":gap?"{\n"+gap+a.join(",\n"+gap)+"\n"+c+"}":"{"+a.join(",")+"}",gap=c,i}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,n){var r;if(gap="",indent="","number"==typeof n)for(r=0;r<n;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=t,t&&"function"!=typeof t&&("object"!==(void 0===t?"undefined":_typeof(t))||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(e,t){var n,r,i=e[t];if(i&&"object"===(void 0===i?"undefined":_typeof(i)))for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(void 0!==(r=walk(i,n))?i[n]=r:delete i[n]);return reviver.call(e,t,i)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();var json2$1=json2Plugin;function json2Plugin(){return{}}var plugins=[json2$1],store_legacy=storeEngine.createStore(all,plugins),state={bundle:"",headHtml:"",isTree:!0,isInfo:!0,pi:0,ci:0,figures:[],figuresOpen:[],infoWidth:400},actions={initState:function(e){return function(t){for(var n=store_legacy.get(STORAGE_KEY),r=e.bundle,i=t.isTree,o=t.isInfo,a=t.pi,c=t.ci,s=[],u=0;u<e.figures.length;u++)s[u]=!0;n&&(i=n.isTree,o=n.isInfo,s.length==e.figures.length&&n.figuresOpen&&(s=n.figuresOpen),e.figures[n.pi]&&e.figures[n.pi].list[n.ci]&&(a=n.pi,c=n.ci));var l=Object.assign({},t,{bundle:r,headHtml:e.headHtml,isTree:i,isInfo:o,pi:a,ci:c,figures:e.figures,figuresOpen:s});return store_legacy.set(STORAGE_KEY,l),l}},changeTree:function(e){return function(t){var n=Object.assign({},t,{pi:e[0],ci:e[1]});return store_legacy.set(STORAGE_KEY,n),n}},toggleTree:function(){return function(e){var t=Object.assign({},e,{isTree:!e.isTree,isInfo:e.isInfo});return store_legacy.set(STORAGE_KEY,t),t}},toggleTreeAccordion:function(e){return function(t){var n=t.figuresOpen;n[e]=!n[e];var r=Object.assign({},t,{figuresOpen:n});return store_legacy.set(STORAGE_KEY,r),r}},toggleInfo:function(){return function(e){var t=Object.assign({},e,{isTree:e.isTree,isInfo:!e.isInfo});return store_legacy.set(STORAGE_KEY,t),t}},moveFocusedTag:function(e){return function(t){var n=t.pi,r="up"===e?t.ci-1:t.ci+1;r<0?t.pi-1<0?(n=t.pi,r=t.ci):(n-=1,r=t.figures[t.pi-1].list.length-1):r>t.figures[t.pi].list.length-1&&(t.pi+1>t.figures.length-1?(n=t.pi,r=t.ci):(n+=1,r=0));var i=Object.assign({},t,{pi:n,ci:r});return store_legacy.set(STORAGE_KEY,i),i}},openTreeAccordion:function(e){return function(t){var n=t.figuresOpen;n[t.pi]=e;var r=Object.assign({},t,{figuresOpen:n});return store_legacy.set(STORAGE_KEY,r),r}},updateInfoWidth:function(e){return function(t){var n=Object.assign({},t,{infoWidth:e});return store_legacy.set(STORAGE_KEY,n),n}}};mousetrap.bind(KEY_EVENTS.TOGGLE_INFO,function(){main.toggleInfo()}),mousetrap.bind(KEY_EVENTS.TOGGLE_TREE,function(){main.toggleTree()}),mousetrap.bind(KEY_EVENTS.MOVE_DOWN,function(e){e.preventDefault(),main.moveFocusedTag("down")}),mousetrap.bind(KEY_EVENTS.MOVE_UP,function(e){e.preventDefault(),main.moveFocusedTag("up")}),mousetrap.bind(KEY_EVENTS.MOVE_LEFT,function(e){e.preventDefault(),main.openTreeAccordion(!1)}),mousetrap.bind(KEY_EVENTS.MOVE_RIGHT,function(e){e.preventDefault(),main.openTreeAccordion(!0)});var view=function(e,t){return h(FigApp,{state:e,actions:t})},main=void 0;window.addEventListener("DOMContentLoaded",function(){main=app(state,actions,view,document.body),fetch("fig.config.json",{mode:"cros"}).then(function(e){return e.json()}).then(function(e){main.initState(e)})})}();