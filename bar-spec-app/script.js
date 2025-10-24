
// Simple language toggle (EN/JP)
function setLang(lang){
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-en],[data-jp]').forEach(el=>{
    el.textContent = (lang==='jp') ? el.getAttribute('data-jp') : el.getAttribute('data-en');
  });
  document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('active', b.dataset.set===lang));
}

function initLang(){
  const saved = localStorage.getItem('lang') || 'jp';
  setLang(saved);
}

document.addEventListener('DOMContentLoaded', initLang);

// Tabbar active state
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('footer.tabbar a').forEach(a=>{
    const href = a.getAttribute('href');
    if((path==='' && href==='index.html') || href===path){ a.classList.add('active'); }
  });
})();
