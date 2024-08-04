import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, Flip)

export default function footer() {

  // Hide menu
  const hideMenu = gsap.timeline({ paused: true })
  hideMenu.to('.g_nav_bottom', {
    yPercent: -150,
    ease: 'power3.inOut',
    duration: 0.6,
    scale: 0.9
  })

  // // Footer animations
  // const section = document.querySelector('.footer_wrap')
  // const container = section.querySelector('.footer_contain')

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: section,
  //     start: 'top bottom',
  //     end: 'bottom bottom',
  //     scrub: true,
  //     onEnter: () => hideMenu.play(),
  //     onLeaveBack: () => hideMenu.reverse(),
  //   }
  // })
  // tl.from(container, { yPercent: -50, ease: 'none' })

  // gsap.from(container, {
  //   yPercent: -50,
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: section,
  //     start: 'top bottom',
  //     end: 'bottom bottom',
  //     scrub: true,
  //     markers: true,
  //     // onEnter: () => hideMenu.play(),
  //     // onLeaveBack: () => hideMenu.reverse(),
  //     // onUpdate: (self) => console.log("progress:", self.progress),
  //   }
  // })

  // // Flip contact images
  // const images = document.querySelectorAll('.contact_image')
  // const navWrap = document.querySelector('.g_nav_contact')
  // const state = Flip.getState(images)

  // images.forEach(image => {
  //   navWrap.appendChild(image)
  //   image.classList.remove('is-large')
  //   image.style.zIndex = '99'  
  // })

  // Flip.to(state, {
  //   scrollTrigger: {
  //     trigger: '.showcase_trigger.is-last',
  //     start: 'top bottom',
  //     endTrigger: '.footer_wrap',
  //     end: 'bottom bottom',
  //     scrub: 0.5,
  //     //absolute: true,
  //     zIndex: 999
  //   },
  //   stagger: {
  //     each: 0.02, 
  //     from: 'start', 
  //   },
  //   scale: true,
  //   spin: true,
  //   ease: 'power1.in',
  // })

}