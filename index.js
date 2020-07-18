// const controller = new ScrollMagic.Controller();

// const exploreScene = new ScrollMagic.Scene({
//   triggerElement: ".explore",
//   triggerHook: 0.5,
// })
//   .addIndicators({ colorStart: "white", colorTrigger: "yellow" })
//   .setClassToggle(".btn--primary", "active")
//   .addTo(controller);

let controller;
let slideScene;
let pageScene;
let detailScene;

function animateSlides() {
  controller = new ScrollMagic.Controller();
  const sliders = document.querySelectorAll(".slide");
  const header = document.querySelector(".section-header");

  sliders.forEach((slide, index, slides) => {
    const revealImg = slide.querySelector(".mountain-img__reveal");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".mountain-desc__reveal");

    //GSAP    gsap.to(element tochange, duration, {properties to change})
    //create timeline to change methods together
    // gsap.to(revealImg, 2, { x: "100%", scale: 1.3 });

    const slideT1 = gsap.timeline({
      defaults: { duration: 1, ease: "power3.inOut" },
    });
    // to from fromTo timeline.fromTo( element, time, {From},{To});

    slideT1.fromTo(revealImg, { x: "0%" }, { x: "100%" }, "-=1");
    slideT1.fromTo(img, { scale: 3 }, { scale: 1 });
    slideT1.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=2");

    //create a scene
    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.25,
      reverse: false,
    })
      .setTween(slideT1)
      .addIndicators({
        colorStart: "white",
        colorTrigger: "yellow",
        name: "slide",
      })
      .addTo(controller);

    //New timeline
    const pageT1 = gsap.timeline({});
    let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
    pageT1.fromTo(nextSlide, { y: "0%" }, { y: "50%" });
    pageT1.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 });
    pageT1.fromTo(nextSlide, { y: "50%" }, { y: "0%" }, "-=.5");

    //new scene
    pageScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0,
    })
      .setTween(pageT1)
      .setPin(slide, { pushFollowers: false })
      .addTo(controller)
      .addIndicators({
        colorStart: "white",
        colorTrigger: "yellow",
        name: "page",
        indent: 200,
      });
  });
}

// Cursor eevent
const mouse = document.querySelector(".cursor");
const mouseText = mouse.querySelector("span");
const burgerNav = document.querySelector(".header__burger");
function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}
// when user hhover over a link on header
function activeCursor(e) {
  const item = e.target;
  if (
    item.classList.contains("header__logo") ||
    item.classList.contains("header__burger")
  ) {
    mouse.classList.add("header--active");
  } else {
    mouse.classList.remove("header--active");
  }
  if (item.classList.contains("btn")) {
    mouse.classList.add("explore--active");
    mouseText.innerText = "Tap";
    gsap.to(".mountain-desc__title-swipe", 1, { y: "0%" });
  } else {
    mouse.classList.remove("explore--active");
    mouseText.innerText = "";
    gsap.to(".mountain-desc__title-swipe", 1, { y: "100%" });
  }
}

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".header__burger--line1", 0.5, {
      rotate: "45",
      y: 5,
      background: "black",
    });
    gsap.to(".header__burger--line2", 0.5, {
      rotate: "-45",
      y: -2,
      background: "black",
    });
    gsap.to("#logo", { color: "black" });
    gsap.to(".section-nav", 1, { clipPath: "circle(200% at 100% -10%)" });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");

    gsap.to(".header__burger--line1", 0.5, {
      rotate: "0",
      y: 0,
      background: "white",
    });
    gsap.to(".header__burger--line2", 0.5, {
      rotate: "0",
      y: 0,
      background: "white",
    });
    gsap.to("#logo", { color: "white" });
    gsap.to(".section-nav", 1, { clipPath: "circle(50px at 100% -10%)" });
    document.body.classList.remove("hide");
  }
}

const logo = document.querySelector("#logo");

barba.init({
  views: [
    {
      namespace: "home",
      beforeEnter() {
        animateSlides();
        logo.href = "./index.html";
      },
      beforeLeave() {
        slideScene.destroy();
        pageScene.destroy();
        controller.destroy();
      },
    },
    {
      namespace: "fashion",
      beforeEnter() {
        logo.href = "../index.html";
        detailAnimation();
      },
      beforeLeave() {
        controller.destroy();
        detailScene.destroy();
      },
    },
  ],
  transitions: [
    {
      leave({ current, next }) {
        let done = this.async();
        const pageTransition = gsap.timeline({
          defaults: { ease: "power2.inOut" },
        });
        pageTransition.fromTo(
          current.container,
          1,
          { opacity: 1 },
          { opacity: 0 }
        );
        pageTransition.fromTo(
          ".swipe",
          0.75,
          { x: "-100%" },
          { x: "0%", onComplete: done },
          "-=.5"
        );
      },
      enter({ current, next }) {
        let done = this.async();
        //scroll to top
        window.scrollTo(0, 0);
        //animation
        const pageTransition = gsap.timeline({
          defaults: { ease: "power2.inOut" },
        });
        pageTransition.fromTo(
          ".swipe",
          0.75,
          { x: "0%" },
          { x: "100%", stagger: 0.25, onComplete: done }
        );
        pageTransition.fromTo(
          next.container,
          1,
          { opacity: 0 },
          { opacity: 1 }
        );
        pageTransition.fromTo(".section-header", { y: "-100%" }, { y: "0%" });
      },
    },
  ],
});

function detailAnimation() {
  controller = new ScrollMagic.Controller();
  const slides = document.querySelectorAll(".detail-slide");
  slides.forEach((slide, index, slides) => {
    const slideTl = gsap.timeline({ defaults: { duration: 1 } });
    let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
    const nextImg = nextSlide.querySelector("img");
    slideTl.fromTo(slide, { opacity: 1 }, { opacity: 0 });
    slideTl.fromTo(nextSlide, 1, { opacity: 0 }, { opacity: 1 });
    slideTl.fromTo(nextImg, { x: "50%" }, { x: "0%" });
    //Scene
    detailScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0,
    })
      .setPin(slide, { pushFollowers: false })
      .setTween(slideTl)
      // .addIndicators({
      //   colorStart: "white",
      //   colorTrigger: "white",
      //   name: "detailScene"
      // })
      .addTo(controller);
  });
}
//eventlisteners
burgerNav.addEventListener("click", navToggle);
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);
