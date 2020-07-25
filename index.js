/*
 * OLD WAY
const button = document.querySelector(".btn");
window.addEventListener("scroll", scrollReveal);
function scrollReveal() {
  //* getBoundingClientRect give us the data of the element wrt scroll

  const buttonPos = button.getBoundingClientRect();
  //* window.innerHeight gets the actual window height
  const windowHeight = window.innerHeight / 1.5;
  if (buttonPos < windowHeight) {
    button.style.color = "yellow";
  }

   console.log(buttonPos);
}
* Better WAY:  Intersection Observer
const slide = document.querySelector(".slide");

let options = {
  threshold: 0.5,
};
let observer = new IntersectionObserver(slideAnimation, options);
function slideAnimation(entries) {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      slide.style.background = "red";
    }
  });
}
observer.observe(slide);
observer.observe(button);

* However, Libraries ike GSAP, scrollmagic solve this complexieties 


*/

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
    const Image = slide.querySelector("img");
    const revealText = slide.querySelector(".mountain-desc__reveal");

    //GSAP    gsap.to(element tochange, duration, {properties to change})
    //create timeline to change methods together
    // gsap.to(revealImg, 2, { x: "100%", scale: 1.3 });

    const slideT1 = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.inOut" },
    });
    // to from fromTo timeline.fromTo( element, time, {From},{To});

    slideT1.fromTo(revealImg, { x: "0%" }, { x: "100%" });

    slideT1.fromTo(
      Image,
      2,
      { opacity: 0.5, scale: 0.8, borderRadius: "10%" },
      { opacity: 1, scale: 3, borderRadius: "0" }
    );

    slideT1.fromTo(
      Image,
      2,
      { opacity: 0.8, scale: 3 },
      { opacity: 1, scale: 1, borderRadius: "4%" }
    );
    slideT1.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=3");

    //create a scene
    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.25,
      reverse: false,
    })
      .setTween(slideT1)
      // .addIndicators({
      //   colorStart: "white",
      //   colorTrigger: "yellow",
      //   name: "slide",
      // })
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
      .addTo(controller);
    // .addIndicators({
    //   colorStart: "white",
    //   colorTrigger: "yellow",
    //   name: "page",
    //   indent: 200,
    // });
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
    /*
    - in Views, we can run certain functionalities
    *assign the pages based on the namespace in html 
    *then we can choose which fu nction to run where 
    *and destroy the scene elenents before leaving 
    * so not to effect the next page
    
    */
    {
      namespace: "home",
      beforeEnter() {
        animateSlides();
        logo.href = "./index.html";
        gsap.fromTo(".section-header", 2, { y: "-100%" }, { y: "0%" });
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
    /*
     - in Transition, we have leave and enter
     - in each of them we have (current, next) 
     - current : is the current container
     
    */
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
        let done = this.async(); //*this.sync keeps track of leave and enter
        // * scroll to top
        window.scrollTo(0, 0);
        //animation
        const pageTransition = gsap.timeline({
          defaults: { ease: "power2.inOut" },
        });
        pageTransition.fromTo(
          ".swipe",
          0.75,
          { y: "0%" },
          { y: "100%", stagger: 0.25, onComplete: done }
        );
        pageTransition.fromTo(
          next.container,
          3,
          { opacity: 0 },
          { opacity: 1 }
        );
        pageTransition.fromTo(
          ".section-header",
          1,
          { y: "-100%" },
          { y: "0%" }
        );
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

    slideTl.fromTo(slide, 2, { opacity: 1 }, { opacity: 0 });

    slideTl.fromTo(nextSlide, 1, { opacity: 0 }, { opacity: 1 });
    slideTl.fromTo(nextImg, 2, { x: "80%" }, { x: "0%" });
    slideTl.fromTo(slide, 2, { y: "0%" }, { y: "20%" });

    //Scene
    detailScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0.1,
    })
      .setPin(slide, { pushFollowers: false })
      .setTween(slideTl)
      .addTo(controller);

    // .addIndicators({
    //   colorStart: "white",
    //   colorTrigger: "white",
    //   name: "detailScene",
    // })
  });
}
//eventlisteners
burgerNav.addEventListener("click", navToggle);
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);
