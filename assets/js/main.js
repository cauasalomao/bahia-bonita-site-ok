/* ============================================================
   HOTEL BOUTIQUE BAHIA BONITA — main.js v3
   Komplexa Hotéis
   ============================================================ */

const WEBHOOK_URL = '';  // TODO: definir endpoint webhook Bahia Bonita
const HOTEL_NAME  = 'Hotel Boutique Bahia Bonita';
const WA_NUMBER   = '5573988017764';

// ── dataLayer GTM ──
window.dataLayer = window.dataLayer || [];
function pushLead(tipo) {
  window.dataLayer.push({
    event:      'gerar_lead',
    lead_tipo:  tipo,
    pagina:     document.title,
    url:        location.href
  });
}

// ── WEBHOOK ──
async function sendToWebhook(payload) {
  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        hotel: HOTEL_NAME,
        origem_pagina: document.title,
        url: location.href,
        timestamp: new Date().toISOString(),
        ...payload
      })
    });
  } catch(e) { console.warn('Webhook:', e); }
}

// ── HEADER SCROLL ──
const hdr = document.getElementById('hdr');
if (hdr && hdr.classList.contains('hero-mode')) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) { hdr.classList.add('solid'); hdr.classList.remove('hero-mode'); }
    else { hdr.classList.remove('solid'); hdr.classList.add('hero-mode'); }
  }, { passive: true });
}

// ── MOBILE MENU ──
const ham = document.getElementById('ham');
const mob = document.getElementById('mobnav');
function openMob()  { mob?.classList.add('open'); ham?.classList.add('open'); document.body.style.overflow='hidden'; ham?.setAttribute('aria-expanded','true'); }
function closeMob() { mob?.classList.remove('open'); ham?.classList.remove('open'); document.body.style.overflow=''; ham?.setAttribute('aria-expanded','false'); }
ham?.addEventListener('click', () => mob?.classList.contains('open') ? closeMob() : openMob());

// ── MOBILE DROPDOWN SUBMENUS ──
document.querySelectorAll('.mob-dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();
    toggle.classList.toggle('open');
    const sub = toggle.nextElementSibling;
    if (sub) sub.classList.toggle('open');
  });
});

// ── LAZY LOAD ──
const imgObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('loaded'); imgObs.unobserve(e.target); } });
}, { rootMargin: '200px' });
document.querySelectorAll('img').forEach(img => {
  if (img.complete && img.naturalWidth > 0) img.classList.add('loaded');
  else {
    img.addEventListener('load',  () => img.classList.add('loaded'), {once:true});
    img.addEventListener('error', () => img.classList.add('loaded'), {once:true});
    imgObs.observe(img);
  }
});


// ── COOKIE BANNER ──
const ckBanner = document.getElementById('cookieBanner');
if (ckBanner && !localStorage.getItem('ck_status')) ckBanner.classList.add('show');
function acceptCookies()  { localStorage.setItem('ck_status','accepted'); if(ckBanner) ckBanner.classList.remove('show'); }
function declineCookies() { localStorage.setItem('ck_status','declined'); if(ckBanner) ckBanner.classList.remove('show'); }

// ── FILTRO QUARTOS ──
function filterRooms(type, btn) {
  document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#roomsGrid .rc').forEach(rc => {
    rc.style.display = (type==='all' || rc.dataset.type===type) ? '' : 'none';
  });
}

// ── FILTRO GALERIA ──
function filterGal(cat, btn) {
  document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.gi').forEach(item => {
    item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
  });
}

// ── LIGHTBOX ──
let lbCur = 0; const LB_SRCS = [];
function openLB(i) {
  lbCur=i; const lbImg=document.getElementById('lbImg'); const lbCnt=document.getElementById('lbCnt');
  if(!lbImg) return;
  lbImg.src=LB_SRCS[i]||''; if(lbCnt) lbCnt.textContent=(i+1)+' / '+LB_SRCS.length;
  document.getElementById('lb')?.classList.add('open'); document.body.style.overflow='hidden';
}
function closeLB() { document.getElementById('lb')?.classList.remove('open'); document.body.style.overflow=''; }
function navLB(d) {
  lbCur=(lbCur+d+LB_SRCS.length)%LB_SRCS.length;
  document.getElementById('lbImg').src=LB_SRCS[lbCur]||'';
  document.getElementById('lbCnt').textContent=(lbCur+1)+' / '+LB_SRCS.length;
}
document.getElementById('lb')?.addEventListener('click', e => { if(e.target===document.getElementById('lb')) closeLB(); });
document.addEventListener('keydown', e => {
  if(!document.getElementById('lb')?.classList.contains('open')) return;
  if(e.key==='Escape') closeLB(); if(e.key==='ArrowLeft') navLB(-1); if(e.key==='ArrowRight') navLB(1);
});

