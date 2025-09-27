var A="school-schedule-card",k={title:"Stundenplan",show_date:!0,show_footer_hints:!0,view:"week",tomorrow_after:"16:00",courses:void 0,hide_subjects:void 0,dense:!1,subject_colors:void 0},D={Mat:{bg:"#2196f3",fg:"#fff"},Deu:{bg:"#673ab7",fg:"#fff"},Eng:{bg:"#4caf50",fg:"#fff"},Bio:{bg:"#8bc34a",fg:"#fff"},Che:{bg:"#fb8c00",fg:"#fff"},Phy:{bg:"#03a9f4",fg:"#fff"},Ges:{bg:"#e91e63",fg:"#fff"},Geo:{bg:"#2e7d32",fg:"#fff"},Mus:{bg:"#fdd835",fg:"#212121"},Kun:{bg:"#7e57c2",fg:"#fff"},Spo:{bg:"#26a69a",fg:"#fff"},Rel:{bg:"#9e9e9e",fg:"#fff"},Eth:{bg:"#9e9e9e",fg:"#fff"},eth3:{bg:"#9e9e9e",fg:"#fff"},Inf:{bg:"#3f51b5",fg:"#fff"},Spa:{bg:"#ff5722",fg:"#fff"},Mlk:{bg:"#ff5722",fg:"#fff"}};function M(s){return s&&typeof s=="object"&&!Array.isArray(s)}function R(s){try{return JSON.parse(s)}catch{return null}}function F(s){if(!Array.isArray(s))return[];let t=e=>{if(M(e)){let i=e._??e["#text"]??"",o=!!(e.$&&Object.keys(e.$).length),r=Object.keys(e).some(d=>d.startsWith("@")&&e[d]!=null&&String(e[d]).length>0),a=o||r;return{text:String(i||""),changed:a}}return{text:String(e??""),changed:!1}};return s.map(e=>{let i=e.subject??e.fa??e.subj,o=e.teacher??e.le??e.t,r=e.room??e.ra??e.r??"",a=t(i),d=t(o),u=t(r),n=e.if??e.info??e.infoText??"",c=e.ku??e.isCourse,h=typeof c=="boolean"?c:String(c||"").toLowerCase()==="true",g=String(n||""),y=g.toLowerCase().includes("vertret")||!!a.changed||!!d.changed;return{period:e.period??e.st??e.hour??"",time:e.time??e.beginn??e.start??"",end:e.end??e.ende??e.until??"",subject:a.text,subjectChanged:a.changed,teacher:d.text,teacherChanged:d.changed,room:u.text,roomChanged:u.changed,info:g,isCourse:h,isSubstitution:y}})}function p(s){return new Date(s)}function C(s){if(!(s instanceof Date)||isNaN(s.getTime()))return"";let t=s.getFullYear(),e=(s.getMonth()+1).toString().padStart(2,"0"),i=s.getDate().toString().padStart(2,"0");return`${t}-${e}-${i}`}function L(s){let t=s.getDay()||7,e=new Date(s);return e.setHours(0,0,0,0),e.setDate(e.getDate()-(t-1)),e}function G(s){if(!s)return[];let t=e=>{let i=String(e||"").trim();return i.length?i.replace(/[_\-\s]/g,"").length>0:!1};return Array.isArray(s)?s.map(e=>String(e)).filter(t):typeof s=="string"?t(s)?[s]:[]:[]}function j(s){if(!s)return[];if(typeof s=="string"){let r=R(s);r&&(s=r)}if(!M(s)||!Array.isArray(s.days))return[];let t=s.days.find(r=>r.date&&p(r.date)),e=t?p(t.date):new Date,i=L(e),o=[];for(let r=0;r<5;r++){let a=(s.days||[])[r],d=new Date(i);d.setDate(i.getDate()+r);let u=C(d),n=d.toLocaleDateString("de-DE",{weekday:"long"});a?o.push({name:a.name??n,date:a.date?C(p(a.date)):u,lessons:F(a.lessons??[]),hints:G(a.hints),updated_at:a.updated_at??a.updatedAt??a.last_update??void 0}):o.push({name:n,date:u,lessons:[],hints:[]})}return o}function N(s){if(!s)return"";try{let t=p(s);return!t||isNaN(t.getTime())?s:t.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})}catch{return s}}function W(s,t){let e=(s||"").trim(),o=(t&&typeof t=="object"?{...D,...t}:D)[e];return o?`background:${o.bg};color:${o.fg}`:""}function Y(s,t){let e=(s||"").trim(),o=(t&&typeof t=="object"?{...D,...t}:D)[e];return o?o.bg:"var(--primary-color)"}function T({dobj:s,show_date:t,show_footer_hints:e,dense:i,view:o,subject_colors:r}){let a=r&&typeof r=="object"?r:void 0,d=s.date?N(s.date):"",u=Array.isArray(s.lessons)?s.lessons:[],n=u.length>0,c=n?u.map(l=>{let f=!!l.isSubstitution,m=f&&l.info||"";return`
          <div class="lesson" style="--accent: ${Y(l.subject,a)}">
            <div class="lesson-main-content">
              <div class="lesson-number">${l.period||""}</div>
              <div class="lesson-content">
                <div class="lesson-info">
                  <div class="subject-teacher">
                    <span class="subject ${l.subjectChanged?"changed":""}" style="${W(l.subject,a)}">${(l.subject||"").trim()}</span>
                    ${l.teacher?`<span class="teacher ${l.teacherChanged?"changed":""}">${l.teacher}</span>`:""}
                  </div>
                </div>
                <div class="lesson-details">
                  <div class="time">${l.time||""}${l.end?" \u2013 "+l.end:""}</div>
                  ${l.room?`<div class="room ${l.roomChanged?"changed":""}">${l.room}</div>`:""}
                </div>
              </div>
            </div>
            ${f&&m?`<div class="substitution-info">${m}</div>`:""}
          </div>`}).join(""):'<div class="no-lessons">Keine Stunden</div>',h=s.hints,g=l=>{let f=(l||"").toLowerCase();return f.includes("gesperrt")||f.includes("achtung")||f.includes("warnung")?"warning":f.includes("klassenarbeit")||f.includes("pr\xFCfung")||f.includes("klausur")?"info":""},y=Array.isArray(h)&&h.length>0,w=e&&n?`
        <div class="daily-notes collapsed">
          <div class="notes-title" role="button" tabindex="0" aria-expanded="false">
            <ha-icon icon="mdi:information-box-outline" class="notes-icon"></ha-icon>
            <span class="notes-text">T\xE4gliche Hinweise</span>
            <ha-icon icon="mdi:chevron-down" class="notes-arrow"></ha-icon>
          </div>
          <div class="notes-list">
            ${y?h.map(l=>`<div class="note-item ${g(l)}">${l}</div>`).join(""):'<div class="note-item empty">Keine Hinweise</div>'}
          </div>
        </div>`:"",x=i?`<div class="header">
            <div>
                <span class="day-title">${s.name||(s.date?p(s.date)?.toLocaleDateString(void 0,{weekday:"long"}):"")}</span>
            </div>
            ${t?`
            <div>
                <div class="date">${d}</div>
                ${s.updated_at?`<div class="updated-date" title="Letzte Aktualisierung">Stand: ${s.updated_at}</div>`:""}
            </div>`:""}
          </div>`:`<div class="header">
            <div class="header-left"><div class="day-title">${s.name||(s.date?p(s.date)?.toLocaleDateString(void 0,{weekday:"long"}):"")}</div></div>
            
            ${t?`
            <div class="header-right">
              <div class="date">${d}</div>
              ${s.updated_at?`<div class="date updated-date" title="Letzte Aktualisierung">Stand: ${s.updated_at}</div>`:""}
            </div>`:""}
          </div>`;return`
        <div class="school-schedule-card ${i?"dense":""} view-${o}">
          ${x}
          <div class="lessons-container">${c}</div>
          ${w}
        </div>`}var E=`:host {
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
`;var $=class extends HTMLElement{setConfig(t){this._config={...k,...t},this._root||(this._root=this.attachShadow({mode:"open"}),this._card=document.createElement("ha-card"),this._style=document.createElement("style"),this._container=document.createElement("div"),this._container.className="container",this._card.appendChild(this._style),this._card.appendChild(this._container),this._root.appendChild(this._card)),this._hass||(this._style.textContent=E,this._container.innerHTML=`<div class="school-schedule-card"><div class="header"><div class="day-title">${this._config.title||"Stundenplan"}</div><div class="date">Wird geladen \u2026</div></div></div>`),this._lastDataSig=void 0,this._maybeRender()}set hass(t){this._hass=t,this._maybeRender()}_getDataSignature(){let t=this._config||k,e={title:t.title,show_date:t.show_date,show_footer_hints:t.show_footer_hints,entity:t.entity?String(t.entity):void 0,has_inline_schedule:!!t.schedule,courses:Array.isArray(t.courses)?t.courses.map(i=>String(i).toLowerCase().trim()):void 0,hide_subjects:Array.isArray(t.hide_subjects)?t.hide_subjects.map(i=>String(i).toLowerCase().trim()):void 0,subject_colors:t.subject_colors||void 0};return JSON.stringify({cfg:e,days:this._parseData()})}_maybeRender(){let t=this._getDataSignature();if(t===this._lastDataSig)return;this._lastDataSig=t;let e=this._container?this._container.querySelector(".grid"):null,i=e?e.scrollLeft:0;this._render(),this._wireNotesToggle();let o=this._container?this._container.querySelector(".grid"):null;if(o&&i)try{o.scrollLeft=i}catch{}}_parseData(){let t=this._config||{},e=r=>{if(!Array.isArray(r))return[];let a=Array.isArray(t.courses)?t.courses.map(n=>String(n).toLowerCase().trim()).filter(Boolean):null;if(!a||a.length===0)return r;let d=n=>{let c=String(n.subject||""),h=String(n.info||"");return h&&(h.trim().split(/\s+/)[0]||"")||c},u=n=>a.includes(String(n||"").toLowerCase().trim());return r.map(n=>({...n,lessons:Array.isArray(n.lessons)?n.lessons.filter(c=>!c.isCourse||u(d(c))):[]}))},i=r=>{if(!Array.isArray(r))return[];let a=Array.isArray(t.hide_subjects)?t.hide_subjects.map(n=>String(n).toLowerCase().trim()).filter(Boolean):null;if(!a||a.length===0)return r;let d=n=>{let c=String(n.subject||"");return c&&c!=="---"?c:String(n.info||"").trim().split(/\s+/)[0]||""||c},u=n=>a.includes(String(n||"").toLowerCase().trim());return r.map(n=>({...n,lessons:Array.isArray(n.lessons)?n.lessons.filter(c=>!u(d(c))):[]}))};if(t.schedule&&Array.isArray(t.schedule.days))return i(e(j(t.schedule)));let o=t.entity;if(this._hass&&o&&this._hass.states&&this._hass.states[o]){let a=this._hass.states[o].attributes||{};if(Array.isArray(a.days))return i(e(j(a)))}return[]}_render(){if(!this._root)return;let t=this._config||k,{show_date:e,show_footer_hints:i,view:o,tomorrow_after:r,dense:a}=t;o==="week"&&this._card.setAttribute("style","background: none;"),this._style.textContent=E;let d=this._parseData(),u,n,c=x=>{let l=String(x||"").match(/^(\d{1,2}):(\d{2})$/),f=new Date;if(!l)return new Date(f.getFullYear(),f.getMonth(),f.getDate(),23,59,59);let m=Math.max(0,Math.min(23,parseInt(l[1],10))),_=Math.max(0,Math.min(59,parseInt(l[2],10)));return new Date(f.getFullYear(),f.getMonth(),f.getDate(),m,_,0)},h=new Date,g=c(r),y=new Date(h.getFullYear(),h.getMonth(),h.getDate()),w=(y.getDay()+6)%7;if(w===5||w===6||w===4&&h>=g?n=new Date(y.getTime()+(7-w)*864e5):h>=g?n=new Date(y.getTime()+864e5):n=y,(o||"week")==="day"){u=((f,m)=>f.find(_=>{if(!_.date)return!1;let b=p(_.date);return!b||isNaN(b.getTime())?!1:b.getFullYear()===m.getFullYear()&&b.getMonth()===m.getMonth()&&b.getDate()===m.getDate()}))(d,n),u||(u={name:n.toLocaleDateString(void 0,{weekday:"long"}),date:C(n),lessons:[],hints:[]});let l=T({dobj:u,show_date:e,show_footer_hints:i,dense:a,view:o,subject_colors:t.subject_colors});this._container.innerHTML=`${l}`}else{let x=L(n),l=new Date(x.getTime()+6*864e5),f=S=>{if(!S.date)return!1;let v=p(S.date);return!v||isNaN(v.getTime())?!1:(v.setHours(0,0,0,0),v>=x&&v<=l)},m=d.filter(f).sort((S,v)=>{let H=p(S.date)?.getTime()||0,O=p(v.date)?.getTime()||0;return H-O}),_=m.length>0?m:d,b=S=>T({dobj:S,show_date:e,show_footer_hints:i,dense:a,view:o,subject_colors:t.subject_colors}),z=`<div class="grid">${_.map(b).join("")}</div>`;this._container.innerHTML=`${z}`}}_wireNotesToggle(){let t=this._config||k,{view:e}=t;if(!this._container)return;this._container.querySelectorAll(".daily-notes").forEach(o=>{let r=o.querySelector(".notes-title"),a=o.querySelector(".notes-list");if(!r||!a)return;let d=r.cloneNode(!0);r.replaceWith(d);let u=c=>{o.classList.toggle("expanded",c),o.classList.toggle("collapsed",!c),d.setAttribute("aria-expanded",c?"true":"false")};u(e==="week");let n=c=>{if(c&&c.type==="keydown"){let g=c.key;if(g!=="Enter"&&g!==" "&&g!=="Spacebar")return;c.preventDefault()}let h=o.classList.contains("expanded");u(!h)};d.addEventListener("click",n),d.addEventListener("keydown",n)})}};window.customCards||(window.customCards=[]);window.customCards.push({type:A,name:"School Schedule Card",description:"Moderne, responsive Stundenplan-Karte f\xFCr Home Assistant."});customElements.get(A)||customElements.define(A,$);
