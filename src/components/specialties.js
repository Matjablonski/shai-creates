import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from 'split-type'

import core from "../utils/core"
import execution from "../utils/execution"
import identity from "../utils/identity"

gsap.registerPlugin(ScrollTrigger)

// SHOWCASE
export default function specialties() {

  const section = document.querySelector('.specialties_wrap')
  const cardsWrap = document.querySelector('.showcase_cards_wrap')
  cardsWrap.classList.add('u-hflex-left-top')

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

  // SVG animations
  core()
  identity()
  execution()

  // Horizontal scroll
  let sections = gsap.utils.toArray('.card_item_wrap');
  let container = document.querySelector('.showcase_cards_wrap');

  let scrollTween = gsap.to(sections, {
    //xPercent: -100 * (sections.length - 1),
    x: -(container.scrollWidth - container.clientWidth),
    ease: "none",
    scrollTrigger: {
      trigger: '.showcase_cards_wrap',
      pin: true,
      scrub: true,
      //end: "+=3000"
      end: `+=${container.scrollWidth}`
    }
  })

  sections.forEach( section => {

    if (!section[0]) {

      gsap.from(section.querySelector('.card_item'), {
        xPercent: -70,
        scale: 0.9,
        transformOrigin: '0% 50%',
        ease: "none",
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left right",
          end: 'left 20%',
          scrub: true,
        }
      })

    }

  })

  // function directionalSnap(increment) {
  // let snapFunc = gsap.utils.snap(increment);
  //   return (raw, self) => {
  //     let n = snapFunc(raw);
  //     return Math.abs(n - raw) < 1e-4 || (n < raw) === self.direction < 0 ? n : self.direction < 0 ? n - increment : n + increment;
  //   };
  // }

  // const paragraph = section.querySelector('.g_paragraph')
  // const paraSplit = new SplitType(paragraph, { types: 'words, lines' })
  // gsap.set(paraSplit.lines[0], { x: '5ch' })
  // gsap.from(paraSplit.lines, {
  //   yPercent: 100,
  //   autoAlpha: 0,
  //   duration: 1.4,
  //   stagger: 0.08,
  //   ease: 'power2.out',
  //   scrollTrigger: {
  //     trigger: paragraph,
  //     start: 'top 80%',
  //     toggleActions: 'play none none reverse'
  //   }
  // })

}