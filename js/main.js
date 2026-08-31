document.addEventListener('DOMContentLoaded', () => {
  // header scroll state
  const header = document.getElementById('header');
  if(header){
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // mobile menu
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  if(burger && mobileNav){
    burger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));
  }

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal, .reveal-line, .pillar');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.15});
  revealEls.forEach(el => io.observe(el));

  document.querySelectorAll('.reveal').forEach((el,i)=>{
    el.style.transitionDelay = (i % 5) * 0.06 + 's';
  });

  // contact form (static demo)
  const form = document.getElementById('quoteForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.submit-btn');
      const original = btn.textContent;
      btn.textContent = 'Enquiry Sent';
      btn.style.opacity = '0.7';
      setTimeout(() => { btn.textContent = original; btn.style.opacity = '1'; form.reset(); }, 2200);
    });
  }
});
