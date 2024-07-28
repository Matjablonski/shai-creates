import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from 'split-type'

import core from "../utils/core"

gsap.registerPlugin(ScrollTrigger)

// SHOWCASE
export default function specialties() {

  const section = document.querySelector('.specialties_wrap')

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
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })

  core()

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