import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

// SHOWCASE
export default function showcase() {

  // Animate thumbnails reveal
  const section = document.querySelector('.showcase_wrap')
  const thumbnails = document.querySelectorAll('.showcase_img_wrap')

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
    rotationY: 40,
    rotationX: 20,
    rotation: 55,
    duration: 0.95,
  })
  .from(thumbnails[1], {
    y: '-400vh',
    xPercent: -50,
    rotationX: -40,
    scale: 3,
    rotation: -10,
    duration: 1,
  }, '<')
  .from(thumbnails[2], {
    y: '-240vh',
    xPercent: 200,
    rotationY: -10,
    // rotationX: 15,
    scale: 1.6,
    rotation: -25,
    duration: 0.92
  }, '<');

  const transitionOut = gsap.timeline({
    scrollTrigger: {
      trigger: '.specialties_wrap',
      start: 'top 80%',
      endTrigger: '.showcase_heading_wrap',
      end: 'bottom 20%',
      scrub: true,
    },
    defaults: { ease: 'power1.inOut' }
  })
  transitionOut.to(thumbnails[0], {
    y: '220vh',
    xPercent: -160,
    scale: 1.4,
    transformOrigin: '100%, 100%',
    rotation: 55,
    duration: 0.9,
  })
  .to(thumbnails[1], {
    y: '215vh',
    scale: 3,
    rotation: -20,
    duration: 1,
  }, '<')
  .to(thumbnails[2], {
    y: '180vh',
    xPercent: 155,
    scale: 1.8,
    rotation: -80,
    duration: 0.8
  }, '<')
  .set(thumbnails, { autoAlpha: 0 })

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
  const speeds = [0.9, 0.75, 0.8];

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