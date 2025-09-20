var w="school-schedule-card",_={title:"Stundenplan",show_date:!0,show_footer_hints:!0,view:"week",tomorrow_after:"16:00",courses:void 0,hide_subjects:void 0,dense:!1},A={Mat:{bg:"#2196f3",fg:"#fff"},Deu:{bg:"#673ab7",fg:"#fff"},Eng:{bg:"#4caf50",fg:"#fff"},Bio:{bg:"#8bc34a",fg:"#fff"},Che:{bg:"#fb8c00",fg:"#fff"},Phy:{bg:"#03a9f4",fg:"#fff"},Ges:{bg:"#e91e63",fg:"#fff"},Geo:{bg:"#2e7d32",fg:"#fff"},Mus:{bg:"#fdd835",fg:"#212121"},Kun:{bg:"#7e57c2",fg:"#fff"},Spo:{bg:"#26a69a",fg:"#fff"},Rel:{bg:"#9e9e9e",fg:"#fff"},Eth:{bg:"#9e9e9e",fg:"#fff"},eth3:{bg:"#9e9e9e",fg:"#fff"},Inf:{bg:"#3f51b5",fg:"#fff"},Spa:{bg:"#ff5722",fg:"#fff"},Mlk:{bg:"#ff5722",fg:"#fff"}};function M(t){return t&&typeof t=="object"&&!Array.isArray(t)}function E(t){try{return JSON.parse(t)}catch{return null}}function z(t){if(!Array.isArray(t))return[];let s=e=>{if(M(e)){let i=e._??e["#text"]??"",d=!!(e.$&&Object.keys(e.$).length),f=Object.keys(e).some(u=>u.startsWith("@")&&e[u]!=null&&String(e[u]).length>0),c=d||f;return{text:String(i||""),changed:c}}return{text:String(e??""),changed:!1}};return t.map(e=>{let i=e.subject??e.fa??e.subj,d=e.teacher??e.le??e.t,f=e.room??e.ra??e.r??"",c=s(i),u=s(d),h=s(f),n=e.if??e.info??e.infoText??"",r=e.ku??e.isCourse,a=typeof r=="boolean"?r:String(r||"").toLowerCase()==="true",o=String(n||""),l=o.toLowerCase().includes("vertret")||!!c.changed||!!u.changed;return{period:e.period??e.st??e.hour??"",time:e.time??e.beginn??e.start??"",end:e.end??e.ende??e.until??"",subject:c.text,subjectChanged:c.changed,teacher:u.text,teacherChanged:u.changed,room:h.text,info:o,isCourse:a,isSubstitution:l}})}function g(t){return new Date(t)}function D(t){if(!(t instanceof Date)||isNaN(t.getTime()))return"";let s=t.getFullYear(),e=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0");return`${s}-${e}-${i}`}function N(t){let s=t.getDay()||7,e=new Date(t);return e.setHours(0,0,0,0),e.setDate(e.getDate()-(s-1)),e}function S(t){if(!t)return[];let s=e=>{let i=String(e||"").trim();return i.length?i.replace(/[_\-\s]/g,"").length>0:!1};return Array.isArray(t)?t.map(e=>String(e)).filter(s):typeof t=="string"?s(t)?[t]:[]:[]}function C(t){if(!t)return[];if(typeof t=="string"){let s=E(t);s&&(t=s)}if(M(t)&&Array.isArray(t.days)){let s=(t.days||[]).map(n=>({name:n.name??void 0,date:n.date??void 0,lessons:z(n.lessons??[]),hints:S(n.hints),updated_at:n.updated_at??n.updatedAt??n.last_update??void 0})),e=n=>{if(n&&n.date){let o=g(n.date);if(!isNaN(o)){let l=o.getDay();return l===0?7:l}}let r=(n&&n.name?String(n.name):"").toLowerCase();return{montag:1,mo:1,monday:1,mon:1,dienstag:2,di:2,tuesday:2,tue:2,tues:2,mittwoch:3,mi:3,wednesday:3,wed:3,donnerstag:4,do:4,thursday:4,thu:4,thur:4,thurs:4,freitag:5,fr:5,friday:5,fri:5,samstag:6,sa:6,saturday:6,sat:6,sonntag:7,so:7,sunday:7,sun:7}[r]||void 0},i=new Map;for(let n of s){let r=e(n);if(!r)continue;let a=i.get(r);if(!a){i.set(r,n);continue}let o=!!a.date,l=!!n.date;i.set(r,l&&!o?n:a)}let d=s.find(n=>n.date&&g(n.date)),f=d?g(d.date):new Date,c=N(f),u=["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],h=[];for(let n=0;n<5;n++){let r=n+1,a=i.get(r),o=new Date(c);o.setDate(c.getDate()+n);let l=D(o);a?h.push({name:a.name??u[n],date:a.date?D(g(a.date)):l,lessons:Array.isArray(a.lessons)?a.lessons:[],hints:S(a.hints),updated_at:a.updated_at??void 0}):h.push({name:u[n],date:l,lessons:[],hints:[]})}return h}return[]}function j(t){if(!t)return"";try{let s=g(t);return!s||isNaN(s.getTime())?t:s.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})}catch{return t}}function R(t){let s=(t||"").trim(),e=A[s];return e?`background:${e.bg};color:${e.fg}`:""}function H(t){let s=(t||"").trim(),e=A[s];return e?e.bg:"var(--primary-color)"}function $({dobj:t,show_date:s,show_footer_hints:e,dense:i,view:d}){let f=t.date?j(t.date):"",c=Array.isArray(t.lessons)?t.lessons:[],u=c.length?c.map(o=>{let l=!!o.isSubstitution,m=l&&o.info||"";return`
          <div class="lesson" style="--accent: ${H(o.subject)}">
            <div class="lesson-main-content">
              <div class="lesson-number">${o.period||""}</div>
              <div class="lesson-content">
                <div class="lesson-info">
                  <div class="subject-teacher">
                    <span class="subject ${o.subjectChanged?"changed":""}" style="${R(o.subject)}">${(o.subject||"").trim()}</span>
                    ${o.teacher?`<span class="teacher ${o.teacherChanged?"changed":""}">${o.teacher}</span>`:""}
                  </div>
                </div>
                <div class="lesson-details">
                  <div class="time">${o.time||""}${o.end?" \u2013 "+o.end:""}</div>
                  ${o.room?`<div class="room">${o.room}</div>`:""}
                </div>
              </div>
            </div>
            ${l&&m?`<div class="substitution-info">${m}</div>`:""}
          </div>`}).join(""):"",h=S(t.hints),n=o=>{let l=(o||"").toLowerCase();return l.includes("gesperrt")||l.includes("achtung")||l.includes("warnung")?"warning":l.includes("klassenarbeit")||l.includes("pr\xFCfung")?"info":""},r=e&&h&&h.length?`
        <div class="daily-notes">
          ${i?"":'<div class="notes-title"><div class="notes-icon">i</div>T\xE4gliche Hinweise</div>'}
          <div class="notes-list">
            ${h.map(o=>`<div class="note-item ${n(o)}">${o}</div>`).join("")}
          </div>
        </div>`:"",a=i?`<div class="header">
            <div class="header-day">
                <span class="day-title">${t.name||(t.date?g(t.date)?.toLocaleDateString(void 0,{weekday:"long"}):"")}</span>
                ${s?`<span class="date">${f}</span>`:""}
            </div>            
            ${t.updated_at?`<div class="date updated-date" title="Letzte Aktualisierung">Stand: ${t.updated_at}</div>`:""}
          </div>`:`<div class="header">
            <div class="day-title">${t.name||(t.date?g(t.date)?.toLocaleDateString(void 0,{weekday:"long"}):"")}</div>
            ${s?`<div class="date">${f}</div>`:""}
            ${t.updated_at?`<div class="date updated-date" title="Letzte Aktualisierung">Stand: ${t.updated_at}</div>`:""}
          </div>`;return`
        <div class="school-schedule-card ${i?"dense":""} view-${d}">
          ${a}
          <div class="lessons-container">${u}</div>
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
.school-schedule-card.dense .daily-notes {
  margin-top: 10px;
  padding-top: 10px;
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
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--divider-color);
}
.daily-notes .notes-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-text-color);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.daily-notes .notes-title .notes-icon {
  width: 20px;
  height: 20px;
  background: var(--info-color, var(--primary-color));
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--text-primary-color-on-primary, #fff);
  font-weight: bold;
}
.daily-notes .notes-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
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
`;var k=class extends HTMLElement{setConfig(s){this._config={..._,...s},this._root||(this._root=this.attachShadow({mode:"open"}),this._card=document.createElement("ha-card"),this._style=document.createElement("style"),this._container=document.createElement("div"),this._container.className="container",this._card.appendChild(this._style),this._card.appendChild(this._container),this._root.appendChild(this._card)),this._hass||(this._style.textContent=L,this._container.innerHTML=`<div class="school-schedule-card"><div class="header"><div class="day-title">${this._config.title||"Stundenplan"}</div><div class="date">Wird geladen \u2026</div></div></div>`),this._lastDataSig=void 0,this._maybeRender()}set hass(s){this._hass=s,this._maybeRender()}_getDataSignature(){let s=this._config||_,e={title:s.title,show_date:s.show_date,show_footer_hints:s.show_footer_hints,entity:s.entity?String(s.entity):void 0,has_inline_schedule:!!s.schedule,courses:Array.isArray(s.courses)?s.courses.map(d=>String(d).toLowerCase().trim()):void 0,hide_subjects:Array.isArray(s.hide_subjects)?s.hide_subjects.map(d=>String(d).toLowerCase().trim()):void 0},i=this._parseData();return JSON.stringify({cfg:e,days:i})}_maybeRender(){let s=this._getDataSignature();if(s===this._lastDataSig)return;this._lastDataSig=s;let e=this._container?this._container.querySelector(".grid"):null,i=e?e.scrollLeft:0;this._render();let d=this._container?this._container.querySelector(".grid"):null;if(d&&i)try{d.scrollLeft=i}catch{}}_parseData(){let s=this._config||{},e=f=>{if(!Array.isArray(f))return[];let c=Array.isArray(s.courses)?s.courses.map(n=>String(n).toLowerCase().trim()).filter(Boolean):null;if(!c||c.length===0)return f;let u=n=>{let r=String(n.subject||""),a=String(n.info||"");return a&&(a.trim().split(/\s+/)[0]||"")||r},h=n=>c.includes(String(n||"").toLowerCase().trim());return f.map(n=>({...n,lessons:Array.isArray(n.lessons)?n.lessons.filter(r=>!r.isCourse||h(u(r))):[]}))},i=f=>{if(!Array.isArray(f))return[];let c=Array.isArray(s.hide_subjects)?s.hide_subjects.map(n=>String(n).toLowerCase().trim()).filter(Boolean):null;if(!c||c.length===0)return f;let u=n=>{let r=String(n.subject||"");return r&&r!=="---"?r:String(n.info||"").trim().split(/\s+/)[0]||""||r},h=n=>c.includes(String(n||"").toLowerCase().trim());return f.map(n=>({...n,lessons:Array.isArray(n.lessons)?n.lessons.filter(r=>!h(u(r))):[]}))};if(s.schedule&&Array.isArray(s.schedule.days))return i(e(C(s.schedule)));let d=s.entity;if(this._hass&&d&&this._hass.states&&this._hass.states[d]){let c=this._hass.states[d].attributes||{};if(Array.isArray(c.days))return i(e(C(c)))}return[]}_render(){if(!this._root)return;let s=this._config||_,{show_date:e,show_footer_hints:i,view:d,tomorrow_after:f,dense:c}=s;d==="week"&&this._card.setAttribute("style","background: none;"),this._style.textContent=L;let u=this._parseData(),h;if((d||"week")==="day"){let r=v=>{let y=String(v||"").match(/^(\d{1,2}):(\d{2})$/),p=new Date;if(!y)return new Date(p.getFullYear(),p.getMonth(),p.getDate(),23,59,59);let x=Math.max(0,Math.min(23,parseInt(y[1],10))),T=Math.max(0,Math.min(59,parseInt(y[2],10)));return new Date(p.getFullYear(),p.getMonth(),p.getDate(),x,T,0)},a=new Date,o=r(f),l=new Date(a.getFullYear(),a.getMonth(),a.getDate()),m=(l.getDay()+6)%7,b;m===5||m===6||m===4&&a>=o?b=new Date(l.getTime()+(7-m)*864e5):a>=o?b=new Date(l.getTime()+864e5):b=l,h=((v,y)=>v.find(p=>{if(!p.date)return!1;let x=g(p.date);return!x||isNaN(x.getTime())?!1:x.getFullYear()===y.getFullYear()&&x.getMonth()===y.getMonth()&&x.getDate()===y.getDate()}))(u,b),h||(h={name:b.toLocaleDateString(void 0,{weekday:"long"}),date:D(b),lessons:[],hints:[]})}else{let r=o=>$({dobj:o,show_date:e,show_footer_hints:i,dense:c}),a=`<div class="grid">${u.map(r).join("")}</div>`;this._container.innerHTML=`${a}`;return}let n=$({dobj:h,show_date:e,show_footer_hints:i,dense:c,view:d});this._container.innerHTML=`${n}`}};window.customCards||(window.customCards=[]);window.customCards.push({type:w,name:"School Schedule Card",description:"Moderne, responsive Stundenplan-Karte f\xFCr Home Assistant."});customElements.get(w)||customElements.define(w,k);
