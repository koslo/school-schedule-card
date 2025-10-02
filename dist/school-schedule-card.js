var Ze=Object.defineProperty;var Qe=Object.getOwnPropertyDescriptor;var u=(o,e,t,s)=>{for(var n=s>1?void 0:s?Qe(e,t):e,r=o.length-1,i;r>=0;r--)(i=o[r])&&(n=(s?i(e,t,n):i(n))||n);return s&&n&&Ze(e,t,n),n};var te="school-schedule-card",de={title:"Stundenplan",show_date:!0,show_footer_hints:!0,view:"week",tomorrow_after:"16:00",courses:void 0,hide_subjects:void 0,dense:!1,subject_colors:void 0},W={Mat:{bg:"#2196f3",fg:"#fff"},Deu:{bg:"#673ab7",fg:"#fff"},Eng:{bg:"#4caf50",fg:"#fff"},Bio:{bg:"#8bc34a",fg:"#fff"},Che:{bg:"#fb8c00",fg:"#fff"},Phy:{bg:"#03a9f4",fg:"#fff"},Ges:{bg:"#e91e63",fg:"#fff"},Geo:{bg:"#2e7d32",fg:"#fff"},Mus:{bg:"#fdd835",fg:"#212121"},Kun:{bg:"#7e57c2",fg:"#fff"},Spo:{bg:"#26a69a",fg:"#fff"},Rel:{bg:"#9e9e9e",fg:"#fff"},Eth:{bg:"#9e9e9e",fg:"#fff"},eth3:{bg:"#9e9e9e",fg:"#fff"},Inf:{bg:"#3f51b5",fg:"#fff"},Spa:{bg:"#ff5722",fg:"#fff"},Mlk:{bg:"#ff5722",fg:"#fff"}};var se=globalThis,ne=se.ShadowRoot&&(se.ShadyCSS===void 0||se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,he=Symbol(),De=new WeakMap,F=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==he)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ne&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=De.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&De.set(t,e))}return e}toString(){return this.cssText}},oe=o=>new F(typeof o=="string"?o:o+"",void 0,he),pe=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((s,n,r)=>s+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[r+1],o[0]);return new F(t,o,he)},je=(o,e)=>{if(ne)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),n=se.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=t.cssText,o.appendChild(s)}},ue=ne?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return oe(t)})(o):o;var{is:Xe,defineProperty:et,getOwnPropertyDescriptor:tt,getOwnPropertyNames:st,getOwnPropertySymbols:nt,getPrototypeOf:ot}=Object,re=globalThis,Ce=re.trustedTypes,rt=Ce?Ce.emptyScript:"",it=re.reactiveElementPolyfillSupport,V=(o,e)=>o,G={toAttribute(o,e){switch(e){case Boolean:o=o?rt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},ie=(o,e)=>!Xe(o,e),ke={attribute:!0,type:String,converter:G,reflect:!1,useDefault:!1,hasChanged:ie};Symbol.metadata??=Symbol("metadata"),re.litPropertyMetadata??=new WeakMap;var E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ke){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),n=this.getPropertyDescriptor(e,s,t);n!==void 0&&et(this.prototype,e,n)}}static getPropertyDescriptor(e,t,s){let{get:n,set:r}=tt(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:n,set(i){let a=n?.call(this);r?.call(this,i),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ke}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;let e=ot(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){let t=this.properties,s=[...st(t),...nt(t)];for(let n of s)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,n]of t)this.elementProperties.set(s,n)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let n=this._$Eu(t,s);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let n of s)t.unshift(ue(n))}else e!==void 0&&t.push(ue(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return je(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,s);if(n!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:G).toAttribute(t,s.type);this._$Em=e,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){let s=this.constructor,n=s._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let r=s.getPropertyOptions(n),i=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:G;this._$Em=n;let a=i.fromAttribute(t,r.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){let n=this.constructor,r=this[e];if(s??=n.getPropertyOptions(e),!((s.hasChanged??ie)(r,t)||s.useDefault&&s.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:n,wrapped:r},i){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),r!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[n,r]of s){let{wrapped:i}=r,a=this[n];i!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,r,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[V("elementProperties")]=new Map,E[V("finalized")]=new Map,it?.({ReactiveElement:E}),(re.reactiveElementVersions??=[]).push("2.1.1");var $e=globalThis,ae=$e.trustedTypes,Te=ae?ae.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ne="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,He="?"+C,at=`<${He}>`,P=document,J=()=>P.createComment(""),Z=o=>o===null||typeof o!="object"&&typeof o!="function",xe=Array.isArray,ct=o=>xe(o)||typeof o?.[Symbol.iterator]=="function",fe=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Le=/-->/g,Re=/>/g,R=RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Me=/'/g,Pe=/"/g,Ue=/^(?:script|style|textarea|title)$/i,ve=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),f=ve(1),Et=ve(2),Dt=ve(3),O=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Oe=new WeakMap,M=P.createTreeWalker(P,129);function ze(o,e){if(!xe(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Te!==void 0?Te.createHTML(e):e}var lt=(o,e)=>{let t=o.length-1,s=[],n,r=e===2?"<svg>":e===3?"<math>":"",i=Y;for(let a=0;a<t;a++){let c=o[a],p,l,d=-1,m=0;for(;m<c.length&&(i.lastIndex=m,l=i.exec(c),l!==null);)m=i.lastIndex,i===Y?l[1]==="!--"?i=Le:l[1]!==void 0?i=Re:l[2]!==void 0?(Ue.test(l[2])&&(n=RegExp("</"+l[2],"g")),i=R):l[3]!==void 0&&(i=R):i===R?l[0]===">"?(i=n??Y,d=-1):l[1]===void 0?d=-2:(d=i.lastIndex-l[2].length,p=l[1],i=l[3]===void 0?R:l[3]==='"'?Pe:Me):i===Pe||i===Me?i=R:i===Le||i===Re?i=Y:(i=R,n=void 0);let y=i===R&&o[a+1].startsWith("/>")?" ":"";r+=i===Y?c+at:d>=0?(s.push(p),c.slice(0,d)+Ne+c.slice(d)+C+y):c+C+(d===-2?a:y)}return[ze(o,r+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},Q=class o{constructor({strings:e,_$litType$:t},s){let n;this.parts=[];let r=0,i=0,a=e.length-1,c=this.parts,[p,l]=lt(e,t);if(this.el=o.createElement(p,s),M.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=M.nextNode())!==null&&c.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(let d of n.getAttributeNames())if(d.endsWith(Ne)){let m=l[i++],y=n.getAttribute(d).split(C),A=/([.?@])?(.*)/.exec(m);c.push({type:1,index:r,name:A[2],strings:y,ctor:A[1]==="."?me:A[1]==="?"?ye:A[1]==="@"?_e:B}),n.removeAttribute(d)}else d.startsWith(C)&&(c.push({type:6,index:r}),n.removeAttribute(d));if(Ue.test(n.tagName)){let d=n.textContent.split(C),m=d.length-1;if(m>0){n.textContent=ae?ae.emptyScript:"";for(let y=0;y<m;y++)n.append(d[y],J()),M.nextNode(),c.push({type:2,index:++r});n.append(d[m],J())}}}else if(n.nodeType===8)if(n.data===He)c.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(C,d+1))!==-1;)c.push({type:7,index:r}),d+=C.length-1}r++}}static createElement(e,t){let s=P.createElement("template");return s.innerHTML=e,s}};function z(o,e,t=o,s){if(e===O)return e;let n=s!==void 0?t._$Co?.[s]:t._$Cl,r=Z(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),r===void 0?n=void 0:(n=new r(o),n._$AT(o,t,s)),s!==void 0?(t._$Co??=[])[s]=n:t._$Cl=n),n!==void 0&&(e=z(o,n._$AS(o,e.values),n,s)),e}var ge=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,n=(e?.creationScope??P).importNode(t,!0);M.currentNode=n;let r=M.nextNode(),i=0,a=0,c=s[0];for(;c!==void 0;){if(i===c.index){let p;c.type===2?p=new X(r,r.nextSibling,this,e):c.type===1?p=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(p=new be(r,this,e)),this._$AV.push(p),c=s[++a]}i!==c?.index&&(r=M.nextNode(),i++)}return M.currentNode=P,n}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},X=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,n){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=z(this,e,t),Z(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==O&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ct(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&Z(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Q.createElement(ze(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(t);else{let r=new ge(n,this),i=r.u(this.options);r.p(t),this.T(i),this._$AH=r}}_$AC(e){let t=Oe.get(e.strings);return t===void 0&&Oe.set(e.strings,t=new Q(e)),t}k(e){xe(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,n=0;for(let r of e)n===t.length?t.push(s=new o(this.O(J()),this.O(J()),this,this.options)):s=t[n],s._$AI(r),n++;n<t.length&&(this._$AR(s&&s._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=e.nextSibling;e.remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},B=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,n,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(e,t=this,s,n){let r=this.strings,i=!1;if(r===void 0)e=z(this,e,t,0),i=!Z(e)||e!==this._$AH&&e!==O,i&&(this._$AH=e);else{let a=e,c,p;for(e=r[0],c=0;c<r.length-1;c++)p=z(this,a[s+c],t,c),p===O&&(p=this._$AH[c]),i||=!Z(p)||p!==this._$AH[c],p===h?e=h:e!==h&&(e+=(p??"")+r[c+1]),this._$AH[c]=p}i&&!n&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},me=class extends B{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},ye=class extends B{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},_e=class extends B{constructor(e,t,s,n,r){super(e,t,s,n,r),this.type=5}_$AI(e,t=this){if((e=z(this,e,t,0)??h)===O)return;let s=this._$AH,n=e===h&&s!==h||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==h&&(s===h||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},be=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}};var dt=$e.litHtmlPolyfillSupport;dt?.(Q,X),($e.litHtmlVersions??=[]).push("3.3.1");var Be=(o,e,t)=>{let s=t?.renderBefore??e,n=s._$litPart$;if(n===void 0){let r=t?.renderBefore??null;s._$litPart$=n=new X(e.insertBefore(J(),r),r,void 0,t??{})}return n._$AI(o),n};var we=globalThis,_=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Be(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};_._$litElement$=!0,_.finalized=!0,we.litElementHydrateSupport?.({LitElement:_});var ht=we.litElementPolyfillSupport;ht?.({LitElement:_});(we.litElementVersions??=[]).push("4.2.1");var v=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};var pt={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:ie},ut=(o=pt,e,t)=>{let{kind:s,metadata:n}=t,r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),s==="setter"&&((o=Object.create(o)).wrapped=!0),r.set(t.name,o),s==="accessor"){let{name:i}=t;return{set(a){let c=e.get.call(this);e.set.call(this,a),this.requestUpdate(i,c,o)},init(a){return a!==void 0&&this.C(i,void 0,o,a),a}}}if(s==="setter"){let{name:i}=t;return function(a){let c=this[i];e.call(this,a),this.requestUpdate(i,c,o)}}throw Error("Unsupported decorator location: "+s)};function g(o){return(e,t)=>typeof t=="object"?ut(o,e,t):((s,n,r)=>{let i=n.hasOwnProperty(r);return n.constructor.createProperty(r,s),i?Object.getOwnPropertyDescriptor(n,r):void 0})(o,e,t)}function N(o){return g({...o,state:!0,attribute:!1})}var qe=`:host {
  display: block;
} 

ssc-day-card {
  --ha-card-border-radius: 12px;
  flex: 0 0 340px;
  min-width: 280px;
}
ssc-day-card.view-day ha-card {
  padding: 12px;
}

.grid {
  padding: 12px;
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: stretch;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 8px;
}

@media (max-width: 480px) {
  .school-schedule-card {
    margin: 0;
    border-radius: 0;
  }
}
.school-schedule-card {
  padding: 10px 12px;
  margin: 0;
  box-shadow: var(--ha-card-box-shadow, 0 4px 12px rgba(0, 0, 0, 0.3));
  border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
}
.school-schedule-card .header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px 5px 10px;
  margin-bottom: 12px;
  border-bottom: 1px solid var(--divider-color);
}
.school-schedule-card .header .day-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-text-color);
}
.school-schedule-card .header .date {
  font-size: 16px;
  font-weight: 400;
  text-align: right;
}
.school-schedule-card .header .updated-date {
  font-size: 14px;
  color: var(--secondary-text-color);
  text-align: right;
  margin: 0;
}
.school-schedule-card .lessons-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.school-schedule-card .lessons-container .lesson {
  padding: 12px;
  position: relative;
  background: color-mix(in oklab, var(--card-background-color), white 6%);
  border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
  border-radius: 12px;
  box-shadow: var(--ha-card-box-shadow, 0 1px 3px rgba(0, 0, 0, 0.08));
  transition: box-shadow 0.12s ease, transform 0.12s ease, border-color 0.12s ease;
  border-left: 4px solid var(--accent, var(--primary-color));
}
.school-schedule-card .lessons-container .lesson:hover {
  background: color-mix(in oklab, var(--card-background-color), white 9%);
  transform: translateY(-1px);
}
.school-schedule-card .lessons-container .lesson .lesson-main-content {
  flex: 1;
  display: flex;
  align-items: center;
}
.school-schedule-card .lessons-container .lesson .lesson-main-content .lesson-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  margin-right: 12px;
  flex-shrink: 0;
  border: 1px solid var(--accent, var(--primary-color));
}
.school-schedule-card .lessons-container .lesson .lesson-main-content .lesson-content {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.school-schedule-card .lessons-container .lesson .lesson-main-content .lesson-content .lesson-details {
  text-align: right;
}
.school-schedule-card .lessons-container .lesson .lesson-main-content .lesson-content .lesson-details .time {
  font-size: 10px;
  color: var(--secondary-text-color);
  margin-bottom: 2px;
}
.school-schedule-card .lessons-container .lesson .lesson-main-content .lesson-content .lesson-details .room {
  font-size: 14px;
  color: var(--primary-text-color);
  font-weight: 500;
}
.school-schedule-card .lessons-container .lesson .lesson-main-content .lesson-content .lesson-details .room.changed {
  color: var(--error-color) !important;
}
.school-schedule-card .lessons-container .lesson .lesson-main-content .lesson-content .lesson-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.school-schedule-card .lessons-container .lesson .lesson-main-content .lesson-content .lesson-info .subject-teacher {
  display: flex;
  align-items: center;
  gap: 8px;
}
.school-schedule-card .lessons-container .lesson .lesson-main-content .lesson-content .lesson-info .subject-teacher .subject {
  background: var(--chip-background-color, color-mix(in oklab, var(--primary-color), var(--card-background-color) 70%));
  color: var(--primary-text-color);
  padding: 6px 12px;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 600;
  min-width: 50px;
  text-align: center;
}
.school-schedule-card .lessons-container .lesson .lesson-main-content .lesson-content .lesson-info .subject-teacher .subject.changed {
  background: var(--error-color) !important;
  color: var(--primary-text-color) !important;
}
.school-schedule-card .lessons-container .lesson .lesson-main-content .lesson-content .lesson-info .subject-teacher .teacher {
  font-size: 16px;
  color: var(--primary-text-color);
  font-weight: 600;
}
.school-schedule-card .lessons-container .lesson .lesson-main-content .lesson-content .lesson-info .subject-teacher .teacher.changed {
  color: var(--error-color) !important;
}
.school-schedule-card .lessons-container .lesson .substitution-info {
  background: color-mix(in oklab, var(--warning-color, #ff9800), transparent 80%);
  color: var(--warning-color, #ff9800);
  padding: 2px 6px;
  margin-top: 4px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 400;
  border: 1px solid color-mix(in oklab, var(--warning-color, #ff9800), transparent 60%);
}
.school-schedule-card.dense {
  border: none;
  padding: 0 6px;
  margin: 0 auto;
  box-shadow: none;
}
.school-schedule-card.dense .lesson {
  padding: 5px 10px;
}
.school-schedule-card.dense .note-item {
  padding: 5px 10px;
}
.school-schedule-card.dense .notes-title {
  margin-bottom: 8px;
}
.school-schedule-card.dense .notes-list {
  gap: 6px;
}
.school-schedule-card.dense .updated-date {
  margin-bottom: 0;
  text-align: right;
}
.school-schedule-card.dense .lessons-container {
  gap: 8px;
}

.daily-notes {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--divider-color);
}
.daily-notes .notes-title {
  color: var(--primary-text-color);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}
.daily-notes .notes-title .notes-icon {
  color: var(--info-color, var(--primary-color));
}
.daily-notes .notes-title .notes-arrow {
  margin-left: auto;
  transition: transform 0.5s ease;
}
.daily-notes.collapsed .notes-arrow {
  transform: rotate(-90deg);
}
.daily-notes.expanded .notes-arrow {
  transform: rotate(0deg);
}
.daily-notes .notes-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.5s ease, opacity 0.4s ease;
}
.daily-notes.expanded .notes-list {
  max-height: 1000px;
  opacity: 1;
}
.daily-notes.collapsed .notes-list {
  max-height: 0;
  opacity: 0;
}
.daily-notes .notes-list .note-item {
  background: var(--ha-card-background, var(--card-background-color));
  padding: 10px 12px;
  border-radius: 6px;
  border-left: 3px solid var(--info-color, var(--primary-color));
  font-size: 13px;
  line-height: 1.4;
}
.daily-notes .notes-list .note-item.warning {
  border-left-color: var(--warning-color, #ff9800);
  background: color-mix(in oklab, var(--warning-color, #ff9800), transparent 85%);
}
.daily-notes .notes-list .note-item.info {
  border-left-color: var(--info-color, var(--primary-color));
  background: color-mix(in oklab, var(--info-color, var(--primary-color)), transparent 85%);
}
`;var q={en:{card_title:"Schedule",loading:"Loading\u2026",no_lessons:"No lessons",daily_notes:"Daily notes",no_notes:"No notes",last_update_title:"Last update",last_update_prefix:"Updated:"},de:{card_title:"Stundenplan",loading:"Wird geladen \u2026",no_lessons:"Keine Stunden",daily_notes:"T\xE4gliche Hinweise",no_notes:"Keine Hinweise",last_update_title:"Letzte Aktualisierung",last_update_prefix:"Stand:"}};function Ie(o){let e=String(o||"").toLowerCase();if(!e)return"en";if(e in q)return e;let t=e.split("-")[0];return t in q?t:"en"}function Ke(o){if(!o)return"en";let e=o.language||o.locale?.language;return Ie(e)}function Ae(o){let e=Ie(o),t=q[e]||q.en;return function(n){return t[n]||q.en[n]||String(n)}}var fs=Object.keys(q);function We(o){return o&&typeof o=="object"&&!Array.isArray(o)}function gt(o){try{return JSON.parse(o)}catch{return null}}function mt(o){if(!Array.isArray(o))return[];let e=t=>{if(We(t)){let s=t._??t["#text"]??"",n=!!(t.$&&Object.keys(t.$).length),r=Object.keys(t).some(a=>a.startsWith("@")&&t[a]!=null&&String(t[a]).length>0),i=n||r;return{text:String(s||""),changed:i}}return{text:String(t??""),changed:!1}};return o.map(t=>{let s=t.subject??t.fa??t.subj,n=t.teacher??t.le??t.t,r=t.room??t.ra??t.r??"",i=e(s),a=e(n),c=e(r),p=t.if??t.info??t.infoText??"",l=t.ku??t.isCourse,d=typeof l=="boolean"?l:String(l||"").toLowerCase()==="true",m=String(p||""),y=m.toLowerCase().includes("vertret")||!!i.changed||!!a.changed;return{period:t.period??t.st??t.hour??"",time:t.time??t.beginn??t.start??"",end:t.end??t.ende??t.until??"",subject:i.text,subjectChanged:i.changed,teacher:a.text,teacherChanged:a.changed,room:c.text,roomChanged:c.changed,info:m,isCourse:d,isSubstitution:y}})}function $(o){if(!o)return;let e=new Date(o);return isNaN(e.getTime())?void 0:e}function le(o){if(!(o instanceof Date)||isNaN(o.getTime()))return"";let e=o.getFullYear(),t=(o.getMonth()+1).toString().padStart(2,"0"),s=o.getDate().toString().padStart(2,"0");return`${e}-${t}-${s}`}function Se(o){let e=o.getDay()||7,t=new Date(o);return t.setHours(0,0,0,0),t.setDate(t.getDate()-(e-1)),t}function yt(o){if(!o)return[];let e=t=>{let s=String(t||"").trim();return s.length?s.replace(/[_\-\s]/g,"").length>0:!1};return Array.isArray(o)?o.map(t=>String(t)).filter(e):typeof o=="string"?e(o)?[o]:[]:[]}function Ee(o){if(!o)return[];if(typeof o=="string"){let r=gt(o);r&&(o=r)}if(!We(o)||!Array.isArray(o.days))return[];let e=o.days.find(r=>r.date&&$(r.date)),t=e?$(e.date):new Date,s=Se(t),n=[];for(let r=0;r<5;r++){let i=(o.days||[])[r],a=new Date(s);a.setDate(s.getDate()+r);let c=le(a),p=a.toLocaleDateString("de-DE",{weekday:"long"});i?n.push({name:i.name??p,date:i.date?le($(i.date)):c,lessons:mt(i.lessons??[]),hints:yt(i.hints),updated_at:i.updated_at??i.updatedAt??i.last_update??void 0}):n.push({name:p,date:c,lessons:[],hints:[]})}return n}function Fe(o){if(!o)return"";try{let e=$(o);return!e||isNaN(e.getTime())?o:e.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})}catch{return o}}var k=class extends _{constructor(){super(...arguments);this.show_date=!0;this.dense=!1;this.t=t=>t}createRenderRoot(){return this}render(){if(!this.dobj)return h;let t=this.dobj.date?Fe(this.dobj.date):"",s=this.dobj.name||(this.dobj.date?$(this.dobj.date)?.toLocaleDateString(void 0,{weekday:"long"}):"");return this.dense?f`
        <div class="header">
          <div>
            <span class="day-title">${s}</span>
          </div>
          ${this.show_date?f`<div>
                <div class="date">${t}</div>
                ${this.dobj.updated_at?f`<div class="updated-date" title="${this.t("last_update_title")}">${this.t("last_update_prefix")} ${this.dobj.updated_at}</div>`:h}
              </div>`:h}
        </div>
      `:f`
      <div class="header">
        <div class="header-left">
          <div class="day-title">${s}</div>
        </div>
        ${this.show_date?f`<div class="header-right">
              <div class="date">${t}</div>
              ${this.dobj.updated_at?f`<div class="date updated-date" title="${this.t("last_update_title")}">${this.t("last_update_prefix")} ${this.dobj.updated_at}</div>`:h}
            </div>`:h}
      </div>
    `}};u([g({type:Object})],k.prototype,"dobj",2),u([g({type:Boolean})],k.prototype,"show_date",2),u([g({type:Boolean})],k.prototype,"dense",2),u([g({attribute:!1})],k.prototype,"t",2),k=u([v("ssc-day-header")],k);var I=class extends _{createRenderRoot(){return this}_subjectStyle(e){let t=(e||"").trim(),n=(this.subject_colors&&typeof this.subject_colors=="object"?{...W,...this.subject_colors}:W)[t];return n?`background:${n.bg};color:${n.fg}`:""}_subjectAccent(e){let t=(e||"").trim(),n=(this.subject_colors&&typeof this.subject_colors=="object"?{...W,...this.subject_colors}:W)[t];return n?n.bg:"var(--primary-color)"}render(){let e=this.lesson;if(!e)return h;let t=!!e.isSubstitution;return f`
      <div class="lesson" style="--accent: ${this._subjectAccent(e.subject)}">
        <div class="lesson-main-content">
          <div class="lesson-number">${e.period||""}</div>
          <div class="lesson-content">
            <div class="lesson-info">
              <div class="subject-teacher">
                <span class="subject ${e.subjectChanged?"changed":""}" style="${this._subjectStyle(e.subject)}">${(e.subject||"").trim()}</span>
                ${e.teacher?f`<span class="teacher ${e.teacherChanged?"changed":""}">${e.teacher}</span>`:h}
              </div>
            </div>
            <div class="lesson-details">
              <div class="time">${e.time||""}${e.end?f` – ${e.end}`:h}</div>
              ${e.room?f`<div class="room ${e.roomChanged?"changed":""}">${e.room}</div>`:h}
            </div>
          </div>
        </div>
        ${t&&e.info?f`<div class="substitution-info">${e.info}</div>`:h}
      </div>
    `}};u([g({type:Object})],I.prototype,"lesson",2),u([g({attribute:!1})],I.prototype,"subject_colors",2),I=u([v("ssc-lesson-item")],I);var D=class extends _{constructor(){super(...arguments);this.notes=[];this.show=!0;this.expanded=!1;this.t=t=>t;this._expanded=this.expanded;this._onActivate=t=>{if(t.type==="keydown"){let s=t.key;if(s!=="Enter"&&s!==" "&&s!=="Spacebar")return;t.preventDefault()}this._setExpanded(!this._expanded)}}createRenderRoot(){return this}_classifyNote(t){let s=String(t||"").toLowerCase();return s.includes("gesperrt")||s.includes("achtung")||s.includes("warnung")?"warning":s.includes("klassenarbeit")||s.includes("pr\xFCfung")||s.includes("klausur")?"info":""}_setExpanded(t){this._expanded=t;let s=this;s.classList.toggle("expanded",t),s.classList.toggle("collapsed",!t)}updated(t){t.has("expanded")&&this._setExpanded(!!this.expanded)}_renderNoteText(t){let n=String(t||"").split(/<br\s*\/?\s*>/i),r=[];return n.forEach((i,a)=>{r.push(i),a<n.length-1&&r.push(f`<br>`)}),r}render(){if(!this.show)return h;let t=Array.isArray(this.notes)&&this.notes.length>0;return f`
      <div class="daily-notes ${this._expanded?"expanded":"collapsed"}">
        <div
          class="notes-title"
          role="button"
          tabindex="0"
          aria-expanded="${this._expanded?"true":"false"}"
          @click=${this._onActivate}
          @keydown=${this._onActivate}
        >
          <ha-icon icon="mdi:information-box-outline" class="notes-icon"></ha-icon>
          <span class="notes-text">${this.t("daily_notes")}</span>
          <ha-icon icon="mdi:chevron-down" class="notes-arrow"></ha-icon>
        </div>
        <div class="notes-list">
          ${t?this.notes.map(s=>f`<div class="note-item ${this._classifyNote(s)}">${this._renderNoteText(s)}</div>`):f`<div class="note-item empty">${this.t("no_notes")}</div>`}
        </div>
      </div>
    `}};u([g({type:Array})],D.prototype,"notes",2),u([g({type:Boolean})],D.prototype,"show",2),u([g({type:Boolean})],D.prototype,"expanded",2),u([g({attribute:!1})],D.prototype,"t",2),u([N()],D.prototype,"_expanded",2),D=u([v("ssc-daily-notes")],D);function Ve(o){let{dobj:e,show_date:t,show_footer_hints:s,dense:n,view:r,subject_colors:i,t:a}=o,c=i&&typeof i=="object"?i:void 0,p=Array.isArray(e.lessons)?e.lessons:[],l=p.length>0,d=l?p.map(H=>f`<ssc-lesson-item .lesson=${H} .subject_colors=${c}></ssc-lesson-item>`):f`<div class="no-lessons">${a("no_lessons")}</div>`,m=e.hints,y=s&&l?f`<ssc-daily-notes .notes=${m} .show=${!0} .expanded=${r==="week"} .t=${a}></ssc-daily-notes>`:h,A=f`
    <ssc-day-header .dobj=${e} .show_date=${t} .dense=${n} .t=${a}></ssc-day-header>
  `;return f`
    <div class="school-schedule-card ${n?"dense":""}">
      ${A}
      <div class="lessons-container">${d}</div>
      ${y}
    </div>
  `}var x=class extends _{constructor(){super(...arguments);this.show_date=!0;this.show_footer_hints=!0;this.dense=!1;this.view="week";this.t=t=>t;this._onToggleNotes=t=>{let n=t.currentTarget?.closest(".daily-notes");if(!n)return;let r=n.classList.contains("expanded");n.classList.toggle("expanded",!r),n.classList.toggle("collapsed",r);let i=n.querySelector(".notes-title");i&&i.setAttribute("aria-expanded",r?"false":"true")}}createRenderRoot(){return this}render(){return this.dobj?f`
            <ha-card>
                ${Ve({dobj:this.dobj,show_date:this.show_date,show_footer_hints:this.show_footer_hints,dense:this.dense,view:this.view,subject_colors:this.subject_colors,t:this.t,onToggleNotes:this._onToggleNotes})}
            </ha-card>
        `:h}};u([g({type:Object})],x.prototype,"dobj",2),u([g({type:Boolean})],x.prototype,"show_date",2),u([g({type:Boolean})],x.prototype,"show_footer_hints",2),u([g({type:Boolean})],x.prototype,"dense",2),u([g({type:String})],x.prototype,"view",2),u([g({attribute:!1})],x.prototype,"subject_colors",2),u([g({attribute:!1})],x.prototype,"t",2),x=u([v("ssc-day-card")],x);var w=class extends _{constructor(){super(...arguments);this._config={...de};this._lang="en";this._t=Ae("en")}static getConfigElement(){return null}static getStubConfig(){return{view:"week",show_date:!0}}setConfig(t){this._config={...de,...t||{}},this._lastDataSig=void 0}willUpdate(t){if(t.has("hass")){let s=Ke(this.hass);s&&s!==this._lang&&(this._lang=s,this._t=Ae(s),this._lastDataSig=void 0)}}getCardSize(){return(this._config?.view||"week")==="week"?5:1}_getDataSignature(){let t=this._config,s={title:t.title,show_date:t.show_date,show_footer_hints:t.show_footer_hints,entity:t.entity?String(t.entity):void 0,has_inline_schedule:!!t.schedule,courses:Array.isArray(t.courses)?t.courses.map(n=>String(n).toLowerCase().trim()):void 0,hide_subjects:Array.isArray(t.hide_subjects)?t.hide_subjects.map(n=>String(n).toLowerCase().trim()):void 0,subject_colors:t.subject_colors||void 0};return JSON.stringify({cfg:s,days:this._parseData(),lang:this._lang||"en"})}_parseData(){let t=this._config||{},s=i=>{if(!Array.isArray(i))return[];let a=Array.isArray(t.courses)?t.courses.map(l=>String(l).toLowerCase().trim()).filter(Boolean):null;if(!a||a.length===0)return i;let c=l=>{let d=String(l.subject||""),m=String(l.info||"");return m&&(m.trim().split(/\s+/)[0]||"")||d},p=l=>a.includes(String(l||"").toLowerCase().trim());return i.map(l=>({...l,lessons:Array.isArray(l.lessons)?l.lessons.filter(d=>!d.isCourse||p(c(d))):[]}))},n=i=>{if(!Array.isArray(i))return[];let a=Array.isArray(t.hide_subjects)?t.hide_subjects.map(l=>String(l).toLowerCase().trim()).filter(Boolean):null;if(!a||a.length===0)return i;let c=l=>{let d=String(l.subject||"");return d&&d!=="---"?d:String(l.info||"").trim().split(/\s+/)[0]||""||d},p=l=>a.includes(String(l||"").toLowerCase().trim());return i.map(l=>({...l,lessons:Array.isArray(l.lessons)?l.lessons.filter(d=>!p(c(d))):[]}))};if(t.schedule&&Array.isArray(t.schedule.days))return n(s(Ee(t.schedule)));let r=t.entity;if(this.hass&&r&&this.hass.states&&this.hass.states[r]){let a=this.hass.states[r].attributes||{};if(Array.isArray(a.days))return n(s(Ee(a)))}return[]}render(){let t=this._getDataSignature();t===this._lastDataSig||(this._lastDataSig=t);let s=this._config,{show_date:n,show_footer_hints:r,view:i="week",tomorrow_after:a,dense:c}=s,p=this._parseData(),l,d,m=K=>{let j=String(K||"").match(/^(\d{1,2}):(\d{2})$/),b=new Date;if(!j)return new Date(b.getFullYear(),b.getMonth(),b.getDate(),23,59,59);let T=Math.max(0,Math.min(23,parseInt(j[1],10))),S=Math.max(0,Math.min(59,parseInt(j[2],10)));return new Date(b.getFullYear(),b.getMonth(),b.getDate(),T,S,0)},y=new Date,A=m(a),H=new Date(y.getFullYear(),y.getMonth(),y.getDate()),ee=(H.getDay()+6)%7;if(ee===5||ee===6||ee===4&&y>=A?d=new Date(H.getTime()+(7-ee)*864e5):y>=A?d=new Date(H.getTime()+864e5):d=H,(i||"week")==="day")return l=((j,b)=>j.find(T=>{if(!T.date)return!1;let S=$(T.date);return!S||isNaN(S.getTime())?!1:S.getFullYear()===b.getFullYear()&&S.getMonth()===b.getMonth()&&S.getDate()===b.getDate()}))(p,d),l||(l={name:d.toLocaleDateString(void 0,{weekday:"long"}),date:le(d),lessons:[],hints:[]}),f`<ssc-day-card
        class="view-${i}"
        .dobj=${l}
        .show_date=${n}
        .show_footer_hints=${r}
        .dense=${c}
        .view=${i}
        .subject_colors=${s.subject_colors}
        .t=${this._t}
      ></ssc-day-card>`;{let K=Se(d),j=new Date(K.getTime()+6*864e5),b=U=>{if(!U.date)return!1;let L=$(U.date);return!L||isNaN(L.getTime())?!1:(L.setHours(0,0,0,0),L>=K&&L<=j)},T=p.filter(b).sort((U,L)=>{let Ye=$(U.date)?.getTime()||0,Je=$(L.date)?.getTime()||0;return Ye-Je}),S=T.length>0?T:p;return f`
        <div class="grid">
          ${S.map(U=>f`<ssc-day-card
              class="view-${i}"
              .dobj=${U}
              .show_date=${n}
              .show_footer_hints=${r}
              .dense=${c}
              .view=${i}
              .subject_colors=${s.subject_colors}
              .t=${this._t}
            ></ssc-day-card>`)}
        </div>
      `}}};w.styles=pe`${oe(qe)}`,u([g({attribute:!1})],w.prototype,"hass",2),u([N()],w.prototype,"_config",2),u([N()],w.prototype,"_lang",2),u([N()],w.prototype,"_t",2),u([N()],w.prototype,"_lastDataSig",2),w=u([v(te)],w);var Ge={name:"school-schedule-card",version:"1.1.5",description:"Home Assistant Lovelace card to display a school schedule. HACS-ready.",type:"module",scripts:{"build:css":"sass --no-source-map src/styles/styles.scss src/styles/styles.css","build:js":"esbuild src/main.ts --bundle --minify --format=esm --outfile=dist/school-schedule-card.js --loader:.css=text --loader:.json=json",build:"npm run build:css && npm run build:js","watch:css":"sass --no-source-map --watch src/styles/styles.scss src/styles/styles.css","watch:js":"esbuild src/main.ts --bundle --format=esm --outfile=dist/school-schedule-card.js --loader:.css=text --loader:.json=json --watch",watch:"start /B npm run watch:css & npm run watch:js"},devDependencies:{esbuild:"^0.21.5",sass:"^1.77.0"},dependencies:{lit:"^3.1.0"}};var bt=Ge?.version||"0.0.0";try{console.info(`%c SCHOOL-SCHEDULE-CARD %c v${bt} `,"color:#fff;background:#03a9f4;border-radius:3px 0 0 3px;padding:2px 6px;","color:#03a9f4;background:#fff;border-radius:0 3px 3px 0;padding:2px 6px;")}catch{}window.customCards||(window.customCards=[]);window.customCards.push({type:te,name:"School Schedule Card",description:"Modern, responsive schedule card for Home Assistant."});
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
