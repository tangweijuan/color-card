(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[264],{1902:function(o,r,c){"use strict";var e=c(8527),l=(c(7294),c(456)),t=c(8250),F=c(5893);r.Z=function(o){var r=o.activeIndex,c=void 0===r?0:r;return(0,F.jsxs)(e.Ug,{justifyContent:"space-between",h:"80px",p:"0px 20px",bgColor:"white",position:"fixed",top:"0",left:"0",right:"0",boxShadow:"0px 5px 20px rgba(36, 37, 38, 0.25)",zIndex:1,children:[(0,F.jsxs)(e.Ug,{children:[(0,F.jsx)(l.Ee,{src:"./logo1.png",alt:"kaka color card"}),(0,F.jsx)(t.H1,{children:(0,F.jsx)(l.Ee,{src:"./logo2.png",alt:"kaka"})})]}),(0,F.jsxs)(e.Ug,{columnGap:"10px",children:[[{name:"Palette",link:"https://afterwork-design.github.io/color-card"},{name:"Gradient",link:"https://afterwork-design.github.io/color-card/gradient"},{name:"Step",link:"https://afterwork-design.github.io/color-card/step"}].map((function(o,r){return(0,F.jsx)(e.rU,{href:o.link,border:"2px solid transparent",p:"10px 2px",textDecoration:"none",borderBottomColor:c===r?"#ff8d1a":"",children:(0,F.jsx)(t.H2,{fontSize:"16px",children:o.name})},o.name)})),(0,F.jsx)(e.rU,{href:"https://github.com/afterwork-design/color-card",target:"_blank",pl:"20px",children:(0,F.jsx)(l.Ee,{src:"./github.png",w:"25px",h:"25px"})})]})]})}},8250:function(o,r,c){"use strict";c.d(r,{H1:function(){return f},H2:function(){return d},b:function(){return a}});var e=c(2809),l=(c(7294),c(8527)),t=c(5893);function F(o,r){var c=Object.keys(o);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(o);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable}))),c.push.apply(c,e)}return c}function n(o){for(var r=1;r<arguments.length;r++){var c=null!=arguments[r]?arguments[r]:{};r%2?F(Object(c),!0).forEach((function(r){(0,e.Z)(o,r,c[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(c)):F(Object(c)).forEach((function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(c,r))}))}return o}var f=function(o){return(0,t.jsx)(l.X6,n({as:"h1",size:"xl",mt:0},o))},d=function(o){return(0,t.jsx)(l.X6,n({as:"h2",size:"lg"},o))},a=function(o){return(0,t.jsx)(l.xu,n({borderRadius:"8px",backgroundColor:"white"},o))}},5071:function(o,r,c){"use strict";c.r(r),c.d(r,{default:function(){return E}});var e=c(7294),l=c(8527),t=c(1902);function F(o,r){(null==r||r>o.length)&&(r=o.length);for(var c=0,e=new Array(r);c<r;c++)e[c]=o[c];return e}function n(o){return function(o){if(Array.isArray(o))return F(o)}(o)||function(o){if("undefined"!==typeof Symbol&&null!=o[Symbol.iterator]||null!=o["@@iterator"])return Array.from(o)}(o)||function(o,r){if(o){if("string"===typeof o)return F(o,r);var c=Object.prototype.toString.call(o).slice(8,-1);return"Object"===c&&o.constructor&&(c=o.constructor.name),"Map"===c||"Set"===c?Array.from(o):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?F(o,r):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=c(456),d=c(7476),a=c(8437),s=c(5893),i=d.Nb.colors,b="copied!",u=function(){var o=(0,e.useState)(!1),r=o[0],c=o[1],t=function(o){var r=o.target,c=r.innerText;c!==b&&navigator.clipboard.writeText(c).then((function(){r.innerText=b,setTimeout((function(){r.innerText=c}),1e3)}))};return(0,s.jsx)(l.xu,{bgColor:"white",children:(0,s.jsxs)(l.gC,{pt:"170px !important",pb:"130px !important",rowGap:"50px",p:"15px",maxW:"1400px",alignItems:"flex-start",margin:"0 auto",bgColor:"white",children:[(0,s.jsx)(l.Ug,{width:"100%",p:"0 40px",justifyContent:"flex-end",children:(0,s.jsx)(f.Ee,{src:"./sort.svg",cursor:"pointer",onClick:function(){return c(!r)}})}),i.map((function(o){var c=o.reduce((function(o,r){return o+r}));return(0,s.jsx)(l.Ug,{columnGap:"10px",rowGap:"25px",p:"15px",flexWrap:"wrap",justifyContent:"center",w:"100%",children:(r?n(o).reverse():o).map((function(o){return(0,s.jsxs)(l.gC,{alignItems:"flex-start",fontSize:"14px",color:"rgba(73, 80, 87, 1)",m:"0 !important",children:[(0,s.jsx)(l.xu,{bgColor:o,w:"100%",flexGrow:1,minW:"120px",minH:"80px",borderRadius:"4px"}),(0,s.jsx)(l.xu,{onClick:t,cursor:"pointer",mt:"0.3rem !important",children:o}),(0,s.jsx)(l.xu,{onClick:t,cursor:"pointer",mt:"0.3rem !important",children:(0,a.$)(o)})]},c+o)}))},c)}))]})})},g=c(2962),E=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.PB,{title:"\u9636\u68af\u8272"}),(0,s.jsxs)(l.xu,{children:[(0,s.jsx)(t.Z,{activeIndex:2}),(0,s.jsx)(u,{})]})]})}},7476:function(o,r,c){"use strict";c.d(r,{UA:function(){return F},FL:function(){return f},kM:function(){return n},Nb:function(){return d}});var e=JSON.parse('{"zh":"\u56db\u8272","en":"four","colors":[["#d5a09a","#f2dbd5","#eae3dd","#d8c1bb"],["#d8c1bb","#f0e2e0","#ebeee7","#e0c3a8"],["#e7669e","#e7afcc","#e6d9e3","#5fa0d9"],["#f29ab2","#f6d2e0","#d6dbee","#ccc9de"],["#eec9be","#f3dbdb","#d2e8da","#9acddc"],["#a1a5cb","#cbc7d9","#d9ccd0","#bfb6c7"],["#e7ab89","#e0cfbb","#e9dbd0","#a59179"],["#a17364","#d7dac5","#dbcdb2","#dac488"],["#9c9672","#c6b597","#b9c4b3","#a1b3a7"],["#a1b3a7","#bfafa2","#b3a799","#7e988d"],["#c4987d","#cebf9e","#dacdbd","#b0a498"],["#c2a279","#e5cbb2","#d1c088","#d49d7e"],["#fbaf74","#f8f18e","#6dbb68","#fda295"],["#e9d1af","#4b9faa","#b98377","#ed8381"],["#fcf8e0","#f1decf","#ffe3d6","#ffaf8a"],["#f3c5c7","#ffaf8a","#cec7f3","#d6e4a6"],["#db705e","#fee1d9","#d9ebf5","#a8c8d7"],["#9cdee5","#a4e69c","#e6d29c","#e6e59c"],["#d6694c","#f5c0a1","#d8ddc0","#9bc2b0"],["#e19536","#f7c7b0","#cba47b","#3b5f2b"],["#eed05b","#e68764","#907b57","#f0d8ad"],["#2a5097","#cf6938","#ffc8a9","#1e73c4"],["#db5087","#f8edfd","#ecbdcf","#8bb3c0"],["#de9e20","#0758a6","#d47222","#d3b28f"],["#67b176","#0f7953","#b3cf9f","#80a949"],["#0f67fc","#b3cffe","#f8cfb1","#ab4215"],["#0f3391","#d68d28","#ddb419","#a11109"],["#a32317","#d9d8c9","#e9c318","#496d5c"],["#d25536","#f5ead9","#f9c7b0","#f6c72a"],["#7774e5","#abd70e","#e5e315","#eab322"],["#edb6bc","#c6bdab","#b5c9c0","#bddfd4"],["#bfb3d7","#f0d063","#a5cee2","#bea1a6"],["#ff8b8b","#f9f7e8","#b6e4e4","#61bfad"],["#f4f1c8","#e8a7df","#cdf4c7","#a6e4e3"],["#e5ddc8","#4391c1","#e6b840","#d7e4d2"],["#31b77a","#efe9d9","#fbcbbf","#cfecf4"],["#a5c1e6","#e6bca4","#cbe5a4","#bebfb9"],["#c6f6d5","#feebc8","#bee3f8","#fed7e2"],["#ff5d12","#ffaf8a","#ffe3d6","#ffeee6"],["#6f5cf1","#c5bcff","#dbd6ff","#f0eefe"],["#0e62f1","#a3c5ff","#ccdfff","#eef4fe"],["#9e9fc1","#c8a0be","#b2a697","#60b9c7"]]}'),l=JSON.parse('{"zh":"\u6e10\u53d8\u8272","en":"gradient","colors":[{"deg":135,"colors":[{"color":"#d6f6ff"},{"color":"#81d3ff"}]},{"deg":135,"colors":[{"color":"#facfc3"},{"color":"#ff9a9e"}]},{"deg":135,"colors":[{"color":"#ffecd2"},{"color":"#fcb69f"}]},{"deg":135,"colors":[{"color":"#f6d7ff"},{"color":"#b6daff"}]},{"deg":135,"colors":[{"color":"#e4eeff"},{"color":"#fee1fd"}]},{"deg":135,"colors":[{"color":"#85fba7"},{"color":"#0ecefb"}]},{"deg":135,"colors":[{"color":"#facfc3"},{"color":"#a48aff"}]},{"deg":135,"colors":[{"color":"#ae96ff"},{"color":"#8167ff"}]},{"deg":135,"colors":[{"color":"#e4daff"},{"color":"#9b7bfe"}]},{"deg":135,"colors":[{"color":"#fff9e3"},{"color":"#fee1fd"}]},{"deg":135,"colors":[{"color":"#e3eaff"},{"color":"#ffe3e3"}]},{"deg":135,"colors":[{"color":"#fbffd2"},{"color":"#d5fc9f"}]},{"deg":135,"colors":[{"color":"#ffe5d2"},{"color":"#fca79f"}]},{"deg":135,"colors":[{"color":"#e2ebf0"},{"color":"#cfd9df"}]},{"deg":135,"colors":[{"color":"#FFF0D2"},{"color":"#FCE59F"}]},{"deg":135,"colors":[{"color":"#E3FFE8"},{"color":"#FFE3E6"}]},{"deg":135,"colors":[{"color":"#EEFFBD"},{"color":"#D6FFE9"}]},{"deg":135,"colors":[{"color":"#BDF3FF"},{"color":"#FFD6D6"}]},{"deg":135,"colors":[{"color":"#C6F6D5"},{"color":"#BEE3F8"}]},{"deg":135,"colors":[{"color":"#B9C5FD"},{"color":"#EFBDFA"}]},{"deg":135,"colors":[{"color":"#F6C5EA"},{"color":"#F8C9AD"}]},{"deg":135,"colors":[{"color":"#FEEBC8"},{"color":"#C6F6D5"}]},{"deg":135,"colors":[{"color":"#D6DEEE"},{"color":"#CDC9DE"}]},{"deg":135,"colors":[{"color":"#E8F780"},{"color":"#ABE866"}]},{"deg":135,"colors":[{"color":"#FFF2F2"},{"color":"#F2F2FF"}]},{"deg":135,"colors":[{"color":"#FFF1D6"},{"color":"#FDE6BB"}]},{"deg":135,"colors":[{"color":"#FFEFD5"},{"color":"#FFDAB9"}]},{"deg":135,"colors":[{"color":"#FFF8DC"},{"color":"#D6FFD6"}]},{"deg":135,"colors":[{"color":"#E0F1FF"},{"color":"#CDCDFA"}]},{"deg":135,"colors":[{"color":"#FFE0EB"},{"color":"#FFCDC7"}]},{"deg":135,"colors":[{"color":"#FFE9B6"},{"color":"#FFC6B5"},{"color":"#D9EBF5"}]},{"deg":135,"colors":[{"color":"#D3F5CF"},{"color":"#A8DBFA"},{"color":"#635EE2"}]},{"deg":135,"colors":[{"color":"#F9DED7"},{"color":"#D2CCE4"},{"color":"#84ACF1"}]},{"deg":135,"colors":[{"color":"#FCEAB8"},{"color":"#E2E6DD"},{"color":"#D1E5F0"}]},{"deg":135,"colors":[{"color":"#8A90F0"},{"color":"#C466D6"},{"color":"#D44E73"}]},{"deg":135,"colors":[{"color":"#FFEDB1"},{"color":"#FEC8A0"},{"color":"#F18386"}]},{"deg":135,"colors":[{"color":"#E4A7AC"},{"color":"#E5A2C6"},{"color":"#C998E9"}]},{"deg":135,"colors":[{"color":"#E4C7CA"},{"color":"#BC9AEC"},{"color":"#C998E9"}]},{"deg":135,"colors":[{"color":"#6BC4F6"},{"color":"#9298F6"},{"color":"#B57DF6"}]},{"deg":135,"colors":[{"color":"#F9DFD4"},{"color":"#E0D2DF"},{"color":"#ACBBEE"}]},{"deg":135,"colors":[{"color":"#FFE8BF"},{"color":"#FEA5B9"},{"color":"#EC83D8"}]},{"deg":135,"colors":[{"color":"#BCF7E7"},{"color":"#EDF9F7"},{"color":"#FDE4EC"}]},{"deg":135,"colors":[{"color":"#C5BCFF"},{"color":"#FFB5F3"}]},{"deg":135,"colors":[{"color":"#FFB5F3"},{"color":"#FFB2D1"}]},{"deg":135,"colors":[{"color":"#FFB2D1"},{"color":"#FFBEA2"}]},{"deg":135,"colors":[{"color":"#FFBEA2"},{"color":"#FFD87B"}]},{"deg":135,"colors":[{"color":"#FFD87B"},{"color":"#F9F871"}]},{"deg":135,"colors":[{"color":"#FFAF8A"},{"color":"#E59095"}]},{"deg":135,"colors":[{"color":"#C5BCFF"},{"color":"#80B1F5"}]},{"deg":135,"colors":[{"color":"#80B1F5"},{"color":"#00A5DE"}]},{"deg":135,"colors":[{"color":"#00A5DE"},{"color":"#0097B9"}]},{"deg":135,"colors":[{"color":"#0097B9"},{"color":"#008588"}]},{"deg":135,"colors":[{"color":"#008588"},{"color":"#007151"}]},{"deg":135,"colors":[{"color":"#FFAF8A"},{"color":"#C5BCFF"}]},{"deg":135,"colors":[{"color":"#E59095"},{"color":"#B87B9A"}]},{"deg":135,"colors":[{"color":"#B87B9A"},{"color":"#836C91"}]},{"deg":135,"colors":[{"color":"#FFAF8A"},{"color":"#D5A561"}]},{"deg":135,"colors":[{"color":"#D5A561"},{"color":"#A09C46"}]},{"deg":135,"colors":[{"color":"#A09C46"},{"color":"#64913F"}]},{"deg":135,"colors":[{"color":"#64913F"},{"color":"#008349"}]},{"deg":135,"colors":[{"color":"#63E6BE"},{"color":"#8CEAA9"}]},{"deg":135,"colors":[{"color":"#8CEAA9"},{"color":"#B2EC97"}]},{"deg":135,"colors":[{"color":"#FFAF8A"},{"color":"#D8EC8A"}]},{"deg":135,"colors":[{"color":"#B2EC97"},{"color":"#D8EC8A"}]},{"deg":135,"colors":[{"color":"#8CEAA9"},{"color":"#D8EC8A"}]},{"deg":135,"colors":[{"color":"#D8EC8A"},{"color":"#63E6BE"}]}]}'),t=JSON.parse('{"zh":"\u9636\u68af\u8272","en":"step","colors":[["#5C1D00","#852A00","#AD3700","#D64400","#FF5D12","#FF7A3D","#FF9767","#FFB492","#FFD1BC","#FFEFE7"],["#5C4300","#856100","#AD7F00","#D69D00","#FFBC05","#FFC832","#FFD45F","#FFE08C","#FFECB9","#FFF8E6"],["#194A2B","#26673E","#358451","#45A266","#56BF7C","#6ADC93","#7FF9AB","#A7FFC7","#CDFFDF","#F2FFF7"],["#006346","#04855F","#10A77A","#20C997","#34EBB5","#48FFC9","#72FFD5","#9BFFE1","#C4FFED","#EDFFF9"],["#004F5B","#017384","#1098AD","#26BED6","#44E6FF","#65EAFF","#87EFFF","#A9F3FF","#CAF8FF","#ECFCFF"],["#001D4E","#002C77","#003B9F","#004AC8","#0E62F1","#3A83FF","#659EFF","#90B9FF","#BCD4FF","#E7F0FF"],["#140C47","#211669","#31238B","#4333AD","#5846CF","#6F5CF1","#9383FC","#B3A8FF","#D2CCFF","#F1EFFF"],["#3a0147","#530F63","#8F2BA7","#AE3EC9","#CE55EB","#E269FF","#E88BFF","#EFACFF","#F5CEFF","#FCF0FF"],["#4E011C","#70082C","#92133F","#B42154","#D6336C","#F84986","#FF73A4","#FF9CBE","#FFC4D9","#FFEDF3"],["#353B40","#495057","#5E666E","#747C84","#8A939B","#A2AAB2","#BAC1C8","#D3D9DF","#EDF1F6","#F6F7F7"]]}'),F=e,n=F.colors[0],f=l,d=t},8437:function(o,r,c){"use strict";c.d(r,{$:function(){return e}});var e=function(o){var r=parseInt(o.substring(1,3),16),c=parseInt(o.substring(3,5),16),e=parseInt(o.substring(5,7),16);return"rgb(".concat(r,",").concat(c,",").concat(e,")")}},2349:function(o,r,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/step",function(){return c(5071)}])}},function(o){o.O(0,[706,774,888,179],(function(){return r=2349,o(o.s=r);var r}));var r=o.O();_N_E=r}]);