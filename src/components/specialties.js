import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

import core from '../utils/core'
import execution from '../utils/execution'
import identity from '../utils/identity'

gsap.registerPlugin(ScrollTrigger)

// SHOWCASE
export default function specialties() {

  const section = document.querySelector('.specialties_wrap')
  const cardsWrap = document.querySelector('.showcase_cards_wrap')

  // Header and paragraph reveal
  const header = section.querySelector('.g_heading')
  const split = new SplitType(header, { types: 'chars' })
  gsap.from(split.chars, {
    scaleY: 0,
    transformOrigin: '0% 100%',
    duration: 0.4,
    stagger: {
      amount: 0.4
    },
    ease: 'circ.out',
    scrollTrigger: {
      trigger: header,
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  })

  // Paragraph
  const subheaders = section.querySelectorAll('.g_subheader')
  gsap.from(subheaders, {
    yPercent: 110,
    duration: 0.6,
    stagger: 0.15,
    ease: 'circ.out',
    scrollTrigger: {
      trigger: header,
      start: 'center center',
      toggleActions: 'play none none reverse'
    }
  })

  // SVG animations
  core()
  identity()
  execution()

  const slides = gsap.utils.toArray('.card_item_wrap')
  const slideWidth = slides[0].clientWidth
  const slidesAmount = slides.length - 1
  const space = (cardsWrap.clientWidth - slideWidth) / slidesAmount
  const triggers = gsap.utils.toArray('.showcase_trigger')

  // // Pin
  // ScrollTrigger.create({
  //   trigger: '.showcase_cards_wrap',
  //   start: 'top top',
  //   endTrigger: section,
  //   end: 'bottom bottom',
  //   pin: true,
  //   //pinSpacing: false,
  // })

  const settings = {
    start: 'top bottom',
    end: 'bottom bottom',
    scrub: 0.5,
    //markers: true
  }

  // Stacked Cards Slider
  slides.forEach( (slide, index) => {

    if (index > 0) {

      // Spread slides in available space
      //gsap.set(slide, { x: `+=${space * index}` })

      // // Set scrollTrigger animation for each slide and connect each with corresponding trigger from triggers array
      // gsap.to(slide, {
      //   x: 0,
      //   scrollTrigger: {
      //     trigger: triggers[index - 1],
      //     ...settings
      //   }
      // })

      // gsap.to(slide, {
      //   xPercent: -110,
      //   rotation: -5,
      //   transformOrigin: '80% 80%',
      //   scale: 1.1,
      //   scrollTrigger: {
      //     trigger: triggers[index],
      //     ...settings
      //   }
      // })

    } else {

      // gsap.to(slide, {
      //   xPercent: -110,
      //   rotation: -5,
      //   transformOrigin: '80% 80%',
      //   scale: 1.1,
      //   scrollTrigger: {
      //     trigger: triggers[0],
      //     ...settings
      //   }
      // })

    }

  })

}