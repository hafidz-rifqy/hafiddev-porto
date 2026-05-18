/* ────────────────────────────────────────────────
   SOCIAL MEDIA DEFINITIONS (icon + colors)
──────────────────────────────────────────────── */
const SOCIAL_META = {
  github:    { label:"GitHub",    icon:"<svg viewBox='0 0 24 24' width='26' height='26' fill='currentColor'><path d='M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z'/></svg>", color:"#e2e8f0", bg:"rgba(226,232,240,0.1)", border:"rgba(226,232,240,0.2)" },
  linkedin:  { label:"LinkedIn",  icon:"<svg viewBox='0 0 24 24' width='26' height='26' fill='#0077b5'><path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/></svg>", color:"#0077b5", bg:"rgba(0,119,181,0.1)", border:"rgba(0,119,181,0.25)" },
  instagram: { label:"Instagram", icon:"<svg viewBox='0 0 24 24' width='26' height='26'><defs><linearGradient id='igG' x1='0%' y1='100%' x2='100%' y2='0%'><stop offset='0%' stop-color='#f09433'/><stop offset='25%' stop-color='#e6683c'/><stop offset='50%' stop-color='#dc2743'/><stop offset='75%' stop-color='#cc2366'/><stop offset='100%' stop-color='#bc1888'/></linearGradient></defs><path fill='url(#igG)' d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'/></svg>", color:"#e1306c", bg:"rgba(225,48,108,0.1)", border:"rgba(225,48,108,0.25)" },
  twitter:   { label:"Twitter/X", icon:"<svg viewBox='0 0 24 24' width='26' height='26' fill='#e2e8f0'><path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.258 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z'/></svg>", color:"#e2e8f0", bg:"rgba(226,232,240,0.08)", border:"rgba(226,232,240,0.18)" },
  youtube:   { label:"YouTube",   icon:"<svg viewBox='0 0 24 24' width='26' height='26' fill='#ff0000'><path d='M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/></svg>", color:"#ff0000", bg:"rgba(255,0,0,0.08)", border:"rgba(255,0,0,0.22)" },
  tiktok:    { label:"TikTok",    icon:"<svg viewBox='0 0 24 24' width='26' height='26' fill='#f1f5f9'><path d='M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.87a8.18 8.18 0 004.78 1.52V6.96a4.85 4.85 0 01-1.01-.27z'/></svg>", color:"#f1f5f9", bg:"rgba(241,245,249,0.08)", border:"rgba(241,245,249,0.18)" },
};

/* ────────────────────────────────────────────────
   LOADING SCREEN
──────────────────────────────────────────────── */
const LOAD_LANGS = [
  { name:"HTML5",         color:"#f97316", bar:"linear-gradient(90deg,#f9731666,#f97316)" },
  { name:"CSS3",          color:"#38bdf8", bar:"linear-gradient(90deg,#38bdf866,#38bdf8)" },
  { name:"JavaScript",    color:"#facc15", bar:"linear-gradient(90deg,#facc1566,#facc15)" },
  { name:"Security",      color:"#00d4ff", bar:"linear-gradient(90deg,#00d4ff66,#00d4ff)" },
  { name:"Encryption",    color:"#a855f7", bar:"linear-gradient(90deg,#a855f766,#a855f7)" },
  { name:"Firewall",      color:"#4ade80", bar:"linear-gradient(90deg,#4ade8066,#4ade80)" },
  { name:"System Sync",   color:"#fb7185", bar:"linear-gradient(90deg,#fb718566,#fb7185)" },
];

const LOAD_MSGS = [
  "Initializing core architecture...",
  "Applying UI stylesheets...",
  "Executing JavaScript logic...",
  "Establishing secure connection...",
  "Encrypting data transmission...",
  "Validating security firewalls...",
  "Syncing to distributed nodes...",
  "Access granted! System ready. \u{1F680}",
];

