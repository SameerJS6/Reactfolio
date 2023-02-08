# Room Homepage Solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Navigate the slider using their mouse.
- See hover states for all interactive elements on the page
- View the optimal layout for the site depending on their device's screen size

### Screenshot

![](./Preview.jpg)

### Links

- Solution URL: [Github](https://github.com/SameerJS6/React-Projects/tree/master/Room-Homepage)
- Live Site URL: [Live Site On Netilify](https://home-sameer.netlify.app/)

## My process

- I began by creating the footer section which was made up of three grid sections.
- Then, I worked on the navbar, which was relatively easy since I had made it before.
- The final part was creating the main/hero content section.
- I used the Array.map method to make the slider and the rest of the UI, added arrow buttons, and linked the nextSlide and prevSlide functions to the buttons.
- Finally, I animated the site using GSAP, which was a challenge but also the most rewarding part of the project.
- In total, it took me around 2-3 hours to complete the UI and an additional 4-5 hours to animate it using GSAP, As i was using it for first time.

### Built with

- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- Mobile-first workflow
- CSS custom properties
- Semantic HTML5 markup
- [GSAP](https://greensock.com/gsap/) - JS Animation Library

### What I learned

- This project was a great learning experience for me.
- I got to work with animations using GSAP, as well as useRef and useEffect.
- I also learned about forwarding refs from parent to child components.
- One of the things I enjoyed doing was using the CSSRulePlugin to animate the ::after pseudo class.

Here are some of the codes snippet I used:

```Javascript React
// Refs for Navbar
let navref = useRef(null);
// Forwading it to child component
<Navbar nav={navref} />;
```

```Javascript React
let ImageReveal = CSSRulePlugin.getRule(".image-pseudo-2::after");
// Timeline Animation For the Main Hero Image
 tl.to(MainImgReveal, {
        duration: 1.5,
        width: "0%",
        ease: Power3.easeInOut,
      });
```

### Continued development

- I am planning to improve my skills in GSAP animation and make sure the animations look great on all devices, including optimizing them for better performance.

### Useful resources

- [GSAP Forum](https://greensock.com/forums/) - This helped me improve my understanding of GSAP timelines and using the useRef hook to animate elements in the main app. I will be utilizing this knowledge in future projects.

## Author

- Website - [Github](https://github.com/SameerJS6/)
- Frontend Mentor - [@SameerJS6](https://www.frontendmentor.io/profile/sameerjs6)

## Acknowledgments

- Props to Google, Youtube and GSAP Forum to help me out through out the project
