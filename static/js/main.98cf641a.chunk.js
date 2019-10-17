(window["webpackJsonpprocess-component"]=window["webpackJsonpprocess-component"]||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(9),o=n.n(a),c=(n(15),n(3)),u=n(1),l=n(5),s=n(6),f=n(2),d=n.n(f),h=function(e){return m(d.a.pick(e,["id","value","before"]))},v=function(){function e(t){Object(l.a)(this,e),this.graph=t,this._itemMap=void 0,this._isCycle=void 0,this._isLinear=void 0}return Object(s.a)(e,[{key:"getStarts",value:function(){return this.graph.filter((function(e){return 0===e.before.length}))}},{key:"getEnds",value:function(){return this.graph.filter((function(e){return!e.next||0===e.next.length}))}},{key:"getNormalizedGraph",value:function(){return this.graph.map(h)}},{key:"topologicalSort",value:function(){for(var e=this,t=[],n=new Set(this.graph.map((function(e){return e.id}))),r=function r(i){if(i&&n.has(i.id)){if(!i.before||0===i.before.length||i.before.every((function(e){return!n.has(e)})))return t.push(i),void n.delete(i.id);i.before.forEach((function(t){return r(e.get(t))})),t.push(i),n.delete(i.id)}};0!==n.size;)r(this.get(n.keys().next().value));return t}},{key:"calDepth",value:function(){var e=this,t=this.topologicalSort();return t.forEach((function(t){t.depth=Math.max.apply(Math,[0].concat(Object(c.a)(t.before.map((function(t){return e.get(t).depth+1})))))})),t}},{key:"calReverseRefs",value:function(){var e=this;this.graph.forEach((function(t){t.before.forEach((function(n){e.get(n)&&(e.get(n).next?e.get(n).next.push(t):e.get(n).next=[t])}))}))}},{key:"get",value:function(e){return this.itemMap.get(e)}},{key:"getDeps",value:function(e){var t=this,n=function(e){return null!=e.id}(e)?e:this.get(e);if(!n.deps){var r=n.before.map((function(e){return t.getDeps(e)}));n.deps=d.a.union([].concat(Object(c.a)(n.before),Object(c.a)(d.a.flatten(r))))}return n.deps}},{key:"calAllDeps",value:function(){var e=this;this.graph.forEach((function(t){return e.getDeps(t)}))}},{key:"checkCycle",value:function(){var e=this;if(null!=this._isCycle)return this._isCycle;if(0===this.graph.length)return this._isCycle=!1;this.calReverseRefs();var t=this.getStarts();if(0===t.length)return this._isCycle=!0;return this._isCycle=t.every((function(t){return!function t(n,r){if(r.includes(n))return!0;r.push(n);var i=!0,a=!1,o=void 0;try{for(var c,u=n.before[Symbol.iterator]();!(i=(c=u.next()).done);i=!0){var l=c.value;if(t(e.get(l),r))return!0}}catch(s){a=!0,o=s}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r.pop(),!1}(t,[])}))}},{key:"isLinear",value:function(){if(null!=this._isLinear)return this._isLinear;if(this.checkCycle())return this._isLinear=!1;if(0===this.graph.length)return this._isLinear=!1;this.calReverseRefs();var e=this.getStarts();if(1!==e.length)return this._isLinear=!1;var t=0;return function e(n){return t+=1,n.next&&1===n.next.length?e(n.next[0]):!(n.next&&n.next.length>1)}(e[0])?this._isLinear=t===this.graph.length:this._isLinear=!1}},{key:"checkRepeatDependence",value:function(e){if(0!==this.graph.length)if(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.before[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,c=this.getDeps(o),u=d.a.intersection(c,e.before);if(u.length>0)return[e,this.get(o),u]}}catch(b){n=!0,r=b}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}else{var l=!0,s=!1,f=void 0;try{for(var h,v=this.graph[Symbol.iterator]();!(l=(h=v.next()).done);l=!0){var m=h.value,p=this.checkRepeatDependence(m);if(p)return p}}catch(b){s=!0,f=b}finally{try{l||null==v.return||v.return()}finally{if(s)throw f}}}}},{key:"getAvailableTarget",value:function(e,t){var n=this;if(1===this.graph.length)return[];var r=this.get(e);this.calReverseRefs();var i=new Set(this.graph.map((function(e){return e.id})));if(t){var a=function t(n){n.next&&0!==n.next.length&&n.next.forEach((function(n){n.before.forEach((function(t){t!==e&&i.delete(t)})),i.delete(n.id),t(n)}))};a(r);!function(e){e.before.forEach((function(e){var t=n.get(e);a(t)}))}(r),this.getDeps(r).forEach((function(e){i.delete(e)}))}else{!function e(t){t.before.forEach((function(r){i.delete(r);var a=n.get(r);a.next&&a.next.forEach((function(e){e!==t&&i.delete(e.id)})),e(a)}))}(r);!function t(n){n.next&&n.next.forEach((function(n){i.delete(n.id),n.before.forEach((function(t){t!==e&&i.delete(t)})),t(n)}))}(r)}return i.delete(e),Array.from(i.keys())}},{key:"itemMap",get:function(){return this._itemMap||(this._itemMap=p(this.graph)),this._itemMap}}]),e}(),m=function e(t){if(Array.isArray(t))return t.map(e);if("object"===typeof t){var n={};for(var r in t)n[r]=e(t[r]);return n}return t},p=function(e){var t=new Map;return e.forEach((function(e){t.set(e.id,e)})),t},b=function(e){var t=m(e),n=new v(t);n.calReverseRefs(),n.calDepth();var r=n.getStarts(),i=[];return r.forEach((function(e){!function e(t){null==t.order&&(t.next&&t.next.length>0?t.next.forEach((function(n){if(e(n),null==t.order){for(var r,a=t.depth;a<n.depth;a+=1)null!=i[a]&&(null==r||i[a]>r)&&(r=i[a]);t.order=null!=r?r+1:0;for(var o=t.depth;o<n.depth;o+=1)(null==i[o]||t.order>i[o])&&(i[o]=t.order)}})):i[t.depth]=t.order=null!=i[t.depth]?i[t.depth]+1:0)}(e)})),{items:t,column:Math.max.apply(Math,Object(c.a)(t.map((function(e){return e.depth}))))+1,row:Math.max.apply(Math,i)+1}},y=function(e,t){for(var n=Array.from({length:e},(function(e,t){return{id:t,value:{title:t.toString()},before:[]}})),r=0;r<t;r+=1){var i=Math.random()*e<<0,a=i+Math.random()*(e-i)<<0;i!==a&&n[a].before.push(i)}return n},g=function(e,t,n){var r=m(e),i=r.find((function(e){return e.id===n}));return i?i.before.includes(t)?r:(i.before.push(t),r):r},O=function(e,t){var n=m(e),r={id:e.reduce((function(e,t){return e>t.id?e:t.id}),0)+1,value:t,before:[]};return n.push(r),[n,r]},j=n(7),x=n(4),w=function(e,t){return Object(r.useCallback)((function(n){n.stopPropagation(),e(t)}),[e].concat(Object(c.a)(Object.values(t))))},E=function(e,t){Object(r.useEffect)((function(){return document.addEventListener(e,t),function(){return document.removeEventListener(e,t)}}),[t])},k=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return"string"===typeof e?e:d.a.keys(d.a.pickBy(e)).join(" ")})).join(" ")};function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var L=function(e,t,n){var r=e.title,a=e.color;return i.a.createElement("div",Object.assign({className:k("component-process-card",{"component-process-not-available":n.notAvailable,"component-process-card-hover-show-remove":!n.showDynamicLine&&n.hover})},n),i.a.createElement("span",{style:{color:a,fontWeight:"bold"}},r),i.a.createElement("div",{className:"component-process-card-remove"},"\u70b9\u51fb\u79fb\u9664"))},C=function(e){var t=e.width,n=e.height,a=e.pos,o=void 0===a?G:a,u=(e.color,e.item),l=(e.margin,Object(x.a)(e,["width","height","pos","color","item","margin"])),s=Object(r.useContext)(U),f=s.onMouseEnter,d=s.onMouseLeave,h=s.onMouseUp,v=s.onClick,m=s.availableTarget,p=s.showDynamicLine,b=s.mouseOnItem,y=s.renderItem,g={item:u,type:"label"},O=w(f,g),E=w(d,g),k=w(h,g),C=w(v,g),S=Object(r.useMemo)((function(){return p&&!m.includes(u.id)}),[p,m]),D={hover:!!b&&b.id===u.id,notAvailable:S,showDynamicLine:p,onMouseEnter:O,onMouseLeave:E,onClick:C},A=y||L,R=Object(r.useMemo)((function(){return(e=A)&&e.length<2?Object(r.createElement)(A,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({item:u,value:u.value},D)):A(u.value,u,D);var e}),[A,u.value,u].concat(Object(c.a)(Object.values(D))));return i.a.createElement("g",Object.assign({transform:"matrix(1,0,0,1,".concat(o.x,",").concat(o.y,")"),onMouseUp:k},l),i.a.createElement("foreignObject",{width:t,height:n},R))},S=function(e){var t=e.radius,n=e.pos,a=e.name,o=e.item,c=Object(x.a)(e,["radius","pos","name","item"]),u=Object(r.useContext)(U),l=u.hoverShowAddBtn,s=u.showDynamicLine,f=u.onMouseUp,d=u.onMouseDown,h=u.onMouseEnter,v=u.onMouseLeave,m=u.mouseOnItem,p={pos:n,name:a,item:o,type:"add-btn"},b=w(f,p),y=w(d,p),g=w(h,p),O=w(v,p);if(l){if(s)return null;if(m!==o)return null}return i.a.createElement("g",Object.assign({transform:"matrix(1,0,0,1,".concat(n.x-t,",").concat(n.y-t,")"),onMouseUp:b,onMouseDown:y,onMouseEnter:g,onMouseLeave:O},c),i.a.createElement("foreignObject",{width:20,height:20},i.a.createElement("div",{className:"component-process-add-btn"},"+")))},D=(n(18),function(e){var t=e.a,n=e.b,r=e.color,a=void 0===r?"#A3B1BF":r,o=(Object(x.a)(e,["a","b","color"]),Math.cos),c=Math.sin,u=(0,Math.atan2)(n.y-t.y,n.x-t.x),l=[o(u),c(u)],s=l[0],f=l[1],d=[s,f,-f,s,n.x,n.y].map((function(e){return e.toFixed(6)}));return i.a.createElement("path",{d:"M -10 4L 0 0L -10 -4A 12 12 0 0 1 -10 4Z",fill:a,transform:"matrix(".concat(d.join(","),")")})}),A=function(e){var t=e.a,n=e.b,a=e.color,o=void 0===a?"#A3B1BF":a,c=e.curve,l=void 0!==c&&c,s=e.nodes,f=void 0===s?[]:s,d=e.border,h=void 0===d||d,v=e.sourceItem,m=e.targetItem,p=Object(x.a)(e,["a","b","color","curve","nodes","border","sourceItem","targetItem"]),b=Object(r.useRef)(null),y=Object(r.useState)(!1),g=Object(u.a)(y,2),O=g[0],j=g[1],w=Object(r.useContext)(U),E=w.clickToRemove,k=w.showArrow,M=w.onClickLine;Object(r.useEffect)((function(){var e=function(){return j(!0)},t=function(){return j(!1)};return b.current&&E&&(b.current.addEventListener("mouseenter",e),b.current.addEventListener("mouseleave",t)),function(){b.current&&(b.current.removeEventListener("mouseenter",e),b.current.removeEventListener("mouseleave",t))}}),[b.current,E]),t&&f.push(t),n&&f.push(n);var L=Object(r.useMemo)((function(){if(l){var e=Object(u.a)(f,2),t=e[0],n=e[1],r={x:(t.x+n.x)/2,y:(t.y+n.y)/2},i={x:(t.x+r.x)/2,y:t.y};return["M",t.x,t.y,"Q",i.x+8,i.y,r.x,r.y,"T",n.x-8,n.y,"L",n.x,n.y].join(" ")}for(var a=[],o=0;o<f.length-1;o+=1){var c=[f[o],f[o+1]],s=c[0],d=c[1];a.push("M".concat(s.x,",").concat(s.y,"L").concat(d.x,",").concat(d.y))}return a.join("")}),[f,t,n]),C=f.slice(),S=C.pop(),A=C.pop();return i.a.createElement("g",Object.assign({ref:b,onClick:function(e){e.stopPropagation(),M(v,m)}},p),h&&i.a.createElement("path",{key:"outerline",d:L,stroke:"white",strokeWidth:6,fill:"none"}),i.a.createElement("path",{key:"line",d:L,stroke:O?"red":o,strokeWidth:2,fill:"none",markerEnd:k?"url(#arrow)":void 0}),k&&k&&i.a.createElement(D,{a:A,b:S,color:O?"red":o}))},R=function(){var e=Object(r.useContext)(U),t=e.svg,n=e.showDynamicLine,a=e.dynamicLineStartPos,o=function(e){var t=Object(r.useRef)(0),n=Object(r.useState)({docX:0,docY:0,posX:0,posY:0,elX:0,elY:0,elH:0,elW:0}),i=Object(u.a)(n,2),a=i[0],o=i[1];return Object(r.useEffect)((function(){var n=function(n){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){if(e&&e.current){var t=e.current.getBoundingClientRect(),r=t.left,i=t.top,a=t.width,c=t.height,u=r+window.pageXOffset,l=i+window.pageYOffset,s=n.pageX-u,f=n.pageY-l;o({docX:n.pageX,docY:n.pageY,posX:u,posY:l,elX:s,elY:f,elH:c,elW:a})}}))};return document.addEventListener("mousemove",n),function(){cancelAnimationFrame(t.current),document.removeEventListener("mousemove",n)}}),[e.current]),a}(t);return n?i.a.createElement(A,{a:a,b:{x:o.elX,y:o.elY},border:!1,className:"no-transition no-mouse-events"}):null},P=function(){function e(){Object(l.a)(this,e),this.data={}}return Object(s.a)(e,[{key:"set",value:function(e,t){var n=Object.keys(e).sort().map((function(t){return e[t]}));d.a.set(this.data,n,t)}},{key:"get",value:function(e){var t=Object.keys(e).sort().map((function(t){return e[t]}));return d.a.get(this.data,t)}}]),e}(),I=function(e){return d.a.mapValues(e,(function(e){return 4*+e+1}))},B=function(e){return{x:e.depth,y:e.order}},W=function(e,t,n){if(e.x===t.x)for(var r=e.y<t.y?[e.y,t.y]:[t.y,e.y],i=Object(u.a)(r,2),a=i[0],o=i[1],c=a;c<o+1;c+=1){n({x:e.x,y:c})}if(e.y===t.y)for(var l=e.x<t.x?[e.x,t.x]:[t.x,e.x],s=Object(u.a)(l,2),f=s[0],d=s[1],h=f;h<d+1;h+=1){n({x:h,y:e.y})}},T=function(e,t){var n=function(e){var t=[],n=[];return e.forEach((function(e){e.next&&0!==e.next.length&&e.next.forEach((function(r){n.push([e,r]);var i=[e,r].map(B).map(I),a=Object(u.a)(i,2),o=a[0],c=a[1];if(r.order===e.order){var l={x:o.x+1,y:o.y},s={x:c.x-1,y:c.y};t.push([l,s])}else if(r.order>e.order){var f={x:o.x+1,y:o.y},d={x:o.x+2,y:o.y},h={x:o.x+2,y:c.y},v={x:c.x-1,y:c.y};t.push([f,d,h,v])}else{var m={x:o.x+1,y:o.y},p={x:c.x-2,y:o.y},b={x:c.x-2,y:c.y},y={x:c.x-1,y:c.y};t.push([m,p,b,y])}}))})),[t,n]}(e),r=Object(u.a)(n,2),i=r[0],a=r[1],o=new P,c=new P;i.forEach((function(e){for(var t=0;t<e.length-1;t+=1){var n=[e[t],e[t+1]],r=n[0],i=n[1];if(r.x===i.x)for(var a=r.y<i.y?[r.y,i.y]:[i.y,r.y],l=Object(u.a)(a,2),s=l[0],f=l[1],d=s;d<f+1;d+=1){var h={x:r.x,y:d},v=o.get(h);o.set(h,null==v?1:v+1)}if(r.y===i.y)for(var m=r.x<i.x?[r.x,i.x]:[i.x,r.x],p=Object(u.a)(m,2),b=p[0],y=p[1],g=b;g<y+1;g+=1){var O={x:g,y:r.y},j=c.get(O);c.set(O,null==j?1:j+1)}}}));var l=[],s=new P,f=new P,h=t.opt.lineWidth,v=function(e,t,n,r,i){if(r){var a=function(){for(var e=0,i=function(){var i=[];if(W(n,r,(function(n){var r=t.get(n)||[];i.push(!r[e])})),i.every((function(e){return e})))return{v:e};var a=[];if(W(n,r,(function(n){var r=t.get(n)||[];a.push(!r[-e])})),a.every((function(e){return e})))return{v:-e};e+=1};;){var a=i();if("object"===typeof a)return a.v}}();return W(n,r,(function(e){var n=t.get(e)||[];n[a]=!0,t.set(e,n)})),a*h}var o=t.get(n)||[],c=function(e){for(var t=0;;){if(!e[t])return t;if(!e[-t])return-t;t+=1}}(o);return o[c]=!0,t.set(n,o),c*h},m=function(e){var n,r,i,a=(n=e,d.a.mapValues(n,(function(e){return+e/4<<0})));if(e.x%4===0){var o=t.calItemPosition(a.x,a.y);return t.calItemLeftMid(o)}if(e.x%4===2){var c=t.calItemPosition(a.x,a.y);return t.calItemRightMid(c)}return r=t.calItemRightMid(t.calItemPosition(a.x,a.y)),i=t.calItemLeftMid(t.calItemPosition(a.x+1,a.y)),{x:(r.x+i.x)/2,y:(r.y+i.y)/2}};return i.forEach((function(e){for(var t,n=[],r=0;r<e.length-1;r+=1){var i=[e[r],e[r+1],e[r+2]],a=i[0],o=i[1],c=i[2];if(a.x===o.x){var u=v(0,f,o,c),d=t={x:t.x,y:m(o).y+u};n.push(d)}if(a.y===o.y){if(0===r){var h=v(0,f,a,o),p=t={x:m(a).x,y:m(a).y+h};n.push(p)}if(r===e.length-2){var b=t={x:m(o).x,y:t.y};n.push(b)}else{var y=v(0,s,o,c),g=t={x:m(o).x+y,y:t.y};n.push(g)}}}l.push(n)})),[l,a]};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var X={itemWidth:200,itemHeight:44,itemMargin:0,itemSpacing:40,addBtnRadius:10,lineWidth:5,paddingX:50,paddingY:50},Y=function(){function e(t){Object(l.a)(this,e),this.opt=void 0,this.opt=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},X,{},t)}return Object(s.a)(e,[{key:"getMinimumContainerBounding",value:function(e,t){return{width:this.itemWidth*e+this.itemSpacing*(e-1)+2*this.opt.paddingX,height:this.itemHeight*t+this.itemSpacing*(t-1)+2*this.opt.paddingY}}},{key:"calItemPosition",value:function(e,t){return{x:this.opt.paddingX+(this.opt.itemWidth+this.opt.itemSpacing)*e,y:(this.opt.itemHeight+this.opt.itemSpacing)*t+this.opt.paddingY}}},{key:"calItemLeftMid",value:function(e){var t=e.x,n=e.y;return{x:t+this.opt.itemMargin,y:n+this.opt.itemHeight/2}}},{key:"calItemRightMid",value:function(e){var t=e.x,n=e.y;return{x:t+this.opt.itemWidth-this.opt.itemMargin,y:n+this.opt.itemHeight/2}}},{key:"itemWidth",get:function(){return this.opt.itemWidth}},{key:"itemHeight",get:function(){return this.opt.itemHeight}},{key:"itemMargin",get:function(){return this.opt.itemMargin}},{key:"itemSpacing",get:function(){return this.opt.itemSpacing}}]),e}();function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G={x:0,y:0},N=function(e,t,n){var r=n.curve,a=void 0!==r&&r,o=[],c={},u=!0,l=!1,s=void 0;try{for(var f,d=e[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var h=f.value;if(h.next){var v=!0,m=!1,p=void 0;try{for(var b,y=h.next[Symbol.iterator]();!(v=(b=y.next()).done);v=!0){var g=b.value,O="line-"+h.id+"-"+g.id;c[O]||(c[O]=!0,o.push(i.a.createElement(A,{curve:a,key:O,a:h.cardRightMid,b:g.cardLeftMid,sourceItem:h,targetItem:g})))}}catch(j){m=!0,p=j}finally{try{v||null==y.return||y.return()}finally{if(m)throw p}}}}}catch(j){l=!0,s=j}finally{try{u||null==d.return||d.return()}finally{if(l)throw s}}return o},V={editable:!1,clickToRemove:!1,showDynamicLine:!1,showArrow:!0,hoverShowAddBtn:!0,dynamicLineStartPos:G,onClick:d.a.noop,onClickLine:d.a.noop,onMouseUp:d.a.noop,onMouseDown:d.a.noop,onMouseEnter:d.a.noop,onMouseLeave:d.a.noop,availableTarget:[],mouseOnItem:null,svg:Object(r.createRef)()},U=Object(r.createContext)(V),z=function(e){var t=e.layoutOption,n=e.labelLayoutAlgo,a=void 0===n?"relax":n,o=e.lineStyle,l=void 0===o?"polyline":o,s=(e.showTwoSides,e.showAddBtn),f=void 0!==s&&s,h=e.hoverShowAddBtn,p=void 0!==h&&h,y=e.showArrow,g=void 0!==y&&y,O=e.showBackground,j=void 0!==O&&O,w=e.editable,M=void 0!==w&&w,L=e.drawLine,D=void 0!==L&&L,P=e.clickToRemove,I=void 0!==P&&P,B=e.onClickLabel,W=void 0===B?d.a.noop:B,_=e.onClickAdd,X=void 0===_?d.a.noop:_,H=e.onClickLine,z=void 0===H?d.a.noop:H,J=e.onStatusChange,K=void 0===J?d.a.noop:J,q=e.onDrawLine,Q=void 0===q?d.a.noop:q,Z=e.minWidth,$=e.minHeight,ee=e.width,te=e.height,ne=e.renderItem,re=e.graph,ie=Object(x.a)(e,["layoutOption","labelLayoutAlgo","lineStyle","showTwoSides","showAddBtn","hoverShowAddBtn","showArrow","showBackground","editable","drawLine","clickToRemove","onClickLabel","onClickAdd","onClickLine","onStatusChange","onDrawLine","minWidth","minHeight","width","height","renderItem","graph"]),ae=Object(r.useRef)(null),oe=Object(r.useReducer)((function(e,t){return F({},e,{},t)}),F({},V,{svg:ae,onClickLine:z,showArrow:g,availableTarget:[],mouseOnItem:null,showDynamicLine:!1,dynamicLineStartPos:G})),ce=Object(u.a)(oe,2),ue=ce[0],le=ce[1],se=Object(r.useMemo)((function(){return"compact"===a?function(e){var t=m(e),n=new v(t);n.calReverseRefs(),n.calDepth();var r=[];return t.forEach((function(e){var t=e.depth;r[t]?r[t].push(e):r[t]=[e],e.order=r[t].length-1})),{items:t,column:r.length,row:Math.max.apply(Math,Object(c.a)(r.map((function(e){return e.length}))))}}(re):"relax"===a?b(re):{}}),[re,a]),fe=se.items,de=se.column,he=se.row,ve=Object(r.useRef)(null),me=Object(r.useRef)(!1),pe=Object(r.useCallback)((function(e){e.item&&le({mouseOnItem:e.item})}),[]),be=Object(r.useCallback)((function(e){le({mouseOnItem:null})}),[]),ye=Object(r.useCallback)((function(e){return"add-btn"===e.type?X(e):"label"===e.type?W(e.item):void 0}),[X,W]),ge=Object(r.useCallback)((function(e){if("add-btn"===e.type&&(le({dynamicLineStartPos:e.pos}),K("mouse-down-add")),ve.current=e,me.current=!0,e.item){var t=function(e,t,n){return new v(m(e)).getAvailableTarget(t,n)}(fe,e.item.id,"left"===e.name);le({availableTarget:t})}}),[fe]),Oe=Object(r.useCallback)((function(e){K("mouse-up"),ue.showDynamicLine?ve.current&&"label"===e.type&&ue.availableTarget.includes(e.item.id)&&("left"===ve.current.name?Q(e,ve.current):Q(ve.current,e)):ye(e),me.current=!1,le({showDynamicLine:!1,availableTarget:[]})}),[me,ve,ue.showDynamicLine,ue.availableTarget]),je=Object(r.useCallback)((function(e){D&&me.current&&le({showDynamicLine:!0})}),[me,ue.mouseDown,D]);E("mousemove",je),E("mouseup",Oe);var xe={editable:M,clickToRemove:I,showArrow:g,onClickLine:z,hoverShowAddBtn:p,onMouseUp:Oe,onMouseDown:ge,onMouseEnter:pe,onMouseLeave:be,onClick:ye,renderItem:ne};Object(r.useEffect)((function(){return le(xe)}),Object.values(xe));var we=Object(r.useMemo)((function(){return new Y(t)}),[t]),Ee=Object(r.useMemo)((function(){var e=[];return e.push(function(e,t){return e.map((function(e){var n=t.calItemPosition(e.depth,e.order),r=i.a.createElement(C,{width:t.itemWidth,height:t.itemHeight,margin:t.itemMargin,key:"label-"+e.id,pos:n,item:e});return e.cardLeftMid=t.calItemLeftMid(n),e.cardRightMid=t.calItemRightMid(n),r}))}(fe,we)),"polyline"===l?e.push(function(e,t){var n=T(e,t),r=Object(u.a)(n,2),a=r[0],o=r[1];return a.map((function(e,t){return i.a.createElement(A,{nodes:e,key:"line-polyline-"+t,sourceItem:o[t][0],targetItem:o[t][1]})}))}(fe,we)):"line"===l?e.push(N(fe,0,{curve:!1})):"curve"===l&&e.push(N(fe,0,{curve:!0})),M&&(e.push(i.a.createElement(R,{key:"dynamic-line"})),f&&e.push(function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){var l=c.value;n.push(i.a.createElement(S,{key:"add-btn-left-"+l.id,name:"left",pos:l.cardLeftMid,item:l,radius:t.opt.addBtnRadius})),n.push(i.a.createElement(S,{key:"add-btn-right-"+l.id,name:"right",pos:l.cardRightMid,item:l,radius:t.opt.addBtnRadius}))}}catch(s){a=!0,o=s}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(fe,we))),[e,we.getMinimumContainerBounding(de,he)]}),[fe,we,M,f,l]),ke=Object(u.a)(Ee,2),Me=ke[0],Le=ke[1];return i.a.createElement("svg",Object.assign({ref:ae,width:ee||Math.max(Le.width,Z||0),height:te||Math.max(Le.height,$||0),className:k("component-process",{"component-process-background-grid":j})},ie),i.a.createElement(U.Provider,{value:ue},Me))},J=function(e,t){var n=Object(r.useState)(t),a=Object(u.a)(n,2),o=a[0],c=a[1];return[o,i.a.createElement(r.Fragment,null,e,": ",i.a.createElement("input",{type:"checkbox",defaultChecked:o,onChange:function(e){return c(e.target.checked)}}))]},K=function(e){var t=e.initialGraph,n=e.graph,a=Object(r.useState)(t),o=Object(u.a)(a,2),l=o[0],s=o[1];Object(r.useEffect)((function(){n&&s(n)}),[n]);for(var f=[],d={},h=0,v=Object.entries({editable:!0,clickToRemove:!0,showTwoSides:!1,showAddBtn:!0,hoverShowAddBtn:!0,showArrow:!0,showBackground:!1,drawLine:!0});h<v.length;h++){var p=v[h],b=Object(u.a)(p,2),y=b[0],j=b[1],x=J(y,j),w=Object(u.a)(x,2),E=w[0],k=w[1];f.push(k),d[y]=E}var M=Object(r.useState)("relax"),L=Object(u.a)(M,2),C=L[0],S=L[1],D=Object(r.useState)("polyline"),A=Object(u.a)(D,2),R=A[0],P=A[1],I=Object(r.useState)(""),B=Object(u.a)(I,2),W=B[0],T=B[1];return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){var e=l.reduce((function(e,t){return e>t.id?e:t.id}),0)+1,t={id:e,value:{title:e},before:[]};l.push(t),s(Object(c.a)(l))}},"add item")),i.a.createElement("div",null,f),i.a.createElement("div",null,"label layout algorithm: ",i.a.createElement("select",{defaultValue:C,onChange:function(e){return S(e.target.value)}},i.a.createElement("option",{value:"compact"},"compact"),i.a.createElement("option",{value:"relax"},"relax"))),i.a.createElement("div",null,"line style: ",i.a.createElement("select",{defaultValue:R,onChange:function(e){return P(e.target.value)}},i.a.createElement("option",{value:"polyline"},"polyline"),i.a.createElement("option",{value:"line"},"line"),i.a.createElement("option",{value:"curve"},"curve"))),i.a.createElement("div",null,"\u5e2e\u52a9\u4fe1\u606f\uff1a",W)),i.a.createElement("div",null,i.a.createElement(z,Object.assign({layoutOption:{itemMargin:5},labelLayoutAlgo:C,lineStyle:R,graph:l},d,{onDrawLine:function(e,t){console.log("drawline",e,t),s((function(n){return g(n,e.item.id,t.item.id)}))},onClickLine:function(e,t){console.log("clickline",e,t),s((function(n){return function(e,t,n){var r=m(e),i=r.find((function(e){return e.id===n}));return i?(i.before=i.before.filter((function(e){return e!==t})),r):r}(n,e.id,t.id)}))},onClickAdd:function(e){var t=e.item,n=e.name;s((function(e){console.log("clickadd",t);var r=e.reduce((function(e,t){return e>t.id?e:t.id}),0)+1,i=O(e,{title:r}),a=Object(u.a)(i,2),o=a[0],c=a[1],l=o.find((function(e){return e.id===t.id}));return l?("right"===n?c.before.push(l.id):"left"===n&&l.before.push(c.id),o):o}))},onClickLabel:function(e){console.log("clicklabel",e),s((function(t){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=n?e.find((function(e){return e.id===t})).before:[],i=m(e).filter((function(e){return e.id!==t}));return i.filter((function(e){return e.before.includes(t)})).forEach((function(e){e.before=e.before.filter((function(e){return e!==t})).concat(r)})),i}(t,e.id)}))},onStatusChange:function(e){"mouse-down-add"===e?T("\u62d6\u52a8\u521b\u5efa\u4f9d\u8d56\u5173\u7cfb"):"mouse-up"===e&&T("")}}))))};var q=function(){Object(r.useEffect)((function(){document.title="process component demo"}),[]);var e=[["linear case",[{id:"A",value:{title:"A"},before:[]},{id:"B",value:{title:"B"},before:["A"]},{id:"C",value:{title:"C"},before:["B"]},{id:"D",value:{title:"D"},before:["C"]}]],["simple case 0",[{id:1,value:{title:"1"},before:[]},{id:2,value:{title:"2"},before:[1]},{id:3,value:{title:"3"},before:[2]},{id:4,value:{title:"4"},before:[1]},{id:5,value:{title:"5"},before:[2]},{id:6,value:{title:"6"},before:[4]},{id:7,value:{title:"7"},before:[5]},{id:8,value:{title:"8"},before:[2]},{id:9,value:{title:"9"},before:[]},{id:10,value:{title:"10"},before:[3]}]],["simple case 2",[{id:100,value:{title:"start"},before:[]},{id:200,value:{title:"end"},before:[2,6]},{id:0,value:{title:"0"},before:[100]},{id:1,value:{title:"1"},before:[0]},{id:2,value:{title:"2"},before:[1,4,5]},{id:3,value:{title:"3"},before:[0]},{id:4,value:{title:"4"},before:[3]},{id:5,value:{title:"5"},before:[3]},{id:6,value:{title:"6"},before:[100]}]],["test 0",[{id:"A",value:{title:"A"},before:[]},{id:"B",value:{title:"B"},before:["A"]},{id:"C",value:{title:"C"},before:["A"]},{id:"D",value:{title:"D"},before:["B","C"]}]],["test 2",[{id:"A",value:{title:"A"},before:[]},{id:"B",value:{title:"B"},before:["A"]},{id:"C",value:{title:"C"},before:["B","E"]},{id:"D",value:{title:"D"},before:["C"]},{id:"E",value:{title:"E"},before:["F"]},{id:"F",value:{title:"F"},before:[]},{id:"G",value:{title:"G"},before:["C"]}]]],t=Object(r.useState)(e[0][1]),n=Object(u.a)(t,2),a=n[0],o=n[1],l=Object(r.useState)(i.a.createElement(K,{initialGraph:a})),s=Object(u.a)(l,2),f=s[0],d=s[1],h=e.map((function(e){var t=Object(u.a)(e,2),n=t[0],r=t[1];return i.a.createElement("button",{onClick:function(){o(r),d(i.a.createElement(K,{initialGraph:r,graph:Object(c.a)(r)}))}},n)})),v=Object(r.useState)(100),m=Object(u.a)(v,2),p=m[0],b=m[1],g=Object(r.useState)(100),O=Object(u.a)(g,2),j=O[0],x=O[1],w=function(){var e=y(+p,+j);console.log(p,j,e),o(e),d(i.a.createElement(K,{initialGraph:e,graph:Object(c.a)(e)}))};h.push(i.a.createElement("button",{onClick:w},"generate random data"));var E=Object(r.useRef)(null),k=Object(r.useState)(!1),M=Object(u.a)(k,2),L=M[0],C=M[1];return Object(r.useEffect)((function(){if(L){var e=setInterval((function(){w()}),+E.current.value);return function(){return clearInterval(e)}}}),[L]),i.a.createElement("div",null,i.a.createElement("h1",null,"process component demo"),i.a.createElement("div",null,i.a.createElement("a",{href:"https://bytedance.feishu.cn/space/doc/doccnHj8Lu9KFXxKPR78YjzKmDf#"},i.a.createElement("h1",null,"\u6587\u6863"))),i.a.createElement("div",null,i.a.createElement("div",null,"vertex: ",i.a.createElement("input",{type:"number",defaultValue:p,onChange:function(e){return b(e.target.value)}}),"edge: ",i.a.createElement("input",{type:"number",defaultValue:j,onChange:function(e){return x(e.target.value)}})),h,i.a.createElement("div",null,"interval: ",i.a.createElement("input",{defaultValue:"100",ref:E}),i.a.createElement("button",{onClick:function(){C(!L)}},L?"stop":"benchmark"))),i.a.createElement("div",null,i.a.createElement("div",{style:{float:"left",maxWidth:"80%",overflowX:"scroll"}},f),i.a.createElement("div",{style:{float:"right"}},i.a.createElement("div",null,"data:"),i.a.createElement("textarea",{style:{maxWidth:"100%",height:500},value:JSON.stringify(a,null,4)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.98cf641a.chunk.js.map