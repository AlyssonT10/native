(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define("FormSchema",[],t):"object"===typeof exports?exports["FormSchema"]=t():e["FormSchema"]=t()})("undefined"!==typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s="iaYj")}({"03mN":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("QE+O");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var i={functional:!0,render:function(e,t){var n,i=t.props.field,s=t.props.input,u=t.props.element,l=t.props.vm,p=t.props.ref,c=i.attrs,f=u.option.native?"attrs":"props",d="checkbox"===c.type?s[f].value:l.inputValues[p];return e(u.component,o({},s,(n={ref:p},a(n,f,o({},s[f],{name:p,value:d})),a(n,"on",{input:function(e){var t=e&&e.target?e.target.value:e;l.inputValues[p]="checkbox"===c.type&&void 0!==l.inputValues[p]?void 0:t;for(var n=[],a=0;a<i.itemsNum;a++){var o=l.inputValues[(0,r.inputName)(i,a)];o&&n.push(o)}l.data[c.name]=n,l.$emit("input",l.data)},change:l.changed}),n)),t.slots().default)}};t.default=i},"5qYI":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={functional:!0,render:function(e,t){return t.props.text?e("small",t.props.text):null}};t.default=r},"6Nfi":function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);return n.length===Object.keys(t).length&&-1===n.findIndex(function(n){return!t.hasOwnProperty(n)||e[n]!==t[n]})}Object.defineProperty(t,"__esModule",{value:!0}),t.equals=r},Ma1Y:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("QE+O"),a=u(n("vUgH")),o=u(n("vS3w")),i=u(n("RWc7")),s=u(n("kHBZ"));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var c={functional:!0,render:function(e,t){var n=t.props.vm,u=t.props.inputWrappingClass,c=t.props.field,f=c.attrs,d=(0,r.input)({vm:n,field:c}),m=d.element,v=[];switch(f.type){case"textarea":m.option.native&&(delete d.attrs.type,delete d.attrs.value,d.domProps.innerHTML=n.data[f.name]);break;case"radio":if(c.hasOwnProperty("items"))return c.items.forEach(function(t){v.push(e(i.default,{props:{vm:n,field:c,item:t,disableWrappingLabel:!0}}))}),e(a.default,{props:{vm:n,field:c,input:d,element:m}},v);break;case"checkbox":if(c.hasOwnProperty("items"))return c.items.forEach(function(t,a){v.push(e(i.default,{props:{vm:n,item:t,ref:(0,r.inputName)(c,a),field:p({},c,{label:t.label}),checked:n.data[c.attrs.name].includes(t.value)}}))}),e(a.default,{props:{vm:n,field:c,input:d,element:m}},v);break;case"select":var h=l(c.items);f.required||h.unshift({label:null,value:""}),d.attrs&&(delete d.attrs.type,delete d.attrs.value,delete d.attrs.native),h.forEach(function(t){v.push(e(s.default,{props:{vm:n,field:c,option:t,disableWrappingLabel:!0}}))});break}return e(o.default,{props:{vm:n,field:c,element:m,inputWrappingClass:u}},[e(a.default,{props:{vm:n,field:c,input:d,element:m}},v)])}},f=c;t.default=f},MjSB:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("QE+O");function a(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}var o={functional:!0,render:function(e,t){var n=t.parent,o=r.components.button.option.native?r.components.defaultGroup:r.components.label,i=(0,r.elementOptions)(n,o),s=t.slots(),u=s.default?{component:s.default,option:r.option}:r.components.button;if(a(u.component,Array))return e(o.component,i,u.component);var l=u.option.label||u.defaultOption.label,p=(0,r.elementOptions)(n,u,{type:"submit"});return u.option.native&&delete p.attrs.label,e(o.component,i,[e(u.component,p,l)])}};t.default=o},"QE+O":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderFieldset=f,t.init=d,t.set=m,t.elementOptions=v,t.input=y,t.initFields=O,t.inputName=t.fieldTypesAsNotArray=t.groupedArrayTypes=t.defineComponent=t.components=t.option=void 0;var r=n("6Nfi");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}var u={h1:["title"],p:["description"],div:["error","textgroup","inputswrapper","defaultGroup"],legend:["legend"],fieldset:["radiogroup","checkboxgroup"],form:["form"],input:{typed:["checkbox","color","date","datetime","datetime-local","email","file","hidden","image","month","number","password","radio","range","search","tel","text","time","url","week"]},textarea:["textarea"],select:["select"],option:["option"],label:["label"],button:[{component:"button",option:{type:"submit",label:"Submit"}},{component:"arraybutton",option:{type:"button",label:"Add"}}]},l={native:!0};t.option=l;var p={};t.components=p;var c=function(e,t){"object"===s(t)?p[t.component]={component:e,option:i({},l,t.option)}:p[t]={component:e,option:l}};function f(e,t){var n=t.props,r=t.slots,a=p.inputswrapper,o={},i=v(o,a),s=[e(a.component,i,r().default)];if(n.field.description){var u=p.legend,l=v(o,u);s.unshift(e(u.component,l,n.field.description))}return e("fieldset",{attrs:{name:n.field.attrs.name}},s)}function d(){var e=function(e){o(u[e],Array)?u[e].forEach(function(t){return c(e,t)}):u[e].typed.forEach(function(t){c(e,{component:t,option:{type:t}})})};for(var t in u)e(t);p.radiogroup.render=f,p.checkboxgroup.render=f}function m(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"string"!==typeof t&&(n=t,t=void 0);var r=n.render,a=p[e]?i({},p[e].option):{};delete a.native,p[e]={type:e,component:t,option:n,render:r,defaultOption:a}}function v(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{attrs:{}},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=t.option.native?"attrs":"props",u="function"===typeof t.option?i({},n,t.option({vm:e,field:r,item:o})):i({},t.option,{native:void 0},n);return a({},s,i({},t.defaultOption,u))}t.defineComponent=c;var h=["radio","checkbox","input","textarea"];function y(e){var t=e.vm,n=e.field,r=e.ref,a=n.attrs;a.hasOwnProperty("value")||(a.value=t.data[a.name]);var o=n.hasOwnProperty("items")&&h.includes(a.type)?p["".concat(a.type,"group")]||p.defaultGroup:p[a.type]||p.text,s=v(t,o,a,n);return i({ref:r||a.name,element:o,domProps:{},on:{input:function(e){t.data[a.name]=e&&e.target?e.target.value:e,t.$emit("input",t.data)},change:t.changed}},s)}t.groupedArrayTypes=h;var b=["radio","textarea","select"];t.fieldTypesAsNotArray=b;var g=function(e,t){return"".concat(e.attrs.name,"-").concat(t)};function O(e){e.fields.forEach(function(t){var n=t.attrs;e.data[n.name]=e.value[n.name]||n.value,b.includes(n.type)||"array"!==t.schemaType||(t.isArrayField=!0,Array.isArray(e.data[n.name])||(e.data[n.name]=[]),e.data[n.name]=e.data[n.name].filter(function(n,r){return e.inputValues[g(t,r)]=n,void 0!==n}),t.itemsNum="checkbox"===n.type?t.items.length:t.minItems)}),(0,r.equals)(e.data,e.value)||e.$emit("input",e.data),Object.keys(e.data).forEach(function(t){e.default[t]="object"===s(e.data[t])&&null!==e.data[t]?Object.freeze(e.data[t]):e.data[t]})}t.inputName=g},RWc7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("QE+O"),a=i(n("vUgH")),o=i(n("vS3w"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}var u={functional:!0,render:function(e,t){var n=t.props,i=n.vm,u=n.item,l=n.ref,p=n.field,c=n.inputWrappingClass,f=p.attrs,d=r.components[f.type],m=u.description,v=(0,r.input)({ref:l,vm:i,field:{label:u.label,attrs:{name:u.name||f.name,type:f.type,value:u.value,checked:"undefined"===typeof t.props.checked?s(i.data[f.name],Array)?i.data[f.name].includes(u.value):u.value===i.data[f.name]:t.props.checked}}});return e(o.default,{props:{vm:i,field:p,inputWrappingClass:c}},[e(a.default,{props:{vm:i,field:p,input:v,element:d,description:m}})])}};t.default=u},SAX8:function(e,t,n){"use strict";function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.setCommonFields=o,t.loadFields=i,t.parseBoolean=s,t.parseString=u,t.parseItems=l,t.arrayValues=c,t.singleValue=f,t.parseArray=d,t.setItemName=void 0;var a=["anyOf","oneOf","enum"];function o(e,t){t.attrs.value=t.attrs.hasOwnProperty("value")?t.attrs.value:e.default||"",t.schemaType=e.type,t.label=e.title||"",t.description=e.description||"",t.attrs.required=e.required||!1,t.attrs.disabled=e.disabled||!1}function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e&&!1!==e.visible)switch(e.type){case"object":for(var r in e.properties){if(e.required){var o=!0,l=!1,p=void 0;try{for(var c,f=e.required[Symbol.iterator]();!(o=(c=f.next()).done);o=!0){var m=c.value;e.properties[m].required=!0}}catch(e){l=!0,p=e}finally{try{o||null==f.return||f.return()}finally{if(l)throw p}}}i(e.properties[r],t,r)}break;case"boolean":t.push(s(e,n));break;case"array":t.push(d(e,n));break;case"integer":case"number":case"string":for(var v=0;v<a.length;v++){var h=a[v];if(e.hasOwnProperty(h))return e.items={type:e.type,enum:e[h]},void t.push(d(e,n))}t.push(u(e,n));break}}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n={attrs:e.attrs||{}};return o(e,n),n.attrs.type||(n.attrs.type="checkbox"),n.attrs.checked=e.checked||!1,t&&(n.attrs.name=t),n}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n={attrs:e.attrs||{}};if(e.pattern&&(n.attrs.pattern=e.pattern),e.format)switch(e.format){case"email":n.attrs.type||(n.attrs.type="email");break;case"uri":n.attrs.type||(n.attrs.type="url");break}if(!n.attrs.type)switch(e.type){case"number":case"integer":n.attrs.type="number";break;default:n.attrs.type="text"}return o(e,n),t&&(n.attrs.name=t),e.minLength&&(n.attrs.minlength=e.minLength),e.maxLength&&(n.attrs.maxlength=e.maxLength),n}function l(e){return e.map(function(e){return"object"!==r(e)?{value:e,label:e}:e})}var p=function(e){return function(t){return t.name||(t.name=e?"".concat(e,"-"):"",t.name+=t.label.replace(/\s+/g,"-")),t}};function c(e){return e.items.map(function(e){return e.checked?e.value:void 0})}function f(e){var t=e.items.reverse().find(function(e){return e.checked||e.selected});return t?t.value:""}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n={attrs:e.attrs||{}};o(e,n),t&&(n.attrs.name=t),n.items=[],n.minItems=parseInt(e.minItems)||1,n.maxItems=parseInt(e.maxItems)||1e3;e:for(var r=0;r<a.length;r++){var i=a[r];if(e.hasOwnProperty(i))switch(i){case"enum":n.attrs.type||(n.attrs.type="select"),n.items=l(e[i]);break e;case"oneOf":n.attrs.type="radio",n.attrs.value=n.attrs.value||"",n.items=l(e[i]).map(p(t)),0===n.attrs.value.length&&(n.attrs.value=f(n));break e;case"anyOf":n.attrs.type="checkbox",n.attrs.value=n.attrs.value||[],n.items=l(e[i]).map(p(t)),0===n.attrs.value.length&&(n.attrs.value=c(n));break e}}return n.attrs.type?"select"===n.attrs.type&&(n.attrs.multiple=n.minItems>1,n.attrs.value=n.attrs.value||n.attrs.multiple?[]:"",0===n.attrs.value.length&&(n.attrs.value=n.attrs.multiple?c(n):f(n))):n.attrs.type="text",n}t.setItemName=p},iaYj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.FormSchema=t.setComponent=void 0;var r=n("SAX8"),a=n("6Nfi"),o=n("QE+O"),i=u(n("Ma1Y")),s=u(n("MjSB"));function u(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function p(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}var c=["radio","checkbox","textarea","select"];(0,o.init)();var f=o.set;t.setComponent=f;var d={name:"form-schema",props:{schema:{type:[Object,Promise],required:!0},value:{type:Object,default:function(){return{}}},action:{type:String},autocomplete:{type:String},enctype:{type:String,default:"application/x-www-form-urlencoded"},method:{type:String,default:"post"},novalidate:{type:Boolean},inputWrappingClass:{type:String}},data:function(){return{schemaLoaded:{},default:{},fields:[],error:null,data:{},inputValues:{}}},created:function(){p(this.schema,Promise)?this.schema.then(this.init):this.init(this.schema)},render:function(e){var t=this,n=[];if(this.schemaLoaded.title&&n.push(e(o.components.title.component,this.schemaLoaded.title)),this.schemaLoaded.description&&n.push(e(o.components.description.component,this.schemaLoaded.description)),this.error){var r=(0,o.elementOptions)(this,o.components.error);n.push(e(o.components.error.component,r,this.error))}var a=this,u=this.inputWrappingClass,p=this.fields.map(function(t){return e(i.default,{props:{field:t,vm:a,inputWrappingClass:u}})});if(p.length){p.push(e(s.default,this.$slots.default));var c=(0,o.elementOptions)(this,o.components.form,{action:this.action,enctype:this.enctype,method:this.method,autocomplete:this.autocomplete,novalidate:this.novalidate});n.push(e(o.components.form.component,l({ref:"__form",on:{reset:this.reset,submit:function(e){e.stopPropagation(),t.submit(e)},invalid:this.invalid}},c),p))}return e("div",n)},setComponent:f,methods:{init:function(e){this.schemaLoaded=e||{},(0,r.loadFields)(this.schemaLoaded,this.fields),(0,o.initFields)(this),this.data=Object.seal(this.data)},changed:function(){(0,a.equals)(this.data,this.default)||this.$emit("change",this.data)},input:function(e){var t=this.form().elements;if(!t[e])throw new Error("Undefined input reference '".concat(e,"'"));return t[e]},form:function(){return this.$refs.__form},reportValidity:function(){for(var e=this.form().elements,t=!0,n=0;n<e.length;n++)"checkValidity"in e[n]&&(t=t&&e[n].checkValidity());return t},checkValidity:function(){return this.reportValidity()},invalid:function(e){this.$emit("invalid",e)},reset:function(){var e=this;for(var t in this.inputValues)delete this.inputValues[t];this.fields.forEach(function(t){var n=t.attrs;e.$set(e.data,n.name,e.default[n.name]),c.includes(n.type)||"array"!==t.schemaType||e.data[n.name].forEach(function(n,r){e.inputValues[(0,o.inputName)(t,r)]=n})})},submit:function(e){this.checkValidity()&&this.$emit("submit",e)},setErrorMessage:function(e){this.error=e},clearErrorMessage:function(){this.error=null}}};t.FormSchema=d;var m=d;t.default=m},kHBZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("QE+O"),a={functional:!0,render:function(e,t){var n=t.props,a=n.vm,o=n.option,i=(0,r.input)({vm:a,field:{label:o.label,attrs:{type:void 0,value:o.value,selected:o.selected}}});return e(r.components.option.component,i,o.label)}};t.default=a},vS3w:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("QE+O"),a={functional:!0,render:function(e,t){var n=t.props,a=t.children,o=n.vm,i=n.field,s=n.element,u=[];if(i.label&&!s.option.disableWrappingLabel){var l=(0,r.elementOptions)(o,r.components.label,{},i),p=[];p.push(e("span",{attrs:{"data-required-field":i.attrs.required?"true":"false"}},i.label)),p=p.concat(a),u.push(e(r.components.label.component,l,p))}else u=a;return n.inputWrappingClass?e("div",{class:n.inputWrappingClass},u):u}};t.default=a},vUgH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("QE+O"),a=i(n("5qYI")),o=i(n("03mN"));function i(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var u={functional:!0,render:function(e,t){var n=t.props,i=n.description,u=n.field,l=n.element,p=n.input,c=t.slots().default||[],f=e(a.default,{props:{text:i||u.description}});if(u.isArrayField){var d=t.props.vm;if("checkbox"===u.attrs.type){if(l.render)return l.render(e,t);var m=p.ref;return[e(o.default,{props:{vm:d,ref:m,field:u,input:p,element:l}},c),f]}var v=Array.apply(null,Array(u.itemsNum)).map(function(t,n){var a=(0,r.inputName)(u,n);return e(o.default,{props:{vm:d,ref:a,field:u,input:p,element:l}},c)}),h=(0,r.elementOptions)(d,r.components.label,{},u),y=r.components.arraybutton,b=s({},(0,r.elementOptions)(d,y,{disabled:u.maxItems<=u.itemsNum},u),{on:{click:function(){u.itemsNum<u.maxItems&&(u.itemsNum++,d.$forceUpdate())}}}),g=y.option.label||y.defaultOption.label,O=e(y.component,b,g);return v.push(e(r.components.label.component,h,[O])),l.render?l.render(e,s({},t,{slots:function(){return{default:v}}}),v):(v.push(f),v)}return l.render?l.render(e,t):[e(l.component,p,c),f]}};t.default=u}})["default"]});
//# sourceMappingURL=FormSchema.js.map