function initLoading() {
  document.getElementById('ld-site-name').textContent = CONFIG.siteTitle;
  document.getElementById('ld-subtitle').textContent  = CONFIG.name + " — Portfolio System";
  const logoEl = document.getElementById('ld-logo-icon');
  if (CONFIG.logo.startsWith('http')) {
    logoEl.innerHTML = `<img src="${CONFIG.logo}" style="width:40px;height:40px;border-radius:50%;object-fit:cover;">`;
  } else {
    logoEl.textContent = CONFIG.logo;
  }

  const stepsEl = document.getElementById('ld-steps');
  stepsEl.innerHTML = LOAD_LANGS.map((l,i) => `
    <div class="ld-step" id="ldstep-${i}">
      <div class="ld-step-lang" id="ldlang-${i}">${l.name}</div>
      <div class="ld-step-track"><div class="ld-step-bar" id="ldbar-${i}" style="background:${l.bar};box-shadow:0 0 8px ${l.color}66;"></div></div>
      <div class="ld-step-pct" id="ldpct-${i}">0%</div>
    </div>`).join('');

  let current = 0;
  function runStep(idx) {
    if (idx >= LOAD_LANGS.length) {
      document.getElementById('ld-status').textContent = LOAD_MSGS[LOAD_MSGS.length-1];
      setTimeout(() => {
        document.getElementById('loading').classList.add('hide');
        setTimeout(() => { document.getElementById('loading').style.display='none'; }, 800);
        initSite();
      }, 600);
      return;
    }
    document.getElementById('ld-status').textContent = LOAD_MSGS[idx] || "";
    document.getElementById('ldlang-'+idx).classList.add('active');
    document.getElementById('ldpct-'+idx).classList.add('active');
    let pct = 0;
    const interval = setInterval(() => {
      pct += Math.random() * 8 + 4;
      if (pct >= 100) {
        pct = 100;
        clearInterval(interval);
        document.getElementById('ldbar-'+idx).style.width = '100%';
        document.getElementById('ldpct-'+idx).textContent = '100%';
        document.getElementById('ldlang-'+idx).classList.remove('active');
        document.getElementById('ldlang-'+idx).classList.add('done');
        document.getElementById('ldpct-'+idx).classList.remove('active');
        document.getElementById('ldpct-'+idx).classList.add('done');
        setTimeout(() => runStep(idx+1), 260);
        return;
      }
      pct = Math.min(Math.round(pct), 100);
      document.getElementById('ldbar-'+idx).style.width = pct+'%';
      document.getElementById('ldpct-'+idx).textContent = pct+'%';
    }, 55);
  }
  runStep(0);
}

/* ────────────────────────────────────────────────
   SITE INIT \u2014 runs after loading
──────────────────────────────────────────────── */
function initSite() {
  initTheme();
  applyConfig();
  renderAll();
  initParticles();
  initMouseGlow();
  initNavbar();
  initScrollFade();
  initTyping();
  initSkillObserver();
  initCounters();
}

