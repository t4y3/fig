!function(){"use strict";function h(e,t){for(var r,n=[],o=[],i=arguments.length;i-- >2;)n.push(arguments[i]);for(;n.length;)if((r=n.pop())&&r.pop)for(i=r.length;i--;)n.push(r[i]);else null!=r&&!0!==r&&!1!==r&&o.push(r);return"function"==typeof e?e(t||{},o):{nodeName:e,attributes:t||{},children:o,key:t&&t.key}}function app(e,t,r,n){var o,i=[],a=n&&n.children[0]||null,s=a&&function e(t,r){return{nodeName:t.nodeName.toLowerCase(),attributes:{},children:r.call(t.childNodes,function(t){return 3===t.nodeType?t.nodeValue:e(t,r)})}}(a,[].map),c=p(e),l=p(t);return f(function e(t,r,n){for(var o in n)"function"==typeof n[o]?function(e,o){n[e]=function(e){return"function"==typeof(e=o(e))&&(e=e(d(t,c),n)),e&&e!==(r=d(t,c))&&!e.then&&f(c=h(t,p(r,e),c)),e}}(o,n[o]):e(t.concat(o),r[o]=r[o]||{},n[o]=p(n[o]))}([],c,l)),l;function u(){o=!o;var e=r(c,l);for(n&&!o&&(a=function e(t,r,n,o,a,s){if(o===n);else if(null==n)r=t.insertBefore(y(o,a),r);else if(o.nodeName&&o.nodeName===n.nodeName){!function(e,t,r,n){for(var o in p(t,r))r[o]!==("value"===o||"checked"===o?e[o]:t[o])&&m(e,o,r[o],n,t[o]);r.onupdate&&i.push(function(){r.onupdate(e,t)})}(r,n.attributes,o.attributes,a=a||"svg"===o.nodeName);for(var c=[],l={},u={},f=0;f<n.children.length;f++){c[f]=r.childNodes[f];var h=n.children[f],d=g(h);null!=d&&(l[d]=[c[f],h])}for(var f=0,b=0;b<o.children.length;){var h=n.children[f],_=o.children[b],d=g(h),w=g(_);if(u[d])f++;else if(null==w)null==d&&(e(r,c[f],h,_,a),b++),f++;else{var S=l[w]||[];d===w?(e(r,S[0],S[1],_,a),f++):S[0]?e(r,r.insertBefore(S[0],c[f]),S[1],_,a):e(r,c[f],null,_,a),b++,u[w]=_}}for(;f<n.children.length;){var h=n.children[f];null==g(h)&&v(r,c[f],h),f++}for(var f in l)u[l[f][1].key]||v(r,l[f][0],l[f][1])}else o.nodeName===n.nodeName?r.nodeValue=o:(r=t.insertBefore(y(o,a),s=r),v(t,s,n));return r}(n,a,s,s=e));e=i.pop();)e()}function f(){o||(o=!o,setTimeout(u))}function p(e,t){var r={};for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r}function h(e,t,r){var n={};return e.length?(n[e[0]]=e.length>1?h(e.slice(1),t,r[e[0]]):t,p(r,n)):t}function d(e,t){for(var r=0;r<e.length;r++)t=t[e[r]];return t}function g(e){return e?e.key:null}function m(e,t,r,n,o){if("key"===t);else if("style"===t)for(var i in p(o,r))e[t][i]=null==r||null==r[i]?"":r[i];else"function"==typeof r||t in e&&!n?e[t]=null==r?"":r:null!=r&&!1!==r&&e.setAttribute(t,r),null!=r&&!1!==r||e.removeAttribute(t)}function y(e,t){var r="string"==typeof e||"number"==typeof e?document.createTextNode(e):(t=t||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName);if(e.attributes){e.attributes.oncreate&&i.push(function(){e.attributes.oncreate(r)});for(var n=0;n<e.children.length;n++)r.appendChild(y(e.children[n],t));for(var o in e.attributes)m(r,o,e.attributes[o],t)}return r}function v(e,t,r,n){function o(){e.removeChild(function e(t,r,n){if(n=r.attributes){for(var o=0;o<r.children.length;o++)e(t.childNodes[o],r.children[o]);n.ondestroy&&n.ondestroy(t)}return t}(t,r))}r.attributes&&(n=r.attributes.onremove)?n(t,o):o()}}!function(e){if(!e.fetch){var t={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(t.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=function(e){return e&&DataView.prototype.isPrototypeOf(e)},o=ArrayBuffer.isView||function(e){return e&&r.indexOf(Object.prototype.toString.call(e))>-1};u.prototype.append=function(e,t){e=s(e),t=c(t);var r=this.map[e];this.map[e]=r?r+","+t:t},u.prototype.delete=function(e){delete this.map[s(e)]},u.prototype.get=function(e){return e=s(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(s(e))},u.prototype.set=function(e,t){this.map[s(e)]=c(t)},u.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},u.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),l(e)},u.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),l(e)},u.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),l(e)},t.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},g.call(m.prototype),g.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},v.error=function(){var e=new v(null,{status:0,statusText:""});return e.type="error",e};var a=[301,302,303,307,308];v.redirect=function(e,t){if(-1===a.indexOf(t))throw new RangeError("Invalid status code");return new v(null,{status:t,headers:{location:e}})},e.Headers=u,e.Request=m,e.Response=v,e.fetch=function(e,r){return new Promise(function(n,o){var i=new m(e,r),a=new XMLHttpRequest;a.onload=function(){var e,t,r={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new u,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;n(new v(o,r))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&t.blob&&(a.responseType="blob"),i.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),a.send(void 0===i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}function s(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function c(e){return"string"!=typeof e&&(e=String(e)),e}function l(e){var r={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t.iterable&&(r[Symbol.iterator]=function(){return r}),r}function u(e){this.map={},e instanceof u?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function f(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function p(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function h(e){var t=new FileReader,r=p(t);return t.readAsArrayBuffer(e),r}function d(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function g(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(t.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(t.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(t.arrayBuffer&&t.blob&&n(e))this._bodyArrayBuffer=d(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!t.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!o(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=d(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},t.blob&&(this.blob=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var e,t,r,n=f(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=p(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},t.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}function m(e,t){var r,n,o=(t=t||{}).body;if(e instanceof m){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new u(t.headers)),this.method=(r=t.method||this.method||"GET",n=r.toUpperCase(),i.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function y(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function v(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!=typeof self?self:void 0);var FigTree=function(e){var t=e.state,r=e.action;return h("div",{className:"fig-tree"},h("div",{className:"title"},t.title),h("ul",{className:"list"},t.figures.map(function(e,n){return h("li",{className:"list__item"},h("p",{className:"tag-title "+(n==t.pi?"tag-title--active":""),onclick:function(){r.toggleTreeAccordion(n)}},e.name,h("i",{className:"material-icons "+(t.figuresOpen[n]?"hide":"")},"keyboard_arrow_right"),h("i",{className:"material-icons "+(t.figuresOpen[n]?"":"hide")},"keyboard_arrow_down")),h("div",{className:"tag-list "+(t.figuresOpen[n]?"":"hide")},e.list.map(function(e,o){return h("p",{className:"tag-list__item "+(n==t.pi&&o==t.ci?"tag-list__item--active":""),onclick:function(){r.changeTree([n,o])}},e.name)})))})))},openDialog=function(){document.getElementById("modal-shortcuts").showModal()},closeDialog=function(){document.getElementById("modal-shortcuts").close()},FigHeader=function(e){var t=e.state;return h("div",{className:"fig-header"},h("i",{className:"material-icons md-18"},"pageview"),h("span",{className:"header-text"},t.figures[t.pi].name," - ",t.figures[t.pi].list[t.ci].name),h("div",{className:"header-logo"},h("i",{className:"header-logo__keybord material-icons",onclick:openDialog},"keyboard")),h("dialog",{id:"modal-shortcuts",className:"modal-shortcuts",onclick:closeDialog},h("p",{className:"modal-shortcuts__title"},"Keyboard Shortcuts"),h("p",{className:"modal-shortcuts__item"},h("span",null,"⌘ ⇧ ←"),"Toggle Tree View"),h("p",{className:"modal-shortcuts__item"},h("span",null,"⌘ ⇧ →"),"Toggle Info View"),h("p",{className:"modal-shortcuts__item"},h("span",null,"↑ or ↓"),"Change View Custom Tag"),h("p",{className:"modal-shortcuts__item"},h("span",null,"← or →"),"Toggle Accordion")))},format=function(e,t,r){var n=new JSONView(r,t);n.expand(!0),e.innerHTML="",e.appendChild(n.dom)},startX=0,infoWidth=600,startWidth=0,onDragstart=function(e,t,r){startX=e.clientX,startWidth=infoWidth},onDrag=function(e,t,r){e.preventDefault();var n=startWidth+(startX-e.clientX);if(!(0===e.clientX||n<=300)){infoWidth=n;var o=document.getElementById("fig-info");o.style.flexBasis=n+"px",o.style.maxWidth=n+"px"}},FigInfo=function(e){var t=e.state,r=e.action;return h("div",{id:"fig-info",className:"fig-info "+(t.isInfo?"":"hide")},h("div",{className:"info-inner"},h("div",{className:"info-title"},t.figures[t.pi].name," - ",t.figures[t.pi].list[t.ci].name),h("div",{className:"code-inner"},h("p",null,"Source"),h("pre",null,h("code",{className:"html",innerHTML:hljs.highlight("html",t.figures[t.pi].list[t.ci].template).value}))),h("div",{className:"opts-inner"},h("p",null,"Opts"),h("div",{className:"table-inner"},h("table",null,h("thead",null,h("tr",null,h("th",{width:"85%"},"Value"))),t.figures.map(function(e,r){return e.list.map(function(e,n){return h("tbody",{className:t.pi==r&&t.ci==n?"":"hide"},Object.keys(e._opts).map(function(t){return h("tr",null,h("td",{width:"85%"},h("div",{oncreate:function(r){format(r,e._opts[t],t)}})))}))})}))))),h("div",{className:"sidebar-gutter"}),h("div",{className:"sidebar-gutter--dummy",draggable:"true",ondragstart:function(e){onDragstart(e,t,r)},ondrag:function(e){onDrag(e,t,r)}}))},loadedCallback=function(e){var t=e.target.contentDocument||e.target.contentWindow.document,r=document.createElement("link");r.href="css/iframe.css",r.type="text/css",r.rel="stylesheet",t.querySelector("head").appendChild(r)},getSrcTemplate=function(e,t,r){var n=e.figures[t].list[r],o=n.template,i=n.template.match(/{(.*?)}/g);if(i){i=i.map(function(e){return e.match(/{ (.*?) }/)[1]});for(var a=0;a<i.length;a++)if(n._opts[i[a]]){var s=new RegExp("({ )"+i[a]+"( })"),c=JSON.stringify(n._opts[i[a]]).replace(/"/g,"'");o=o.replace(s,"$1"+c+"$2")}}var l='<script type="text/javascript" src="'+e.bundle+'"><\/script>';return'\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset="utf-8">\n        '+e.headHtml+"\n        "+l+'\n      </head>\n      <body><div class="fig-inner fig-inner--center">'+o+"</div></body>\n    </html>"},FigView=function(e){var t=e.state;return h("div",{className:"fig-view"},h("div",{className:"view-inner"},t.figures.map(function(e,r){return e.list.map(function(e,n){return h("iframe",{width:"100%",sandbox:"allow-scripts allow-same-origin",className:"view-frame "+(t.pi==r&&t.ci==n?"":"hide"),srcdoc:getSrcTemplate(t,r,n),onload:function(e){loadedCallback(e)}})})})))},FigApp=function(e){var t=e.state,r=e.actions;return h("div",{className:"fig-app"},h("div",{className:"app-inner"},h("div",{className:"app-left "+(t.isTree?"":"hide")},h(FigTree,{state:t,action:r})),h("div",{className:"app-right"},h(FigHeader,{state:t}),h("div",{className:"app-right-top"},h(FigView,{state:t}),h(FigInfo,{state:t,action:r})))))},KEY_EVENTS={TOGGLE_TREE:"command+shift+left",TOGGLE_INFO:"command+shift+right",MOVE_UP:"up",MOVE_DOWN:"down",MOVE_LEFT:"left",MOVE_RIGHT:"right"},STORAGE_KEY="fig-state",commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var mousetrap=createCommonjsModule(function(e){!function(t,r,n){if(t){for(var o,i={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},a={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},s={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},c={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},l=1;l<20;++l)i[111+l]="f"+l;for(l=0;l<=9;++l)i[l+96]=l.toString();g.prototype.bind=function(e,t,r){return e=e instanceof Array?e:[e],this._bindMultiple.call(this,e,t,r),this},g.prototype.unbind=function(e,t){return this.bind.call(this,e,function(){},t)},g.prototype.trigger=function(e,t){return this._directMap[e+":"+t]&&this._directMap[e+":"+t]({},e),this},g.prototype.reset=function(){return this._callbacks={},this._directMap={},this},g.prototype.stopCallback=function(e,t){return!((" "+t.className+" ").indexOf(" mousetrap ")>-1)&&(!function e(t,n){return null!==t&&t!==r&&(t===n||e(t.parentNode,n))}(t,this.target)&&("INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable))},g.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)},g.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(i[t]=e[t]);o=null},g.init=function(){var e=g(r);for(var t in e)"_"!==t.charAt(0)&&(g[t]=function(t){return function(){return e[t].apply(e,arguments)}}(t))},g.init(),t.Mousetrap=g,e.exports&&(e.exports=g)}function u(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)}function f(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return i[e.which]?i[e.which]:a[e.which]?a[e.which]:String.fromCharCode(e.which).toLowerCase()}function p(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function h(e,t,r){return r||(r=function(){if(!o)for(var e in o={},i)e>95&&e<112||i.hasOwnProperty(e)&&(o[i[e]]=e);return o}()[e]?"keydown":"keypress"),"keypress"==r&&t.length&&(r="keydown"),r}function d(e,t){var r,n,o,i=[];for(r=function(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus")).split("+")}(e),o=0;o<r.length;++o)n=r[o],c[n]&&(n=c[n]),t&&"keypress"!=t&&s[n]&&(n=s[n],i.push("shift")),p(n)&&i.push(n);return{key:n,modifiers:i,action:t=h(n,i,t)}}function g(e){var t=this;if(e=e||r,!(t instanceof g))return new g(e);t.target=e,t._callbacks={},t._directMap={};var n,o={},i=!1,a=!1,s=!1;function c(e){e=e||{};var t,r=!1;for(t in o)e[t]?r=!0:o[t]=0;r||(s=!1)}function l(e,r,n,i,a,s){var c,l,u,f,h=[],d=n.type;if(!t._callbacks[e])return[];for("keyup"==d&&p(e)&&(r=[e]),c=0;c<t._callbacks[e].length;++c)if(l=t._callbacks[e][c],(i||!l.seq||o[l.seq]==l.level)&&d==l.action&&("keypress"==d&&!n.metaKey&&!n.ctrlKey||(u=r,f=l.modifiers,u.sort().join(",")===f.sort().join(",")))){var g=!i&&l.combo==a,m=i&&l.seq==i&&l.level==s;(g||m)&&t._callbacks[e].splice(c,1),h.push(l)}return h}function h(e,r,n,o){t.stopCallback(r,r.target||r.srcElement,n,o)||!1===e(r,n)&&(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}(r),function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}(r))}function m(e){"number"!=typeof e.which&&(e.which=e.keyCode);var r=f(e);r&&("keyup"!=e.type||i!==r?t.handleKey(r,function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}(e),e):i=!1)}function y(e,t,r,a){function l(t){return function(){s=t,++o[e],clearTimeout(n),n=setTimeout(c,1e3)}}function u(t){h(r,t,e),"keyup"!==a&&(i=f(t)),setTimeout(c,10)}o[e]=0;for(var p=0;p<t.length;++p){var g=p+1===t.length?u:l(a||d(t[p+1]).action);v(t[p],g,a,e,p)}}function v(e,r,n,o,i){t._directMap[e+":"+n]=r;var a,s=(e=e.replace(/\s+/g," ")).split(" ");s.length>1?y(e,s,r,n):(a=d(e,n),t._callbacks[a.key]=t._callbacks[a.key]||[],l(a.key,a.modifiers,{type:a.action},o,e,i),t._callbacks[a.key][o?"unshift":"push"]({callback:r,modifiers:a.modifiers,action:a.action,seq:o,level:i,combo:e}))}t._handleKey=function(e,t,r){var n,o=l(e,t,r),i={},u=0,f=!1;for(n=0;n<o.length;++n)o[n].seq&&(u=Math.max(u,o[n].level));for(n=0;n<o.length;++n)if(o[n].seq){if(o[n].level!=u)continue;f=!0,i[o[n].seq]=1,h(o[n].callback,r,o[n].combo,o[n].seq)}else f||h(o[n].callback,r,o[n].combo);var d="keypress"==r.type&&a;r.type!=s||p(e)||d||c(i),a=f&&"keydown"==r.type},t._bindMultiple=function(e,t,r){for(var n=0;n<e.length;++n)v(e[n],t,r)},u(e,"keypress",m),u(e,"keydown",m),u(e,"keyup",m)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)}),assign=make_assign(),create=make_create(),trim=make_trim(),Global="undefined"!=typeof window?window:commonjsGlobal,util={assign:assign,create:create,trim:trim,bind:bind,slice:slice,each:each,map:map,pluck:pluck,isList:isList,isFunction:isFunction,isObject:isObject,Global:Global};function make_assign(){return Object.assign?Object.assign:function(e,t,r,n){for(var o=1;o<arguments.length;o++)each(Object(arguments[o]),function(t,r){e[r]=t});return e}}function make_create(){if(Object.create)return function(e,t,r,n){var o=slice(arguments,1);return assign.apply(this,[Object.create(e)].concat(o))};var e=function(){};return function(t,r,n,o){var i=slice(arguments,1);return e.prototype=t,assign.apply(this,[new e].concat(i))}}function make_trim(){return String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}function bind(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}}function slice(e,t){return Array.prototype.slice.call(e,t||0)}function each(e,t){pluck(e,function(e,r){return t(e,r),!1})}function map(e,t){var r=isList(e)?[]:{};return pluck(e,function(e,n){return r[n]=t(e,n),!1}),r}function pluck(e,t){if(isList(e)){for(var r=0;r<e.length;r++)if(t(e[r],r))return e[r]}else for(var n in e)if(e.hasOwnProperty(n)&&t(e[n],n))return e[n]}function isList(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length}function isFunction(e){return e&&"[object Function]"==={}.toString.call(e)}function isObject(e){return e&&"[object Object]"==={}.toString.call(e)}var slice$1=util.slice,pluck$1=util.pluck,each$1=util.each,bind$1=util.bind,create$1=util.create,isList$1=util.isList,isFunction$1=util.isFunction,isObject$1=util.isObject,storeEngine={createStore:_createStore},storeAPI={version:"2.0.12",enabled:!1,get:function(e,t){var r=this.storage.read(this._namespacePrefix+e);return this._deserialize(r,t)},set:function(e,t){return void 0===t?this.remove(e):(this.storage.write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this.storage.remove(this._namespacePrefix+e)},each:function(e){var t=this;this.storage.each(function(r,n){e.call(t,t._deserialize(r),(n||"").replace(t._namespaceRegexp,""))})},clearAll:function(){this.storage.clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},createStore:function(){return _createStore.apply(this,arguments)},addPlugin:function(e){this._addPlugin(e)},namespace:function(e){return _createStore(this.storage,this.plugins,e)}};function _warn(){var e="undefined"==typeof console?null:console;e&&(e.warn?e.warn:e.log).apply(e,arguments)}function _createStore(e,t,r){r||(r=""),e&&!isList$1(e)&&(e=[e]),t&&!isList$1(t)&&(t=[t]);var n=r?"__storejs_"+r+"_":"",o=r?new RegExp("^"+n):null;if(!/^[a-zA-Z0-9_\-]*$/.test(r))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var i=create$1({_namespacePrefix:n,_namespaceRegexp:o,_testStorage:function(e){try{var t="__storejs__test__";e.write(t,t);var r=e.read(t)===t;return e.remove(t),r}catch(e){return!1}},_assignPluginFnProp:function(e,t){var r=this[t];this[t]=function(){var t=slice$1(arguments,0),n=this;var o=[function(){if(r)return each$1(arguments,function(e,r){t[r]=e}),r.apply(n,t)}].concat(t);return e.apply(n,o)}},_serialize:function(e){return JSON.stringify(e)},_deserialize:function(e,t){if(!e)return t;var r="";try{r=JSON.parse(e)}catch(t){r=e}return void 0!==r?r:t},_addStorage:function(e){this.enabled||this._testStorage(e)&&(this.storage=e,this.enabled=!0)},_addPlugin:function(e){var t=this;if(isList$1(e))each$1(e,function(e){t._addPlugin(e)});else if(!pluck$1(this.plugins,function(t){return e===t})){if(this.plugins.push(e),!isFunction$1(e))throw new Error("Plugins must be function values that return objects");var r=e.call(this);if(!isObject$1(r))throw new Error("Plugins must return an object of function properties");each$1(r,function(r,n){if(!isFunction$1(r))throw new Error("Bad plugin property: "+n+" from plugin "+e.name+". Plugins should only return functions.");t._assignPluginFnProp(r,n)})}},addStorage:function(e){_warn("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(e)}},storeAPI,{plugins:[]});return i.raw={},each$1(i,function(e,t){isFunction$1(e)&&(i.raw[t]=bind$1(i,e))}),each$1(e,function(e){i._addStorage(e)}),each$1(t,function(e){i._addPlugin(e)}),i}var Global$1=util.Global,localStorage_1={name:"localStorage",read:read,write:write,each:each$2,remove:remove,clearAll:clearAll};function localStorage(){return Global$1.localStorage}function read(e){return localStorage().getItem(e)}function write(e,t){return localStorage().setItem(e,t)}function each$2(e){for(var t=localStorage().length-1;t>=0;t--){var r=localStorage().key(t);e(read(r),r)}}function remove(e){return localStorage().removeItem(e)}function clearAll(){return localStorage().clear()}var Global$2=util.Global,oldFFGlobalStorage={name:"oldFF-globalStorage",read:read$1,write:write$1,each:each$3,remove:remove$1,clearAll:clearAll$1},globalStorage=Global$2.globalStorage;function read$1(e){return globalStorage[e]}function write$1(e,t){globalStorage[e]=t}function each$3(e){for(var t=globalStorage.length-1;t>=0;t--){var r=globalStorage.key(t);e(globalStorage[r],r)}}function remove$1(e){return globalStorage.removeItem(e)}function clearAll$1(){each$3(function(e,t){delete globalStorage[e]})}var Global$3=util.Global,oldIEUserDataStorage={name:"oldIE-userDataStorage",write:write$2,read:read$2,each:each$4,remove:remove$2,clearAll:clearAll$2},storageName="storejs",doc=Global$3.document,_withStorageEl=_makeIEStorageElFunction(),disable=(Global$3.navigator?Global$3.navigator.userAgent:"").match(/ (MSIE 8|MSIE 9|MSIE 10)\./);function write$2(e,t){if(!disable){var r=fixKey(e);_withStorageEl(function(e){e.setAttribute(r,t),e.save(storageName)})}}function read$2(e){if(!disable){var t=fixKey(e),r=null;return _withStorageEl(function(e){r=e.getAttribute(t)}),r}}function each$4(e){_withStorageEl(function(t){for(var r=t.XMLDocument.documentElement.attributes,n=r.length-1;n>=0;n--){var o=r[n];e(t.getAttribute(o.name),o.name)}})}function remove$2(e){var t=fixKey(e);_withStorageEl(function(e){e.removeAttribute(t),e.save(storageName)})}function clearAll$2(){_withStorageEl(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(storageName);for(var r=t.length-1;r>=0;r--)e.removeAttribute(t[r].name);e.save(storageName)})}var forbiddenCharsRegex=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function fixKey(e){return e.replace(/^\d/,"___$&").replace(forbiddenCharsRegex,"___")}function _makeIEStorageElFunction(){if(!doc||!doc.documentElement||!doc.documentElement.addBehavior)return null;var e,t,r;try{(t=new ActiveXObject("htmlfile")).open(),t.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></iframe>'),t.close(),e=t.w.frames[0].document,r=e.createElement("div")}catch(t){r=doc.createElement("div"),e=doc.body}return function(t){var n=[].slice.call(arguments,0);n.unshift(r),e.appendChild(r),r.addBehavior("#default#userData"),r.load(storageName),t.apply(this,n),e.removeChild(r)}}var Global$4=util.Global,trim$1=util.trim,cookieStorage={name:"cookieStorage",read:read$3,write:write$3,each:each$5,remove:remove$3,clearAll:clearAll$3},doc$1=Global$4.document;function read$3(e){if(!e||!_has(e))return null;var t="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(doc$1.cookie.replace(new RegExp(t),"$1"))}function each$5(e){for(var t=doc$1.cookie.split(/; ?/g),r=t.length-1;r>=0;r--)if(trim$1(t[r])){var n=t[r].split("="),o=unescape(n[0]);e(unescape(n[1]),o)}}function write$3(e,t){e&&(doc$1.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")}function remove$3(e){e&&_has(e)&&(doc$1.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function clearAll$3(){each$5(function(e,t){remove$3(t)})}function _has(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(doc$1.cookie)}var Global$5=util.Global,sessionStorage_1={name:"sessionStorage",read:read$4,write:write$4,each:each$6,remove:remove$4,clearAll:clearAll$4};function sessionStorage(){return Global$5.sessionStorage}function read$4(e){return sessionStorage().getItem(e)}function write$4(e,t){return sessionStorage().setItem(e,t)}function each$6(e){for(var t=sessionStorage().length-1;t>=0;t--){var r=sessionStorage().key(t);e(read$4(r),r)}}function remove$4(e){return sessionStorage().removeItem(e)}function clearAll$4(){return sessionStorage().clear()}var memoryStorage_1={name:"memoryStorage",read:read$5,write:write$5,each:each$7,remove:remove$5,clearAll:clearAll$5},memoryStorage={};function read$5(e){return memoryStorage[e]}function write$5(e,t){memoryStorage[e]=t}function each$7(e){for(var t in memoryStorage)memoryStorage.hasOwnProperty(t)&&e(memoryStorage[t],t)}function remove$5(e){delete memoryStorage[e]}function clearAll$5(e){memoryStorage={}}var all=[localStorage_1,oldFFGlobalStorage,oldIEUserDataStorage,cookieStorage,sessionStorage_1,memoryStorage_1],_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};"object"!==("undefined"==typeof JSON?"undefined":_typeof(JSON))&&(JSON={}),function(){var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var r,n,o,i,a,s=gap,c=t[e];switch(c&&"object"===(void 0===c?"undefined":_typeof(c))&&"function"==typeof c.toJSON&&(c=c.toJSON(e)),"function"==typeof rep&&(c=rep.call(t,e,c)),void 0===c?"undefined":_typeof(c)){case"string":return quote(c);case"number":return isFinite(c)?String(c):"null";case"boolean":case"null":return String(c);case"object":if(!c)return"null";if(gap+=indent,a=[],"[object Array]"===Object.prototype.toString.apply(c)){for(i=c.length,r=0;r<i;r+=1)a[r]=str(r,c)||"null";return o=0===a.length?"[]":gap?"[\n"+gap+a.join(",\n"+gap)+"\n"+s+"]":"["+a.join(",")+"]",gap=s,o}if(rep&&"object"===(void 0===rep?"undefined":_typeof(rep)))for(i=rep.length,r=0;r<i;r+=1)"string"==typeof rep[r]&&(o=str(n=rep[r],c))&&a.push(quote(n)+(gap?": ":":")+o);else for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(o=str(n,c))&&a.push(quote(n)+(gap?": ":":")+o);return o=0===a.length?"{}":gap?"{\n"+gap+a.join(",\n"+gap)+"\n"+s+"}":"{"+a.join(",")+"}",gap=s,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=t,t&&"function"!=typeof t&&("object"!==(void 0===t?"undefined":_typeof(t))||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(e,t){var r,n,o=e[t];if(o&&"object"===(void 0===o?"undefined":_typeof(o)))for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(void 0!==(n=walk(o,r))?o[r]=n:delete o[r]);return reviver.call(e,t,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();var json2$1=json2Plugin;function json2Plugin(){return{}}var plugins=[json2$1],store_legacy=storeEngine.createStore(all,plugins),state={bundle:"",headHtml:"",isTree:!0,isInfo:!0,pi:0,ci:0,figures:[],figuresOpen:[],title:"Fig"},actions={initState:function(e){return function(t){for(var r=store_legacy.get(STORAGE_KEY),n=e.bundle,o=t.isTree,i=t.isInfo,a=t.pi,s=t.ci,c=[],l=0;l<e.figures.length;l++)c[l]=!0;var u=e.title||t.title;r&&(o=r.isTree,i=r.isInfo,c.length==e.figures.length&&r.figuresOpen&&(c=r.figuresOpen),e.figures[r.pi]&&e.figures[r.pi].list[r.ci]&&(a=r.pi,s=r.ci));for(var f=location.search.substring(1).split("&"),p={},h=0;f[h];h++){var d=f[h].split("=");p[d[0]]=d[1]}p.pi&&p.ci&&e.figures[p.pi]&&e.figures[p.pi].list[p.ci]&&(a=p.pi,s=p.ci);var g=Object.assign({},t,{bundle:n,headHtml:e.headHtml,isTree:o,isInfo:i,pi:a,ci:s,figures:e.figures,figuresOpen:c,title:u});return store_legacy.set(STORAGE_KEY,g),g}},changeTree:function(e){return function(t){var r=Object.assign({},t,{pi:e[0],ci:e[1]});return store_legacy.set(STORAGE_KEY,r),window.history.pushState({},null,"?pi="+e[0]+"&ci="+e[1]),r}},toggleTree:function(){return function(e){var t=Object.assign({},e,{isTree:!e.isTree,isInfo:e.isInfo});return store_legacy.set(STORAGE_KEY,t),t}},toggleTreeAccordion:function(e){return function(t){var r=t.figuresOpen;r[e]=!r[e];var n=Object.assign({},t,{figuresOpen:r});return store_legacy.set(STORAGE_KEY,n),n}},toggleInfo:function(){return function(e){var t=Object.assign({},e,{isTree:e.isTree,isInfo:!e.isInfo});return store_legacy.set(STORAGE_KEY,t),t}},moveFocusedTag:function(e){return function(t){var r=t.pi,n="up"===e?t.ci-1:t.ci+1;n<0?t.pi-1<0?(r=t.pi,n=t.ci):(r-=1,n=t.figures[t.pi-1].list.length-1):n>t.figures[t.pi].list.length-1&&(t.pi+1>t.figures.length-1?(r=t.pi,n=t.ci):(r+=1,n=0));var o=Object.assign({},t,{pi:r,ci:n});return store_legacy.set(STORAGE_KEY,o),window.history.pushState({},null,"?pi="+r+"&ci="+n),o}},openTreeAccordion:function(e){return function(t){var r=t.figuresOpen;r[t.pi]=e;var n=Object.assign({},t,{figuresOpen:r});return store_legacy.set(STORAGE_KEY,n),n}}};mousetrap.bind(KEY_EVENTS.TOGGLE_INFO,function(){main.toggleInfo()}),mousetrap.bind(KEY_EVENTS.TOGGLE_TREE,function(){main.toggleTree()}),mousetrap.bind(KEY_EVENTS.MOVE_DOWN,function(e){e.preventDefault(),main.moveFocusedTag("down")}),mousetrap.bind(KEY_EVENTS.MOVE_UP,function(e){e.preventDefault(),main.moveFocusedTag("up")}),mousetrap.bind(KEY_EVENTS.MOVE_LEFT,function(e){e.preventDefault(),main.openTreeAccordion(!1)}),mousetrap.bind(KEY_EVENTS.MOVE_RIGHT,function(e){e.preventDefault(),main.openTreeAccordion(!0)});var view=function(e,t){return h(FigApp,{state:e,actions:t})},main=void 0;window.addEventListener("DOMContentLoaded",function(){main=app(state,actions,view,document.body),fetch("fig.config.json").then(function(e){return e.json()}).then(function(e){main.initState(e)})})}();
