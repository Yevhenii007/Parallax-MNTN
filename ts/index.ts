"use strict";

// Чекаємо завантаження контента
window.onload = function () {


  const parallax: HTMLElement = document.querySelector(".parallax");

  if (parallax) {
    const content: HTMLDivElement = document.querySelector('.images-parallax__container');
    const clouds: HTMLDivElement = document.querySelector('.images-parallax__clouds');
    const mountains: HTMLDivElement = document.querySelector('.images-parallax__mountains');
    const gradient: HTMLDivElement = document.querySelector('.images-parallax__gradient');
    const human: HTMLDivElement = document.querySelector('.images-parallax__human');

    // Коефіціенти
    const forClouds: number = 40;
    const forMountains: number = 20;
    const forGradient: number = 15;
    const forHuman: number = 8;

    // Швидкість анімації
    const speed: number = 0.05;

    // Змінні
    let positionX: number = 0;
    let positionY: number = 0;
    let coordXprocent: number = 0;
    let coordYprocent: number = 0;


    // Parallax при русі мишки

    // function setMouseParallaxStyle(): void {
    //   console.log(1);
    //   const distX: number = coordXprocent - positionX;
    //   const distY: number = coordYprocent - positionY;

    //   positionX = positionX + (distX * speed);
    //   positionY = positionY + (distY * speed);

    //   console.log(
    //     positionX,
    //     positionY
    //   );

    //   // Передача стилів`
    //   clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${positionY / forClouds}%);`;
    //   mountains.style.cssText = `transform: translate(${positionX / forMountains}%, ${positionY / forMountains}%);`;
    //   gradient.style.cssText = `transform: translate(${positionX / forGradient}%, ${positionY / forGradient}%);`;
    //   human.style.cssText = `transform: translate(${positionX / forHuman}%, ${positionY / forHuman}%);`;

    //   requestAnimationFrame(setMouseParallaxStyle);
    // }
    // setMouseParallaxStyle();

    // parallax.addEventListener("mousemove", function (e) {
    //   // Отримання ширини та висоти блока
    //   const parallaxWidth = parallax.offsetWidth;
    //   const parallaxHeight = parallax.offsetHeight;

    //   // Ноль на середині
    //   const coordX = e.pageX - parallaxWidth / 2;
    //   const coordY = e.pageY - parallaxHeight / 2;

    //   // Отримання потрібних процентів
    //   coordXprocent = coordX / parallaxWidth * 100;
    //   coordYprocent = coordY / parallaxHeight * 100;
    // });


    // Parallax при скролі

    let thresholdSets: Array<number> = [];
    for (let i: number = 0; i <= 1.0; i += 0.005) {
      thresholdSets.push(i);
    }
    const callback = function (entries, observer) {
      const scrollTopProcent = (window.pageYOffset) / (parallax.offsetHeight) * 100; // Процент прокрученої облісті, починаючи з верхньої точки сайта
      setParallaxItemsStyle(scrollTopProcent);
    };
    const observer = new IntersectionObserver(callback, {
      threshold: thresholdSets // threshold - поріг
    });

    observer.observe(document.querySelector('.content'));
    observer.observe(document.querySelector('.eclipse'));

    function setParallaxItemsStyle(scrollTopProcent) {
      content.style.cssText = `transform: translate(0%, ${scrollTopProcent / 2}%)`;
      clouds.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 0.55}%)`;
      mountains.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 0.65}%)`;
      // gradient.parentElement.style.cssText = `transform: translate(0%, ${scrollTopProcent / 4}%)`;
      human.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 0.8}%)`;
    }
  }
};
