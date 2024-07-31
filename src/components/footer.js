import gsap from "gsap"
import { Flip } from "gsap/Flip"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger, Flip)

export default function footer() {

  // Footer animations
  const section = document.querySelector('.footer_wrap')
  const container = section.querySelector('.footer_contain')

  gsap.from(container, {
    yPercent: -50,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
      onEnter: () => hideMenu.play(),
      onLeaveBack: () => hideMenu.reverse()
    }
  })

  // Hide menu
  const hideMenu = gsap.timeline({ paused: true })
  hideMenu.to('.g_nav_bottom', {
    yPercent: 150,
    ease: 'power3.inOut',
    duration: 0.6,
    scale: 0.9
  })

  // Flip contact images
  const images = document.querySelectorAll('.contact_image')
  console.log(images)
  const navWrap = document.querySelector('.connect_images_wrap')
  const state = Flip.getState(images)

  images.forEach(image => {
    navWrap.appendChild(image)
    image.classList.add('is-large')
  })

  Flip.from(state, {
    scrollTrigger: {
      trigger: '.showcase_trigger.is-last',
      start: 'top bottom',
      endTrigger: '.footer_wrap',
      end: 'bottom bottom',
      scrub: true,
      absolute: true,
      zIndex: 999
    },
    scale: true
  });

}