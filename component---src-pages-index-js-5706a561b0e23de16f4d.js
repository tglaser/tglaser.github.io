(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+22N":function(e,t,l){"use strict";var o=l("dwco"),a=l.n(o),n=l("q1tI"),r=l.n(n);var c=function(e){return e.children},i=function(e){var t,l;function o(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}l=e,(t=o).prototype=Object.create(l.prototype),t.prototype.constructor=t,t.__proto__=l;var n=o.prototype;return n.componentDidMount=function(){a.a.polyfill()},n.handleClick=function(e){e.preventDefault();var t=0,l=!0,o=this.props,a=o.type,n=o.element,r=o.offset,c=o.timeout;if(a&&n)switch(a){case"class":l=!!(t=document.getElementsByClassName(n)[0]);break;case"id":l=!!(t=document.getElementById(n))}l?this.scrollTo(t,r,c):console.log("Element not found: "+n)},n.scrollTo=function(e,t,l){void 0===t&&(t=0),void 0===l&&(l=null);var o=e?e.getBoundingClientRect().top+window.pageYOffset:0;l?setTimeout((function(){window.scroll({top:o+t,left:0,behavior:"smooth"})}),l):window.scroll({top:o+t,left:0,behavior:"smooth"})},n.render=function(){return r.a.createElement(c,null,"object"==typeof this.props.children?r.a.cloneElement(this.props.children,{onClick:this.handleClick}):r.a.createElement("span",{onClick:this.handleClick},this.props.children))},o}(r.a.Component);t.a=i},"3VWS":function(e,t,l){e.exports=l.p+"static/way-d0a8dad72a3c329a67279121980b7e31.jpg"},"9DJq":function(e,t,l){e.exports=l.p+"static/hand-012724b1def82334bc2a112d45fed213.jpg"},IFo7:function(e,t,l){e.exports=l.p+"static/profilbild-42edd6d2df56914aa7056043e2dff2f4.jpg"},RXBc:function(e,t,l){"use strict";l.r(t);var o=l("q1tI"),a=l.n(o),n=l("7oih"),r=l("+22N"),c=l("IFo7"),i=l.n(c),s=l("3VWS"),p=l.n(s),f=l("9DJq"),m=l.n(f),d=(l("Eh/l"),l("b3N1"),l("WNeT")),u=l.n(d),h=l("obyI"),v=l.n(h),E=l("1TLR");t.default=function(){return a.a.createElement(n.a,{fullMenu:!0},a.a.createElement("section",{id:"banner"},a.a.createElement("div",{className:"inner"},a.a.createElement("img",{src:u.a,alt:""})),a.a.createElement("div",{className:"inner"},a.a.createElement("h2",null,v.a.heading),a.a.createElement("p",null,v.a.subHeading),a.a.createElement("p",null,v.a.subHeading2),a.a.createElement("ul",{className:"actions special"},a.a.createElement("li",null,a.a.createElement(r.a,{type:"id",element:"one"},a.a.createElement("a",{href:"/#",className:"button primary"},"Erfahre mehr")),a.a.createElement(r.a,{type:"id",element:"one"},a.a.createElement("a",{href:"/#",className:"more"})))))),a.a.createElement("section",{id:"one",className:"wrapper alt style2"},a.a.createElement("section",{className:"spotlight"},a.a.createElement("div",{className:"image"},a.a.createElement("img",{src:i.a,alt:""})),a.a.createElement("div",{className:"content"},a.a.createElement("h2",null,E.profile.title),a.a.createElement("p",null,E.profile.peopleAreKey),a.a.createElement("p",null,E.profile.whatIdoBest))),a.a.createElement("section",{className:"spotlight"},a.a.createElement("div",{className:"image"},a.a.createElement("img",{src:p.a,alt:""})),a.a.createElement("div",{className:"content"},a.a.createElement("h2",null,E.profile.myDriver),a.a.createElement("p",null,E.profile.myWay),a.a.createElement("p",null,E.profile.myMission))),a.a.createElement("section",{className:"spotlight"},a.a.createElement("div",{className:"image"},a.a.createElement("img",{src:m.a,alt:""})),a.a.createElement("div",{className:"content"},a.a.createElement("h2",null,E.profile.handsOn),a.a.createElement("p",null,E.profile.nothingChanges),a.a.createElement("p",null,E.profile.getHandsDirty)))),a.a.createElement("section",{id:"cta",className:"wrapper style4"},a.a.createElement("div",{className:"inner"},a.a.createElement("header",null,a.a.createElement("h2",null,E.profile.whatsNext),a.a.createElement("p",null,E.profile.getInContact),a.a.createElement("p",null,E.profile.bestRegards)),a.a.createElement("ul",{className:"actions stacked"},a.a.createElement("li",null,a.a.createElement("a",{href:"/Portfolio",className:"button fit primary"},"Referenzen")),a.a.createElement("li",null,a.a.createElement("a",{href:"/#",className:"button fit"},"e-Mail"))))))}},WNeT:function(e,t,l){e.exports=l.p+"static/logo_200x200-a37aceaac9084e91813b42d8b9cc1dbf.png"},dwco:function(e,t,l){l("Oyvg"),l("eM6i"),l("2Spj"),function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var l,o=e.HTMLElement||e.Element,a=468,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||i,scrollIntoView:o.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,c=(l=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var l=d(this),o=l.getBoundingClientRect(),a=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+a.left-o.left,l.scrollTop+a.top-o.top),"fixed"!==e.getComputedStyle(l).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(e,t){return"Y"===t?e.clientHeight+c<e.scrollHeight:"X"===t?e.clientWidth+c<e.scrollWidth:void 0}function f(t,l){var o=e.getComputedStyle(t,null)["overflow"+l];return"auto"===o||"scroll"===o}function m(e){var t=p(e,"Y")&&f(e,"Y"),l=p(e,"X")&&f(e,"X");return t||l}function d(e){for(;e!==t.body&&!1===m(e);)e=e.parentNode||e.host;return e}function u(t){var l,o,n,c,i=(r()-t.startTime)/a;c=i=i>1?1:i,l=.5*(1-Math.cos(Math.PI*c)),o=t.startX+(t.x-t.startX)*l,n=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,o,n),o===t.x&&n===t.y||e.requestAnimationFrame(u.bind(e,t))}function h(l,o,a){var c,s,p,f,m=r();l===t.body?(c=e,s=e.scrollX||e.pageXOffset,p=e.scrollY||e.pageYOffset,f=n.scroll):(c=l,s=l.scrollLeft,p=l.scrollTop,f=i),u({scrollable:c,method:f,startTime:m,startX:s,startY:p,x:o,y:a})}}}}()}}]);
//# sourceMappingURL=component---src-pages-index-js-5706a561b0e23de16f4d.js.map