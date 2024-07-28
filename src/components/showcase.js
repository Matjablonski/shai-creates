import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

// SHOWCASE
export default function showcase() {

  // Animate thumbnails reveal
  const section = document.querySelector('.showcase_wrap')
  const thumbnails = document.querySelectorAll('.showcase_img_wrap')
  // const logos = document.querySelectorAll('.showcase_logo')

  const transition = gsap.timeline({
    scrollTrigger: {
      trigger: '.intro_wrap',
      start: 'top bottom',
      endTrigger: '.showcase_contain',
      end: 'center 40%',
      scrub: true,
    },
    defaults: { ease: 'power1.inOut' }
  })
  transition.from(thumbnails[0], {
    y: '-260vh',
    xPercent: -200,
    scale: 2,
    transformOrigin: '100%, 100%',
    rotation: 55,
    duration: 0.95,
    // onComplete: () => {
    //   gsap.to(logos[0], { opacity: 1, ease: 'power2.out', duration: 0.6 })
    // },
    // onReverseComplete: () => {
    //   gsap.to(logos[0], { opacity: 0, ease: 'power2.out', duration: 0.6 })
    // }
  })
  .from(thumbnails[1], {
    y: '-370vh',
    xPercent: -50,
    scale: 3,
    rotation: -10,
    duration: 1,
    // ease: 'power1.inOut'
  }, '<')
  .from(thumbnails[2], {
    y: '-260vh',
    xPercent: 200,
    scale: 1.6,
    rotation: -25,
    duration: 0.92
  }, '<')

  // Header and paragraph reveal
  const header = new SplitType('#showcase', { types: 'words, chars' })
  gsap.from(header.chars, {
    scaleY: 0,
    transformOrigin: '0% 100%',
    duration: 0.4,
    stagger: {
      amount: 0.4
    },
    ease: 'circ.out',
    scrollTrigger: {
      trigger: '#showcase',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })

  const paragraph = section.querySelector('.g_paragraph')
  const paraSplit = new SplitType(paragraph, { types: 'words, lines' })
  gsap.set(paraSplit.lines[0], { x: '5ch' })
  gsap.from(paraSplit.lines, {
    yPercent: 100,
    autoAlpha: 0,
    duration: 1.4,
    stagger: 0.08,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: paragraph,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })

  // Parallax items
  const items = document.querySelectorAll('.showcase_item')
  const speeds = [0.9, 0.7, 0.8];

  items.forEach((thumbnail, index) => {
    if (speeds[index] !== undefined) {
      thumbnail.setAttribute('data-speed', speeds[index]);
    }
  })

  gsap.to(items, {
    y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
    ease: "none",
    scrollTrigger: {
      trigger: '.showcase_collection',
      start: 'top bottom',
      end: "max",
      invalidateOnRefresh: true,
      scrub: 0,
    }
  })

}