/* ────────────────────────────────────────────────
   APPLY CONFIG TO STATIC ELEMENTS
──────────────────────────────────────────────── */
function applyConfig() {
  ['nav-logo-icon','footer-logo-icon'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (CONFIG.logo.startsWith('http')) {
      el.innerHTML = `<img src="${CONFIG.logo}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;">`;
    } else { el.textContent = CONFIG.logo; }
  });
  ['nav-site-name','footer-site-name'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = CONFIG.siteTitle;
  });

  const parts = CONFIG.name.split(' ');
  const firstEl = document.getElementById('hero-first');
  const lastEl  = document.getElementById('hero-last');
  if (firstEl) firstEl.textContent = parts[0] + ' ';
  if (lastEl)  lastEl.textContent  = parts.slice(1).join(' ');
  const tagEl = document.getElementById('hero-tagline');
  if (tagEl) tagEl.textContent = CONFIG.tagline;

  const copyEl = document.getElementById('footer-copy');
  if (copyEl) copyEl.innerHTML = `\u00A9 ${new Date().getFullYear()} ${CONFIG.name} \u00B7 platform portofolio by hafiddev`;

  const heroContactBtn = document.getElementById('hero-contact-btn');
  if (heroContactBtn) {
    heroContactBtn.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.waMsg)}`;
  }

  document.title = CONFIG.name + ' \u2014 Portfolio';
}

/* ────────────────────────────────────────────────
   RENDER ALL SECTIONS
──────────────────────────────────────────────── */
function renderAll() {
  renderAbout();
  renderSkills();
  renderProjects();
  renderExperience();
  renderCerts();
  renderSocial();
  renderContact();
  renderFooter();
}

function renderAbout() {
  const tech = ["HTML5","CSS3","JavaScript","React","Node.js","PHP","MySQL","Golang","Git","AWS","Firebase","github","Figma","Linux"];
  const techEl = document.getElementById('about-tech');
  if (techEl) techEl.innerHTML = tech.map(t =>
    `<span class="tag" style="background:rgba(0,212,255,0.08);border:1px solid rgba(0,212,255,0.22);color:#00d4ff;">${t}</span>`).join('');

  const sgEl = document.getElementById('stats-grid');
  if (!sgEl) return;
  sgEl.innerHTML = CONFIG.stats.map(s => `
    <div class="stat-card">
      <div class="stat-val grad-text" data-val="${s.value}" data-suf="${s.suffix}">0${s.suffix}</div>
      <div class="stat-lbl">${s.label}</div>
    </div>`).join('');
}

function renderSkills() {
  const el = document.getElementById('skills-list');
  if (!el) return;
  el.innerHTML = CONFIG.skills.map((s,i) => `
    <div class="skill-row">
      <div class="skill-meta">
        <span class="skill-name">${s.name}</span>
        <span class="skill-pct" style="color:${s.color};">${s.level}%</span>
      </div>
      <div class="skill-track">
        <div class="skill-bar" id="sbar-${i}" data-level="${s.level}"
          style="background:linear-gradient(90deg,${s.color}66,${s.color});box-shadow:0 0 10px ${s.color}66;">
        </div>
      </div>
    </div>`).join('');
}

function renderProjects() {
  const el = document.getElementById('proj-grid');
  if (!el) return;
  el.innerHTML = CONFIG.projects.map(p => `
    <div class="proj-card" onmouseover="this.style.borderColor='${p.color}55';this.style.boxShadow='0 20px 60px ${p.color}1a'"
         onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.boxShadow='none'">
      <div class="proj-shimmer"></div>
      <div class="proj-top">
        <div class="proj-icon" style="background:${p.color}22;border:1px solid ${p.color}44;color:${p.color};">${p.icon}</div>
        <span class="proj-year">${p.year}</span>
      </div>
      <div class="proj-title">${p.title}</div>
      <div class="proj-desc">${p.desc}</div>
      <div class="proj-tags">${p.tags.map(t=>`<span class="tag" style="background:${p.color}18;border:1px solid ${p.color}33;color:${p.color};">${t}</span>`).join('')}</div>
      <a href="${p.link}" target="_blank" class="proj-link" style="color:${p.color};">Lihat Project \u2192</a>
    </div>`).join('');
}

function renderExperience() {
  const el = document.getElementById('exp-list');
  if (!el) return;
  const colors = ["#00d4ff","#a855f7","#00d4ff"];
  let html = '<div class="exp-line"></div>';
  CONFIG.experience.forEach((e,i) => {
    const c = colors[i % colors.length];
    html += `
      <div class="exp-item">
        <div class="exp-dot" style="background:${c};box-shadow:0 0 14px ${c}88;"></div>
        <div class="exp-card">
          <div class="exp-header">
            <div>
              <div class="exp-role">${e.role}</div>
              <div class="exp-company" style="color:${c};">${e.company}</div>
            </div>
            <span class="exp-period">${e.period}</span>
          </div>
          <div class="exp-desc">${e.desc}</div>
        </div>
      </div>`;
  });
  el.innerHTML = html;
}

function renderCerts() {
  const el = document.getElementById('cert-grid');
  if (!el) return;
  el.innerHTML = CONFIG.certs.map(c => `
    <div class="cert-card" onmouseover="this.style.borderColor='${c.color}44'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
      <div class="cert-icon" style="background:${c.color}22;border:1px solid ${c.color}44;">\u{1F3C6}</div>
      <div class="cert-name">${c.name}</div>
      <div class="cert-issuer">${c.issuer}</div>
      <span class="cert-year" style="background:${c.color}18;border:1px solid ${c.color}44;color:${c.color};">${c.year}</span>
    </div>`).join('');
}

function renderSocial() {
  const sg = document.getElementById('social-grid');
  if (sg) {
    sg.innerHTML = Object.entries(CONFIG.social).filter(([,url]) => url).map(([key, url]) => {
      const m = SOCIAL_META[key];
      if (!m) return '';
      return `<a class="social-card" href="${url}" target="_blank" rel="noopener"
          onmouseover="this.querySelector('.social-icon').style.boxShadow='0 0 24px ${m.color}66'"
          onmouseout="this.querySelector('.social-icon').style.boxShadow='none'"
          style="border-color:rgba(255,255,255,0.08);"
          onmouseenter="this.style.borderColor='${m.border}';this.style.background='${m.bg}'"
          onmouseleave="this.style.borderColor='rgba(255,255,255,0.08)';this.style.background='rgba(255,255,255,0.04)'">
        <div class="social-icon" style="background:${m.bg};border:1px solid ${m.border};">${m.icon}</div>
        <div class="social-name">${m.label}</div>
        <div class="social-handle">@${CONFIG.name.toLowerCase().replace(/\s/g,'')}</div>
      </a>`;
    }).join('');
  }

  const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.waMsg)}`;
  const wb = document.getElementById('wa-banner');
  if (wb) wb.innerHTML = `
    <div class="wa-left">
      <div class="wa-circle">\u{1F4F1}</div>
      <div class="wa-text">
        <h3>Chat via WhatsApp</h3>
        <p>Respon cepat dalam 1\u20132 jam kerja \u00B7 +${CONFIG.whatsapp}</p>
      </div>
    </div>
    <a class="wa-btn" href="${waUrl}" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      Chat Sekarang
    </a>`;
}

