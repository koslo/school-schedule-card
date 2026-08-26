var Vt=Object.defineProperty;var Gt=Object.getOwnPropertyDescriptor;var u=(n,t,e,s)=>{for(var o=s>1?void 0:s?Gt(t,e):t,r=n.length-1,i;r>=0;r--)(i=n[r])&&(o=(s?i(t,e,o):i(o))||o);return s&&o&&Vt(t,e,o),o};var Z="school-schedule-card",rt={title:"Stundenplan",show_date:!0,show_footer_hints:!0,view:"week",tomorrow_after:"16:00",courses:void 0,hide_subjects:void 0,dense:!1,subject_colors:void 0},B={Mat:{bg:"#2196f3",fg:"#fff"},Deu:{bg:"#673ab7",fg:"#fff"},Eng:{bg:"#4caf50",fg:"#fff"},Bio:{bg:"#8bc34a",fg:"#fff"},Che:{bg:"#fb8c00",fg:"#fff"},Phy:{bg:"#03a9f4",fg:"#fff"},Ges:{bg:"#e91e63",fg:"#fff"},Geo:{bg:"#2e7d32",fg:"#fff"},Mus:{bg:"#fdd835",fg:"#212121"},Kun:{bg:"#7e57c2",fg:"#fff"},Spo:{bg:"#26a69a",fg:"#fff"},Rel:{bg:"#9e9e9e",fg:"#fff"},Eth:{bg:"#9e9e9e",fg:"#fff"},eth3:{bg:"#9e9e9e",fg:"#fff"},Inf:{bg:"#3f51b5",fg:"#fff"},Spa:{bg:"#ff5722",fg:"#fff"},Mlk:{bg:"#ff5722",fg:"#fff"}};var Q=globalThis,X=Q.ShadowRoot&&(Q.ShadyCSS===void 0||Q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol(),wt=new WeakMap,I=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==it)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(X&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=wt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&wt.set(e,t))}return t}toString(){return this.cssText}},tt=n=>new I(typeof n=="string"?n:n+"",void 0,it),at=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,o,r)=>s+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[r+1],n[0]);return new I(e,n,it)},At=(n,t)=>{if(X)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),o=Q.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=e.cssText,n.appendChild(s)}},lt=X?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return tt(e)})(n):n;var{is:Yt,defineProperty:Jt,getOwnPropertyDescriptor:Zt,getOwnPropertyNames:Qt,getOwnPropertySymbols:Xt,getPrototypeOf:te}=Object,et=globalThis,St=et.trustedTypes,ee=St?St.emptyScript:"",se=et.reactiveElementPolyfillSupport,q=(n,t)=>n,W={toAttribute(n,t){switch(t){case Boolean:n=n?ee:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},st=(n,t)=>!Yt(n,t),Et={attribute:!0,type:String,converter:W,reflect:!1,useDefault:!1,hasChanged:st};Symbol.metadata??=Symbol("metadata"),et.litPropertyMetadata??=new WeakMap;var w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Et){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),o=this.getPropertyDescriptor(t,s,e);o!==void 0&&Jt(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){let{get:o,set:r}=Zt(this.prototype,t)??{get(){return this[e]},set(i){this[e]=i}};return{get:o,set(i){let l=o?.call(this);r?.call(this,i),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Et}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;let t=te(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){let e=this.properties,s=[...Qt(e),...Xt(e)];for(let o of s)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,o]of e)this.elementProperties.set(s,o)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let o=this._$Eu(e,s);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let o of s)e.unshift(lt(o))}else t!==void 0&&e.push(lt(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return At(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:W).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let r=s.getPropertyOptions(o),i=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:W;this._$Em=o;let l=i.fromAttribute(e,r.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){let o=this.constructor,r=this[t];if(s??=o.getPropertyOptions(t),!((s.hasChanged??st)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:o,wrapped:r},i){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),r!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[o,r]of s){let{wrapped:i}=r,l=this[o];i!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,r,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[q("elementProperties")]=new Map,w[q("finalized")]=new Map,se?.({ReactiveElement:w}),(et.reactiveElementVersions??=[]).push("2.1.1");var gt=globalThis,ot=gt.trustedTypes,Dt=ot?ot.createPolicy("lit-html",{createHTML:n=>n}):void 0,Rt="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,Mt="?"+D,oe=`<${Mt}>`,R=document,F=()=>R.createComment(""),V=n=>n===null||typeof n!="object"&&typeof n!="function",mt=Array.isArray,ne=n=>mt(n)||typeof n?.[Symbol.iterator]=="function",ct=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jt=/-->/g,Ct=/>/g,T=RegExp(`>|${ct}(?:([^\\s"'>=/]+)(${ct}*=${ct}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),kt=/'/g,Tt=/"/g,Ot=/^(?:script|style|textarea|title)$/i,yt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),g=yt(1),ve=yt(2),we=yt(3),M=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Lt=new WeakMap,L=R.createTreeWalker(R,129);function Pt(n,t){if(!mt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dt!==void 0?Dt.createHTML(t):t}var re=(n,t)=>{let e=n.length-1,s=[],o,r=t===2?"<svg>":t===3?"<math>":"",i=K;for(let l=0;l<e;l++){let a=n[l],d,h,c=-1,f=0;for(;f<a.length&&(i.lastIndex=f,h=i.exec(a),h!==null);)f=i.lastIndex,i===K?h[1]==="!--"?i=jt:h[1]!==void 0?i=Ct:h[2]!==void 0?(Ot.test(h[2])&&(o=RegExp("</"+h[2],"g")),i=T):h[3]!==void 0&&(i=T):i===T?h[0]===">"?(i=o??K,c=-1):h[1]===void 0?c=-2:(c=i.lastIndex-h[2].length,d=h[1],i=h[3]===void 0?T:h[3]==='"'?Tt:kt):i===Tt||i===kt?i=T:i===jt||i===Ct?i=K:(i=T,o=void 0);let y=i===T&&n[l+1].startsWith("/>")?" ":"";r+=i===K?a+oe:c>=0?(s.push(d),a.slice(0,c)+Rt+a.slice(c)+D+y):a+D+(c===-2?l:y)}return[Pt(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},G=class n{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let r=0,i=0,l=t.length-1,a=this.parts,[d,h]=re(t,e);if(this.el=n.createElement(d,s),L.currentNode=this.el.content,e===2||e===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=L.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let c of o.getAttributeNames())if(c.endsWith(Rt)){let f=h[i++],y=o.getAttribute(c).split(D),b=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:b[2],strings:y,ctor:b[1]==="."?ht:b[1]==="?"?pt:b[1]==="@"?ut:H}),o.removeAttribute(c)}else c.startsWith(D)&&(a.push({type:6,index:r}),o.removeAttribute(c));if(Ot.test(o.tagName)){let c=o.textContent.split(D),f=c.length-1;if(f>0){o.textContent=ot?ot.emptyScript:"";for(let y=0;y<f;y++)o.append(c[y],F()),L.nextNode(),a.push({type:2,index:++r});o.append(c[f],F())}}}else if(o.nodeType===8)if(o.data===Mt)a.push({type:2,index:r});else{let c=-1;for(;(c=o.data.indexOf(D,c+1))!==-1;)a.push({type:7,index:r}),c+=D.length-1}r++}}static createElement(t,e){let s=R.createElement("template");return s.innerHTML=t,s}};function N(n,t,e=n,s){if(t===M)return t;let o=s!==void 0?e._$Co?.[s]:e._$Cl,r=V(t)?void 0:t._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),r===void 0?o=void 0:(o=new r(n),o._$AT(n,e,s)),s!==void 0?(e._$Co??=[])[s]=o:e._$Cl=o),o!==void 0&&(t=N(n,o._$AS(n,t.values),o,s)),t}var dt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,o=(t?.creationScope??R).importNode(e,!0);L.currentNode=o;let r=L.nextNode(),i=0,l=0,a=s[0];for(;a!==void 0;){if(i===a.index){let d;a.type===2?d=new Y(r,r.nextSibling,this,t):a.type===1?d=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(d=new ft(r,this,t)),this._$AV.push(d),a=s[++l]}i!==a?.index&&(r=L.nextNode(),i++)}return L.currentNode=R,o}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},Y=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,o){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),V(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==M&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ne(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=G.createElement(Pt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(e);else{let r=new dt(o,this),i=r.u(this.options);r.p(e),this.T(i),this._$AH=r}}_$AC(t){let e=Lt.get(t.strings);return e===void 0&&Lt.set(t.strings,e=new G(t)),e}k(t){mt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,o=0;for(let r of t)o===e.length?e.push(s=new n(this.O(F()),this.O(F()),this,this.options)):s=e[o],s._$AI(r),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},H=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,o,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,o){let r=this.strings,i=!1;if(r===void 0)t=N(this,t,e,0),i=!V(t)||t!==this._$AH&&t!==M,i&&(this._$AH=t);else{let l=t,a,d;for(t=r[0],a=0;a<r.length-1;a++)d=N(this,l[s+a],e,a),d===M&&(d=this._$AH[a]),i||=!V(d)||d!==this._$AH[a],d===p?t=p:t!==p&&(t+=(d??"")+r[a+1]),this._$AH[a]=d}i&&!o&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ht=class extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},pt=class extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},ut=class extends H{constructor(t,e,s,o,r){super(t,e,s,o,r),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??p)===M)return;let s=this._$AH,o=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==p&&(s===p||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ft=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}};var ie=gt.litHtmlPolyfillSupport;ie?.(G,Y),(gt.litHtmlVersions??=[]).push("3.3.1");var Nt=(n,t,e)=>{let s=e?.renderBefore??t,o=s._$litPart$;if(o===void 0){let r=e?.renderBefore??null;s._$litPart$=o=new Y(t.insertBefore(F(),r),r,void 0,e??{})}return o._$AI(n),o};var _t=globalThis,_=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return M}};_._$litElement$=!0,_.finalized=!0,_t.litElementHydrateSupport?.({LitElement:_});var ae=_t.litElementPolyfillSupport;ae?.({LitElement:_});(_t.litElementVersions??=[]).push("4.2.1");var x=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var le={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:st},ce=(n=le,t,e)=>{let{kind:s,metadata:o}=e,r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),r.set(e.name,n),s==="accessor"){let{name:i}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(i,a,n)},init(l){return l!==void 0&&this.C(i,void 0,n,l),l}}}if(s==="setter"){let{name:i}=e;return function(l){let a=this[i];t.call(this,l),this.requestUpdate(i,a,n)}}throw Error("Unsupported decorator location: "+s)};function m(n){return(t,e)=>typeof e=="object"?ce(n,t,e):((s,o,r)=>{let i=o.hasOwnProperty(r);return o.constructor.createProperty(r,s),i?Object.getOwnPropertyDescriptor(o,r):void 0})(n,t,e)}function O(n){return m({...n,state:!0,attribute:!1})}var Ht=`:host {
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
`;var U={en:{card_title:"Schedule",loading:"Loading\u2026",no_lessons:"No lessons",daily_notes:"Daily notes",no_notes:"No notes",last_update_title:"Last update",last_update_prefix:"Updated:"},de:{card_title:"Stundenplan",loading:"Wird geladen \u2026",no_lessons:"Keine Stunden",daily_notes:"T\xE4gliche Hinweise",no_notes:"Keine Hinweise",last_update_title:"Letzte Aktualisierung",last_update_prefix:"Stand:"}};function Ut(n){let t=String(n||"").toLowerCase();if(!t)return"en";if(t in U)return t;let e=t.split("-")[0];return e in U?e:"en"}function zt(n){if(!n)return"en";let t=n.language||n.locale?.language;return Ut(t)}function bt(n){let t=Ut(n),e=U[t]||U.en;return function(o){return e[o]||U.en[o]||String(o)}}var ds=Object.keys(U);function Bt(n){return n&&typeof n=="object"&&!Array.isArray(n)}function he(n){try{return JSON.parse(n)}catch{return null}}function pe(n){if(!Array.isArray(n))return[];let t=e=>{if(Bt(e)){let s=e._??e["#text"]??"",o=!!(e.$&&Object.keys(e.$).length),r=Object.keys(e).some(l=>l.startsWith("@")&&e[l]!=null&&String(e[l]).length>0),i=o||r;return{text:String(s||""),changed:i}}return{text:String(e??""),changed:!1}};return n.map(e=>{let s=e.subject??e.fa??e.subj,o=e.teacher??e.le??e.t,r=e.room??e.ra??e.r??"",i=t(s),l=t(o),a=t(r),d=e.if??e.info??e.infoText??"",h=e.ku??e.isCourse,c=typeof h=="boolean"?h:String(h||"").toLowerCase()==="true",f=String(d||""),y=f.toLowerCase().includes("vertret")||!!i.changed||!!l.changed;return{period:e.period??e.st??e.hour??"",time:e.time??e.beginn??e.start??"",end:e.end??e.ende??e.until??"",subject:i.text,subjectChanged:i.changed,teacher:l.text,teacherChanged:l.changed,room:a.text,roomChanged:a.changed,info:f,isCourse:c,isSubstitution:y}})}function A(n){if(!n)return;let t=new Date(n);return isNaN(t.getTime())?void 0:t}function J(n){if(!(n instanceof Date)||isNaN(n.getTime()))return"";let t=n.getFullYear(),e=(n.getMonth()+1).toString().padStart(2,"0"),s=n.getDate().toString().padStart(2,"0");return`${t}-${e}-${s}`}function $t(n){let t,e=l=>{let a=String(l||"").match(/^(\d{1,2}):(\d{2})$/),d=new Date;if(!a)return new Date(d.getFullYear(),d.getMonth(),d.getDate(),23,59,59);let h=Math.max(0,Math.min(23,parseInt(a[1],10))),c=Math.max(0,Math.min(59,parseInt(a[2],10)));return new Date(d.getFullYear(),d.getMonth(),d.getDate(),h,c,0)},s=new Date,o=e(n),r=new Date(s.getFullYear(),s.getMonth(),s.getDate(),1),i=(r.getDay()+6)%7;return i===5||i===6||i===4&&s>=o?t=new Date(r.getTime()+(7-i)*864e5):s>=o?t=new Date(r.getTime()+864e5):t=r,t}function xt(n){let t=n.getDay()||7,e=new Date(n);return e.setHours(0,0,0,0),e.setDate(e.getDate()-(t-1)),e}function ue(n){if(!n)return[];let t=e=>{let s=String(e||"").trim();return s.length?s.replace(/[_\-\s]/g,"").length>0:!1};return Array.isArray(n)?n.map(e=>String(e)).filter(t):typeof n=="string"?t(n)?[n]:[]:[]}function vt(n,t){if(!n)return[];if(typeof n=="string"){let r=he(n);r&&(n=r)}if(!Bt(n)||!Array.isArray(n.days))return[];let e=$t(t),s=xt(e),o=[];for(let r=0;r<5;r++){let i=new Date(s);i.setDate(s.getDate()+r);let l=J(i),a=i.toLocaleDateString("de-DE",{weekday:"long"}),d=n.days.find(h=>h.date&&h.date===l);d?o.push({name:d.name??a,date:d.date?J(A(d.date)):l,lessons:pe(d.lessons??[]),hints:ue(d.hints),updated_at:d.updated_at??d.updatedAt??d.last_update??void 0}):o.push({name:a,date:l,lessons:[],hints:[]})}return o}function It(n){if(!n)return"";try{let t=A(n);return!t||isNaN(t.getTime())?n:t.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})}catch{return n}}var j=class extends _{constructor(){super(...arguments);this.show_date=!0;this.dense=!1;this.t=e=>e}createRenderRoot(){return this}render(){if(!this.dobj)return p;let e=this.dobj.date?It(this.dobj.date):"",s=this.dobj.name||(this.dobj.date?A(this.dobj.date)?.toLocaleDateString(void 0,{weekday:"long"}):"");return this.dense?g`
        <div class="header">
          <div>
            <span class="day-title">${s}</span>
          </div>
          ${this.show_date?g`<div>
                <div class="date">${e}</div>
                ${this.dobj.updated_at?g`<div class="updated-date" title="${this.t("last_update_title")}">${this.t("last_update_prefix")} ${this.dobj.updated_at}</div>`:p}
              </div>`:p}
        </div>
      `:g`
      <div class="header">
        <div class="header-left">
          <div class="day-title">${s}</div>
        </div>
        ${this.show_date?g`<div class="header-right">
              <div class="date">${e}</div>
              ${this.dobj.updated_at?g`<div class="date updated-date" title="${this.t("last_update_title")}">${this.t("last_update_prefix")} ${this.dobj.updated_at}</div>`:p}
            </div>`:p}
      </div>
    `}};u([m({type:Object})],j.prototype,"dobj",2),u([m({type:Boolean})],j.prototype,"show_date",2),u([m({type:Boolean})],j.prototype,"dense",2),u([m({attribute:!1})],j.prototype,"t",2),j=u([x("ssc-day-header")],j);var z=class extends _{createRenderRoot(){return this}_subjectStyle(t){let e=(t||"").trim(),o=(this.subject_colors&&typeof this.subject_colors=="object"?{...B,...this.subject_colors}:B)[e];return o?`background:${o.bg};color:${o.fg}`:""}_subjectAccent(t){let e=(t||"").trim(),o=(this.subject_colors&&typeof this.subject_colors=="object"?{...B,...this.subject_colors}:B)[e];return o?o.bg:"var(--primary-color)"}render(){let t=this.lesson;if(!t)return p;let e=!!t.isSubstitution;return g`
      <div class="lesson" style="--accent: ${this._subjectAccent(t.subject)}">
        <div class="lesson-main-content">
          <div class="lesson-number">${t.period||""}</div>
          <div class="lesson-content">
            <div class="lesson-info">
              <div class="subject-teacher">
                <span class="subject ${t.subjectChanged?"changed":""}" style="${this._subjectStyle(t.subject)}">${(t.subject||"").trim()}</span>
                ${t.teacher?g`<span class="teacher ${t.teacherChanged?"changed":""}">${t.teacher}</span>`:p}
              </div>
            </div>
            <div class="lesson-details">
              <div class="time">${t.time||""}${t.end?g` – ${t.end}`:p}</div>
              ${t.room?g`<div class="room ${t.roomChanged?"changed":""}">${t.room}</div>`:p}
            </div>
          </div>
        </div>
        ${e&&t.info?g`<div class="substitution-info">${t.info}</div>`:p}
      </div>
    `}};u([m({type:Object})],z.prototype,"lesson",2),u([m({attribute:!1})],z.prototype,"subject_colors",2),z=u([x("ssc-lesson-item")],z);var S=class extends _{constructor(){super(...arguments);this.notes=[];this.show=!0;this.expanded=!1;this.t=e=>e;this._expanded=this.expanded;this._onActivate=e=>{if(e.type==="keydown"){let s=e.key;if(s!=="Enter"&&s!==" "&&s!=="Spacebar")return;e.preventDefault()}this._setExpanded(!this._expanded)}}createRenderRoot(){return this}_classifyNote(e){let s=String(e||"").toLowerCase();return s.includes("gesperrt")||s.includes("achtung")||s.includes("warnung")?"warning":s.includes("klassenarbeit")||s.includes("pr\xFCfung")||s.includes("klausur")?"info":""}_setExpanded(e){this._expanded=e;let s=this;s.classList.toggle("expanded",e),s.classList.toggle("collapsed",!e)}updated(e){e.has("expanded")&&this._setExpanded(!!this.expanded)}_renderNoteText(e){let o=String(e||"").split(/<br\s*\/?\s*>/i),r=[];return o.forEach((i,l)=>{r.push(i),l<o.length-1&&r.push(g`<br>`)}),r}render(){if(!this.show)return p;let e=Array.isArray(this.notes)&&this.notes.length>0;return g`
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
          ${e?this.notes.map(s=>g`<div class="note-item ${this._classifyNote(s)}">${this._renderNoteText(s)}</div>`):g`<div class="note-item empty">${this.t("no_notes")}</div>`}
        </div>
      </div>
    `}};u([m({type:Array})],S.prototype,"notes",2),u([m({type:Boolean})],S.prototype,"show",2),u([m({type:Boolean})],S.prototype,"expanded",2),u([m({attribute:!1})],S.prototype,"t",2),u([O()],S.prototype,"_expanded",2),S=u([x("ssc-daily-notes")],S);function qt(n){let{dobj:t,show_date:e,show_footer_hints:s,dense:o,view:r,subject_colors:i,t:l}=n,a=i&&typeof i=="object"?i:void 0,d=Array.isArray(t.lessons)?t.lessons:[],h=d.length>0,c=h?d.map(P=>g`<ssc-lesson-item .lesson=${P} .subject_colors=${a}></ssc-lesson-item>`):g`<div class="no-lessons">${l("no_lessons")}</div>`,f=t.hints,y=s&&h?g`<ssc-daily-notes .notes=${f} .show=${!0} .expanded=${r==="week"} .t=${l}></ssc-daily-notes>`:p,b=g`
    <ssc-day-header .dobj=${t} .show_date=${e} .dense=${o} .t=${l}></ssc-day-header>
  `;return g`
    <div class="school-schedule-card ${o?"dense":""}">
      ${b}
      <div class="lessons-container">${c}</div>
      ${y}
    </div>
  `}var $=class extends _{constructor(){super(...arguments);this.show_date=!0;this.show_footer_hints=!0;this.dense=!1;this.view="week";this.t=e=>e;this._onToggleNotes=e=>{let o=e.currentTarget?.closest(".daily-notes");if(!o)return;let r=o.classList.contains("expanded");o.classList.toggle("expanded",!r),o.classList.toggle("collapsed",r);let i=o.querySelector(".notes-title");i&&i.setAttribute("aria-expanded",r?"false":"true")}}createRenderRoot(){return this}render(){return this.dobj?g`
            <ha-card>
                ${qt({dobj:this.dobj,show_date:this.show_date,show_footer_hints:this.show_footer_hints,dense:this.dense,view:this.view,subject_colors:this.subject_colors,t:this.t,onToggleNotes:this._onToggleNotes})}
            </ha-card>
        `:p}};u([m({type:Object})],$.prototype,"dobj",2),u([m({type:Boolean})],$.prototype,"show_date",2),u([m({type:Boolean})],$.prototype,"show_footer_hints",2),u([m({type:Boolean})],$.prototype,"dense",2),u([m({type:String})],$.prototype,"view",2),u([m({attribute:!1})],$.prototype,"subject_colors",2),u([m({attribute:!1})],$.prototype,"t",2),$=u([x("ssc-day-card")],$);var v=class extends _{constructor(){super(...arguments);this._config={...rt};this._lang="en";this._t=bt("en")}static getConfigElement(){return null}static getStubConfig(){return{view:"week",show_date:!0}}setConfig(e){this._config={...rt,...e||{}},this._lastDataSig=void 0}willUpdate(e){if(e.has("hass")){let s=zt(this.hass);s&&s!==this._lang&&(this._lang=s,this._t=bt(s),this._lastDataSig=void 0)}}getCardSize(){return(this._config?.view||"week")==="week"?5:1}_getDataSignature(){let e=this._config,s={title:e.title,show_date:e.show_date,show_footer_hints:e.show_footer_hints,entity:e.entity?String(e.entity):void 0,has_inline_schedule:!!e.schedule,courses:Array.isArray(e.courses)?e.courses.map(o=>String(o).toLowerCase().trim()):void 0,hide_subjects:Array.isArray(e.hide_subjects)?e.hide_subjects.map(o=>String(o).toLowerCase().trim()):void 0,subject_colors:e.subject_colors||void 0};return JSON.stringify({cfg:s,days:this._parseData(),lang:this._lang||"en"})}_parseData(){let e=this._config||{},{tomorrow_after:s}=e,o=l=>{if(!Array.isArray(l))return[];let a=Array.isArray(e.courses)?e.courses.map(c=>String(c).toLowerCase().trim()).filter(Boolean):null;if(!a||a.length===0)return l;let d=c=>{let f=String(c.subject||""),y=String(c.info||"");return y&&(y.trim().split(/\s+/)[0]||"")||f},h=c=>a.includes(String(c||"").toLowerCase().trim());return l.map(c=>({...c,lessons:Array.isArray(c.lessons)?c.lessons.filter(f=>!f.isCourse||h(d(f))):[]}))},r=l=>{if(!Array.isArray(l))return[];let a=Array.isArray(e.hide_subjects)?e.hide_subjects.map(c=>String(c).toLowerCase().trim()).filter(Boolean):null;if(!a||a.length===0)return l;let d=c=>{let f=String(c.subject||"");return f&&f!=="---"?f:String(c.info||"").trim().split(/\s+/)[0]||""||f},h=c=>a.includes(String(c||"").toLowerCase().trim());return l.map(c=>({...c,lessons:Array.isArray(c.lessons)?c.lessons.filter(f=>!h(d(f))):[]}))};if(e.schedule&&Array.isArray(e.schedule.days))return r(o(vt(e.schedule,s)));let i=e.entity;if(this.hass&&i&&this.hass.states&&this.hass.states[i]){let a=this.hass.states[i].attributes||{};if(Array.isArray(a.days))return r(o(vt(a,s)))}return[]}firstUpdated(){this.updateComplete.then(()=>this._scrollToCurrentDayIfOverflow())}_scrollToCurrentDayIfOverflow(){try{if((this._config?.view||"week")!=="week")return;let e=this.renderRoot?.querySelector(".grid");if(!e||!(e.scrollWidth>e.clientWidth+4))return;let o=e.querySelector("ssc-day-card.is-target");if(!o)return;let r=o.offsetLeft,i=r+o.offsetWidth,l=e.scrollLeft,a=l+e.clientWidth,d=e.scrollLeft;if(r<l)d=r-8;else if(i>a)d=i-e.clientWidth+8;else return;e.scrollTo({left:Math.max(0,d),behavior:"smooth"})}catch{}}render(){let e=this._getDataSignature();e===this._lastDataSig||(this._lastDataSig=e);let s=this._config,{show_date:o,show_footer_hints:r,view:i="week",tomorrow_after:l,dense:a}=s,d=this._parseData(),h,c=$t(l);if((i||"week")==="day")return h=((y,b)=>y.find(P=>{if(!P.date)return!1;let C=A(P.date);return!C||isNaN(C.getTime())?!1:C.getFullYear()===b.getFullYear()&&C.getMonth()===b.getMonth()&&C.getDate()===b.getDate()}))(d,c),h||(h={name:c.toLocaleDateString(void 0,{weekday:"long"}),date:J(c),lessons:[],hints:[]}),g`<ssc-day-card
        class="view-${i}"
        .dobj=${h}
        .show_date=${o}
        .show_footer_hints=${r}
        .dense=${a}
        .view=${i}
        .subject_colors=${s.subject_colors}
        .t=${this._t}
      ></ssc-day-card>`;{let f=xt(c),y=new Date(f.getTime()+6*864e5),b=E=>{if(!E.date)return!1;let k=A(E.date);return!k||isNaN(k.getTime())?!1:(k.setHours(0,0,0,0),k>=f&&k<=y)},P=d.filter(b).sort((E,k)=>{let Kt=A(E.date)?.getTime()||0,Ft=A(k.date)?.getTime()||0;return Kt-Ft}),C=J(c);return g`
        <div class="grid">
          ${(P||[]).map(E=>g`<ssc-day-card
              class="view-${i} ${E.date===C?"is-target":""}"
              data-date="${E.date||""}"
              .dobj=${E}
              .show_date=${o}
              .show_footer_hints=${r}
              .dense=${a}
              .view=${i}
              .subject_colors=${s.subject_colors}
              .t=${this._t}
            ></ssc-day-card>`)}
        </div>
      `}}};v.styles=at`${tt(Ht)}`,u([m({attribute:!1})],v.prototype,"hass",2),u([O()],v.prototype,"_config",2),u([O()],v.prototype,"_lang",2),u([O()],v.prototype,"_t",2),u([O()],v.prototype,"_lastDataSig",2),v=u([x(Z)],v);var Wt={name:"school-schedule-card",version:"1.1.8",description:"Home Assistant Lovelace card to display a school schedule. HACS-ready.",type:"module",scripts:{"build:css":"sass --no-source-map src/styles/styles.scss src/styles/styles.css","build:js":"esbuild src/main.ts --bundle --minify --format=esm --outfile=dist/school-schedule-card.js --loader:.css=text --loader:.json=json",build:"npm run build:css && npm run build:js","watch:css":"sass --no-source-map --watch src/styles/styles.scss src/styles/styles.css","watch:js":"esbuild src/main.ts --bundle --format=esm --outfile=dist/school-schedule-card.js --loader:.css=text --loader:.json=json --watch",watch:"start /B npm run watch:css & npm run watch:js"},devDependencies:{esbuild:"^0.21.5",sass:"^1.77.0"},dependencies:{lit:"^3.1.0"}};var ge=Wt?.version||"0.0.0";try{console.info(`%c SCHOOL-SCHEDULE-CARD %c v${ge} `,"color:#fff;background:#03a9f4;border-radius:3px 0 0 3px;padding:2px 6px;","color:#03a9f4;background:#fff;border-radius:0 3px 3px 0;padding:2px 6px;")}catch{}window.customCards||(window.customCards=[]);window.customCards.push({type:Z,name:"School Schedule Card",description:"Modern, responsive schedule card for Home Assistant."});
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
