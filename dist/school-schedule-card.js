var _="school-schedule-card",w={title:"Stundenplan",show_date:!0,show_footer_hints:!0,view:"week",tomorrow_after:"16:00",courses:void 0,hide_subjects:void 0,dense:!1},A={Mat:{bg:"#2196f3",fg:"#fff"},Deu:{bg:"#673ab7",fg:"#fff"},Eng:{bg:"#4caf50",fg:"#fff"},Bio:{bg:"#8bc34a",fg:"#fff"},Che:{bg:"#fb8c00",fg:"#fff"},Phy:{bg:"#03a9f4",fg:"#fff"},Ges:{bg:"#e91e63",fg:"#fff"},Geo:{bg:"#2e7d32",fg:"#fff"},Mus:{bg:"#fdd835",fg:"#212121"},Kun:{bg:"#7e57c2",fg:"#fff"},Spo:{bg:"#26a69a",fg:"#fff"},Rel:{bg:"#9e9e9e",fg:"#fff"},Eth:{bg:"#9e9e9e",fg:"#fff"},eth3:{bg:"#9e9e9e",fg:"#fff"},Inf:{bg:"#3f51b5",fg:"#fff"},Spa:{bg:"#ff5722",fg:"#fff"},Mlk:{bg:"#ff5722",fg:"#fff"}};function M(t){return t&&typeof t=="object"&&!Array.isArray(t)}function E(t){try{return JSON.parse(t)}catch{return null}}function N(t){if(!Array.isArray(t))return[];let n=e=>{if(M(e)){let c=e._??e["#text"]??"",a=!!(e.$&&Object.keys(e.$).length),d=Object.keys(e).some(f=>f.startsWith("@")&&e[f]!=null&&String(e[f]).length>0),l=a||d;return{text:String(c||""),changed:l}}return{text:String(e??""),changed:!1}};return t.map(e=>{let c=e.subject??e.fa??e.subj,a=e.teacher??e.le??e.t,d=e.room??e.ra??e.r??"",l=n(c),f=n(a),h=n(d),s=e.if??e.info??e.infoText??"",r=e.ku??e.isCourse,i=typeof r=="boolean"?r:String(r||"").toLowerCase()==="true",o=String(s||""),u=o.toLowerCase().includes("vertret")||!!l.changed||!!f.changed;return{period:e.period??e.st??e.hour??"",time:e.time??e.beginn??e.start??"",end:e.end??e.ende??e.until??"",subject:l.text,subjectChanged:l.changed,teacher:f.text,teacherChanged:f.changed,room:h.text,info:o,isCourse:i,isSubstitution:u}})}function g(t){return new Date(t)}function S(t){if(!(t instanceof Date)||isNaN(t.getTime()))return"";let n=t.getFullYear(),e=(t.getMonth()+1).toString().padStart(2,"0"),c=t.getDate().toString().padStart(2,"0");return`${n}-${e}-${c}`}function R(t){let n=t.getDay()||7,e=new Date(t);return e.setHours(0,0,0,0),e.setDate(e.getDate()-(n-1)),e}function D(t){if(!t)return[];let n=e=>{let c=String(e||"").trim();return c.length?c.replace(/[_\-\s]/g,"").length>0:!1};return Array.isArray(t)?t.map(e=>String(e)).filter(n):typeof t=="string"?n(t)?[t]:[]:[]}function C(t){if(!t)return[];if(typeof t=="string"){let n=E(t);n&&(t=n)}if(M(t)&&Array.isArray(t.days)){let n=(t.days||[]).map(s=>({name:s.name??void 0,date:s.date??void 0,lessons:N(s.lessons??[]),hints:D(s.hints),updated_at:s.updated_at??s.updatedAt??s.last_update??void 0})),e=s=>{if(s&&s.date){let o=g(s.date);if(!isNaN(o)){let u=o.getDay();return u===0?7:u}}let r=(s&&s.name?String(s.name):"").toLowerCase();return{montag:1,mo:1,monday:1,mon:1,dienstag:2,di:2,tuesday:2,tue:2,tues:2,mittwoch:3,mi:3,wednesday:3,wed:3,donnerstag:4,do:4,thursday:4,thu:4,thur:4,thurs:4,freitag:5,fr:5,friday:5,fri:5,samstag:6,sa:6,saturday:6,sat:6,sonntag:7,so:7,sunday:7,sun:7}[r]||void 0},c=new Map;for(let s of n){let r=e(s);if(!r)continue;let i=c.get(r);if(!i){c.set(r,s);continue}let o=!!i.date,u=!!s.date;c.set(r,u&&!o?s:i)}let a=n.find(s=>s.date&&g(s.date)),d=a?g(a.date):new Date,l=R(d),f=["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],h=[];for(let s=0;s<5;s++){let r=s+1,i=c.get(r),o=new Date(l);o.setDate(l.getDate()+s);let u=S(o);i?h.push({name:i.name??f[s],date:i.date?S(g(i.date)):u,lessons:Array.isArray(i.lessons)?i.lessons:[],hints:D(i.hints),updated_at:i.updated_at??void 0}):h.push({name:f[s],date:u,lessons:[],hints:[]})}return h}return[]}function j(t){if(!t)return"";try{let n=g(t);return!n||isNaN(n.getTime())?t:n.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})}catch{return t}}function z(t){let n=(t||"").trim(),e=A[n];return e?`background:${e.bg};color:${e.fg}`:""}function H(t){let n=(t||"").trim(),e=A[n];return e?e.bg:"var(--primary-color)"}function $({dobj:t,show_date:n,show_footer_hints:e,dense:c,view:a}){let d=t.date?j(t.date):"",l=Array.isArray(t.lessons)?t.lessons:[],f=l.length?l.map(o=>{let u=!!o.isSubstitution,m=u&&o.info||"";return`
          <div class="lesson" style="--accent: ${H(o.subject)}">
            <div class="lesson-main-content">
              <div class="lesson-number">${o.period||""}</div>
              <div class="lesson-content">
                <div class="lesson-info">
                  <div class="subject-teacher">
                    <span class="subject ${o.subjectChanged?"changed":""}" style="${z(o.subject)}">${(o.subject||"").trim()}</span>
                    ${o.teacher?`<span class="teacher ${o.teacherChanged?"changed":""}">${o.teacher}</span>`:""}
                  </div>
                </div>
                <div class="lesson-details">
                  <div class="time">${o.time||""}${o.end?" \u2013 "+o.end:""}</div>
                  ${o.room?`<div class="room">${o.room}</div>`:""}
                </div>
              </div>
            </div>
            ${u&&m?`<div class="substitution-info">${m}</div>`:""}
          </div>`}).join(""):"",h=D(t.hints),s=o=>{let u=(o||"").toLowerCase();return u.includes("gesperrt")||u.includes("achtung")||u.includes("warnung")?"warning":u.includes("klassenarbeit")||u.includes("pr\xFCfung")?"info":""},r=e&&h&&h.length?`
        <div class="daily-notes collapsed">
          <div class="notes-title" role="button" tabindex="0" aria-expanded="false">
            <ha-icon icon="mdi:information-box-outline" class="notes-icon"></ha-icon>
            <span class="notes-text">T\xE4gliche Hinweise</span>
            <ha-icon icon="mdi:chevron-down" class="notes-arrow"></ha-icon>
          </div>
          <div class="notes-list">
            ${h.map(o=>`<div class="note-item ${s(o)}">${o}</div>`).join("")}
          </div>
        </div>`:"",i=c?`<div class="header">
            <div class="header-day">
                <span class="day-title">${t.name||(t.date?g(t.date)?.toLocaleDateString(void 0,{weekday:"long"}):"")}</span>
                ${n?`<span class="date">${d}</span>`:""}
            </div>            
            ${t.updated_at?`<div class="date updated-date" title="Letzte Aktualisierung">Stand: ${t.updated_at}</div>`:""}
          </div>`:`<div class="header">
            <div class="day-title">${t.name||(t.date?g(t.date)?.toLocaleDateString(void 0,{weekday:"long"}):"")}</div>
            ${n?`<div class="date">${d}</div>`:""}
            ${t.updated_at?`<div class="date updated-date" title="Letzte Aktualisierung">Stand: ${t.updated_at}</div>`:""}
          </div>`;return`
        <div class="school-schedule-card ${c?"dense":""} view-${a}">
          ${i}
          <div class="lessons-container">${f}</div>
          ${r}
        </div>`}var L=`:host {
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
  text-align: center;
  margin-bottom: 12px;
  border-bottom: 1px solid var(--divider-color);
}
.school-schedule-card .header .header-day {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.school-schedule-card .header .day-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-text-color);
  margin-bottom: 4px;
}
.school-schedule-card .header .date {
  font-size: 16px;
  color: var(--secondary-text-color);
  font-weight: 400;
}
.school-schedule-card .header .updated-date {
  font-size: 14px;
  text-align: center;
  margin-bottom: 12px;
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
.school-schedule-card.dense .header {
  margin-bottom: 10px;
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
  margin-bottom: 6px;
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
`;var k=class extends HTMLElement{setConfig(n){this._config={...w,...n},this._root||(this._root=this.attachShadow({mode:"open"}),this._card=document.createElement("ha-card"),this._style=document.createElement("style"),this._container=document.createElement("div"),this._container.className="container",this._card.appendChild(this._style),this._card.appendChild(this._container),this._root.appendChild(this._card)),this._hass||(this._style.textContent=L,this._container.innerHTML=`<div class="school-schedule-card"><div class="header"><div class="day-title">${this._config.title||"Stundenplan"}</div><div class="date">Wird geladen \u2026</div></div></div>`),this._lastDataSig=void 0,this._maybeRender()}set hass(n){this._hass=n,this._maybeRender()}_getDataSignature(){let n=this._config||w,e={title:n.title,show_date:n.show_date,show_footer_hints:n.show_footer_hints,entity:n.entity?String(n.entity):void 0,has_inline_schedule:!!n.schedule,courses:Array.isArray(n.courses)?n.courses.map(a=>String(a).toLowerCase().trim()):void 0,hide_subjects:Array.isArray(n.hide_subjects)?n.hide_subjects.map(a=>String(a).toLowerCase().trim()):void 0},c=this._parseData();return JSON.stringify({cfg:e,days:c})}_maybeRender(){let n=this._getDataSignature();if(n===this._lastDataSig)return;this._lastDataSig=n;let e=this._container?this._container.querySelector(".grid"):null,c=e?e.scrollLeft:0;this._render(),this._wireNotesToggle();let a=this._container?this._container.querySelector(".grid"):null;if(a&&c)try{a.scrollLeft=c}catch{}}_parseData(){let n=this._config||{},e=d=>{if(!Array.isArray(d))return[];let l=Array.isArray(n.courses)?n.courses.map(s=>String(s).toLowerCase().trim()).filter(Boolean):null;if(!l||l.length===0)return d;let f=s=>{let r=String(s.subject||""),i=String(s.info||"");return i&&(i.trim().split(/\s+/)[0]||"")||r},h=s=>l.includes(String(s||"").toLowerCase().trim());return d.map(s=>({...s,lessons:Array.isArray(s.lessons)?s.lessons.filter(r=>!r.isCourse||h(f(r))):[]}))},c=d=>{if(!Array.isArray(d))return[];let l=Array.isArray(n.hide_subjects)?n.hide_subjects.map(s=>String(s).toLowerCase().trim()).filter(Boolean):null;if(!l||l.length===0)return d;let f=s=>{let r=String(s.subject||"");return r&&r!=="---"?r:String(s.info||"").trim().split(/\s+/)[0]||""||r},h=s=>l.includes(String(s||"").toLowerCase().trim());return d.map(s=>({...s,lessons:Array.isArray(s.lessons)?s.lessons.filter(r=>!h(f(r))):[]}))};if(n.schedule&&Array.isArray(n.schedule.days))return c(e(C(n.schedule)));let a=n.entity;if(this._hass&&a&&this._hass.states&&this._hass.states[a]){let l=this._hass.states[a].attributes||{};if(Array.isArray(l.days))return c(e(C(l)))}return[]}_render(){if(!this._root)return;let n=this._config||w,{show_date:e,show_footer_hints:c,view:a,tomorrow_after:d,dense:l}=n;a==="week"&&this._card.setAttribute("style","background: none;"),this._style.textContent=L;let f=this._parseData(),h;if((a||"week")==="day"){let r=v=>{let y=String(v||"").match(/^(\d{1,2}):(\d{2})$/),p=new Date;if(!y)return new Date(p.getFullYear(),p.getMonth(),p.getDate(),23,59,59);let x=Math.max(0,Math.min(23,parseInt(y[1],10))),T=Math.max(0,Math.min(59,parseInt(y[2],10)));return new Date(p.getFullYear(),p.getMonth(),p.getDate(),x,T,0)},i=new Date,o=r(d),u=new Date(i.getFullYear(),i.getMonth(),i.getDate()),m=(u.getDay()+6)%7,b;m===5||m===6||m===4&&i>=o?b=new Date(u.getTime()+(7-m)*864e5):i>=o?b=new Date(u.getTime()+864e5):b=u,h=((v,y)=>v.find(p=>{if(!p.date)return!1;let x=g(p.date);return!x||isNaN(x.getTime())?!1:x.getFullYear()===y.getFullYear()&&x.getMonth()===y.getMonth()&&x.getDate()===y.getDate()}))(f,b),h||(h={name:b.toLocaleDateString(void 0,{weekday:"long"}),date:S(b),lessons:[],hints:[]})}else{let r=o=>$({dobj:o,show_date:e,show_footer_hints:c,dense:l,view:a}),i=`<div class="grid">${f.map(r).join("")}</div>`;this._container.innerHTML=`${i}`;return}let s=$({dobj:h,show_date:e,show_footer_hints:c,dense:l,view:a});this._container.innerHTML=`${s}`}_wireNotesToggle(){let n=this._config||w,{view:e}=n;if(!this._container)return;this._container.querySelectorAll(".daily-notes").forEach(a=>{let d=a.querySelector(".notes-title"),l=a.querySelector(".notes-list");if(!d||!l)return;let f=d.cloneNode(!0);d.replaceWith(f);let h=r=>{a.classList.toggle("expanded",r),a.classList.toggle("collapsed",!r),f.setAttribute("aria-expanded",r?"true":"false")};h(e==="week");let s=r=>{if(r&&r.type==="keydown"){let o=r.key;if(o!=="Enter"&&o!==" "&&o!=="Spacebar")return;r.preventDefault()}let i=a.classList.contains("expanded");h(!i)};f.addEventListener("click",s),f.addEventListener("keydown",s)})}};window.customCards||(window.customCards=[]);window.customCards.push({type:_,name:"School Schedule Card",description:"Moderne, responsive Stundenplan-Karte f\xFCr Home Assistant."});customElements.get(_)||customElements.define(_,k);
