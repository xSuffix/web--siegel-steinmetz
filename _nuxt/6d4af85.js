(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5,8,9,10],{347:function(e,t,r){var content=r(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("f2241bc6",content,!0,{sourceMap:!1})},348:function(e,t,r){var content=r(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("2ccb5dfe",content,!0,{sourceMap:!1})},349:function(e,t,r){"use strict";r(347)},350:function(e,t,r){var n=r(16)(!1);n.push([e.i,"hr[data-v-5ead06cf]{border-bottom:1px solid;border-color:var(--v-secondary-base);border-top:none;border-top-color:var(--v-secondary-base)}.offer-card[data-v-5ead06cf],hr[data-v-5ead06cf]{margin:32px 0}.card-container[data-v-5ead06cf]{display:flex;font-size:14px}.right[data-v-5ead06cf]{display:flex;flex-direction:column;justify-content:space-between}img[data-v-5ead06cf]{flex:0 0 32%;width:32%;max-height:230px;margin-right:16px;border-radius:4px;-o-object-fit:cover;object-fit:cover}h3[data-v-5ead06cf]{margin:0 0 8px}p[data-v-5ead06cf]{margin:8px 0;font-size:1em}.actions a+a[data-v-5ead06cf]{margin-left:8px}@media (min-width:768px){img[data-v-5ead06cf]{height:192px;width:256px;margin-right:32px}}@media (min-width:992px){img[data-v-5ead06cf]{width:100%;margin:0}hr[data-v-5ead06cf]{display:none}.card-container[data-v-5ead06cf]{flex-direction:column}}",""]),e.exports=n},351:function(e,t,r){var content=r(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("7283e336",content,!0,{sourceMap:!1})},354:function(e,t,r){"use strict";r.r(t);var n={name:"CardOffer",props:{title:{type:String,default:""},text:{type:String,default:""},buttons:{type:Array,default:function(){}},image:{type:String,default:""}}},o=(r(349),r(41)),l=r(52),c=r.n(l),d=r(343),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"offer-card"},[r("hr"),e._v(" "),r("div",{staticClass:"card-container"},[r("img",{attrs:{src:e.image,alt:e.title}}),e._v(" "),r("div",{staticClass:"right"},[r("div",[r("h3",[e._v(e._s(e.title))]),e._v(" "),r("p",[e._v(e._s(e.text))])]),e._v(" "),r("div",{staticClass:"actions"},e._l(e.buttons,(function(button){return r("nuxt-link",{key:button.url,attrs:{to:button.url}},[r("v-btn",{attrs:{text:"text"==button.type,color:button.color}},[e._v("\n            "+e._s(button.text)+"\n          ")])],1)})),1)])])])}),[],!1,null,"5ead06cf",null);t.default=component.exports;c()(component,{VBtn:d.a})},355:function(e,t,r){"use strict";r.r(t);var n={name:"Wave",props:{color:{type:String,default:"black"},background:{type:String,default:"transparent"}}},o=r(41),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{style:{display:"block",backgroundColor:e.background},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 720 32"}},[r("path",{attrs:{fill:e.color,d:"M0 25.576c89.5 6.3147 201.941 10.18 338.75.8675 220.639-15.0187 381.25 0 381.25 0V0H0v25.576z"}})])}),[],!1,null,"a608ca84",null);t.default=component.exports},356:function(e,t,r){e.exports=r.p+"img/grabmallager.51423fb.webp"},357:function(e,t,r){e.exports=r.p+"img/grabmalreferenzen.de56092.webp"},358:function(e,t,r){e.exports=r.p+"img/restaurierungen.3b1b3fa.webp"},359:function(e,t,r){"use strict";r(348)},360:function(e,t,r){var n=r(16)(!1);n.push([e.i,"@media (min-width:600px){.box[data-v-3dcdff96]{padding-top:8px}}@media (min-width:992px){.offers[data-v-3dcdff96]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:16px}}",""]),e.exports=n},361:function(e,t,r){"use strict";r(351)},362:function(e,t,r){var n=r(16)(!1);n.push([e.i,"a[data-v-ada46b1c]:hover{text-decoration:underline}",""]),e.exports=n},364:function(e,t,r){var content=r(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("58da385c",content,!0,{sourceMap:!1})},367:function(e,t,r){"use strict";r.r(t);var n={name:"Offer",data:function(){return{grabmallager:{title:"Grabmallager",text:"Ein sichtbares und individuelles Andenken an einen geliebten Menschen.",buttons:[{text:"Galerie",url:"#",color:"primary"},{text:"Mehr",url:"#",type:"text"}],image:r(356)},grabmalreferenzen:{title:"Grabmalreferenzen",text:"Wir erarbeiten mit Ihnen gemeinsam die ganz persönliche Erinnerung an Ihren verstorbenen Verwandten.",buttons:[{text:"Galerie",url:"#",color:"primary"},{text:"Mehr",url:"#",type:"text"}],image:r(357)},restaurierungen:{title:"Restaurierungen",text:"Ein Schwerpunkt unserer Arbeit ist die komplette und fachgemäße Restaurierung historischer Gebäude, Baudenkmale und Bildhauerarbeiten.",buttons:[{text:"Galerie",url:"#",color:"primary"},{text:"Mehr",url:"#",type:"text"}],image:r(358)}}}},o=(r(359),r(41)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{ref:"offer",attrs:{id:"offer"}},[r("div",{staticClass:"gray"},[r("div",{staticClass:"container pv-md-d"},[r("div",{staticClass:"box"},[r("h2",[e._v("Unser Angebot")]),e._v(" "),r("p",[e._v("\n          Eine kleine Übersicht unserer bisherigen Leistungen finden Sie hier.\n        ")]),e._v(" "),r("div",{staticClass:"offers"},[r("offer-card",e._b({},"offer-card",e.grabmallager,!1)),e._v(" "),r("offer-card",e._b({},"offer-card",e.grabmalreferenzen,!1)),e._v(" "),r("offer-card",e._b({},"offer-card",e.restaurierungen,!1))],1)])])]),e._v(" "),r("Wave",{attrs:{color:"var(--v-gray-base)"}})],1)}),[],!1,null,"3dcdff96",null);t.default=component.exports;installComponents(component,{OfferCard:r(354).default,Wave:r(355).default})},368:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{icons:["mdi-shield-account","mdi-delete"],items:["default","absolute","fixed"],padless:!0,variant:"default"}},computed:{localAttrs:function(){var e={};return"default"===this.variant?(e.absolute=!1,e.fixed=!1):e[this.variant]=!0,e}}},o=(r(361),r(41)),l=r(52),c=r.n(l),d=r(343),f=r(366),v=r(353),m=r(391),h=r(392),x=r(342),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-footer",e._b({attrs:{padless:e.padless}},"v-footer",e.localAttrs,!1),[r("v-card",{staticClass:"accent lighten-1 text-center",attrs:{flat:"",tile:"",width:"100%"}},[r("v-card-text",[r("h3",{staticClass:"white--text"},[e._v("\n        Bernd Siegel Steingestaltung\n      ")])]),e._v(" "),r("v-card-text",[r("v-btn",{staticClass:"mx-2",attrs:{text:"",small:"",color:"secondary"}},[r("v-icon",{attrs:{left:""}},[e._v("\n          mdi-information\n        ")]),e._v("Impressum\n      ")],1),e._v(" "),r("v-btn",{staticClass:"mx-2",attrs:{text:"",small:"",color:"secondary"}},[r("v-icon",{attrs:{left:""}},[e._v("\n          mdi-shield-account\n        ")]),e._v("Datenschutz\n      ")],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",{staticClass:"white--text accent"},[e._v("\n      Copyright © "+e._s((new Date).getFullYear())+"\n      "),r("a",{staticClass:"white--text",attrs:{href:"http://www.happydesigns.de/",target:"_blank",rel:"noopener"}},[e._v("happydesigns")])])],1)],1)}),[],!1,null,"ada46b1c",null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardText:v.a,VDivider:m.a,VFooter:h.a,VIcon:x.a})},372:function(e,t,r){"use strict";r(364)},373:function(e,t,r){var n=r(16)(!1);n.push([e.i,"@media (min-width:768px){main[data-v-e50bf412]{padding-top:112px}}",""]),e.exports=n},394:function(e,t,r){"use strict";r.r(t);var n=r(124),o=(r(162),{data:function(){return{visibleElements:[]}},methods:{visibilityChanged:function(e,t,element){if(e)this.visibleElements.push(element);else{var r=this.visibleElements.indexOf(element);r>=0&&this.visibleElements.splice(r,1)}this.$store.commit("setSection",Math.min.apply(Math,Object(n.a)(this.visibleElements)))}}}),l=(r(372),r(41)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("SectionHome",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:function(t,r){return e.visibilityChanged(t,r,0)},intersection:{root:this.$refs.home,rootMargin:"-128px"}},expression:"{\n      callback: (isVisible, entry) => visibilityChanged(isVisible, entry, 0),\n      intersection: {\n        root: this.$refs.home,\n        rootMargin: '-128px',\n      },\n    }"}]}),e._v(" "),r("SectionOffer",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:function(t,r){return e.visibilityChanged(t,r,1)},expression:"\n      (isVisible, entry) => visibilityChanged(isVisible, entry, 1)\n    "}]}),e._v(" "),r("SectionAbout"),e._v(" "),r("Footer")],1)}),[],!1,null,"e50bf412",null);t.default=component.exports;installComponents(component,{SectionOffer:r(367).default,Footer:r(368).default})}}]);