// ── GALERIA DA PROPRIEDADE (popup por casa/suíte) ──
function ensureLB() {
  if (document.getElementById('lb')) return;
  const lb = document.createElement('div');
  lb.className = 'lb';
  lb.id = 'lb';
  lb.innerHTML =
    '<button class="lb-close" onclick="closeLB()">&#215;</button>' +
    '<button class="lb-nav lb-prev" onclick="navLB(-1)">&#8249;</button>' +
    '<img class="lb-img" id="lbImg" src="" alt="">' +
    '<button class="lb-nav lb-next" onclick="navLB(1)">&#8250;</button>' +
    '<div class="lb-cnt" id="lbCnt"></div>';
  document.body.appendChild(lb);
  lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
}
function openPropGallery(folder) {
  ensureLB();
  const seen = new Set();
  const srcs = [];
  document.querySelectorAll('img[src*="/assets/img/' + folder + '/"]').forEach(img => {
    const s = img.getAttribute('src');
    if (!seen.has(s)) { seen.add(s); srcs.push(s); }
  });
  srcs.sort((a, b) => {
    const ma = a.match(/(\d+)\.jpg$/i), mb = b.match(/(\d+)\.jpg$/i);
    return (ma ? parseInt(ma[1], 10) : 999) - (mb ? parseInt(mb[1], 10) : 999);
  });
  if (!srcs.length) return;
  LB_SRCS.length = 0;
  srcs.forEach(s => LB_SRCS.push(s));
  openLB(0);
}

// ── FORMULÁRIO CONTATO ──
async function submitContact(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));

  // GTM
  pushLead('formulario_contato');

  await sendToWebhook({ tipo: 'contato', ...data });
  form.reset();
  document.getElementById('contactOk')?.classList.add('show');
}

// ── TÍTULO DA ABA ao sair da página ──
const tituloOriginal = document.title;
document.addEventListener('visibilitychange', () => {
  document.title = document.hidden
    ? '👋 Volte — Bahia Bonita te espera!'
    : tituloOriginal;
});

// ── POPUP DE RESERVA (Omnibees) ──
const OMNIBEES_CHAIN = '3604';
const OMNIBEES_HOTEL = '6588';

