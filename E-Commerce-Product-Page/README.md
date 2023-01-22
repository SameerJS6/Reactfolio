# Sneakers - E-commerce Product

The website features a clean and modern design, with a user-friendly interface that makes it easy for customers to browse and purchase products.

## Table of contents

- [Overview](#overview)
  - [The challenges](#the-challenges)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenges

Users should be able to:

- Add items to the cart **Imp**(This are incomplete as, i don't know how to do this)
- View the cart and remove items from it **Imp**(This are incomplete as, i don't know how to do this)
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- View the optimal layout for the site depending on their device's screen size
- **Bonus**: Add a Custom Dark Mode Theme to the Site and Also try to add Ripple Effect on Click.
  - **SideNote**: Use a Local Storage to make Theme.

### Screenshot

![Dark Mode - Desktop Preview](<./public/Desktop(Dark-Mode).png>)
<!-- ![Dark Mode - Tablet Preview](<./public/Tablet(Dark-Mode).png>)
![Dark Mode - Mobile Preview](<./public/Mobile(Dark-Mode).png>) 
![Light Mode - Mobile Preview](<./public/Mobile(Light-Mode).png>) -->

### Links

- Solution URL: [Github](https://github.com/SameerJS6/React-Projects/tree/master/E-Commerce-Product-Page)
- Live Site URL: [Netify](https://sneaker-sameer.netlify.app/)

## My process

- I began with a simple grid layout for the main section of the website, which was just two columns.
  Then I worked on the navigation bar which was a bit tricky because it had to change into a hamburger menu when viewed on mobile.
- This whole UI part of the website took me around 3-5 hours because it was only the second time I was using React.
- Next, I wanted to add a dark theme to the website, so I started working on that.
- I also tried to make an image slider where you could click on one image and it would change to another, yaa that one. At first, I couldn't do it, but after a few hours, I figured out how to do it by storing the images in an array and using a function to change the images.
- I also wanted to add a lightbox feature to the website, where you could click on an image and it would open up in a bigger size with dark linear gradient in the background.
- I didn't understand how to do it from watching videos on Youtube, so I decided to figure it out on my own.
- I broke the problem down into smaller tasks and tackled them one by one.
- It wasn't too difficult, but the animations were a bit tricky.
- After that, I added the dark theme colors and SVGs and made them animated.
- Before adding the shopping cart feature, I made the whole website animated using CSS.
- I tried to make the shopping cart layout, but I didn't succeed the first time because of some width issues.
- But I did succeed the second time, and I made it work on mobile screens and animated it too.
- Lastly, I added a ripple effect on most of the clickable items on the website, except for the navigation bar links as there was some randow issues with, so instead I added a different type of hover effect

- In short, In this one I learned quite a lot.

### Built with

- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- Mobile-first workflow
- CSS custom properties
- Semantic HTML5 markup

### What I learned

I wasn't sure where to start with this project because I thought it would be easy, but I soon found out that it was more challenging than I expected.

- I learned a lot about working with arrays, like how to use them in an image slider and to make smaller versions of the images. I also learned how to create a lightbox, which is a way to view an image in a bigger size.

- I discovered a new way to create a ripple effect on the images.

- You can see an example of the lightbox I made below. It was new to me, but I was able to figure it out:-

```JavaScript React
// LightBox Gallery and Image Slider
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const Images = [ image, image2, image3, image4 ]

  const handlePrevClick = () => {
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex < 0 ? Images.length -1 : prevIndex);
  }
  const handleNextClick = () => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex === Images.length ? 0 : nextIndex);
    console.log(nextIndex)
  }
  const handleClick = (index) => {
    setCurrentIndex(index)
  }
```

### Continued development

- I want to keep learning how to make a shopping cart because I didn't succeed today, and also I want to make more online store websites so I can learn more about the kind of problems that come up in real-world web development.

## Author

- Website - [Github](https://github.com/SameerJS6/)
- Frontend Mentor - [@SameerJS6](https://www.frontendmentor.io/profile/sameerjs6)

## Acknowledgments

Props to Google, Youtube.
