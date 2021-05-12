"use strict";
window.onload = function () {
    const parallax = document.querySelector(".parallax");
    if (parallax) {
        const content = document.querySelector('.images-parallax__container');
        const clouds = document.querySelector('.images-parallax__clouds');
        const mountains = document.querySelector('.images-parallax__mountains');
        const gradient = document.querySelector('.images-parallax__gradient');
        const human = document.querySelector('.images-parallax__human');
        const forClouds = 40;
        const forMountains = 20;
        const forGradient = 15;
        const forHuman = 8;
        const speed = 0.05;
        let positionX = 0;
        let positionY = 0;
        let coordXprocent = 0;
        let coordYprocent = 0;
        function setMouseParallaxStyle() {
            console.log(1);
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;
            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);
            console.log(positionX, positionY);
            clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${positionY / forClouds}%);`;
            mountains.style.cssText = `transform: translate(${positionX / forMountains}%, ${positionY / forMountains}%);`;
            gradient.style.cssText = `transform: translate(${positionX / forGradient}%, ${positionY / forGradient}%);`;
            human.style.cssText = `transform: translate(${positionX / forHuman}%, ${positionY / forHuman}%);`;
            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();
        parallax.addEventListener("mousemove", function (e) {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;
            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });
        let thresholdSets = [];
        for (let i = 0; i <= 1.0; i += 0.005) {
            thresholdSets.push(i);
        }
        const callback = function (entries, observer) {
            const scrollTopProcent = (window.pageYOffset) / (parallax.offsetHeight) * 100;
            setParallaxItemsStyle(scrollTopProcent);
        };
        const observer = new IntersectionObserver(callback, {
            threshold: thresholdSets
        });
        observer.observe(document.querySelector('.content'));
        observer.observe(document.querySelector('.eclipse'));
        function setParallaxItemsStyle(scrollTopProcent) {
            content.style.cssText = `transform: translate(0%, ${scrollTopProcent / 2}%)`;
            clouds.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 0.55}%)`;
            mountains.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 0.65}%)`;
            human.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 0.8}%)`;
        }
    }
};
