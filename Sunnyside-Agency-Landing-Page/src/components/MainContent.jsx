import React from 'react';
// All the Desktop Images Imports
import Cone from "../assets/desktop/image-gallery-cone.jpg"
import Milk from "../assets/desktop/image-gallery-milkbottles.jpg"
import GalleryOrange from "../assets/desktop/image-gallery-orange.jpg"
import SugarCubes from "../assets/desktop/image-gallery-sugarcubes.jpg"
// All the Mobile Images Imports
import MobileCone from "../assets/mobile/image-gallery-cone.jpg"
import MobileMilk from "../assets/mobile/image-gallery-milkbottles.jpg"
import MobileGalleryOrange from "../assets/mobile/image-gallery-orange.jpg"
import MobileSugarCubes from "../assets/mobile/image-gallery-sugar-cubes.jpg"
// All the Profile Pictures Imports
import Profile1 from '../assets/image-emily.jpg';
import Profile2 from '../assets/image-thomas.jpg';
import Profile3 from '../assets/image-jennie.jpg';
import ArrowDone from '../assets/icon-arrow-down.svg';

import ContentGrid from './ContentGrid';
import Footer from './Footer';


export default function MainContent() {
  const GalleyImage = [
    {id:1, desktop: Milk, mobile: MobileMilk, des: "Milk Bottles"},
    {id:2, desktop: GalleryOrange, mobile: MobileGalleryOrange, des: "Oranges"},
    {id:3, desktop: Cone, mobile: MobileCone, des: "Cones"},
    {id:4, desktop: SugarCubes, mobile: MobileSugarCubes, des: "Sugar Cubes"},
  ];

  const Reviews = [
    { id:1,
      profile: Profile1,
      review: "We put out trust in Sunnyside and they delivered making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      role: "Marketing Director"
    },
    { id: 2,
      profile: Profile2,
      review: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisying and enjoyable experience.",
      name: "Thomas S..",
      role: "Cheif Operating Officier"
    },
    { id: 3,
      profile: Profile3,
      review: "Increadible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jenie F.",
      role: "Business Owner"
    },
  ];
  return (
    <>
        <main>
          {/* Heading and Hero Background Section  */}
            <article className="article-bg | grid place-content-center  gap-8">
              <h1 className='uppercase text-[var(--white)] font-fraunces text-4xl sm:text-5xl xl:text-6xl tracking-[7px] leading-tight text-center'>we are creatives</h1>
              <img className="mx-auto" src={ArrowDone} alt="Arrow Pointing towards Down" />
            </article>
            
            {/* Main Content Grid Section  */}
            <ContentGrid />

            {/* Testimonials Section  */}
            <div className="grid gap-10 px-4 my-20 ">
              <h2 className='text-center tracking-[0.25rem] text-2xl md:text-3xl font-fraunces text-[var(--neutral-gray-400)] md:tracking-[0.86rem]'>CLIENT TESTIMONIALS</h2>
              <div className="content-grid | grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-0 lg:gap-8">
              {Reviews.map(reviews => {
                return (
                <article className='grid gap-6 place-content-center text-center p-2 mx-auto' key={reviews.id}>
                  <img className='mx-auto rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 max-w-[60px]' src={reviews.profile} alt="A Profile Picture of a user" />
                  <p className='font-barlow font-bold text-[var(--neutral-gray)] -tracking-tight max-w-[40ch]'>{reviews.review}</p>
                  <div >
                    <p className='leading-8 font-fraunces font-extrabold text-[var(--neutral-blue)] text-base md:text-lg'>{reviews.name}</p>
                    <p className='text-[var(--neutral-gray-400)]'>{reviews.role}</p>
                  </div>
                </article>
                )
              })}
              </div>
            </div>
              {/* Image Gallery Section  */}
            <div className="grid grid-cols-2 md:grid-cols-4">
            {GalleyImage.map(items => {
              return (
              <div className='card | relative overflow-hidden' key={items.id}>
                <picture>
                  <source media="(min-width: 768px)" srcSet={items.desktop} />
                  <img src={items.mobile} alt="Few Bottles of Milk with sky as background" />
                </picture>
                <div className="title block">
                  <p className='font-bold text-2xl text-[var(--white)] font-barlow'>{items.des}</p>
                </div>
                <div className="para hidden xl:block">
                  <p className='font-bold text-md text-[var(--white)] font-barlow'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum earum debitis quo iusto ea sapiente sequi vitae id doloribus illo!</p>
                </div>
              </div> 
              )
            })}
            </div> 
            {/* Footer Section  */}
            <Footer />
        </main>
    </>
  )
}
