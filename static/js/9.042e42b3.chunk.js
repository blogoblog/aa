(this["webpackJsonpsynthetix.exchange"]=this["webpackJsonpsynthetix.exchange"]||[]).push([[9],{747:function(t,e,n){"use strict";e.a={Synths:{HistoricalRates:function(t,e){return["synths","historicalRates",t,e]}},BinaryOptions:{Markets:["binaryOptions","markets"],Market:function(t){return["binaryOptions","markets",t]},AccountMarketInfo:function(t,e){return["binaryOptions","markets",t,e]},RecentTransactions:function(t){return["binaryOptions","transactions",t]},UserTransactions:function(t,e){return["binaryOptions","transactions",t,e]},UserMarkets:function(t){return["binaryOptions","userMarkets",t]},OptionPrices:function(t,e){return["binaryOptions",t,e]}}}},757:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return o}));var r={bidding:0,trading:1,maturity:2,expiry:3},a={long:0,short:1,0:"long",1:"short"},c=function(t,e,n){var r=Date.now();return t>r?{phase:"bidding",timeRemaining:t}:e>r?{phase:"trading",timeRemaining:e}:n>r?{phase:"maturity",timeRemaining:n}:{phase:"expiry",timeRemaining:n}},o=["bidding","trading","maturity","expiry"]},761:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n(1),a=n(17),c=n(30),o=n(0),i=n.n(o),u=n(2),l=n(22),s=n(770),f=n(765),m=n(775),p=n(57),d=n(249),b=n(12);function g(){var t=Object(r.a)(["\n\t\t\t\t\t\t\tcolor: ",";\n\t\t\t\t\t\t\tbackground: rgba(255, 0, 0, 0.12);\n\t\t\t\t\t  "]);return g=function(){return t},t}function O(){var t=Object(r.a)(["\n\t\t\t\t\t\t\tcolor: ",";\n\t\t\t\t\t\t\tbackground: ",";\n\t\t\t\t\t  "]);return O=function(){return t},t}function v(){var t=Object(r.a)(["\n\t\t\tborder-radius: 2px;\n\t\t\tpadding: 4px 15px;\n\t\t\t","\n\t\t"]);return v=function(){return t},t}function h(){var t=Object(r.a)(["\n\t",";\n\tfont-size: 14px;\n\tcolor: ",";\n\ttext-align: center;\n\n\t","\n"]);return h=function(){return t},t}var j=u.e.div(h(),p.a,(function(t){return t.theme.colors.fontPrimary}),(function(t){return"ending-soon"===t.isLabel&&Object(u.d)(v(),(function(t){return t.palette&&"high-contrast"===t.palette?Object(u.d)(O(),(function(t){return t.theme.colors.surfaceL1}),(function(t){return t.theme.colors.red})):Object(u.d)(g(),(function(t){return t.theme.colors.red}))}))})),y=function(t){var e=t.end,n=t.onEnded,r=t.palette,u=void 0===r?"light":r,p=Object(c.a)(t,["end","onEnded","palette"]),g=Date.now(),O=g>=e,v=Math.abs(Object(f.a)(g,e))<48,h=Math.abs(Object(m.a)(g,e)),y=h>4,x=O||y,E=Object(o.useState)(x?null:1e3),C=Object(a.a)(E,2),k=C[0],w=C[1],L=Object(o.useState)(Object(s.a)({start:g,end:e})),M=Object(a.a)(L,2),R=M[0],P=M[1],S=Object(l.c)().t;return Object(o.useEffect)((function(){n&&O&&n()}),[n,O]),Object(d.a)((function(){g<=e?P(Object(s.a)({start:g,end:e})):w(null)}),k),i.a.createElement(j,Object.assign({isLabel:v?"ending-soon":void 0,palette:u},p),O?S("options.common.time-remaining.ended"):y?"".concat(h," weeks"):Object(b.n)(R))}},764:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(1),a=n(0),c=n.n(a),o=n(22),i=n(50),u=n(46);function l(){var t=Object(r.a)(["\n\ta {\n\t\tcolor: ",";\n\t\ttext-decoration: underline;\n\t}\n"]);return l=function(){return t},t}var s=n(2).e.span(l(),(function(t){return t.theme.colors.buttonDefault})),f=function(t){return c.a.createElement(s,t,c.a.createElement(o.a,{i18nKey:"options.common.new-to-binary-options",components:[c.a.createElement(i.a,{to:u.a.Blog.HowBinaryOptionsWork,isExternal:!0})]}))}},768:function(t,e,n){"use strict";n.d(e,"a",(function(){return P}));var r=n(1),a=n(0),c=n.n(a),o=n(2),i=n(22),u=n(18),l=n(16),s=n(15),f=n(12),m=n(20),p=n(159),d=n(143),b=n(134),g=n(57),O=n(761);function v(){var t=Object(r.a)(["\n\t\t\tcolor: ",";\n\t\t\tbackground-color: initial;\n\t\t"]);return v=function(){return t},t}function h(){var t=Object(r.a)(["\n\t\t\t\tbackground-color: #f5607066;\n\t\t\t"]);return h=function(){return t},t}function j(){var t=Object(r.a)(["\n\t\t\t\tbackground-color: #c5d5ff;\n\t\t\t"]);return j=function(){return t},t}function y(){var t=Object(r.a)(["\n\t\t\tbackground-color: #9fe3d5;\n\t\t"]);return y=function(){return t},t}function x(){var t=Object(r.a)(["\n\t\t\tbackground-color: #fbe6b8;\n\t\t"]);return x=function(){return t},t}function E(){var t=Object(r.a)(["\n  border-radius: 2px;\n  padding: 5px 8px;\n\ttext-transform: uppercase;\n\n\tcolor: ",";\n\t","\n\t","\n    ","\n\t\t","\n\t","\n"]);return E=function(){return t},t}function C(){var t=Object(r.a)(["\n\t\t\tbackground-color: ",";\n\t\t\tborder-radius: 1px;\n\t\t\tpadding: 2px 8px;\n\t\t"]);return C=function(){return t},t}function k(){var t=Object(r.a)(["\n\tcolor: ",";\n\t","\n"]);return k=function(){return t},t}function w(){var t=Object(r.a)(["\n\t\t\tbackground-color: ",";\n\t\t\tborder-radius: 1px;\n\t\t\tpadding: 2px 4px;\n\t\t"]);return w=function(){return t},t}function L(){var t=Object(r.a)(["\n\tcolor: ",";\n\t","\n"]);return L=function(){return t},t}function M(){var t=Object(r.a)(["\n\t",";\n"]);return M=function(){return t},t}function R(){var t=Object(r.a)(["\n\tmin-height: 350px;\n\t.table-row,\n\t.table-body-row {\n\t\t& > :last-child {\n\t\t\tjustify-content: flex-end;\n\t\t}\n\t}\n"]);return R=function(){return t},t}var P=Object(a.memo)((function(t){var e=t.optionsMarkets,n=t.noResultsMessage,r=t.isLoading,a=t.palette,o=Object(i.c)().t;return c.a.createElement(s.K,null,c.a.createElement(S,{palette:a,columns:[{Header:c.a.createElement(c.a.Fragment,null,o("options.home.markets-table.asset-col")),accessor:"currencyKey",Cell:function(t){return c.a.createElement(F,{currencyKey:t.cell.value,name:t.row.original.asset,showIcon:!0,iconProps:{type:"asset",width:"24px",height:"24px"}})},width:150,sortable:!0},{Header:c.a.createElement(c.a.Fragment,null,o("options.home.markets-table.strike-price-col",{currencyKey:"".concat(l.e.USD)})),accessor:"strikePrice",sortType:"basic",Cell:function(t){return c.a.createElement(d.a,{sign:l.i,value:t.cell.value})},width:150,sortable:!0},{Header:c.a.createElement(c.a.Fragment,null,o("options.home.markets-table.maturity-date-col")),accessor:"maturityDate",Cell:function(t){return c.a.createElement("span",null,Object(f.k)(t.cell.value))},width:150,sortable:!0},{Header:c.a.createElement(c.a.Fragment,null,o("options.home.markets-table.long-short-col")),id:"long-short",Cell:function(t){var e="light-secondary"!==a;return c.a.createElement("div",null,c.a.createElement(H,{isLabel:e},o("common.val-in-cents",{val:Object(f.e)(100*t.row.original.longPrice)})),e?c.a.createElement("span",{style:{padding:"0 4px"}}):" / ",c.a.createElement(A,{isLabel:e},o("common.val-in-cents",{val:Object(f.e)(100*t.row.original.shortPrice)})))},width:150},{Header:c.a.createElement(i.a,{i18nKey:"options.home.markets-table.pool-size-col",values:{currencyKey:"".concat(l.h.sUSD)},components:[c.a.createElement(s.d,null)]}),accessor:"poolSize",sortType:"basic",Cell:function(t){return c.a.createElement(d.a,{sign:l.i,value:t.cell.value})},width:150,sortable:!0},{Header:c.a.createElement(c.a.Fragment,null,o("options.home.markets-table.phase-col")),accessor:"phase",Cell:function(t){return c.a.createElement(B,{phase:t.cell.value,isLabel:"light-secondary"===a},o("options.phases.".concat(t.cell.value)))},width:150},{Header:c.a.createElement(c.a.Fragment,null,o("options.home.markets-table.time-remaining-col")),accessor:"timeRemaining",Cell:function(t){return c.a.createElement(O.a,{end:t.cell.value,palette:"striped"===a?"high-contrast":"light"})},width:150}],data:e,onTableRowClick:function(t){Object(u.e)(t.original.address)},isLoading:r,noResultsMessage:n}))})),S=Object(o.e)(p.a)(R()),F=Object(o.e)(b.a.Name)(M(),g.a),H=o.e.span(L(),(function(t){return t.isLabel?t.theme.colors.surfaceL1:t.theme.colors.green}),(function(t){return t.isLabel&&Object(o.d)(w(),(function(t){return t.theme.colors.green}))})),A=o.e.span(k(),(function(t){return t.isLabel?t.theme.colors.surfaceL1:t.theme.colors.red}),(function(t){return t.isLabel&&Object(o.d)(C(),(function(t){return t.theme.colors.red}))})),B=o.e.div(E(),m.b.colors.accentL1,(function(t){return"bidding"===t.phase&&Object(o.d)(x())}),(function(t){return"trading"===t.phase&&Object(o.d)(y())}),(function(t){return"maturity"===t.phase&&Object(o.d)(j())}),(function(t){return"expiry"===t.phase&&Object(o.d)(h())}),(function(t){return!t.isLabel&&Object(o.d)(v(),(function(t){return t.theme.colors.fontPrimary}))}));e.b=P},772:function(t,e,n){"use strict";n.d(e,"a",(function(){return C}));var r=n(1),a=n(30),c=n(0),o=n.n(c),i=n(2),u=n(22),l=n(72),s=n(15),f=n(12);function m(){var t=Object(r.a)(["\n\theight: 16px;\n\tbackground-color: ",";\n\tborder-top-right-radius: 2px;\n\tborder-bottom-right-radius: 2px;\n"]);return m=function(){return t},t}function p(){var t=Object(r.a)(["\n\theight: 16px;\n\tbackground-color: ",";\n\tborder-top-left-radius: 2px;\n\tborder-bottom-left-radius: 2px;\n"]);return p=function(){return t},t}function d(){var t=Object(r.a)(["\n\tcolor: ",";\n"]);return d=function(){return t},t}function b(){var t=Object(r.a)(["\n\tcolor: ",";\n"]);return b=function(){return t},t}function g(){var t=Object(r.a)(["\n\t\t\tgrid-template-columns: auto 1fr auto;\n\t\t"]);return g=function(){return t},t}function O(){var t=Object(r.a)(["\n\t",";\n\tgrid-gap: 4px;\n\t> * {\n\t\twidth: 100%;\n\t}\n\n\t","\n"]);return O=function(){return t},t}var v=function(t){var e=t.long,n=t.short,r=t.display,c=Object(a.a)(t,["long","short","display"]),i=Object(u.c)().t,l=100*e,m=100*n,p=l+m,d=o.a.createElement(j,{className:"longs label"},i("common.val-in-cents",{val:Object(f.e)(l)})),b=o.a.createElement(y,{className:"shorts label"},i("common.val-in-cents",{val:Object(f.e)(m)})),g=o.a.createElement(x,{className:"longs-percent percent",style:{width:"calc(".concat(l/p*100,"% - 2px)")}}),O=o.a.createElement(E,{className:"shorts-percent percent",style:{width:"calc(".concat(m/p*100,"% - 2px)")}});return o.a.createElement(h,Object.assign({display:r},c),"row"===r&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.k,null,d,b),o.a.createElement(s.k,null,g,O)),"col"===r&&o.a.createElement(o.a.Fragment,null,d,o.a.createElement(s.k,null,g,O),b))};v.defaultProps={display:"row"};var h=Object(i.e)(s.s)(O(),l.b,(function(t){return"col"===t.display&&Object(i.d)(g())})),j=i.e.div(b(),(function(t){return t.theme.colors.green})),y=i.e.div(d(),(function(t){return t.theme.colors.red})),x=i.e.div(p(),(function(t){return t.theme.colors.green})),E=i.e.div(m(),(function(t){return t.theme.colors.red})),C=v},777:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(0),a=n.n(r);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=a.a.createElement("path",{d:"M0 15.8333V20H4.16666L16.4441 7.72246L12.2775 3.5559L0 15.8333ZM19.6668 4.49991C20.1111 4.05558 20.1111 3.38876 19.6668 2.94444L17.0556 0.333242C16.6112 -0.111081 15.9444 -0.111081 15.5001 0.333242L13.4445 2.38892L17.6111 6.55548L19.6668 4.49991Z",fill:"currentColor"}),u=function(t){var e=t.svgRef,n=t.title,r=o(t,["svgRef","title"]);return a.a.createElement("svg",c({width:20,height:20,viewBox:"0 0 20 20",fill:"none",ref:e},r),n?a.a.createElement("title",null,n):null,i)},l=a.a.forwardRef((function(t,e){return a.a.createElement(u,c({svgRef:e},t))}));n.p},778:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(0),a=n.n(r);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.1429 18.5743C17.1429 18.9524 16.9926 19.315 16.7253 19.5824C16.4579 19.8498 16.0953 20 15.7171 20H1.43C1.24216 20.0002 1.05612 19.9633 0.882541 19.8915C0.708961 19.8197 0.551244 19.7144 0.418419 19.5816C0.285594 19.4488 0.180268 19.291 0.10847 19.1175C0.0366725 18.9439 -0.000187222 18.7578 7.15066e-07 18.57V17.1429C7.15066e-07 13.3814 5.71429 11.4286 5.71429 11.4286C5.71429 11.4286 6.04143 10.8443 5.71429 10C4.51286 9.11429 4.36571 7.72857 4.28571 4.28571C4.53286 0.838571 6.95286 0 8.57143 0C10.19 0 12.61 0.837143 12.8571 4.28571C12.7771 7.72857 12.63 9.11429 11.4286 10C11.1014 10.8429 11.4286 11.4286 11.4286 11.4286C11.4286 11.4286 17.1429 13.3814 17.1429 17.1429V18.5743Z",fill:"currentColor"}),u=function(t){var e=t.svgRef,n=t.title,r=o(t,["svgRef","title"]);return a.a.createElement("svg",c({width:18,height:20,viewBox:"0 0 18 20",fill:"none",ref:e},r),n?a.a.createElement("title",null,n):null,i)},l=a.a.forwardRef((function(t,e){return a.a.createElement(u,c({svgRef:e},t))}));n.p},779:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(0),a=n.n(r);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M38.4049 36.0763L37.4866 35.1908C40.7006 31.452 42.6356 26.5981 42.6356 21.3178C42.6356 9.54382 33.0918 0 21.3178 0C9.54382 0 0 9.54382 0 21.3178C0 33.0918 9.54382 42.6356 21.3178 42.6356C26.5981 42.6356 31.452 40.7006 35.1908 37.4866L36.0763 38.4049V40.9958L50.1467 55.0381C51.4328 56.3215 53.5154 56.3205 54.8002 55.0358L55.0358 54.8002C56.3205 53.5154 56.3215 51.4328 55.0381 50.1467L40.9958 36.0763H38.4049ZM6.55933 21.3178C6.55933 13.1514 13.1514 6.55933 21.3178 6.55933C29.4842 6.55933 36.0763 13.1514 36.0763 21.3178C36.0763 29.4842 29.4842 36.0763 21.3178 36.0763C13.1514 36.0763 6.55933 29.4842 6.55933 21.3178Z",fill:"#795DF5"}),u=a.a.createElement("path",{d:"M20.2922 23.3704C20.2922 23.5728 20.4612 23.7202 20.6636 23.7202H21.8958C22.0136 23.7202 22.1029 23.6116 22.1029 23.4938V23.3292C22.1029 22.9383 22.1646 22.5679 22.3086 22.2181C22.4527 21.8683 22.679 21.5802 23.0082 21.3539L23.9547 20.7161C24.5514 20.3251 25.0453 19.8313 25.4568 19.2551C25.8477 18.679 26.0535 17.9588 26.0535 17.1358C26.0535 16.6214 25.9506 16.107 25.7449 15.6132C25.5391 15.1193 25.251 14.6667 24.8807 14.2757C24.4897 13.9053 24.0165 13.5967 23.4609 13.3498C22.8848 13.1235 22.2469 13 21.5473 13C20.7449 13 20.0658 13.144 19.4897 13.3909C18.9136 13.6584 18.4609 13.9877 18.0905 14.3992C17.7202 14.8107 17.4321 15.284 17.2675 15.7778C17.0823 16.2716 17 16.7654 17 17.2181C17 17.3691 17.0068 17.5133 17.0205 17.6506C17.0545 17.9917 17.3444 18.2331 17.6845 18.2752L18.6571 18.3955C18.8649 18.4212 19.0373 18.2083 19.0165 18C18.9753 17.8148 18.9753 17.6296 18.9753 17.4444C18.9753 17.1152 19.0165 16.8066 19.1193 16.4774C19.2222 16.1687 19.3868 15.8807 19.5926 15.6337C19.7984 15.3868 20.0453 15.2016 20.3745 15.037C20.7037 14.893 21.0947 14.8107 21.5473 14.8107C21.9588 14.8107 22.3086 14.893 22.6173 15.0165C22.9259 15.1399 23.1728 15.3251 23.3786 15.5309C23.5844 15.7572 23.7284 16.0041 23.8313 16.2922C23.9342 16.5802 23.9959 16.8683 23.9959 17.1564C23.9959 17.5679 23.893 17.9383 23.7078 18.2881C23.5226 18.6584 23.2551 18.9465 22.9053 19.1728L22 19.7901C21.3827 20.2016 20.93 20.6749 20.6831 21.1893C20.4156 21.7243 20.2922 22.321 20.2922 23V23.3704ZM19.8601 26.6626C19.8601 27.0329 19.9835 27.3621 20.251 27.6091C20.4979 27.8765 20.8272 28 21.1975 28C21.5679 28 21.8765 27.8765 22.144 27.6091C22.4115 27.3621 22.5556 27.0329 22.5556 26.6626C22.5556 26.2922 22.4115 25.9835 22.144 25.716C21.8765 25.4486 21.5679 25.3045 21.1975 25.3045C20.8272 25.3045 20.4979 25.4486 20.251 25.716C19.9835 25.9835 19.8601 26.2922 19.8601 26.6626Z",fill:"#3B375B"}),l=function(t){var e=t.svgRef,n=t.title,r=o(t,["svgRef","title"]);return a.a.createElement("svg",c({width:56,height:56,viewBox:"0 0 56 56",fill:"none",ref:e},r),n?a.a.createElement("title",null,n):null,i,u)},s=a.a.forwardRef((function(t,e){return a.a.createElement(l,c({svgRef:e},t))}));n.p},780:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(11),a=n(95),c=n.n(a),o=n(757),i=function(t,e){return c()(t.map((function(t){var n,a=Object(o.d)(t.biddingEndDate,t.maturityDate,t.expiryDate),c=a.phase,i=a.timeRemaining;return Object(r.a)({},t,{phase:c,asset:(null===(n=e[t.currencyKey])||void 0===n?void 0:n.asset)||t.currencyKey,timeRemaining:i,phaseNum:o.a[c]})})),["phaseNum","timeRemaining"])}},896:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return re}));var r=n(1),a=n(0),c=n.n(a),o=n(2),i=n(748),u=n(88),l=n.n(u),s=n(26),f=n(71),m=n(15),p=n(10),d=n(20),b=n(747),g=n(24),O=n(58),v=n(22),h=n(18),j=n(37),y=n(19),x=n(53),E=n(47),C=n(57),k=n(764);function w(){var t=Object(r.a)(["\n\tbackground-color: ",";\n\tpadding: 0 50px;\n"]);return w=function(){return t},t}function L(){var t=Object(r.a)(["\n\t\tborder: 0;\n\t"]);return L=function(){return t},t}function M(){var t=Object(r.a)(["\n\twidth: 100%;\n\tbackground-color: ",";\n\tborder: 1px solid ",";\n\ttext-align: center;\n\tpadding: 56px;\n\t","\n"]);return M=function(){return t},t}function R(){var t=Object(r.a)(["\n\t",";\n\tcolor: ",";\n\tpadding-bottom: 32px;\n"]);return R=function(){return t},t}function P(){var t=Object(r.a)(["\n\t",";\n\tcolor: ",";\n\tpadding-bottom: 15px;\n"]);return P=function(){return t},t}var S={toggleWalletPopup:j.m},F=Object(s.b)((function(t){return{isWalletConnected:Object(y.c)(t)}}),S),H=o.e.div(P(),E.d,(function(t){return t.theme.colors.fontPrimary})),A=o.e.div(R(),C.a,d.b.colors.accentL1),B=o.e.div(M(),(function(t){return t.theme.colors.surfaceL2}),(function(t){return t.theme.colors.accentL2}),p.b.medium(L())),D=Object(o.e)(x.a)(w(),(function(t){return t.theme.colors.icons})),K=F((function(t){var e=t.isWalletConnected,n=t.toggleWalletPopup,r=Object(v.c)().t,a=c.a.createElement(A,null,c.a.createElement(k.a,null));return c.a.createElement(B,null,e?c.a.createElement(c.a.Fragment,null,c.a.createElement(H,null,r("options.home.market-creation.no-markets.title")),a,c.a.createElement(D,{palette:"primary",onClick:function(){return Object(h.d)(h.c.Options.CreateMarketModal)}},r("options.home.market-creation.create-market-button-label"))):c.a.createElement(c.a.Fragment,null,c.a.createElement(H,null,r("options.home.market-creation.not-connected.title")),a,c.a.createElement(D,{palette:"primary",onClick:function(){return n(!0)}},r("common.wallet.connect-your-wallet"))))})),N=n(134),z=n(72),W=n(16),Z=n(12),I=n(761),T=n(772);function U(){var t=Object(r.a)(["\n\t",";\n\tpadding: 5px 10px;\n\twidth: 110px;\n"]);return U=function(){return t},t}function V(){var t=Object(r.a)(["\n\tfont-family: ",";\n\tfont-size: 14px;\n\tline-height: 17px;\n\ttext-align: center;\n\tletter-spacing: 0.2px;\n\ttext-transform: uppercase;\n\tcolor: ",";\n"]);return V=function(){return t},t}function J(){var t=Object(r.a)(["\n\t",";\n\ttext-align: center;\n\t",";\n"]);return J=function(){return t},t}function Y(){var t=Object(r.a)(["\n\tgrid-gap: 7px;\n"]);return Y=function(){return t},t}function q(){var t=Object(r.a)(["\n\t",";\n\tline-height: normal;\n\tcolor: ",";\n"]);return q=function(){return t},t}function G(){var t=Object(r.a)(["\n\t",";\n\tcursor: pointer;\n\tbackground: ",";\n\tborder: 1px solid ",";\n\tborder-radius: 3px;\n\tbox-shadow: 0px 4px 11px rgba(188, 99, 255, 0.15442);\n\twidth: 100%;\n\theight: 180px;\n\tpadding: 16px;\n\tjustify-content: space-between;\n"]);return G=function(){return t},t}function Q(){var t=Object(r.a)(["\n\talign-items: center;\n"]);return Q=function(){return t},t}function X(){var t=Object(r.a)(["\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr;\n\t\tgrid-gap: 30px;\n\t"]);return X=function(){return t},t}function $(){var t=Object(r.a)(["\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t\tgrid-gap: 30px;\n\t"]);return $=function(){return t},t}function _(){var t=Object(r.a)(["\n\tgrid-gap: 24px;\n\tgrid-template-columns: 1fr 1fr 1fr 1fr;\n\n\t","\n\t","\n"]);return _=function(){return t},t}var tt=Object(o.e)(m.s)(_(),p.b.large($()),p.b.small(X())),et=Object(o.e)(m.j)(Q()),nt=Object(o.e)(m.i)(G(),m.P,(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.accentL1})),rt=Object(o.e)(N.a.Name)(q(),E.e,d.b.colors.accentL1),at=Object(o.e)(m.s)(Y()),ct=o.e.div(J(),E.e,(function(t){return t.theme.colors.fontPrimary})),ot=o.e.div(V(),(function(t){return t.theme.fonts.medium}),(function(t){return t.theme.colors.fontSecondary})),it=Object(o.e)(I.a)(U(),z.b),ut=function(t){var e=t.optionsMarkets,n=Object(v.c)().t;return c.a.createElement(tt,null,e.map((function(t){return c.a.createElement(nt,{key:t.address,onClick:function(){return Object(h.e)(t.address)}},c.a.createElement(et,null,c.a.createElement(rt,{currencyKey:t.currencyKey,name:t.asset,showIcon:!0,iconProps:{width:"24px",height:"24px",type:"asset"}}),c.a.createElement(it,{end:t.timeRemaining})),c.a.createElement(at,null,c.a.createElement(ct,null,Object(Z.i)(W.i,t.strikePrice)," ",W.e.USD),c.a.createElement(ot,null,n("common.by-date",{date:Object(Z.k)(t.maturityDate)}))),c.a.createElement(T.a,{long:t.longPrice,short:t.shortPrice}))})))},lt=n(17),st=n(746),ft=n(248),mt=n(257),pt=n(777),dt=n(778),bt=n(779),gt=n(757),Ot=n(253),vt=n(768);function ht(){var t=Object(r.a)(["\n\tpadding-top: 20px;\n\tpadding-bottom: 40px;\n"]);return ht=function(){return t},t}function jt(){var t=Object(r.a)(["\n\tpadding: 16px 0;\n"]);return jt=function(){return t},t}function yt(){var t=Object(r.a)(["\n\tpadding-top: 65px;\n\ttext-align: center;\n\n\tbutton {\n\t\twidth: 240px;\n\t}\n"]);return yt=function(){return t},t}function xt(){var t=Object(r.a)(["\n\t\twidth: 100%;\n\t"]);return xt=function(){return t},t}function Et(){var t=Object(r.a)(["\n\twidth: 240px;\n\t.search-input {\n\t\theight: 40px;\n\t}\n\t","\n"]);return Et=function(){return t},t}function Ct(){var t=Object(r.a)(["\n\t\tgrid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n\t"]);return Ct=function(){return t},t}function kt(){var t=Object(r.a)(["\n\tdisplay: inline-grid;\n\tgrid-auto-flow: column;\n\tgrid-gap: 8px;\n\t","\n"]);return kt=function(){return t},t}function wt(){var t=Object(r.a)(["\n\tgrid-template-columns: auto 1fr;\n\tgrid-gap: 15px;\n"]);return wt=function(){return t},t}function Lt(){var t=Object(r.a)(["\n\t\t    flex-basis: 100%;\n\t\t"]);return Lt=function(){return t},t}function Mt(){var t=Object(r.a)(["\n\t\tpadding: 0 32px 24px;\n\t"]);return Mt=function(){return t},t}function Rt(){var t=Object(r.a)(["\n\talign-items: center;\n\tflex-wrap: wrap;\n\tpadding: 0 0 32px;\n\t","\n\tmargin-top: -20px;\n\t> * {\n\t\tmargin-top: 20px;\n\t\t","\n\t}\n"]);return Rt=function(){return t},t}function Pt(){var t=Object(r.a)(["\n\t\t\tcursor: default;\n\t\t\t&:hover {\n\t\t\t\tbackground-color: "," !important;\n\t\t\t\tsvg {\n\t\t\t\t\tcolor: ",";\n\t\t\t\t}\n\t\t\t}\n\t\t"]);return Pt=function(){return t},t}function St(){var t=Object(r.a)(["\n\t","\n"]);return St=function(){return t},t}var Ft=Object(s.b)((function(t){return{isWalletConnected:Object(y.c)(t),currentWalletAddress:Object(y.b)(t)}})),Ht={name:"phase"},At=Object(o.e)(x.a).attrs({size:"md",palette:"toggle"})(St(),(function(t){return!t.onClick&&Object(o.d)(Pt(),(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.fontTertiary}))})),Bt=Object(o.e)(m.j)(Rt(),p.b.large(Mt()),p.b.small(Lt())),Dt=Object(o.e)(m.t)(wt()),Kt=o.e.div(kt(),p.b.small(Ct())),Nt=Object(o.e)(mt.a)(Et(),p.b.small(xt())),zt=Object(o.e)(m.E)(yt()),Wt=o.e.div(jt()),Zt=o.e.div(ht()),It=Object(ft.a)({tooltip:{width:"180px",textAlign:"center"}})(st.a),Tt=Ft((function(t){var e=t.optionsMarkets,n=t.isWalletConnected,r=t.currentWalletAddress,o=Object(v.c)().t,u=Object(a.useState)(""),s=Object(lt.a)(u,2),f=s[0],m=s[1],p=Object(a.useState)(Ht),d=Object(lt.a)(p,2),O=d[0],j=d[1],y=Object(i.b)(b.a.BinaryOptions.UserMarkets(r||""),(function(){return l.a.binaryOptions.marketsBidOn({account:r})}),{enabled:n&&"user-bids"===O.name}),E=Object(a.useMemo)((function(){return"creator"===O.name&&n?e.filter((function(t){return t.creator.toLowerCase()===r.toLowerCase()})):"user-bids"===O.name&&n?y.isSuccess&&Array.isArray(y.data)?e.filter((function(t){var e=t.address;return y.data.includes(e)})):[]:null==O.value?e:e.filter((function(t){return t.phase===O.value}))}),[e,O,n,r,y.data,y.isSuccess]),C=Object(Ot.a)((function(){return f?E.filter((function(t){return t.asset.toLowerCase().includes(f.toLowerCase())})):E}),[E,f],g.g),k=Object(a.useCallback)((function(){return j(Ht)}),[]);Object(a.useEffect)((function(){m("")}),[O,m]),Object(a.useEffect)((function(){n||"phase"!==O.name&&k()}),[n,k,O]);var w=[{filterName:"user-bids",icon:c.a.createElement(dt.a,null)},{filterName:"creator",icon:c.a.createElement(pt.a,null)}],L="phase"===O.name,M="creator"===O.name,R="user-bids"===O.name;return c.a.createElement("div",null,c.a.createElement(Bt,null,c.a.createElement(Kt,null,c.a.createElement(At,{isActive:L&&null==O.value,onClick:function(){return j({name:"phase"})}},o("common.filters.all")),gt.b.map((function(t){return c.a.createElement(At,{isActive:L&&O.value===t,onClick:function(){return j({name:"phase",value:t})},key:t},o("options.phases.".concat(t)))}))),c.a.createElement(Dt,null,w.map((function(t){var e=t.filterName,r=t.icon,a=O.name===e;return c.a.createElement(It,{key:e,title:c.a.createElement("span",null,o("options.home.explore-markets.table.filters.".concat(e,n?".tooltip-not-connected":".tooltip-connected"))),placement:"top",arrow:!0},c.a.createElement(At,{onClick:n?function(){a?k():j({name:e})}:void 0,isActive:a},r))})),c.a.createElement(Nt,{onChange:function(t){return m(t.target.value)},value:f}))),c.a.createElement(vt.b,{optionsMarkets:f?C:E,isLoading:y.isLoading,palette:"light-secondary",noResultsMessage:f&&0===C.length||0===E.length?c.a.createElement(zt,null,c.a.createElement(bt.a,null),L&&c.a.createElement(Zt,null,o("options.home.explore-markets.table.filters.markets.no-results")),M&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Zt,null,o("options.home.explore-markets.table.filters.creator.no-results")),c.a.createElement("div",null,c.a.createElement(x.a,{size:"lg",palette:"primary",onClick:function(){return Object(h.d)(h.c.Options.CreateMarketModal)}},o("options.home.market-creation.create-market-button-label")),c.a.createElement(Wt,null,o("common.or")))),R&&c.a.createElement(Zt,null,o("options.home.explore-markets.table.filters.user-bids.no-results")),c.a.createElement(x.a,{size:"lg",palette:"outline",onClick:k},o(R?"options.home.explore-markets.table.view-all-open-markets":"options.home.explore-markets.table.view-all-markets"))):void 0}))})),Ut=n(780);function Vt(){var t=Object(r.a)(["\n\tpadding-bottom: 97px;\n"]);return Vt=function(){return t},t}function Jt(){var t=Object(r.a)(["\n\t\tpadding-top: 40px;\n\t"]);return Jt=function(){return t},t}function Yt(){var t=Object(r.a)(["\n\tpadding-bottom: 65px;\n\tpadding-top: 140px;\n\t","\n"]);return Yt=function(){return t},t}function qt(){var t=Object(r.a)(["\n\tbackground-color: ",";\n"]);return qt=function(){return t},t}function Gt(){var t=Object(r.a)(["\n\t\ttransform: none;\n\t\tpadding: 40px 24px;\n\t"]);return Gt=function(){return t},t}function Qt(){var t=Object(r.a)(["\n\t\ttransform: none;\n\t\tpadding: 73px 24px;\n\t"]);return Qt=function(){return t},t}function Xt(){var t=Object(r.a)(["\n\tposition: relative;\n\tz-index: ",";\n\ttransform: translateY(50%);\n\t","\n\t","\n"]);return Xt=function(){return t},t}var $t=Object(s.b)((function(t){return{synthsMap:Object(f.c)(t)}}),{}),_t=Object(o.e)(m.F)(Xt(),g.j.BASE,p.b.large(Qt()),p.b.medium(Gt())),te=o.e.div(qt(),(function(t){return t.theme.colors.white})),ee=Object(o.e)(te)(Yt(),p.b.large(Jt())),ne=Object(o.e)(te)(Vt()),re=$t((function(t){var e=t.synthsMap,n=Object(i.b)(b.a.BinaryOptions.Markets,(function(){return l.a.binaryOptions.markets()})),r=Object(a.useMemo)((function(){return n.isSuccess&&Array.isArray(n.data)?Object(Ut.a)(n.data,e):[]}),[n,e]),u=Object(a.useMemo)((function(){return r.slice(0,4)}),[r]);return c.a.createElement(o.b,{theme:d.d},r.length?c.a.createElement(c.a.Fragment,null,c.a.createElement(_t,null,c.a.createElement(ut,{optionsMarkets:u})),c.a.createElement(ee,null,c.a.createElement(m.F,null,c.a.createElement(K,null))),c.a.createElement(ne,null,c.a.createElement(m.F,null,c.a.createElement(Tt,{optionsMarkets:r})))):c.a.createElement(m.C,null,c.a.createElement(O.a,{size:"sm",centered:!0})))}))}}]);
//# sourceMappingURL=9.042e42b3.chunk.js.map