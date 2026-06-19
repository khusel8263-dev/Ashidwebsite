
(function(){
  function qs(s,ctx){return (ctx||document).querySelector(s)}
  function qsa(s,ctx){return Array.prototype.slice.call((ctx||document).querySelectorAll(s))}
  document.addEventListener('DOMContentLoaded', function(){
    var btn = qs('.navbar-toggler'); var menu = qs('#navbar-collapse-toggle-1');
    if(btn && menu){btn.addEventListener('click', function(){menu.classList.toggle('show')})}
    qsa('a.inner-link, .navbar-nav a[href^="#"]').forEach(function(a){a.addEventListener('click', function(e){var id=a.getAttribute('href'); if(id && id.length>1){var el=qs(id); if(el){e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); if(menu) menu.classList.remove('show')}}})});
    var top = qs('.scroll-top-arrow');
    if(top){window.addEventListener('scroll', function(){top.classList.toggle('show', window.scrollY>350)}); top.addEventListener('click', function(){window.scrollTo({top:0,behavior:'smooth'})})}
    qsa('.wow').forEach(function(el){el.style.opacity='1'});
  });
})();
