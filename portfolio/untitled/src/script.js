// basic animated entry + parallax using GSAP + ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// set year
document.getElementById('year').textContent = new Date().getFullYear();

// HERO: intro reveal
gsap.from('.hero-title', { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out' });
gsap.from('.hero-sub', { y: 18, opacity: 0, duration: 0.9, delay: 0.12, ease: 'power3.out' });
gsap.from('.cta .btn', { y: 10, opacity: 0, duration: 0.9, delay: 0.2, ease: 'power3.out' });

// HERO ART parallax subtle movement
gsap.to('.layer-1', {
  y: -30,
  rotation: -0.6,
  ease: 'none',
  scrollTrigger: { trigger: '.hero', start: 'top top', scrub: 0.6 }
});
gsap.to('.layer-2', {
  y: -55,
  rotation: 0.8,
  ease: 'none',
  scrollTrigger: { trigger: '.hero', start: 'top top', scrub: 0.6 }
});
gsap.to('.layer-3', {
  y: -85,
  rotation: -0.8,
  ease: 'none',
  scrollTrigger: { trigger: '.hero', start: 'top top', scrub: 0.6 }
});

// Grid cards reveal (staggered)
gsap.utils.toArray('.card').forEach((card, i) => {
  gsap.fromTo(card,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: i * 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
});

// small hover depth effect on cards (mouse)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `translateY(${ -4 }px) rotateX(${ -y * 4 }deg) rotateY(${ x * 4 }deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

