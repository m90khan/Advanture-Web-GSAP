<br />
<p align="center">
  <a href="https://www.thewebsitekitchen.com">
    <img src="img/forest.jpg" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">Adventurismus | Tours Website</h3>

  <p align="center">
Visit an adventurous location for yoru next trip <br />
    <a href="m90khan@gmail.com"><strong>Contact Me</strong></a>
    <br />
    <br />
    <a href="https://m90khan.github.io/Color-Palette-Generator/">View Demo</a>
    
   </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
- [Process](#process)
- [Skills](#skills)
- [Code Snippet](#code)
- [Contact](#Contact)

---

### About the Project

Live: https://m90khan.github.io/Color-Palette-Generator/
<img src="./img/adven-gsap.gif">

#### Process

- Write the the HTML structure
- Applied styling using sass
- created seperate divs to display on top on the images and text.
- then animate from x: 0 to x: 100% to display the behind parts
- create a seperate div for the cursor. then assign the e.pageY + "px" and e.pageX + "px" to it so to follow the actual cursor
- animate the cursor size based on hovering logo or Nav
- animate the text in the slides based on hovering the button Explore.
- Use Barba for basic page transition.

---

### Skills

- HTML5
- CSS3 - SCSS Syntax
- JavaScript
- Scroll Magic
- GSAP Library
- Barba

---

### Code Snippet

```javascript
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
```

---

### Contact

Reach out to me at one of the following places!

- Website : <a href="https://thewebsitekitchen.com" target="_blank">`thewebsitekitchen.com`</a>
- Linkedin : <a href="https://de.linkedin.com/in/khanmohsinx" target="_blank">`khanmohsinx`</a>

---
