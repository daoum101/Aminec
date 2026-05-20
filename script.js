const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
},{threshold:.14});
reveals.forEach(el=>io.observe(el));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (e)=>{
  if(!glow) return;
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

function sendWhatsApp(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const car = document.getElementById('car').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();
  const phone = '32487918730';
  const text = `Bonjour Amine Carrosserie, je souhaite un devis.%0A%0ANom: ${encodeURIComponent(name)}%0AVéhicule: ${encodeURIComponent(car)}%0AService: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}


// === COUNTER FALLBACK GITHUB PAGES / MOBILE ===
function startCountersFallback(){
  document.querySelectorAll('[data-count]').forEach(function(el){
    if(el.dataset.done === '1') return;
    el.dataset.done = '1';
    var target = Number(el.dataset.count || 0);
    var suffix = target === 98 ? '%' : target === 24 ? 'h' : '+';
    var start = 0;
    var duration = 1200;
    var startTime = performance.now();
    function tick(now){
      var p = Math.min((now - startTime) / duration, 1);
      var val = Math.round(start + (target - start) * p);
      el.textContent = val + suffix;
      el.classList.add('ready');
      if(p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}
document.addEventListener('DOMContentLoaded', function(){
  setTimeout(startCountersFallback, 500);
});
window.addEventListener('scroll', startCountersFallback, {once:true});
setTimeout(startCountersFallback, 1800);
setTimeout(function(){
  var l = document.querySelector('.loader');
  if(l){ l.classList.add('hide'); l.style.display='none'; }
}, 1600);


// ===== DAMAGE FORM =====
function sendDamageForm(e){
  e.preventDefault();

  const name = document.getElementById('damageName').value;
  const car = document.getElementById('damageCar').value;
  const msg = document.getElementById('damageMessage').value;

  const text =
`Bonjour Amine Carrosserie,

Je souhaite recevoir un devis gratuit.

Nom: ${name}
Véhicule: ${car}

Problème:
${msg}

Je vais envoyer les photos des dégâts.`;

  window.open(
    `https://wa.me/32487918730?text=${encodeURIComponent(text)}`,
    '_blank'
  );
}

// ===== MOUSE LIGHT EFFECT =====
document.addEventListener('mousemove', (e)=>{
  document.documentElement.style.setProperty(
    '--mouse-x',
    e.clientX + 'px'
  );

  document.documentElement.style.setProperty(
    '--mouse-y',
    e.clientY + 'px'
  );
});


// ===== REAL MULTILANGUAGE =====
const translations = {
  fr:{
    services:"SERVICES",
    gallery:"RÉALISATIONS",
    contact:"CONTACT"
  },
  nl:{
    services:"DIENSTEN",
    gallery:"REALISATIES",
    contact:"CONTACT"
  },
  en:{
    services:"SERVICES",
    gallery:"PROJECTS",
    contact:"CONTACT"
  }
};

function setLang(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang] && translations[lang][key]){
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-switcher button').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('amine-lang', lang);
}

document.querySelectorAll('.lang-switcher button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    setLang(btn.dataset.lang);
  });
});

setLang(localStorage.getItem('amine-lang') || 'fr');

// ===== LIGHT FOLLOW =====
document.addEventListener('mousemove',(e)=>{
  document.documentElement.style.setProperty('--mx', e.clientX + 'px');
  document.documentElement.style.setProperty('--my', e.clientY + 'px');

  // sparks
  if(Math.random() > 0.72){
    const s = document.createElement('div');
    s.className = 'spark';
    s.style.left = e.clientX + 'px';
    s.style.top = e.clientY + 'px';
    document.body.appendChild(s);

    setTimeout(()=>s.remove(),900);
  }
});

// ===== REAL SMOKE =====
for(let i=0;i<2;i++){
  const smoke = document.createElement('div');
  smoke.className = 'smoke-real';
  smoke.style.left = (i * 55) + 'vw';
  smoke.style.top = (20 + i * 25) + 'vh';
  smoke.style.animationDelay = (i * 2) + 's';
  document.body.appendChild(smoke);
}