function ensureReservaModal() {
  if (document.getElementById('rvModal')) return;
  const wrap = document.createElement('div');
  wrap.className = 'rv-modal';
  wrap.id = 'rvModal';
  wrap.innerHTML =
    '<div class="rv-card" role="dialog" aria-modal="true" aria-labelledby="rv-title">' +
      '<button type="button" class="rv-close" aria-label="Fechar" onclick="closeReservaModal()">&times;</button>' +
      '<div class="rv-head">' +
        '<p class="overline">Reserva</p>' +
        '<h3 id="rv-title">Pesquisar disponibilidade</h3>' +
        '<div class="divider cx"></div>' +
      '</div>' +
      '<div class="rv-body">' +
        '<div class="rv-dates">' +
          '<label class="rv-field"><span>Check-in</span><input type="date" id="rv_in"></label>' +
          '<label class="rv-field"><span>Check-out</span><input type="date" id="rv_out"></label>' +
        '</div>' +
        '<div class="rv-count">' +
          '<div class="rv-count-lbl"><div class="rv-count-t">Adultos</div><div class="rv-count-s">Acima de 12 anos</div></div>' +
          '<div class="rv-count-btns">' +
            '<button type="button" onclick="rvStep(\'ad\',-1)" aria-label="Menos adultos">&minus;</button>' +
            '<span id="rv_ad">2</span>' +
            '<button type="button" onclick="rvStep(\'ad\',1)" aria-label="Mais adultos">+</button>' +
          '</div>' +
        '</div>' +
        '<div class="rv-count">' +
          '<div class="rv-count-lbl"><div class="rv-count-t">Crianças</div><div class="rv-count-s">0 a 12 anos</div></div>' +
          '<div class="rv-count-btns">' +
            '<button type="button" onclick="rvStep(\'ch\',-1)" aria-label="Menos crianças">&minus;</button>' +
            '<span id="rv_ch">0</span>' +
            '<button type="button" onclick="rvStep(\'ch\',1)" aria-label="Mais crianças">+</button>' +
          '</div>' +
        '</div>' +
        '<div class="rv-ages" id="rv_ages"></div>' +
        '<button type="button" class="rv-submit" onclick="rvSubmit()">Pesquisar disponibilidade</button>' +
        '<p class="rv-err" id="rv_err"></p>' +
      '</div>' +
    '</div>';
  document.body.appendChild(wrap);
  wrap.addEventListener('click', e => { if (e.target === wrap) closeReservaModal(); });
  const today = new Date().toISOString().split('T')[0];
  const inEl = wrap.querySelector('#rv_in');
  const outEl = wrap.querySelector('#rv_out');
  inEl.min = today;
  outEl.min = today;
  inEl.addEventListener('change', () => {
    outEl.min = inEl.value || today;
    if (outEl.value && outEl.value <= inEl.value) outEl.value = '';
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && wrap.classList.contains('open')) closeReservaModal();
  });
}
function openReservaModal() {
  ensureReservaModal();
  document.getElementById('rvModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeReservaModal() {
  document.getElementById('rvModal')?.classList.remove('open');
  document.body.style.overflow = '';
}
function rvStep(key, delta) {
  const el = document.getElementById(key === 'ad' ? 'rv_ad' : 'rv_ch');
  let v = parseInt(el.textContent, 10) + delta;
  if (key === 'ad') { v = Math.max(1, Math.min(10, v)); }
  else { v = Math.max(0, Math.min(6, v)); rvRenderAges(v); }
  el.textContent = v;
}
function rvRenderAges(n) {
  const box = document.getElementById('rv_ages');
  const prev = [];
  box.querySelectorAll('select').forEach(s => prev.push(s.value));
  box.innerHTML = '';
  for (let i = 0; i < n; i++) {
    const label = document.createElement('label');
    label.className = 'rv-age-field';
    const span = document.createElement('span');
    span.textContent = 'Idade criança ' + (i + 1);
    const sel = document.createElement('select');
    for (let a = 0; a <= 12; a++) {
      const opt = document.createElement('option');
      opt.value = a;
      opt.textContent = a + (a === 1 ? ' ano' : ' anos');
      sel.appendChild(opt);
    }
    sel.value = prev[i] != null ? prev[i] : '3';
    label.appendChild(span);
    label.appendChild(sel);
    box.appendChild(label);
  }
}
function rvFmtDate(iso) {
  const p = iso.split('-');
  return p[2] + p[1] + p[0];
}
function rvSubmit() {
  const err = document.getElementById('rv_err');
  const inEl = document.getElementById('rv_in');
  const outEl = document.getElementById('rv_out');
  err.textContent = '';
  if (!inEl.value || !outEl.value) { err.textContent = 'Selecione as datas de check-in e check-out.'; return; }
  if (outEl.value <= inEl.value) { err.textContent = 'O check-out deve ser posterior ao check-in.'; return; }
  const ad = document.getElementById('rv_ad').textContent;
  const ch = document.getElementById('rv_ch').textContent;
  const ages = Array.from(document.querySelectorAll('#rv_ages select')).map(s => s.value).join(',');
  const url = 'https://book.omnibees.com/hotelresults' +
    '?c=' + OMNIBEES_CHAIN +
    '&q=' + OMNIBEES_HOTEL +
    '&hotel_folder=' +
    '&NRooms=1' +
    '&CheckIn=' + rvFmtDate(inEl.value) +
    '&CheckOut=' + rvFmtDate(outEl.value) +
    '&ad=' + ad +
    '&ch=' + ch +
    '&ag=' + ages +
    '&Code=' +
    '&group_code=' +
    '&loyalty_code=' +
    '&lang=pt-BR' +
    '&currencyId=16' +
    '&version=4';
  pushLead('motor_reservas');
  window.open(url, '_blank', 'noopener');
}

// Intercepta qualquer CTA "Reservar" e abre o popup (href wa.me continua como fallback)
document.addEventListener('click', function(e) {
  const el = e.target.closest('a, button');
  if (!el) return;
  const txt = (el.textContent || '').trim().toLowerCase();
  if (txt !== 'reservar agora' && txt !== 'reservar estadia') return;
  if (el.closest('.wa-btn') || el.closest('.ft-social')) return;
  e.preventDefault();
  openReservaModal();
});

// ── MODAL DE VÍDEO (YouTube) ──
function ensureVideoModal() {
  if (document.getElementById('videoModal')) return;
  const wrap = document.createElement('div');
  wrap.className = 'video-modal';
  wrap.id = 'videoModal';
  wrap.innerHTML =
    '<button class="video-modal-close" aria-label="Fechar" onclick="closeVideo()">&times;</button>' +
    '<div class="video-modal-content" id="videoContent"></div>';
  document.body.appendChild(wrap);
  wrap.addEventListener('click', e => { if (e.target === wrap) closeVideo(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && wrap.classList.contains('open')) closeVideo();
  });
}
function openVideo(ytId) {
  ensureVideoModal();
  document.getElementById('videoContent').innerHTML =
    '<iframe src="https://www.youtube.com/embed/' + ytId + '?autoplay=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>';
  document.getElementById('videoModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeVideo() {
  const m = document.getElementById('videoModal');
  if (m) { m.classList.remove('open'); document.getElementById('videoContent').innerHTML = ''; }
  document.body.style.overflow = '';
}
