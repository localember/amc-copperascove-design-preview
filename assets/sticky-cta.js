(function(){
  var bar=document.getElementById('scta');
  var hero=document.querySelector('main > section.hero, main > section.phero');
  if(!bar||!hero) return;
  document.body.classList.add('has-scta');
  function set(on){bar.classList.toggle('on',on);document.body.classList.toggle('scta-on',on);}
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){var e=es[es.length-1];set(!e.isIntersecting&&e.boundingClientRect.top<0);}).observe(hero);
  }else{
    var chk=function(){set(hero.getBoundingClientRect().bottom<0);};
    window.addEventListener('scroll',chk,{passive:true});chk();
  }
})();
