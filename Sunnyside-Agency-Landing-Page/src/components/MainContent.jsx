import React from 'react';
// All the Desktop Images Imports
import Egg from "../assets/desktop/image-transform.jpg"
import Orange from "../assets/desktop/image-photography.jpg"
import Cherry from "../assets/desktop/image-graphic-design.jpg"
import Standout from "../assets/desktop/image-stand-out.jpg"
import Cone from "../assets/desktop/image-gallery-cone.jpg"
import Milk from "../assets/desktop/image-gallery-milkbottles.jpg"
import GalleryOrange from "../assets/desktop/image-gallery-orange.jpg"
import SugarCubes from "../assets/desktop/image-gallery-sugarcubes.jpg"
// All the Mobile Images Imports
import MobileEgg from "../assets/mobile/image-transform.jpg"
import MobileOrange from "../assets/mobile/image-photography.jpg"
import MobileCherry from "../assets/mobile/image-graphic-design.jpg"
import MobileStandout from "../assets/mobile/image-stand-out.jpg"
import MobileCone from "../assets/mobile/image-gallery-cone.jpg"
import MobileMilk from "../assets/mobile/image-gallery-milkbottles.jpg"
import MobileGalleryOrange from "../assets/mobile/image-gallery-orange.jpg"
import MobileSugarCubes from "../assets/mobile/image-gallery-sugar-cubes.jpg"
// All the Profile Pictures Imports
import Profile1 from '../assets/image-emily.jpg';
import Profile2 from '../assets/image-thomas.jpg';
import Profile3 from '../assets/image-jennie.jpg';
import ArrowDone from '../assets/icon-arrow-down.svg';


export default function MainContent() {
  const GalleyImage = [
    {id:1, desktop: Milk, mobile: MobileMilk},
    {id:2, desktop: GalleryOrange, mobile: MobileGalleryOrange},
    {id:3, desktop: Cone, mobile: MobileCone},
    {id:4, desktop: SugarCubes, mobile: MobileSugarCubes},
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
            <article className="article-bg | grid place-content-center gap-8">
              <h1 className='uppercase text-[var(--white)] font-fraunces text-3xl sm:text-5xl xl:text-6xl'>we are creatives</h1>
              <img className="mx-auto" src={ArrowDone} alt="Arrow Pointing towards Down" />
            </article>
            {/* Main Content Grid Section  */}
            <div>
              <article className='flex flex-col-reverse md:grid md:grid-cols-2'>
                <div className='grid place-content-center gap-4 p-8 lg:p-20 '>
                  <h2 className='font-fraunces'>Transform your brand</h2>
                  <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do must of the marketing for you</p>
                  <button className='font-fraunces font-extrabold mr-auto'>Learn more</button>
                </div>
                <div >
                  <picture>
                    <source media="(min-width: 1024px)" srcSet={Egg} />
                    <img src={MobileEgg} alt="A Picture of a Egg" />
                  </picture>
                </div>
              </article>

              <article className='flex flex-col md:grid md:grid-cols-2'>
                <div>
                  <picture>
                    <source media="(min-width: 1024px)" srcSet={Standout} />
                    <img src={MobileStandout} alt="A Picture of a Pink cup" />
                  </picture>
                </div>

                <div className='grid place-content-center gap-4 p-8 lg:p-20 '>
                  <h2 className='font-fraunces'>Stand out to the right audience</h2>
                  <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
                  <button className='font-fraunces font-extrabold mr-auto'>Learn more</button>
                </div>
              </article>

              <article className='flex flex-col md:grid md:grid-cols-2'>
                <div className='content-grid | grid place-content-center gap-4 p-8 lg:p-20'>
                    <h2 className='font-fraunces'>Graphic Design</h2>
                    <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
                </div>

                <div className='content-grid | grid place-content-center gap-4 p-8 lg:p-20'>
                  <h2 className='font-fraunces'>Photography</h2>
                  <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div>
              </article>
            </div>

            {/* Testimonials Section  */}
            <div className="grid gap-10 px-4 my-12 ">
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
            <div className="Gallery | grid grid-cols-2 md:grid-cols-4">
            {GalleyImage.map(items => {
              return (
              <div key={items.id}>
                <picture>
                  <source media="(min-width: 768px)" srcSet={items.desktop} />
                  <img src={items.mobile} alt="Few Bottles of Milk with sky as background" />
                </picture>
              </div> 
              )
            }) }
            </div> 
        </main>
    </>
  )
}
