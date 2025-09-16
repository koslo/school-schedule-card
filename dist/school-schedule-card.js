var v="school-schedule-card",_={title:"Stundenplan",show_date:!0,show_footer_hints:!0,view:"week",tomorrow_after:"16:00",courses:void 0,hide_subjects:void 0,dense:!1},A={Mat:{bg:"#2196f3",fg:"#fff"},Deu:{bg:"#673ab7",fg:"#fff"},Eng:{bg:"#4caf50",fg:"#fff"},Bio:{bg:"#8bc34a",fg:"#fff"},Che:{bg:"#fb8c00",fg:"#fff"},Phy:{bg:"#03a9f4",fg:"#fff"},Ges:{bg:"#e91e63",fg:"#fff"},Geo:{bg:"#2e7d32",fg:"#fff"},Mus:{bg:"#fdd835",fg:"#212121"},Kun:{bg:"#7e57c2",fg:"#fff"},Spo:{bg:"#26a69a",fg:"#fff"},Rel:{bg:"#9e9e9e",fg:"#fff"},Eth:{bg:"#9e9e9e",fg:"#fff"},eth3:{bg:"#9e9e9e",fg:"#fff"},Inf:{bg:"#3f51b5",fg:"#fff"},Spa:{bg:"#ff5722",fg:"#fff"},Mlk:{bg:"#ff5722",fg:"#fff"}};function j(n){return n&&typeof n=="object"&&!Array.isArray(n)}function E(n){try{return JSON.parse(n)}catch{return null}}function N(n){if(!Array.isArray(n))return[];let s=e=>{if(j(e)){let a=e._??e["#text"]??"",c=!!(e.$&&Object.keys(e.$).length),l=Object.keys(e).some(d=>d.startsWith("@")&&e[d]!=null&&String(e[d]).length>0),i=c||l;return{text:String(a||""),changed:i}}return{text:String(e??""),changed:!1}};return n.map(e=>{let a=e.subject??e.fa??e.subj,c=e.teacher??e.le??e.t,l=e.room??e.ra??e.r??"",i=s(a),d=s(c),u=s(l),t=e.if??e.info??e.infoText??"",o=e.ku??e.isCourse,r=typeof o=="boolean"?o:String(o||"").toLowerCase()==="true",f=String(t||""),h=f.toLowerCase().includes("vertret")||!!i.changed||!!d.changed;return{period:e.period??e.st??e.hour??"",time:e.time??e.beginn??e.start??"",end:e.end??e.ende??e.until??"",subject:i.text,subjectChanged:i.changed,teacher:d.text,teacherChanged:d.changed,room:u.text,info:f,isCourse:r,isSubstitution:h}})}function p(n){return new Date(n)}function D(n){if(!(n instanceof Date)||isNaN(n.getTime()))return"";let s=n.getFullYear(),e=(n.getMonth()+1).toString().padStart(2,"0"),a=n.getDate().toString().padStart(2,"0");return`${s}-${e}-${a}`}function z(n){let s=n.getDay()||7,e=new Date(n);return e.setHours(0,0,0,0),e.setDate(e.getDate()-(s-1)),e}function S(n){if(!n)return[];let s=e=>{let a=String(e||"").trim();return a.length?a.replace(/[_\-\s]/g,"").length>0:!1};return Array.isArray(n)?n.map(e=>String(e)).filter(s):typeof n=="string"?s(n)?[n]:[]:[]}function C(n){if(!n)return[];if(typeof n=="string"){let s=E(n);s&&(n=s)}if(j(n)&&Array.isArray(n.days)){let s=(n.days||[]).map(t=>({name:t.name??void 0,date:t.date??void 0,lessons:N(t.lessons??[]),hints:S(t.hints),updated_at:t.updated_at??t.updatedAt??t.last_update??void 0})),e=t=>{if(t&&t.date){let f=p(t.date);if(!isNaN(f)){let h=f.getDay();return h===0?7:h}}let o=(t&&t.name?String(t.name):"").toLowerCase();return{montag:1,mo:1,monday:1,mon:1,dienstag:2,di:2,tuesday:2,tue:2,tues:2,mittwoch:3,mi:3,wednesday:3,wed:3,donnerstag:4,do:4,thursday:4,thu:4,thur:4,thurs:4,freitag:5,fr:5,friday:5,fri:5,samstag:6,sa:6,saturday:6,sat:6,sonntag:7,so:7,sunday:7,sun:7}[o]||void 0},a=new Map;for(let t of s){let o=e(t);if(!o)continue;let r=a.get(o);if(!r){a.set(o,t);continue}let f=!!r.date,h=!!t.date;a.set(o,h&&!f?t:r)}let c=s.find(t=>t.date&&p(t.date)),l=c?p(c.date):new Date,i=z(l),d=["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],u=[];for(let t=0;t<5;t++){let o=t+1,r=a.get(o),f=new Date(i);f.setDate(i.getDate()+t);let h=D(f);r?u.push({name:r.name??d[t],date:r.date?D(p(r.date)):h,lessons:Array.isArray(r.lessons)?r.lessons:[],hints:S(r.hints),updated_at:r.updated_at??void 0}):u.push({name:d[t],date:h,lessons:[],hints:[]})}return u}return[]}function M(n){if(!n)return"";try{let s=p(n);return!s||isNaN(s.getTime())?n:s.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})}catch{return n}}function R(n){let s=(n||"").trim(),e=A[s];return e?`background:${e.bg};color:${e.fg}`:""}function O(n){let s=(n||"").trim(),e=A[s];return e?e.bg:"var(--primary-color)"}function $({dobj:n,show_date:s,show_footer_hints:e,dense:a}){let c=n.date?M(n.date):"",l=Array.isArray(n.lessons)?n.lessons:[],i=l.length?l.map(o=>{let r=!!o.isSubstitution,f=r&&o.info||"";return`
          <div class="lesson" style="--accent: ${O(o.subject)}">
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
            ${r&&f?`<div class="substitution-info">${f}</div>`:""}
          </div>`}).join(""):"",d=S(n.hints),u=o=>{let r=(o||"").toLowerCase();return r.includes("gesperrt")||r.includes("achtung")||r.includes("warnung")?"warning":r.includes("klassenarbeit")||r.includes("pr\xFCfung")?"info":""},t=e&&d&&d.length?`
        <div class="daily-notes">
          ${a?"":'<div class="notes-title"><div class="notes-icon">i</div>T\xE4gliche Hinweise</div>'}
          <div class="notes-list">
            ${d.map(o=>`<div class="note-item ${u(o)}">${o}</div>`).join("")}
          </div>
        </div>`:"";return`
        <div class="school-schedule-card ${a?"dense":""}">
          <div class="header">
            <div class="day-title">${n.name||(n.date?p(n.date)?.toLocaleDateString(void 0,{weekday:"long"}):"")}</div>
            ${s?`<div class="date">${c}</div>`:""}
            ${n.updated_at?`<div class="date updated-date" title="Letzte Aktualisierung">Stand: ${n.updated_at}</div>`:""}
          </div>
          <div class="lessons-container">${i}</div>
          ${t}
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
  margin-bottom: 20px;
  border-bottom: 1px solid var(--divider-color);
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
.school-schedule-card.dense .day-title {
  margin-bottom: 0;
}
.school-schedule-card.dense .updated-date {
  margin-bottom: 0;
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
`;var k=class extends HTMLElement{setConfig(s){this._config={..._,...s},this._root||(this._root=this.attachShadow({mode:"open"}),this._card=document.createElement("ha-card"),this._style=document.createElement("style"),this._container=document.createElement("div"),this._container.className="container",this._card.appendChild(this._style),this._card.appendChild(this._container),this._root.appendChild(this._card)),this._hass||(this._style.textContent=L,this._container.innerHTML=`<div class="school-schedule-card"><div class="header"><div class="day-title">${this._config.title||"Stundenplan"}</div><div class="date">Wird geladen \u2026</div></div></div>`),this._lastDataSig=void 0,this._maybeRender()}set hass(s){this._hass=s,this._maybeRender()}_getDataSignature(){let s=this._config||_,e={title:s.title,show_date:s.show_date,show_footer_hints:s.show_footer_hints,entity:s.entity?String(s.entity):void 0,has_inline_schedule:!!s.schedule,courses:Array.isArray(s.courses)?s.courses.map(c=>String(c).toLowerCase().trim()):void 0,hide_subjects:Array.isArray(s.hide_subjects)?s.hide_subjects.map(c=>String(c).toLowerCase().trim()):void 0},a=this._parseData();return JSON.stringify({cfg:e,days:a})}_maybeRender(){let s=this._getDataSignature();if(s===this._lastDataSig)return;this._lastDataSig=s;let e=this._container?this._container.querySelector(".grid"):null,a=e?e.scrollLeft:0;this._render();let c=this._container?this._container.querySelector(".grid"):null;if(c&&a)try{c.scrollLeft=a}catch{}}_parseData(){let s=this._config||{},e=l=>{if(!Array.isArray(l))return[];let i=Array.isArray(s.courses)?s.courses.map(t=>String(t).toLowerCase().trim()).filter(Boolean):null;if(!i||i.length===0)return l;let d=t=>{let o=String(t.subject||""),r=String(t.info||"");return r&&(r.trim().split(/\s+/)[0]||"")||o},u=t=>i.includes(String(t||"").toLowerCase().trim());return l.map(t=>({...t,lessons:Array.isArray(t.lessons)?t.lessons.filter(o=>!o.isCourse||u(d(o))):[]}))},a=l=>{if(!Array.isArray(l))return[];let i=Array.isArray(s.hide_subjects)?s.hide_subjects.map(t=>String(t).toLowerCase().trim()).filter(Boolean):null;if(!i||i.length===0)return l;let d=t=>{let o=String(t.subject||"");return o&&o!=="---"?o:String(t.info||"").trim().split(/\s+/)[0]||""||o},u=t=>i.includes(String(t||"").toLowerCase().trim());return l.map(t=>({...t,lessons:Array.isArray(t.lessons)?t.lessons.filter(o=>!u(d(o))):[]}))};if(s.schedule&&Array.isArray(s.schedule.days))return a(e(C(s.schedule)));let c=s.entity;if(this._hass&&c&&this._hass.states&&this._hass.states[c]){let i=this._hass.states[c].attributes||{};if(Array.isArray(i.days))return a(e(C(i)))}return[]}_render(){if(!this._root)return;let s=this._config||_,{show_date:e,show_footer_hints:a,view:c,tomorrow_after:l,dense:i}=s;this._style.textContent=L;let d=this._parseData(),u;if((c||"week")==="day"){let o=w=>{let m=String(w||"").match(/^(\d{1,2}):(\d{2})$/),g=new Date;if(!m)return new Date(g.getFullYear(),g.getMonth(),g.getDate(),23,59,59);let y=Math.max(0,Math.min(23,parseInt(m[1],10))),T=Math.max(0,Math.min(59,parseInt(m[2],10)));return new Date(g.getFullYear(),g.getMonth(),g.getDate(),y,T,0)},r=new Date,f=o(l),h=new Date(r.getFullYear(),r.getMonth(),r.getDate()),b=(h.getDay()+6)%7,x;b===5||b===6||b===4&&r>=f?x=new Date(h.getTime()+(7-b)*864e5):r>=f?x=new Date(h.getTime()+864e5):x=h,u=((w,m)=>w.find(g=>{if(!g.date)return!1;let y=p(g.date);return!y||isNaN(y.getTime())?!1:y.getFullYear()===m.getFullYear()&&y.getMonth()===m.getMonth()&&y.getDate()===m.getDate()}))(d,x),u||(u={name:x.toLocaleDateString(void 0,{weekday:"long"}),date:D(x),lessons:[],hints:[]})}else{let o=f=>$({dobj:f,show_date:e,show_footer_hints:a,dense:i}),r=`<div class="grid">${d.map(o).join("")}</div>`;this._container.innerHTML=`${r}`;return}let t=$({dobj:u,show_date:e,show_footer_hints:a,dense:i});this._container.innerHTML=`${t}`}};window.customCards||(window.customCards=[]);window.customCards.push({type:v,name:"School Schedule Card",description:"Moderne, responsive Stundenplan-Karte f\xFCr Home Assistant."});customElements.get(v)||customElements.define(v,k);
