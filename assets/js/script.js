function menuToggle(){
    const toggleMenu = document.querySelector('.toggle');
    const section = document.querySelector('section');
    toggleMenu.classList.toggle('active');
    section.classList.toggle('active');
}

TweenMax.from(".title", 1.5, {
    delay: 0.1,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".media ul li", 1, {
    delay: 0.5,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, 0.2);

TweenMax.from(".contact", 1.4, {
    delay: 1,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
});

TweenMax.from(".arrow-right", 1, {
    delay: 0.8,
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut
});

