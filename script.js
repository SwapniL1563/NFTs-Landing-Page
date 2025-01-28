const circle = document.getElementById('circleId');
document.addEventListener('mousemove', (e) => {
  circle.style.left = `${e.clientX}px`;
  circle.style.top = `${e.clientY}px`;
});

const circle1 = document.getElementById('circleId1');
document.addEventListener('mousemove', (e) => {
  circle1.style.left = `${e.clientX}px`;
  circle1.style.top = `${e.clientY}px`;
});

gsap.from(['.nav-logo','.nav-btn','.hero-content p','.hero-spinner','.hero-title'],{
    opacity:0,
    duration:1.5,
    x:200
})

gsap.from(['.hero-profile-img div','.hero-profile-text','.nav-links  li'],{
    opacity:0,
    duration:1.5,
    stagger:.1,
    x:200
})

gsap.from(['.slider-img'],{
    opacity:0,
    duration:1.2,
    stagger:.1,
    x:200
})