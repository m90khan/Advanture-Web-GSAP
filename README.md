<br />
<p align="center">
  <a href="https://m90khan.github.io/Advanture-Web-GSAP/">
    <img src="img/forest.jpg" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">Adventurismus | Tours Website</h3>

  <p align="center">
Visit an adventurous location for yoru next trip <br />
    <a href="m90khan@gmail.com"><strong>Contact Me</strong></a>
    <br />
    <br />
    <a href="https://m90khan.github.io/Advanture-Web-GSAP/">View Demo</a>
    
   </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
- [Process](#process)
- [Skills](#skills)
- [Code Snippet](#code)
- [Connect with me](#Contact)

---

### About the Project

Live: https://m90khan.github.io/Advanture-Web-GSAP/
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

[<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />][youtube]
[<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />][youtube]
[<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />][youtube]
[<img align="left" alt="Sass" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />][youtube]
[<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />][youtube]
[<img align="left" alt="React" width="26px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/greensock.svg" />][youtube]
[<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />][youtube]
[<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />][youtube]
[<img align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />][youtube]
<br />
<br />

---

### Code Snippet

```javascript
function navToggle(e) {
  if (!e.target.classList.contains('active')) {
    e.target.classList.add('active');
    gsap.to('.header__burger--line1', 0.5, {
      rotate: '45',
      y: 5,
      background: 'black',
    });
    gsap.to('.header__burger--line2', 0.5, {
      rotate: '-45',
      y: -2,
      background: 'black',
    });
    gsap.to('#logo', { color: 'black' });
    gsap.to('.section-nav', 1, { clipPath: 'circle(200% at 100% -10%)' });
    document.body.classList.add('hide');
  } else {
    e.target.classList.remove('active');

    gsap.to('.header__burger--line1', 0.5, {
      rotate: '0',
      y: 0,
      background: 'white',
    });
    gsap.to('.header__burger--line2', 0.5, {
      rotate: '0',
      y: 0,
      background: 'white',
    });
    gsap.to('#logo', { color: 'white' });
    gsap.to('.section-nav', 1, { clipPath: 'circle(50px at 100% -10%)' });
    document.body.classList.remove('hide');
  }
}
```

---

### Connect with me:

[<img align="left" alt="Khan | YouTube" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg" />][youtube]

[<img align="left" alt="twitter | Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />][twitter]
[<img align="left" alt="khanmohsinx | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/behance.svg" />][behance]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/dribbble.svg" />][dribble]
<br />

---

[youtube]: https://www.youtube.com/channel/UC96rVfdTKsjZpREnH6CaCOw
[twitter]: https://twitter.com/m90khan
[linkedin]: https://www.linkedin.com/in/uxdkhan
[instagram]: https://www.instagram.com/uxd.khan/
[behance]: https://www.behance.net/Khan_Mohsin
[dribble]: https://dribbble.com/uxdkhan
