(function(e){function t(t){for(var n,s,r=t[0],l=t[1],c=t[2],m=0,d=[];m<r.length;m++)s=r[m],o[s]&&d.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0127":function(e,t,a){},"034f":function(e,t,a){"use strict";var n=a("64a9"),o=a.n(n);o.a},"0798":function(e,t,a){"use strict";var n=a("cc5b"),o=a.n(n);o.a},"117b":function(e,t,a){},"3a6f":function(e,t,a){"use strict";var n=a("117b"),o=a.n(n);o.a},"53b8":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=a("ce5b"),i=a.n(o),s=(a("bf40"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticClass:"pa-2"},[a("v-select",{staticClass:"fixed",attrs:{items:e.items},model:{value:e.view,callback:function(t){e.view=t},expression:"view"}}),a("div",{staticClass:"pad"},[e.view===e.items[0]?a("simple"):e._e(),e.view===e.items[1]?a("grid"):e._e(),e.view===e.items[2]?a("css"):e._e(),e.view===e.items[3]?a("deep"):e._e(),e.view===e.items[4]?a("array"):e._e(),e.view===e.items[5]?a("partial"):e._e(),e.view===e.items[6]?a("conditional"):e._e(),e.view===e.items[7]?a("complex"):e._e()],1)],1)}),r=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("h4",[e._v("Simple Responsive Form ")]),a("v-form-base",{attrs:{value:e.myValue,schema:e.mySchema},on:{update:e.update}}),a("infoline",{attrs:{value:e.myValue,schema:e.mySchema}})],1)},c=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{directives:[{name:"resize",rawName:"v-resize.quiet",value:e.onResize,expression:"onResize",modifiers:{quiet:!0}}],staticClass:"wrap",attrs:{id:e.ref}},[e._l(e.flatCombinedArraySorted,function(t,n){return[a("v-flex",{directives:[{name:"show",rawName:"v-show",value:!t.schema.hidden,expression:"!obj.schema.hidden"},{name:"touch",rawName:"v-touch",value:{left:function(){return e.onSwipe("left",t)},right:function(){return e.onSwipe("right",t)},up:function(){return e.onSwipe("up",t)},down:function(){return e.onSwipe("down",t)}},expression:"{ left: () => onSwipe('left', obj), right: () => onSwipe('right', obj), up: () => onSwipe('up', obj), down: () => onSwipe('down', obj) }"}],key:n,class:e.getClassName(t)},[e._t(e.getTypeTopSlot(t)),e._t(e.getKeyTopSlot(t)),e._t(e.getTypeItemSlot(t),[e._t(e.getKeyItemSlot(t),["time"===t.schema.type?a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":32,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"}},[a("v-text-field",e._b({attrs:{slot:"activator",value:e.setValue(t)},on:{focus:function(a){e.onFocus(a,t)},input:function(a){e.onInput(a,t)}},slot:"activator"},"v-text-field",t.schema,!1)),a("v-time-picker",{attrs:{value:e.setValue(t)},on:{focus:function(a){e.onFocus(a,t)},input:function(a){e.onInput(a,t)}}})],1):"date"===t.schema.type?a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":32,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"}},[a("v-text-field",e._b({attrs:{slot:"activator",value:e.setValue(t)},on:{focus:function(a){e.onFocus(a,t)},input:function(a){e.onInput(a,t)}},slot:"activator"},"v-text-field",t.schema,!1)),a("v-date-picker",{attrs:{value:e.setValue(t)},on:{focus:function(a){e.onFocus(a,t)},input:function(a){e.onInput(a,t)}}})],1):"radio"===t.schema.type?a("v-radio-group",e._b({attrs:{value:e.setValue(t)},on:{change:function(a){e.onInput(a,t)}}},"v-radio-group",t.schema,!1),e._l(t.schema.options,function(n,o){return a("v-radio",e._b({key:o,attrs:{label:n,value:n}},"v-radio",t.schema,!1))}),1):"array"===t.schema.type?e._l(e.setValue(t),function(n,o){return a("div",e._b({key:o,attrs:{value:e.setValue(t)}},"div",t.schema,!1),[e._t(e.getKeyArraySlot(t),[a("v-form-base",{attrs:{id:e.id+"-"+t.key+"-"+o,value:n,schema:e.sanitizeSchema(t,o)}})],{item:n})],2)}):"list"===t.schema.type?[t.schema.label?a("v-toolbar",e._b({attrs:{dark:""}},"v-toolbar",t.schema,!1),[a("v-toolbar-title",[e._v(e._s(t.schema.label))])],1):e._e(),a("v-list",e._b({},"v-list",t.schema,!1),e._l(t.schema.items,function(n,o){return a("v-list-tile",e._b({key:o,class:e.setValue(t)===n?"active":"inactive",on:{click:function(a){e.onInput(n,t)}}},"v-list-tile",t.schema,!1),[a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:e._s(n)}})],1)],1)}),1)]:"switch"===t.schema.type||"checkbox"===t.schema.type?a(e.mapTypeToComponent(t.schema.type),e._b({tag:"div",attrs:{"input-value":e.setValue(t)},on:{"click:append":function(a){e.onClick(a,t,e.append)},"click:append-outer":function(a){e.onClick(a,t,e.appendOuter)},"click:prepend":function(a){e.onClick(a,t,e.prepend)},"click:prepend-inner":function(a){e.onClick(a,t,e.prependInner)},change:function(a){e.onInput(a,t)}}},"div",t.schema,!1)):"button"===t.schema.type||"btn"===t.schema.type?a("v-btn",e._b({on:{click:function(a){e.onClick(a,t,e.button)}}},"v-btn",t.schema,!1),[a("v-icon",{attrs:{left:"",dark:""}},[e._v(e._s(t.schema.iconLeft))]),e._v("\n          "+e._s(e.setValue(t))+e._s(t.schema.label)+"\n          "),a("v-icon",{attrs:{right:"",dark:""}},[e._v(e._s(t.schema.iconRight))])],1):a(e.mapTypeToComponent(t.schema.type),e._b({tag:"div",attrs:{value:e.setValue(t)},on:{focus:function(a){e.onFocus(a,t)},"click:append":function(a){e.onClick(a,t,e.append)},"click:append-outer":function(a){e.onClick(a,t,e.appendOuter)},"click:clear":function(a){e.onClick(a,t,e.clear)},"click:prepend":function(a){e.onClick(a,t,e.prepend)},"click:prepend-inner":function(a){e.onClick(a,t,e.prependInner)},input:function(a){e.onInput(a,t)}}},"div",t.schema,!1))])]),e._t(e.getTypeBottomSlot(t)),e._t(e.getKeyBottomSlot(t))],2),t.schema.spacer?a("v-spacer",{key:"s-"+n}):e._e()]})],2)},m=[],d=a("7618"),p=a("a745"),h=a.n(p),f=(a("ac6a"),a("28a5"),a("cebc")),y=a("a4bb"),b=a.n(y),v=(a("a481"),a("2ef0")),x={text:"v-text-field",password:"v-text-field",email:"v-text-field",tel:"v-text-field",url:"v-text-field",color:"v-text-field",search:"v-text-field",number:"v-text-field",file:"v-text-field",list:"v-list",range:"v-slider"},k="ASC",g=".",S="-",w="form-base",_="item",j="type",O="key",C="slot-array",V="slot-top",A="slot-item",N="slot-bottom",I="clear",T="button",D="append",P="append-outer",B="prepend",E="prepend-inner",$=null,F={name:"v-form-base",props:{id:{type:String,default:w},value:{type:[Object,Array,String],required:!0},schema:{type:[Object,Array],required:!0}},data:function(){return{flatCombinedArray:[],clear:I,button:T,append:D,appendOuter:P,prepend:B,prependInner:E}},computed:{ref:function(){return this.id},flatCombinedArraySorted:function(){return Object(v["orderBy"])(this.flatCombinedArray,["schema.sort"],[k])},storeStateData:function(){return this.updateArrayFromState(this.value,this.schema),this.value},storeStateSchema:function(){return this.updateArrayFromState(this.value,this.schema),this.schema}},methods:{sanitizeSchema:function(e,t){var a=Object(v["cloneDeep"])(e);Object(v["isArray"])(a.schema.schema)?a.schema.schema[t]:a.schema.schema;return Object(v["isArray"])(e.schema.schema)?e.schema.schema[t]=e.schema.schema[t]?e.schema.schema[t]:Object(v["cloneDeep"])($):(e.schema.schema=[],$=a.schema.schema,e.schema.schema[t]=e.schema.schema[t]?e.schema.schema[t]:Object(v["cloneDeep"])($)),e.schema.schema[t]},mapTypeToComponent:function(e){return x[e]?x[e]:"v-".concat(e)},getKeyArraySlot:function(e){return this.getKeyClassNameWithAppendix(e,C+"-key")},getKeyItemSlot:function(e){return this.getKeyClassNameWithAppendix(e,A+"-key")},getKeyTopSlot:function(e){return this.getKeyClassNameWithAppendix(e,V+"-key")},getKeyBottomSlot:function(e){return this.getKeyClassNameWithAppendix(e,N+"-key")},getTypeItemSlot:function(e){return this.getTypeClassNameWithAppendix(e,A+"-type")},getTypeTopSlot:function(e){return this.getTypeClassNameWithAppendix(e,V+"-type")},getTypeBottomSlot:function(e){return this.getTypeClassNameWithAppendix(e,N+"-type")},getKeyClassNameWithAppendix:function(e,t){return"".concat(t?t+S:"").concat(e.key.replace(/\./g,"-"))},getKeyClassName:function(e){return this.getKeyClassNameWithAppendix(e,O)},getTypeClassNameWithAppendix:function(e,t){return"".concat(t+S).concat(e.schema.type)},getTypeClassName:function(e){return this.getTypeClassNameWithAppendix(e,j)},getFlexGridClassName:function(e){var t=function(e){return b()(e).map(function(t){return t+e[t]}).join(" ")};return e.schema.flex?Object(v["isPlainObject"])(e.schema.flex)?t(e.schema.flex):"xs".concat(e.schema.flex):""},getOffsetGridClassName:function(e){var t=function(e){return b()(e).map(function(t){return"offset-".concat(t).concat(e[t])}).join(" ")};return e.schema.offset?Object(v["isPlainObject"])(e.schema.offset)?t(e.schema.offset):"offset-xs".concat(e.schema.offset):""},getOrderGridClassName:function(e){var t=function(e){return b()(e).map(function(t){return"order-".concat(t).concat(e[t])}).join(" ")};return e.schema.order?Object(v["isPlainObject"])(e.schema.order)?t(e.schema.order):"order-xs".concat(e.schema.order):""},getGridClassName:function(e){return"".concat(this.getFlexGridClassName(e)," ").concat(this.getOffsetGridClassName(e)," ").concat(this.getOrderGridClassName(e))},getClassName:function(e){return"".concat(_," ").concat(this.getTypeClassName(e)," ").concat(this.getKeyClassName(e)," ").concat(this.getGridClassName(e))},toCtrl:function(e){return Object(v["isFunction"])(e.obj.schema.toCtrl)?e.obj.schema.toCtrl(e):e.value},fromCtrl:function(e){return Object(v["isFunction"])(e.obj.schema.fromCtrl)?e.obj.schema.fromCtrl(e):e.value},setValue:function(e){return this.toCtrl({value:e.value,obj:e,data:this.storeStateData,schema:this.storeStateSchema})},onInput:function(e,t){e=this.fromCtrl({value:e,obj:t,data:this.storeStateData,schema:this.storeStateSchema}),e=""===e?null:e,this.setObjectByPath(this.storeStateData,t.key,e),this.emitValue("input",{on:"input",id:this.ref,index:this.ref.replace(/\D/g,""),parentId:this.$parent.id,key:t.key,value:e,obj:t,data:this.storeStateData,schema:this.storeStateSchema})},onClick:function(e,t,a){this.emitValue("click",{on:"click",id:this.ref,index:this.ref.replace(/\D/g,""),parentId:this.$parent.id,params:{text:e.srcElement&&e.srcElement.innerText,pos:a},key:t.key,value:t.value,obj:t,event:e,data:this.storeStateData,schema:this.storeStateSchema})},onFocus:function(e,t){this.emitValue("focus",{on:"focus",id:this.ref,index:this.ref.replace(/\D/g,""),parentId:this.$parent.id,key:t.key,value:t.value,obj:t,event:e,data:this.storeStateData,schema:this.storeStateSchema})},onSwipe:function(e,t){this.emitValue("swipe",{on:"swipe",id:this.ref,key:t.key,value:t.value,obj:t,params:{pos:e},data:this.storeStateData,schema:this.storeStateSchema})},onResize:function(){this.emitValue("resize",{on:"resize",id:this.ref,params:{x:window.innerWidth,y:window.innerHeight},data:this.storeStateData,schema:this.storeStateSchema})},emitValue:function(e,t){this.$parent.id?(this.$parent.$emit(this.getEventParentName(e),Object(f["a"])({},t,{parent:this.$parent})),this.$parent.$emit(this.getEventParentName("update"),Object(f["a"])({},t,{parent:this.$parent}))):(this.$emit(this.getEventName(e),t),this.$emit(this.getEventName("update"),t))},getEventName:function(e){return this.ref!==w?"".concat(e,":").concat(this.ref):e},getEventParentName:function(e){return this.$parent.id!==w?"".concat(e,":").concat(this.$parent.id):e},setObjectByPath:function(e,t,a){var n=this,o=t.split(g);o.forEach(function(t,i){i===o.length-1&&n.$set(e,t,a),e=e[t]})},updateArrayFromState:function(e,t){this.flatCombinedArray.forEach(function(a){a.value=Object(v["get"])(e,a.key,null),a.schema=Object(v["get"])(t,a.key,null)})},flattenObjects:function(e,t){var a=this,n={},o={};return b()(e).forEach(function(i){if(!h()(e[i])&&e[i]&&"object"===Object(d["a"])(e[i])||h()(e[i])&&h()(t[i])){var s=a.flattenObjects(e[i],t[i]),r=s.data,l=s.schema;b()(r).forEach(function(e){n[i+g+e]=r[e],o[i+g+e]=l[e]})}else n[i]=e[i],o[i]=t[i]}),{data:n,schema:o}},combineObjectsToArray:function(e){var t=e.data,a=e.schema,n=[];return b()(t).forEach(function(e){a[e]?Object(v["isPlainObject"])(a[e])?n.push({key:e,value:t[e],schema:a[e]}):console.warn("Prop '".concat(e,"' must have a correspondingly Property in Schema with at least ").concat(e,":{ type:'text'} as value.  Prop '").concat(e,"' is not editable and keeps untouched!")):console.warn("Property '".concat(e,"' in Data has no correspondingly Schema Property is not editable and keeps untouched!"))}),n},flattenAndCombineToArray:function(e,t){var a=this.flattenObjects(e,t);return this.combineObjectsToArray(a)}},created:function(){this.flatCombinedArray=this.flattenAndCombineToArray(this.storeStateData,this.storeStateSchema)}},K=F,R=a("2877"),z=Object(R["a"])(K,u,m,!1,null,null,null),U=z.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("h4",[e._v("See your reactive Value-Data")]),a("pre",[e._v(e._s(JSON.stringify(e.value,void 0,4)))])]),a("v-flex",{attrs:{xs6:""}},[a("h4",[e._v("See your Schema-Definition' ")]),a("pre",[e._v(e._s(JSON.stringify(e.schema,void 0,4)))])]),a("h4",[e._v("See logged 'Update' events at console ")])],1)},G=[],J={props:["value","schema"]},q=J,L=(a("e0f7"),Object(R["a"])(q,W,G,!1,null,"16e85bc2",null)),M=L.exports,H={name:"simple",components:{VFormBase:U,Infoline:M},data:function(){return{myValue:{name:"Base",password:"123456",checkbox:!0},mySchema:{name:{type:"text",label:"Name",flex:5},password:{type:"password",label:"Password",flex:5},checkbox:{type:"checkbox",label:"Ok"}}}},methods:{update:function(e){var t=e.on,a=e.id,n=e.key,o=e.value,i=(e.obj,e.event,e.params);e.data,e.schema;console.log("Update [ on, id, key, value, params]",t,a,n,o,i)}}},Q=H,X=Object(R["a"])(Q,l,c,!1,null,null,null),Y=X.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("h4",[e._v("Resize Window to change Layout, Offset and Order of Components")]),a("v-form-base",{class:e.layout,attrs:{value:e.myValue,schema:e.mySchema},on:{update:e.update}}),a("infoline",{attrs:{value:e.myValue,schema:e.mySchema}})],1)},ee=[],te={components:{VFormBase:U,Infoline:M},data:function(){return{myValue:{name:"Grid",radio:"A"}}},computed:{mySchema:function(){return{name:{type:"text",label:"Name",flex:{xs:8,sm:6},order:{xs:0,sm:8},offset:{xs:0,sm:3}},radio:{type:"radio",label:"Radio",row:this.row,options:["A","B","C"],flex:6,order:4}}},row:function(){return this.$vuetify.breakpoint.mdAndUp},layout:function(){return this.$vuetify.breakpoint.mdAndUp?"grey lighten-4":this.$vuetify.breakpoint.smAndUp?"blue lighten-5":"white"}},methods:{update:function(e){var t=e.on,a=(e.id,e.key),n=e.value,o=(e.obj,e.event,e.params);e.data,e.schema;console.log("Update [ on, key, value, params]",t,a,n,o)}}},ae=te,ne=Object(R["a"])(ae,Z,ee,!1,null,null,null),oe=ne.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("h4",[e._v("Play around with predefined CSS-Classes and Slots  ")]),a("v-form-base",{attrs:{id:"form-base-css",value:e.myValue,schema:e.mySchema},on:{"update:form-base-css":e.update}},[a("h4",{attrs:{slot:"slot-top-key-password"},slot:"slot-top-key-password"},[e._v("Top Slot Key Password")]),e._v(" --\x3e\n    "),a("h4",{attrs:{slot:"slot-bottom-key-name"},slot:"slot-bottom-key-name"},[e._v("Bottom Slot Key Name")]),a("h4",{attrs:{slot:"slot-item-key-password"},slot:"slot-item-key-password"},[e._v("Slot replaces Key Password")]),a("h4",{attrs:{slot:"slot-top-type-radio"},slot:"slot-top-type-radio"},[e._v("Top Slot Type Radio")])]),a("infoline",{attrs:{value:e.myValue,schema:e.mySchema}})],1)},se=[],re=["A","B"],le={components:{VFormBase:U,Infoline:M},data:function(){return{myValue:{name:"Base",password:"123456",email:"base@mail.com",controls:{checkbox:!0,switch:!0,slider:33,radioA:"A",radioB:"B"}},mySchema:{name:{type:"text",label:"Name",flex:4,appendIcon:"more_vert"},password:{type:"password",label:"Password",flex:4,spacer:!0},email:{type:"email",label:"Email",flex:4},controls:{checkbox:{type:"checkbox",label:"Red",color:"red",flex:4},switch:{type:"switch",label:"Switch",color:"blue",flex:4},slider:{type:"slider",label:"Slider",color:"orange",flex:4},radioA:{type:"radio",label:"Radio A",options:re,color:"indigo",flex:6},radioB:{type:"radio",label:"Radio B",options:re,color:"green",row:!0,flex:6}}}}},methods:{update:function(e){var t=e.on,a=e.id,n=e.key,o=e.value,i=(e.obj,e.event,e.params);e.data,e.schema;console.log("Update [ on, id, key, value, params]",t,a,n,o,i)}}},ce=le,ue=(a("0798"),Object(R["a"])(ce,ie,se,!1,null,null,null)),me=ue.exports,de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("h4",[e._v("Deep nested Object")]),a("v-form-base",{attrs:{id:"form-base-nested",value:e.myValue,schema:e.mySchema},on:{"update:form-base-nested":e.update}}),a("infoline",{attrs:{value:e.myValue,schema:e.mySchema}})],1)},pe=[],he=a("f499"),fe=a.n(he),ye={components:{VFormBase:U,Infoline:M},data:function(){return{myValue:{base:!0,controls:{switch:[!0,!1],checkbox:[!1,!0,[!0,!1],{checkboxArray:[!0,!1]}]}},mySchema:{base:{type:"checkbox",label:"Base"},controls:{switch:[{type:"switch",label:"Arr1"},{type:"switch",label:"Arr2"}],checkbox:[{type:"checkbox",label:"A"},{type:"checkbox",label:"B"},[{type:"checkbox",label:"C-A",color:"teal"},{type:"checkbox",label:"C-B",color:"teal"}],{checkboxArray:[{type:"checkbox",label:"D-A",color:"red"},{type:"checkbox",label:"D-B",color:"red"}]}]}}}},computed:{txtValue:{get:function(){return fe()(this.myValue,void 0,4)},set:function(e){try{this.myValue=JSON.parse(e),this.stateV="white"}catch(t){this.stateV="orange lighten-4",console.warn("myValue contains invalid JSON - ")}}},txtSchema:{get:function(){return fe()(this.mySchema,void 0,4)},set:function(e){try{this.mySchema=JSON.parse(e),this.stateS="white"}catch(t){this.stateS="orange lighten-4",console.warn("mySchema contains invalid JSON")}}}},methods:{update:function(e){var t=e.on,a=e.id,n=e.key,o=e.value,i=(e.obj,e.event,e.params);e.data,e.schema;console.log("Update [ on, id, key, value, params]",t,a,n,o,i)}}},be=ye,ve=Object(R["a"])(be,de,pe,!1,null,null,null),xe=ve.exports,ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("h4",[e._v("Complete Formbase from 'myValue'")]),a("v-form-base",{attrs:{value:e.myValue,schema:e.mySchema},on:{update:e.update}}),a("h4",[e._v("Partial Formbase from 'myValue.radios' synchronized with 'myValue'")]),a("v-form-base",{attrs:{id:"form-base-partial",value:e.myValue.radios,schema:e.mySchema.radios},on:{"update:form-base-partial":e.updatepartial}}),a("infoline",{attrs:{value:e.myValue,schema:e.mySchema}})],1)},ge=[],Se=["A","B"],we={components:{VFormBase:U,Infoline:M},data:function(){return{myValue:{checkbox:!0,switch:!0,radios:{radioA:"A",radioB:"B"},slider:33},mySchema:{checkbox:{type:"checkbox",label:"Red",color:"red"},switch:{type:"switch",label:"Switch1",color:"blue"},radios:{radioA:{type:"radio",label:"RadioA",options:Se,color:"green",row:!0},radioB:{type:"radio",label:"RadioB",options:Se,color:"indigo"}},slider:{type:"slider",label:"Slide",color:"orange"}}}},methods:{update:function(e){var t=e.on,a=(e.id,e.key),n=e.value,o=(e.obj,e.event,e.params);e.data,e.schema;console.log("Update [ on, key, value, params]",t,a,n,o)},updatepartial:function(e){var t=e.on,a=(e.id,e.key),n=e.value,o=(e.obj,e.event,e.params);e.data,e.schema;console.log("Update - PARTIAL [ on, key, value, params]",t,a,n,o)}}},_e=we,je=(a("3a6f"),Object(R["a"])(_e,ke,ge,!1,null,"523031da",null)),Oe=je.exports,Ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("h4",[e._v("Complete Form with validation")]),a("v-form",{ref:"form1",attrs:{"lazy-validation":""},model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[a("v-form-base",{attrs:{id:"form-base-complete",value:e.myValue,schema:e.mySchema},on:{"update:form-base-complete":e.update}})],1),a("v-btn",{attrs:{small:""},on:{click:e.validate}},[e._v("Validate")]),a("v-btn",{attrs:{small:""},on:{click:e.resetValidation}},[e._v("Reset Validate")]),a("infoline",{attrs:{value:e.myValue,schema:e.mySchema}})],1)},Ve=[],Ae=["Tesla","Jobs","Taleb","Harari"],Ne=function(e){return function(t){return t&&t.length>=e||"min. ".concat(e," Characters")}},Ie=function(e){return function(t){return t&&t.length<=e||"max. ".concat(e," Characters")}},Te=function(e){return function(t){return!!t||e}},De={requiredEmail:Te("E-mail is required"),max12:Ie(12),min6:Ne(6),validEmail:function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}},Pe={components:{VFormBase:U,Infoline:M},data:function(){return{formValid:!0,myValue:{email:"base@mail.com",password:"123456",subgroups:{select:"Tesla",multiple:["Jobs"],combobox:null,autocomplete:null,tasks:[{done:!1,title:"shopping"},{done:!0,title:"coding"},{done:!1,title:"walking"}],content:"Design principles of Vuetify ..."}},mySchema:{email:{type:"email",label:"Email",rules:[De.validEmail,De.requiredEmail],flex:{xs:12,sm:6}},password:{type:"password",label:"Password",hint:"6 to 12 Chars",appendIcon:"visibility",counter:12,rules:[De.min6,De.max12],clearable:!0,flex:{xs:12,sm:6}},subgroups:{select:{type:"select",label:"Select",items:Ae,flex:{xs:12,sm:6,md:3}},multiple:{type:"select",label:"Multi-Select",items:Ae,multiple:!0,flex:{xs:12,sm:6,md:3}},combobox:{type:"combobox",label:"Combobox",items:Ae,flex:{xs:12,sm:6,md:3}},autocomplete:{type:"autocomplete",label:"AutoComplete",items:Ae,flex:{xs:12,sm:6,md:3}},tasks:{type:"array",schema:{done:{type:"checkbox",label:"Ok",flex:3},title:{type:"text",placeholder:"to do...",flex:8}},flex:{xs:12,sm:6}},content:{type:"textarea",label:"Content",hint:"Auto-Growing...",autoGrow:!0,prependInnerIcon:"print",rules:[Te("Content required")],flex:{xs:12,sm:6}}}}}},methods:{validate:function(){this.$refs.form1.validate()},resetValidation:function(){this.$refs.form1.resetValidation()},toggle:function(){this.mySchema.checkbox[2].checkbox1[0].hidden=!this.mySchema.checkbox[2].checkbox1[0].hidden,console.log("this.mySchema.checkbox[2].checkbox1[0].hidden",this.mySchema.checkbox[2].checkbox1[0].hidden)},update:function(e){var t=e.on,a=e.id,n=e.index,o=e.key,i=e.value,s=e.obj,r=(e.event,e.params),l=e.data,c=e.schema,u=e.parent;console.log("UPDATED: On",t," ID:",a," Obj:",s," Key|Value|Params|Index:",o,i,r,n," Data|Schema:",l,c," Parent:",u),"click"===t&&"subgroups.content"===o&&"print"===(r&&r.text)&&window.print(),"click"===t&&"password"===o&&"append"===(r&&r.pos)&&("password"===s.schema.type?s.schema.appendIcon="lock":s.schema.appendIcon="visibility",s.schema.type="password"===s.schema.type?"text":"password")}}},Be=Pe,Ee=(a("f07b"),Object(R["a"])(Be,Ce,Ve,!1,null,null,null)),$e=Ee.exports,Fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("h4",[e._v("Display Arrays - Leftside: Schema from Template Object  - Rightside: Schema based on Array")]),a("v-form-base",{attrs:{id:"array-demo",value:e.myValue,schema:e.mySchema},on:{"update:array-demo":e.update}}),a("infoline",{attrs:{value:e.myValue,schema:e.mySchema}})],1)},Ke=[],Re={name:"arrays",components:{VFormBase:U,Infoline:M},data:function(){return{myValue:{tasksA:[{done:!0,title:"make refactoring"},{done:!0,title:"write documentation"},{done:!0,title:"remove logs"}],tasksB:[{done:!0,title:"make refactoring"},{done:!0,title:"write documentation"},{done:!0,title:"remove logs"}]},mySchema:{tasksA:{type:"array",flex:5,schema:{done:{type:"checkbox",label:"Ok",flex:3},title:{type:"text"},flex:8}},tasksB:{type:"array",flex:5,offset:1,schema:[{done:{type:"checkbox",label:"Ok 1",color:"brown",flex:3},title:{type:"text"},flex:8},{done:{type:"checkbox",label:"Ok 2",color:"green",flex:3},title:{type:"text"},flex:8},{done:{type:"checkbox",label:"Ok 3",color:"blue",flex:3},title:{type:"text"},flex:8}]}}}},methods:{update:function(e){var t=e.on,a=(e.parentId,e.id),n=e.index,o=e.key,i=e.value,s=e.obj,r=(e.event,e.params),l=e.data,c=e.schema;console.log("UPDATED: On",t," ID:",a," Obj:",s," Key|Value|Params|Index:",o,i,r,n," Data|Schema:",l,c," Parent:",parent),"done"===o&&(l.title=Math.random(),c.title.disabled=!i,c.done.label=n+" Done",c.done.color=i?"green":"red")}}},ze=Re,Ue=(a("5e40"),Object(R["a"])(ze,Fe,Ke,!1,null,null,null)),We=Ue.exports,Ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("h4",[e._v("Conditional Display")]),a("v-form-base",{attrs:{id:"form-base-complete",value:e.myValue,schema:e.mySchema},on:{"update:form-base-complete":e.update}}),a("infoline",{attrs:{value:e.myValue,schema:e.mySchema}})],1)},Je=[],qe={done:!0,title:"New..."},Le={components:{VFormBase:U,Infoline:M},data:function(){return{hidden:!0,color:"blue lighten-4",myValue:{button:null,add:null,conditional:"",tasks:[{done:!0,title:"shopping"},{done:!0,title:"coding"},{done:!0,title:"walking"}]}}},computed:{mySchema:function(){return{button:{type:"button",block:!0,label:"Click or Type 'Show'",dark:!0,color:"blue",iconLeft:"edit",iconRight:"toggle"},add:{type:"button",block:!0,label:"Add ToDo",dark:!0,color:"blue",iconRight:"add"},conditional:{type:"text",label:"Conditional on Value ",hint:"try typing 'show'",backgroundColor:this.color,flex:12},tasks:{type:"array",hidden:this.hidden,flex:{xs:12,sm:6},template:{done:{type:"checkbox",label:"Ok",disabled:!1,color:"brown",flex:3},title:{type:"text",placeholder:"to do...",disabled:!1,flex:8}},schema:[{done:{type:"checkbox",label:"Ok",disabled:!1,color:"green",flex:3},title:{type:"text",placeholder:"to do...",disabled:!1,flex:8}},{done:{type:"checkbox",label:"No",disabled:!1,color:"red",flex:3},title:{type:"text",placeholder:"to do...",disabled:!1,flex:8}},{done:{type:"checkbox",label:"Ok",disabled:!1,color:"blue",flex:3},title:{type:"text",placeholder:"to do...",disabled:!1,flex:8}}]}}}},methods:{update:function(e){e.on,e.id;var t=e.index,a=(e.parentId,e.key),n=e.value;e.obj,e.event,e.params,e.data,e.schema,e.parent;if(this.log(e),"button"===a&&this.toggle(),"conditional"===a&&(this.hidden="show"!==n),"add"===a){this.myValue.tasks.unshift(Object(f["a"])({},qe));var o=Object(v["cloneDeep"])(this.mySchema.tasks.template);this.mySchema.tasks.schema.unshift(o)}"done"===a&&!0===n&&(this.myValue.tasks.splice(t,1),this.mySchema.tasks.schema.splice(t,1))},toggle:function(){this.hidden=!this.hidden},log:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.on,a=e.id,n=e.index,o=(e.parentId,e.key),i=e.value,s=e.obj,r=(e.event,e.params),l=e.data,c=e.schema,u=e.parent;console.log("UPDATED: On",t," ID:",a," Obj:",s," Key|Value|Params|Index:",o,i,r,n," Data|Schema:",l,c," Parent:",u)}}},Me=Le,He=(a("85df"),Object(R["a"])(Me,Ge,Je,!1,null,null,null)),Qe=He.exports,Xe=["Simple Form","Responsive Grid","CSS & Slots","Deep nested Object","Values with Arrays","Partial & Linked","Conditional Display","Complete Form"],Ye={components:{simple:Y,grid:oe,css:me,deep:xe,partial:Oe,complex:$e,array:We,conditional:Qe},data:function(){return{items:Xe,view:Xe[6]}}},Ze=Ye,et=(a("034f"),Object(R["a"])(Ze,s,r,!1,null,null,null)),tt=et.exports;n["default"].use(i.a),new n["default"]({el:"#main",render:function(e){return e(tt)}})},"5e40":function(e,t,a){"use strict";var n=a("53b8"),o=a.n(n);o.a},"64a9":function(e,t,a){},"85df":function(e,t,a){"use strict";var n=a("0127"),o=a.n(n);o.a},8955:function(e,t,a){},"99e8":function(e,t,a){},cc5b:function(e,t,a){},e0f7:function(e,t,a){"use strict";var n=a("8955"),o=a.n(n);o.a},f07b:function(e,t,a){"use strict";var n=a("99e8"),o=a.n(n);o.a}});
//# sourceMappingURL=app.6a36b012.js.map