function renderContact() {
  const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.waMsg)}`;
  const mailUrl = `mailto:${CONFIG.email}`;
  const cd = document.getElementById('contact-details');
  if (cd) cd.innerHTML = `
    <a class="contact-detail" href="${mailUrl}">
      <div class="contact-detail-icon">\u2709\uFE0F</div>
      <div class="contact-detail-text"><span>Email</span><strong>${CONFIG.email}</strong></div>
    </a>
    <a class="contact-detail" href="${waUrl}" target="_blank" rel="noopener">
      <div class="contact-detail-icon">\u{1F4F1}</div>
      <div class="contact-detail-text"><span>WhatsApp</span><strong>+${CONFIG.whatsapp}</strong></div>
    </a>
    ${Object.entries(CONFIG.social).slice(0,3).filter(([,url])=>url).map(([key,url])=>`
    <a class="contact-detail" href="${url}" target="_blank" rel="noopener">
      <div class="contact-detail-icon">${key==='github'?'\u2699\uFE0F':key==='linkedin'?'\u{1F4BC}':'\u{1F310}'}</div>
      <div class="contact-detail-text"><span>${SOCIAL_META[key]?.label||key}</span><strong>${url.replace('https://','')}</strong></div>
    </a>`).join('')}`;
}

function renderFooter() {
  const fs = document.getElementById('footer-social');
  if (!fs) return;
  fs.innerHTML = Object.entries(CONFIG.social).filter(([,url])=>url).map(([key,url])=>
    `<a href="${url}" target="_blank" rel="noopener">${SOCIAL_META[key]?.label||key}</a>`).join('');
}

/* ────────────────────────────────────────────────
   TYPING ANIMATION
──────────────────────────────────────────────── */
let tyIdx=0, tyTxt='', tyDel=false;
function initTyping(){
  (function step(){
    const full = CONFIG.roles[tyIdx];
    const el   = document.getElementById('typing-text');
    if (!el) return;
    if (!tyDel){
      if(tyTxt.length<full.length){ el.textContent=full.slice(0,++tyTxt.length); setTimeout(step,80); }
      else setTimeout(()=>{ tyDel=true; step(); }, 2000);
    } else {
      if(tyTxt.length>0){ el.textContent=full.slice(0,--tyTxt.length); setTimeout(step,40); }
      else { tyDel=false; tyIdx=(tyIdx+1)%CONFIG.roles.length; step(); }
    }
  })();
}

/* ────────────────────────────────────────────────
   NAVBAR SCROLL + ACTIVE
──────────────────────────────────────────────── */
function initNavbar(){
  const nav = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', ()=>{
    nav.classList.toggle('scrolled', window.scrollY>60);
    const sections = ['hero','about','skills','projects','experience','certificates','social','contact'];
    for(const id of [...sections].reverse()){
      const el = document.getElementById(id);
      if(el && el.getBoundingClientRect().top < window.innerHeight/2){
        links.forEach(l=>{ l.classList.toggle('active', l.getAttribute('href')==='#'+id); });
        break;
      }
    }
  });
}

/* ────────────────────────────────────────────────
   FADE IN ON SCROLL
──────────────────────────────────────────────── */
function initScrollFade(){
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
  },{ threshold:0.07 });
  document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));
}

/* ────────────────────────────────────────────────
   SKILL BARS (IntersectionObserver)
──────────────────────────────────────────────── */
function initSkillObserver(){
  const card = document.getElementById('skills-card');
  if(!card) return;
  let fired=false;
  const obs = new IntersectionObserver(([e])=>{
    if(e.isIntersecting && !fired){
      fired=true;
      CONFIG.skills.forEach((_,i)=>{
        const bar = document.getElementById('sbar-'+i);
        if(bar) setTimeout(()=>bar.style.width=bar.dataset.level+'%', i*110);
      });
      obs.disconnect();
    }
  },{ threshold:0.05 });
  obs.observe(card);
}

/* ────────────────────────────────────────────────
   COUNTER ANIMATION
──────────────────────────────────────────────── */
function initCounters(){
  const counters = document.querySelectorAll('[data-val]');
  if(!counters.length) return;
  let fired=false;
  const obs = new IntersectionObserver(([e])=>{
    if(e.isIntersecting && !fired){
      fired=true;
      counters.forEach(el=>{
        const target=+el.dataset.val, suf=el.dataset.suf||'';
        let v=0, step=Math.max(1,Math.ceil(target/60));
        const iv=setInterval(()=>{
          v=Math.min(v+step,target);
          el.textContent=v.toLocaleString()+suf;
          if(v>=target) clearInterval(iv);
        },25);
      });
    }
  },{ threshold:0.4 });
  obs.observe(counters[0]);
}

/* ────────────────────────────────────────────────
   PARTICLES CANVAS
──────────────────────────────────────────────── */
let particleAnimId = null;
function initParticles(){
  if (particleAnimId) cancelAnimationFrame(particleAnimId);
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let W,H,pts;
  const cs = getComputedStyle(document.documentElement);
  const pr = cs.getPropertyValue('--particle-color-r').trim() || '0';
  const pg = cs.getPropertyValue('--particle-color-g').trim() || '212';
  const pb = cs.getPropertyValue('--particle-color-b').trim() || '255';
  const lr = cs.getPropertyValue('--line-color-r').trim() || '168';
  const lg = cs.getPropertyValue('--line-color-g').trim() || '85';
  const lb = cs.getPropertyValue('--line-color-b').trim() || '247';
  function resize(){ W=canvas.width=window.innerWidth; H=canvas.height=window.innerHeight; }
  function spawn(){ pts=Array.from({length:70},()=>({ x:Math.random()*W, y:Math.random()*H, vx:(Math.random()-.5)*.38, vy:(Math.random()-.5)*.38, r:Math.random()*1.4+.4, a:Math.random()*.35+.08 })); }
  resize(); spawn();
  window.addEventListener('resize',()=>{ resize(); spawn(); });
  (function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0)p.x=W; if(p.x>W)p.x=0; if(p.y<0)p.y=H; if(p.y>H)p.y=0;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(${pr},${pg},${pb},${p.a})`; ctx.fill();
    });
    for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
      const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);
      if(d<110){ ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y);
        ctx.strokeStyle=`rgba(${lr},${lg},${lb},${.14*(1-d/110)})`; ctx.lineWidth=.5; ctx.stroke(); }
    }
    particleAnimId = requestAnimationFrame(draw);
  })();
}

