var L="school-schedule-card",k={title:"Stundenplan",show_date:!0,show_footer_hints:!0,view:"week",tomorrow_after:"16:00",courses:void 0,hide_subjects:void 0,dense:!1,subject_colors:void 0},$={Mat:{bg:"#2196f3",fg:"#fff"},Deu:{bg:"#673ab7",fg:"#fff"},Eng:{bg:"#4caf50",fg:"#fff"},Bio:{bg:"#8bc34a",fg:"#fff"},Che:{bg:"#fb8c00",fg:"#fff"},Phy:{bg:"#03a9f4",fg:"#fff"},Ges:{bg:"#e91e63",fg:"#fff"},Geo:{bg:"#2e7d32",fg:"#fff"},Mus:{bg:"#fdd835",fg:"#212121"},Kun:{bg:"#7e57c2",fg:"#fff"},Spo:{bg:"#26a69a",fg:"#fff"},Rel:{bg:"#9e9e9e",fg:"#fff"},Eth:{bg:"#9e9e9e",fg:"#fff"},eth3:{bg:"#9e9e9e",fg:"#fff"},Inf:{bg:"#3f51b5",fg:"#fff"},Spa:{bg:"#ff5722",fg:"#fff"},Mlk:{bg:"#ff5722",fg:"#fff"}};function H(s){return s&&typeof s=="object"&&!Array.isArray(s)}function W(s){try{return JSON.parse(s)}catch{return null}}function Y(s){if(!Array.isArray(s))return[];let t=e=>{if(H(e)){let c=e._??e["#text"]??"",r=!!(e.$&&Object.keys(e.$).length),a=Object.keys(e).some(d=>d.startsWith("@")&&e[d]!=null&&String(e[d]).length>0),n=r||a;return{text:String(c||""),changed:n}}return{text:String(e??""),changed:!1}};return s.map(e=>{let c=e.subject??e.fa??e.subj,r=e.teacher??e.le??e.t,a=e.room??e.ra??e.r??"",n=t(c),d=t(r),u=t(a),o=e.if??e.info??e.infoText??"",l=e.ku??e.isCourse,h=typeof l=="boolean"?l:String(l||"").toLowerCase()==="true",g=String(o||""),x=g.toLowerCase().includes("vertret")||!!n.changed||!!d.changed;return{period:e.period??e.st??e.hour??"",time:e.time??e.beginn??e.start??"",end:e.end??e.ende??e.until??"",subject:n.text,subjectChanged:n.changed,teacher:d.text,teacherChanged:d.changed,room:u.text,roomChanged:u.changed,info:g,isCourse:h,isSubstitution:x}})}function p(s){return new Date(s)}function A(s){if(!(s instanceof Date)||isNaN(s.getTime()))return"";let t=s.getFullYear(),e=(s.getMonth()+1).toString().padStart(2,"0"),c=s.getDate().toString().padStart(2,"0");return`${t}-${e}-${c}`}function j(s){let t=s.getDay()||7,e=new Date(s);return e.setHours(0,0,0,0),e.setDate(e.getDate()-(t-1)),e}function I(s){if(!s)return[];let t=e=>{let c=String(e||"").trim();return c.length?c.replace(/[_\-\s]/g,"").length>0:!1};return Array.isArray(s)?s.map(e=>String(e)).filter(t):typeof s=="string"?t(s)?[s]:[]:[]}function T(s){if(!s)return[];if(typeof s=="string"){let a=W(s);a&&(s=a)}if(!H(s)||!Array.isArray(s.days))return[];let t=s.days.find(a=>a.date&&p(a.date)),e=t?p(t.date):new Date,c=j(e),r=[];for(let a=0;a<5;a++){let n=(s.days||[])[a],d=new Date(c);d.setDate(c.getDate()+a);let u=A(d),o=d.toLocaleDateString("de-DE",{weekday:"long"});n?r.push({name:n.name??o,date:n.date?A(p(n.date)):u,lessons:Y(n.lessons??[]),hints:I(n.hints),updated_at:n.updated_at??n.updatedAt??n.last_update??void 0}):r.push({name:o,date:u,lessons:[],hints:[]})}return r}function O(s){if(!s)return"";try{let t=p(s);return!t||isNaN(t.getTime())?s:t.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})}catch{return s}}function B(s,t){let e=(s||"").trim(),r=(t&&typeof t=="object"?{...$,...t}:$)[e];return r?`background:${r.bg};color:${r.fg}`:""}function P(s,t){let e=(s||"").trim(),r=(t&&typeof t=="object"?{...$,...t}:$)[e];return r?r.bg:"var(--primary-color)"}function E({dobj:s,show_date:t,show_footer_hints:e,dense:c,view:r,subject_colors:a,t:n}){let d=a&&typeof a=="object"?a:void 0,u=s.date?O(s.date):"",o=Array.isArray(s.lessons)?s.lessons:[],l=o.length>0,h=l?o.map(i=>{let f=!!i.isSubstitution,y=f&&i.info||"";return`
          <div class="lesson" style="--accent: ${P(i.subject,d)}">
            <div class="lesson-main-content">
              <div class="lesson-number">${i.period||""}</div>
              <div class="lesson-content">
                <div class="lesson-info">
                  <div class="subject-teacher">
                    <span class="subject ${i.subjectChanged?"changed":""}" style="${B(i.subject,d)}">${(i.subject||"").trim()}</span>
                    ${i.teacher?`<span class="teacher ${i.teacherChanged?"changed":""}">${i.teacher}</span>`:""}
                  </div>
                </div>
                <div class="lesson-details">
                  <div class="time">${i.time||""}${i.end?" \u2013 "+i.end:""}</div>
                  ${i.room?`<div class="room ${i.roomChanged?"changed":""}">${i.room}</div>`:""}
                </div>
              </div>
            </div> 
            ${f&&y?`<div class="substitution-info">${y}</div>`:""}
          </div>`}).join(""):`<div class="no-lessons">${n?n("no_lessons"):"No lessons"}</div>`,g=s.hints,x=i=>{let f=(i||"").toLowerCase();return f.includes("gesperrt")||f.includes("achtung")||f.includes("warnung")?"warning":f.includes("klassenarbeit")||f.includes("pr\xFCfung")||f.includes("klausur")?"info":""},S=Array.isArray(g)&&g.length>0,b=e&&l?`
        <div class="daily-notes collapsed">
          <div class="notes-title" role="button" tabindex="0" aria-expanded="false">
            <ha-icon icon="mdi:information-box-outline" class="notes-icon"></ha-icon>
            <span class="notes-text">${n?n("daily_notes"):"Daily notes"}</span>
            <ha-icon icon="mdi:chevron-down" class="notes-arrow"></ha-icon>
          </div>
          <div class="notes-list">
            ${S?g.map(i=>`<div class="note-item ${x(i)}">${i}</div>`).join(""):`<div class="note-item empty">${n?n("no_notes"):"No notes"}</div>`}
          </div>
        </div>`:"",m=c?`<div class="header">
            <div>
                <span class="day-title">${s.name||(s.date?p(s.date)?.toLocaleDateString(void 0,{weekday:"long"}):"")}</span>
            </div>
            ${t?`
            <div>
                <div class="date">${u}</div>
                ${s.updated_at?`<div class="updated-date" title="${n?n("last_update_title"):"Last update"}">${n?n("last_update_prefix"):"Updated:"} ${s.updated_at}</div>`:""}
            </div>`:""}
          </div>`:`<div class="header">
            <div class="header-left"><div class="day-title">${s.name||(s.date?p(s.date)?.toLocaleDateString(void 0,{weekday:"long"}):"")}</div></div>
            
            ${t?`
            <div class="header-right">
              <div class="date">${u}</div>
              ${s.updated_at?`<div class="date updated-date" title="${n?n("last_update_title"):"Last update"}">${n?n("last_update_prefix"):"Updated:"} ${s.updated_at}</div>`:""}
            </div>`:""}
          </div>`;return`
        <div class="school-schedule-card ${c?"dense":""} view-${r}">
          ${m}
          <div class="lessons-container">${h}</div>
          ${b}
        </div>`}var M=`:host {
  display: block;
}

ha-card {
  padding: 12px;
}

.grid {
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
  background: var(--ha-card-background, var(--card-background-color));
  border-radius: 12px;
  padding: 10px 15px;
  margin: 0;
  box-shadow: var(--ha-card-box-shadow, 0 4px 12px rgba(0, 0, 0, 0.3));
  border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
  flex: 0 0 300px;
  min-width: 280px;
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
.school-schedule-card.view-day {
  background: none;
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

/*# sourceMappingURL=styles.css.map */
`;var w={en:{card_title:"Schedule",loading:"Loading\u2026",no_lessons:"No lessons",daily_notes:"Daily notes",no_notes:"No notes",last_update_title:"Last update",last_update_prefix:"Updated:"},de:{card_title:"Stundenplan",loading:"Wird geladen \u2026",no_lessons:"Keine Stunden",daily_notes:"T\xE4gliche Hinweise",no_notes:"Keine Hinweise",last_update_title:"Letzte Aktualisierung",last_update_prefix:"Stand:"}};function R(s){let t=String(s||"").toLowerCase();if(!t)return"en";if(w[t])return t;let e=t.split("-")[0];return w[e]?e:"en"}function z(s){if(!s)return"en";let t=s.language||s.locale&&s.locale.language;return R(t)}function N(s){let t=R(s),e=w[t]||w.en;return function(r){return e&&e[r]||w.en&&w.en[r]||r}}var ee=Object.keys(w);var C=class extends HTMLElement{setConfig(t){if(this._config={...k,...t},this._root||(this._root=this.attachShadow({mode:"open"}),this._card=document.createElement("ha-card"),this._style=document.createElement("style"),this._container=document.createElement("div"),this._container.className="container",this._card.appendChild(this._style),this._card.appendChild(this._container),this._root.appendChild(this._card)),this._lang||(this._lang="en"),this._t=N(this._lang),!this._hass){this._style.textContent=M;let e=this._t;this._container.innerHTML=`<div class="school-schedule-card"><div class="header"><div class="day-title">${this._config.title||e("card_title")}</div><div class="date">${e("loading")}</div></div></div>`}this._lastDataSig=void 0,this._maybeRender()}set hass(t){this._hass=t;let e=z(t);e&&e!==this._lang&&(this._lang=e,this._t=N(e),this._lastDataSig=void 0),this._maybeRender()}_getDataSignature(){let t=this._config||k,e={title:t.title,show_date:t.show_date,show_footer_hints:t.show_footer_hints,entity:t.entity?String(t.entity):void 0,has_inline_schedule:!!t.schedule,courses:Array.isArray(t.courses)?t.courses.map(c=>String(c).toLowerCase().trim()):void 0,hide_subjects:Array.isArray(t.hide_subjects)?t.hide_subjects.map(c=>String(c).toLowerCase().trim()):void 0,subject_colors:t.subject_colors||void 0};return JSON.stringify({cfg:e,days:this._parseData(),lang:this._lang||"en"})}_maybeRender(){let t=this._getDataSignature();if(t===this._lastDataSig)return;this._lastDataSig=t;let e=this._container?this._container.querySelector(".grid"):null,c=e?e.scrollLeft:0;this._render(),this._wireNotesToggle();let r=this._container?this._container.querySelector(".grid"):null;if(r&&c)try{r.scrollLeft=c}catch{}}_parseData(){let t=this._config||{},e=a=>{if(!Array.isArray(a))return[];let n=Array.isArray(t.courses)?t.courses.map(o=>String(o).toLowerCase().trim()).filter(Boolean):null;if(!n||n.length===0)return a;let d=o=>{let l=String(o.subject||""),h=String(o.info||"");return h&&(h.trim().split(/\s+/)[0]||"")||l},u=o=>n.includes(String(o||"").toLowerCase().trim());return a.map(o=>({...o,lessons:Array.isArray(o.lessons)?o.lessons.filter(l=>!l.isCourse||u(d(l))):[]}))},c=a=>{if(!Array.isArray(a))return[];let n=Array.isArray(t.hide_subjects)?t.hide_subjects.map(o=>String(o).toLowerCase().trim()).filter(Boolean):null;if(!n||n.length===0)return a;let d=o=>{let l=String(o.subject||"");return l&&l!=="---"?l:String(o.info||"").trim().split(/\s+/)[0]||""||l},u=o=>n.includes(String(o||"").toLowerCase().trim());return a.map(o=>({...o,lessons:Array.isArray(o.lessons)?o.lessons.filter(l=>!u(d(l))):[]}))};if(t.schedule&&Array.isArray(t.schedule.days))return c(e(T(t.schedule)));let r=t.entity;if(this._hass&&r&&this._hass.states&&this._hass.states[r]){let n=this._hass.states[r].attributes||{};if(Array.isArray(n.days))return c(e(T(n)))}return[]}_render(){if(!this._root)return;let t=this._config||k,{show_date:e,show_footer_hints:c,view:r,tomorrow_after:a,dense:n}=t;r==="week"&&this._card.setAttribute("style","background: none;"),this._style.textContent=M;let d=this._parseData(),u,o,l=b=>{let m=String(b||"").match(/^(\d{1,2}):(\d{2})$/),i=new Date;if(!m)return new Date(i.getFullYear(),i.getMonth(),i.getDate(),23,59,59);let f=Math.max(0,Math.min(23,parseInt(m[1],10))),y=Math.max(0,Math.min(59,parseInt(m[2],10)));return new Date(i.getFullYear(),i.getMonth(),i.getDate(),f,y,0)},h=new Date,g=l(a),x=new Date(h.getFullYear(),h.getMonth(),h.getDate()),S=(x.getDay()+6)%7;if(S===5||S===6||S===4&&h>=g?o=new Date(x.getTime()+(7-S)*864e5):h>=g?o=new Date(x.getTime()+864e5):o=x,(r||"week")==="day"){u=((i,f)=>i.find(y=>{if(!y.date)return!1;let _=p(y.date);return!_||isNaN(_.getTime())?!1:_.getFullYear()===f.getFullYear()&&_.getMonth()===f.getMonth()&&_.getDate()===f.getDate()}))(d,o),u||(u={name:o.toLocaleDateString(void 0,{weekday:"long"}),date:A(o),lessons:[],hints:[]});let m=E({dobj:u,show_date:e,show_footer_hints:c,dense:n,view:r,subject_colors:t.subject_colors,t:this._t});this._container.innerHTML=`${m}`}else{let b=j(o),m=new Date(b.getTime()+6*864e5),i=D=>{if(!D.date)return!1;let v=p(D.date);return!v||isNaN(v.getTime())?!1:(v.setHours(0,0,0,0),v>=b&&v<=m)},f=d.filter(i).sort((D,v)=>{let G=p(D.date)?.getTime()||0,U=p(v.date)?.getTime()||0;return G-U}),y=f.length>0?f:d,_=D=>E({dobj:D,show_date:e,show_footer_hints:c,dense:n,view:r,subject_colors:t.subject_colors,t:this._t}),F=`<div class="grid">${y.map(_).join("")}</div>`;this._container.innerHTML=`${F}`}}_wireNotesToggle(){let t=this._config||k,{view:e}=t;if(!this._container)return;this._container.querySelectorAll(".daily-notes").forEach(r=>{let a=r.querySelector(".notes-title"),n=r.querySelector(".notes-list");if(!a||!n)return;let d=a.cloneNode(!0);a.replaceWith(d);let u=l=>{r.classList.toggle("expanded",l),r.classList.toggle("collapsed",!l),d.setAttribute("aria-expanded",l?"true":"false")};u(e==="week");let o=l=>{if(l&&l.type==="keydown"){let g=l.key;if(g!=="Enter"&&g!==" "&&g!=="Spacebar")return;l.preventDefault()}let h=r.classList.contains("expanded");u(!h)};d.addEventListener("click",o),d.addEventListener("keydown",o)})}};window.customCards||(window.customCards=[]);window.customCards.push({type:L,name:"School Schedule Card",description:"Modern, responsive schedule card for Home Assistant."});customElements.get(L)||customElements.define(L,C);
