(window.webpackJsonp=window.webpackJsonp||[]).push([[11,26,29],{679:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));n(80);var o=n(13),r=n(23),c=n(26),l=n(33),d=n(14);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var f=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"hasComment",get:function(){return null!==this.comment&&""!==this.comment}}],[{key:"entity",get:function(){return"group"}},{key:"fields",value:function(){return{id:this.string(""),type:this.string(""),parent_id:this.string(null).nullable(),title:this.string(null).nullable(),comment:this.string(null).nullable(),icon:this.string("folder"),params:this.attr(null),relationshipNames:this.attr([]).nullable(),deviceIds:this.attr(null),children:this.hasMany(n,"parent_id")}}}]),n}(n(22).b)},688:function(t,e,n){var content=n(704);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(94).default)("4011545f",content,!0,{sourceMap:!1})},692:function(t,e,n){"use strict";n.d(e,"a",(function(){return F}));var o=function(t,e){return t<e?-1:t>e?1:0},r=/(^0x[\da-fA-F]+$|^([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?(?!\.\d+)(?=\D|\s|$))|\d+)/g,c=/^\s+|\s+$/g,l=/\s+/g,d=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,h=/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[/-]\d{1,4}[/-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,f=/^0+[1-9]{1}[0-9]*$/,m=/[^\x00-\x80]/,v=function(t,e){var n=t.localeCompare(e);return n?n/Math.abs(n):0},w=function(t,e){return t<e?-1:t>e?1:0},_=function(t,e){return t.value===e.value?0:void 0!==t.parsedNumber&&void 0!==e.parsedNumber?o(t.parsedNumber,e.parsedNumber):t.chunks&&e.chunks?function(t,e){for(var n=t.length,r=e.length,c=Math.min(n,r),i=0;i<c;i++){var l=t[i],d=e[i];if(l.normalizedString!==d.normalizedString){if(""===l.normalizedString!=(""===d.normalizedString))return""===l.normalizedString?-1:1;if(void 0!==l.parsedNumber&&void 0!==d.parsedNumber){var h=o(l.parsedNumber,d.parsedNumber);return 0===h?w(l.normalizedString,d.normalizedString):h}return void 0!==l.parsedNumber||void 0!==d.parsedNumber?void 0!==l.parsedNumber?-1:1:m.test(l.normalizedString+d.normalizedString)&&l.normalizedString.localeCompare?v(l.normalizedString,d.normalizedString):w(l.normalizedString,d.normalizedString)}}return n>c||r>c?n<=c?-1:1:0}(t.chunks,e.chunks):function(t,e){return(t.chunks?!e.chunks:e.chunks)?t.chunks?-1:1:(t.isNaN?!e.isNaN:e.isNaN)?t.isNaN?-1:1:(t.isSymbol?!e.isSymbol:e.isSymbol)?t.isSymbol?-1:1:(t.isObject?!e.isObject:e.isObject)?t.isObject?-1:1:(t.isArray?!e.isArray:e.isArray)?t.isArray?-1:1:(t.isFunction?!e.isFunction:e.isFunction)?t.isFunction?-1:1:(t.isNull?!e.isNull:e.isNull)?t.isNull?-1:1:0}(t,e)},$=function(t){return"function"==typeof t?t:function(e){if(Array.isArray(e)){var n=Number(t);if(Number.isInteger(n))return e[n]}else if(e&&"object"==typeof e&&"function"!=typeof t)return e[t];return e}},y=function(t){if(0!==t.length){var e=Number(t);if(!Number.isNaN(e))return e}},N=function(t){var e=y(t);return void 0!==e?e:function(t){if(h.test(t)){var e=Date.parse(t);if(!Number.isNaN(e))return e}}(t)},S=function(t){return t.replace(l," ").replace(c,"")},k=function(t,e,n){if(d.test(t)&&(!f.test(t)||0===e||"."!==n[e-1]))return y(t)||0},x=function(t,e,n){return{parsedNumber:k(t,e,n),normalizedString:S(t)}},z=function(t){return function(t){return t.replace(r,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0")}(t).map(x)},O=function(t){return"function"==typeof t},A=function(t){return Number.isNaN(t)||t instanceof Number&&Number.isNaN(t.valueOf())},j=function(t){return null===t},G=function(t){return!(null===t||"object"!=typeof t||Array.isArray(t)||t instanceof Number||t instanceof String||t instanceof Boolean||t instanceof Date)},B=function(t){return"symbol"==typeof t},C=function(t){return void 0===t},R=function(t){if("string"==typeof t||t instanceof String||("number"==typeof t||t instanceof Number)&&!A(t)||"boolean"==typeof t||t instanceof Boolean||t instanceof Date){var e=function(t){return"boolean"==typeof t||t instanceof Boolean?Number(t).toString():"number"==typeof t||t instanceof Number?t.toString():t instanceof Date?t.getTime().toString():"string"==typeof t||t instanceof String?t.toLowerCase().replace(c,""):""}(t),n=N(e);return{parsedNumber:n,chunks:z(n?""+n:e),value:t}}return{isArray:Array.isArray(t),isFunction:O(t),isNaN:A(t),isNull:j(t),isObject:G(t),isSymbol:B(t),isUndefined:C(t),value:t}},H=function(t,e,n){var o=e.length?e.map($):[function(t){return t}],r=t.map((function(element,t){return{index:t,values:o.map((function(t){return t(element)})).map(R)}}));return r.sort((function(t,e){return function(t,e,n){for(var o=t.index,r=t.values,c=e.index,l=e.values,d=r.length,h=n.length,i=0;i<d;i++){var f=i<h?n[i]:null;if(f&&"function"==typeof f){var m=f(r[i].value,l[i].value);if(m)return m}else{var v=_(r[i],l[i]);if(v)return v*("desc"===f?-1:1)}}return o-c}(t,e,n)})),r.map((function(element){return function(t,e){return t[e]}(t,element.index)}))};function F(t,e,n){if(!t||!Array.isArray(t))return[];var o=function(t){if(!t)return[];var e=Array.isArray(t)?[].concat(t):[t];return e.some((function(t){return"string"!=typeof t&&"number"!=typeof t&&"function"!=typeof t}))?[]:e}(e),r=function(t){if(!t)return[];var e=Array.isArray(t)?[].concat(t):[t];return e.some((function(t){return"asc"!==t&&"desc"!==t&&"function"!=typeof t}))?[]:e}(n);return H(t,o,r)}},703:function(t,e,n){"use strict";n(688)},704:function(t,e,n){var o=n(93)(!1);o.push([t.i,".fb-groups-settings-group__item-icon{float:right}.fb-groups-settings-group__item-remove{color:#d9831f}.fb-groups-settings-group__item .fb-ui-spinner__container{margin-right:15px}.fb-groups-settings-group__item .fb-ui-switch-element__container{float:right}.fb-groups-settings-group__item small{display:block;font-size:80%}",""]),t.exports=o},778:function(t,e,n){"use strict";n.r(e);var o={name:"GroupsDetail",props:{group:{type:Object,required:!0},things:{type:Array,required:!0}}},r=n(58),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fb-groups-detail__container"},[n("no-results",{attrs:{message:t.$t("groups.texts.noThings"),icon:"plug"}})],1)}),[],!1,null,null,null);e.default=component.exports},779:function(t,e,n){"use strict";n.r(e);n(32),n(95),n(91),n(68);var o={name:"GroupsSettingsGroup",components:{GroupRename:function(){return n.e(31).then(n.bind(null,921))},GroupRemove:function(){return n.e(30).then(n.bind(null,922))}},props:{group:{type:Object,required:!0}},data:function(){return{transparentModal:!1,loading:{rename:!1,remove:!1},rename:{show:!1},remove:{show:!1}}},created:function(){this.transparentModal="Layout"!==this.$parent.$options.name},methods:{openWindow:function(t){Object.prototype.hasOwnProperty.call(this,t)&&(this[t].show=!0,Object.prototype.hasOwnProperty.call(this.loading,t)&&(this.loading[t]=!0))},closeWindow:function(t){Object.prototype.hasOwnProperty.call(this,t)&&(this[t].show=!1)},groupRemoved:function(){this.closeWindow("remove"),this.$emit("removed")}}},r=(n(703),n(58)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fb-groups-settings-group__container"},[n("list-items-container",{attrs:{heading:t.$t("groups.headings.generalSettings")}},[n("settings-list-item",{staticClass:"fb-groups-settings-group__item",attrs:{type:"button"},on:{click:function(e){return t.openWindow("rename")}}},[n("span",{staticClass:"fb-groups-settings-group__item-icon"},[n("font-awesome-icon",{attrs:{icon:"angle-right"}})],1),t._v(" "),t.loading.rename?n("fb-ui-spinner",{attrs:{size:"sm"}}):t._e(),t._v("\n      "+t._s(t.$t("groups.buttons.rename.title"))+"\n    ")],1),t._v(" "),n("settings-list-item",{staticClass:"fb-groups-settings-group__item fb-groups-settings-group__item-remove",attrs:{type:"button"},on:{click:function(e){return t.openWindow("remove")}}},[n("span",{staticClass:"fb-groups-settings-group__item-icon"},[n("font-awesome-icon",{attrs:{icon:"exclamation-triangle"}})],1),t._v(" "),t.loading.remove?n("fb-ui-spinner",{attrs:{size:"sm"}}):t._e(),t._v("\n      "+t._s(t.$t("groups.buttons.remove.title"))+"\n    ")],1)],1),t._v(" "),t.rename.show?n("group-rename",{attrs:{group:t.group,"transparent-bg":t.transparentModal},on:{loaded:function(e){t.loading.rename=!1},close:function(e){return t.closeWindow("rename")}}}):t._e(),t._v(" "),t.remove.show?n("group-remove",{attrs:{group:t.group,"transparent-bg":t.transparentModal},on:{loaded:function(e){t.loading.remove=!1},close:function(e){return t.closeWindow("remove")},removed:t.groupRemoved}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},919:function(t,e,n){"use strict";n.r(e);n(84),n(68),n(49),n(56),n(42),n(692);var o=n(10),r=n.n(o),c=n(88),l=n(679),d=n(778),h=n(779),f={opened:"detail",items:{detail:{name:"detail",route:{hash:c.m}},settings:{name:"settings",route:{hash:c.n}}}},m={name:"GroupDetailPage",components:{GroupDetail:d.default,GroupSettings:h.default},validate:function(t){var e=t.app,n=t.params;return e.$validateUUID(n.id)},transition:"fade",data:function(){return{id:this.$route.params.id,window:Object.assign({},f)}},fetch:function(t){var e=t.app,n=t.store,o=t.params,c=t.error;if(0===n.getters["entities/group/query"]().count())return n.dispatch("entities/group/get",{id:o.id},{root:!0}).then((function(){var t=l.a.find(o.id);t?(n.dispatch("template/resetHeadings",null,{root:!0}),n.dispatch("template/resetButtons",null,{root:!0}),n.dispatch("template/setLeftButton",{name:e.i18n.t("application.buttons.back.title"),icon:"arrow-left"},{root:!0}),n.dispatch("template/setRightButton",{name:e.i18n.t("application.buttons.edit.title")},{root:!0}),n.dispatch("template/setFullRowHeading",null,{root:!0}),n.dispatch("template/setHeading",{heading:t.name,subHeading:t.comment},{root:!0}),n.dispatch("template/setHeadingIcon",{icon:e.$groupIcon(t)},{root:!0}),n.dispatch("app/bottomMenuCollapse",null,{root:!0})):c({statusCode:404,message:"Group Not Found"})})).catch((function(t){404===r()(t,"exception.response.status",0)?c({statusCode:404,message:"Group Not Found"}):c({statusCode:503,message:"Something went wrong"})}))},head:function(){return{title:this.$t("meta.groups.detail.title",{group:this.group.name})}},computed:{windowSize:function(){return this.$store.state.app.windowSize},group:function(){return l.a.find(this.id)},fetchingGroups:function(){return l.a.getters("fetching")()},fetchingGroup:function(){return l.a.getters("getting")(this.id)}},watch:{group:function(t){t&&this._configureNavigation()},windowSize:function(t){"xs"!==t&&(""!==this.$route.hash?this.$route.hash.includes(c.n)&&this.$router.push(this.localePath({name:this.$routes.groups.list,hash:"".concat(c.n,"-").concat(this.id)})):this.$router.push(this.localePath({name:this.$routes.groups.list,hash:"".concat(c.m,"-").concat(this.id)})))},fetchingGroup:function(t){t||null===this.group&&this.$nuxt.error({statusCode:404,message:"Group Not Found"})}},beforeMount:function(){var t=this;null===this.windowSize||"xs"===this.windowSize?(0!==l.a.query().count()||this.fetchingGroups||this.fetchingGroup||l.a.getters("firstLoadFinished")()||l.a.dispatch("get",{id:this.id}).catch((function(e){404===r()(e,"exception.response.status",0)?t.$nuxt.error({statusCode:404,message:"Group Not Found"}):t.$nuxt.error({statusCode:503,message:"Something went wrong"})})),this.fetchingGroup||this.fetchingGroups||null!==this.group||this.$nuxt.error({statusCode:404,message:"Group Not Found"}),this.group&&this._configureNavigation()):this.$router.push(this.localePath({name:this.$routes.groups.list,hash:"".concat(c.n,"-").concat(this.id)}))},mounted:function(){var t=this;this.$nextTick((function(){t._setBlocksHeight("detail"),t._checkRoute()})),this.$bus.$emit("wait-page_reloading",!1),window.addEventListener("resize",this._windowResizeHandler)},updated:function(){this._setBlocksHeight("detail")},beforeDestroy:function(){this.$bus.$off("heading_left_button-clicked",this.leftButtonAction),this.$bus.$off("heading_right_button-clicked",this.rightButtonAction),window.removeEventListener("resize",this._windowResizeHandler)},methods:{groupRemoved:function(){this.$router.push(this.localePath(this.$routes.groups.list))},openView:function(view){var t=this;if(Object.prototype.hasOwnProperty.call(this.window.items,view))switch(view){case this.window.items.settings.name:this.window.opened=view,this.$nextTick((function(){if(r()(t.$refs,"settings")){var component=r()(t.$refs,"settings");t._setBlocksHeight("settings"),t.$scrollTo(component.$el,500,{container:".fb-default-layout__content",onDone:function(){t.$router.push(t.localePath({name:t.$routes.groups.detail,params:{id:t.id},hash:t.window.items.settings.route.hash}),(function(){t._configureNavigation()}))}})}}));break;case this.window.items.detail.name:if(r()(this.$refs,"detail")){var component=r()(this.$refs,"detail");this.$scrollTo(component.$el,500,{container:".fb-default-layout__content",onDone:function(){t.$router.push(t.localePath({name:t.$routes.groups.detail,params:{id:t.id}}),(function(){t._configureNavigation()})),t.window.opened=view}})}else this.$router.push(this.localePath({name:this.$routes.groups.detail,params:{id:this.id}})),this.window.opened=view,this._configureNavigation()}},leftButtonAction:function(){"xs"===this.windowSize&&this.$bus.$emit("wait-page_reloading",10),this.$router.push(this.localePath({name:this.$routes.groups.list}))},rightButtonAction:function(){this.window.opened===this.window.items.settings.name?this.openView(this.window.items.detail.name):this.openView(this.window.items.settings.name)},_configureNavigation:function(){this.$store.dispatch("template/resetHeadings",null,{root:!0}),this.$store.dispatch("template/resetButtons",null,{root:!0}),this.$store.dispatch("template/setLeftButton",{name:this.$t("application.buttons.back.title"),icon:"arrow-left"},{root:!0}),this.window.opened===this.window.items.settings.name?this.$store.dispatch("template/setRightButton",{name:this.$t("application.buttons.close.title")},{root:!0}):this.window.opened!==this.window.items.detail.name&&this.window.opened!==this.window.items.type.name||this.$store.dispatch("template/setRightButton",{name:this.$t("application.buttons.edit.title")},{root:!0}),this.$store.dispatch("template/setFullRowHeading",null,{root:!0}),this.$store.dispatch("template/setHeading",{heading:this.group.name,subHeading:this.group.comment},{root:!0}),this.$store.dispatch("template/setHeadingIcon",{icon:this.$groupIcon(this.group)},{root:!0}),this.$store.dispatch("app/bottomMenuCollapse",null,{root:!0}),this.$bus.$off("heading_left_button-clicked"),this.$bus.$off("heading_right_button-clicked"),this.$bus.$on("heading_left_button-clicked",this.leftButtonAction),this.$bus.$on("heading_right_button-clicked",this.rightButtonAction)}}},v=n(58),w=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fb-groups-group-detail-view__container"},[t.fetchingGroup&&null===t.group?n("fb-ui-loading-box",{attrs:{text:t.$t("groups.texts.loadingGroup")}}):[n("group-detail",{ref:"detail",attrs:{group:t.group,things:[]}}),t._v(" "),t.settings?n("group-settings",{directives:[{name:"body-scroll-lock",rawName:"v-body-scroll-lock",value:!0,expression:"true"}],ref:"settings",staticClass:"fb-groups-group-detail-view__container-settings",attrs:{group:t.group},on:{removed:t.groupRemoved}}):t._e()]],2)}),[],!1,null,null,null);e.default=w.exports}}]);