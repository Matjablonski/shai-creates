import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

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

}