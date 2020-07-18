// const button = document.querySelector(".hike");

// // window.addEventListener("scroll", scrollReveal);

// // function scrollReveal() {
// //   const pos = button.getBoundingClientRect().top;
// //   const wind = window.innerHeight;
// //   if (pos < wind / 2.5) {
// //     button.style.color = "red";
// //   } else {
// //     button.style.color = "yellow";
// //   }
// // }

// //Intersection Observer
// let options = {
//   threshold: 0.3,
// };
// let observer = new IntersectionObserver(slideAnimation, options);

// function slideAnimation(entries) {
//   entries.forEach((element) => {
//     if (element.isIntersecting) {
//       button.style.background = "white";
//     }
//   });
// }
// observer.observe(button);

//scroll MAgic

// const controller = new ScrollMagic.Controller();

// const exploreScene = new ScrollMagic.Scene({
//   triggerElement: ".explore",
//   triggerHook: 0.5,
// })
//   .addIndicators({ colorStart: "white", colorTrigger: "yellow" })
//   .setClassToggle(".btn", "active")
//   .addTo(controller);