/* ────────────────────────────────────────────────
   MOUSE GLOW (Improved)
──────────────────────────────────────────────── */
function initMouseGlow(){
  const glow = document.getElementById('mouseGlow');
  let mouseX = 0, mouseY = 0;
  let ballX = 0, ballY = 0;
  const speed = 0.15;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    let distX = mouseX - ballX;
    let distY = mouseY - ballY;
    ballX = ballX + (distX * speed);
    ballY = ballY + (distY * speed);
    glow.style.left = ballX + "px";
    glow.style.top = ballY + "px";
    requestAnimationFrame(animate);
  }
  animate();
}

/* ────────────────────────────────────────────────
   THEME TOGGLE (Dark / Light)
──────────────────────────────────────────────── */
function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.add('light');
  }
  updateThemeIcons();
}

function toggleTheme() {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  updateThemeIcons();
  // Re-init particles with new colors
  const canvas = document.getElementById('particles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  initParticles();
}

function updateThemeIcons() {
  const isLight = document.body.classList.contains('light');
  const icon = isLight ? '\u{1F319}' : '\u2600\uFE0F';
  const label = isLight ? 'Dark Mode' : 'Light Mode';
  const el = document.getElementById('theme-icon');
  if (el) el.textContent = icon;
  const mel = document.getElementById('mobile-theme-icon');
  if (mel) mel.textContent = icon;
  const mlbl = document.getElementById('mobile-theme-label');
  if (mlbl) mlbl.textContent = label;
}

/* ────────────────────────────────────────────────
   MOBILE MENU
──────────────────────────────────────────────── */
function toggleMenu(){ document.getElementById('mobile-menu').classList.toggle('open'); }
function closeMenu(){  document.getElementById('mobile-menu').classList.remove('open'); }

/* ────────────────────────────────────────────────
   CONTACT FORM
──────────────────────────────────────────────── */
function submitForm(){
  const name    = document.getElementById('f-name').value.trim();
  const email   = document.getElementById('f-email').value.trim();
  const subject = document.getElementById('f-subject').value.trim();
  const msg     = document.getElementById('f-msg').value.trim();
  if(!name||!email||!msg){ alert('Mohon isi semua field yang wajib diisi.'); return; }
  const btn = document.getElementById('form-submit');
  btn.textContent = 'Mengirim...'; btn.disabled=true;
  const mailBody = `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${msg}`;
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject||'Pesan dari Portfolio')}&body=${encodeURIComponent(mailBody)}`;
  setTimeout(()=>{
    document.getElementById('contact-form-wrap').innerHTML = `
      <div class="form-success">
        <div class="fs-icon">\u2705</div>
        <h3>Pesan Terkirim!</h3>
        <p>Terima kasih, ${name}. Saya akan segera menghubungi Anda melalui email atau WhatsApp.</p>
      </div>`;
  }, 1500);
}

/* ────────────────────────────────────────────────
   SCROLL HELPER
──────────────────────────────────────────────── */
function scrollTo(id){
  const el = document.querySelector(id);
  if(el) {
    const offset = 70;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

/* ────────────────────────────────────────────────
   STORY MODAL
──────────────────────────────────────────────── */
function openDescModal() {
  document.getElementById('descModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeDescModal() {
  document.getElementById('descModal').classList.remove('active');
  document.body.style.overflow = '';
}

/* ────────────────────────────────────────────────
   BOOT
──────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', initLoading);
