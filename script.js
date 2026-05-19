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
