import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger, Flip)

export default function team() {

  const section = document.querySelector('.team_wrap')
  section.classList.add('is-pinned')

  // Master Timeline
  const master = gsap.timeline()
  master.add(animateRotation())

  // Set rotations for team members
  const wrappers = [...section.querySelectorAll('.team_item_wrap')]
  const calDeg = 360 / wrappers.length
  
  wrappers.forEach((wrap, index) => {

    const name = wrap.querySelector('.team_item_name')
    wrap.style.transform = `translate(-50%, 0%) rotate(${calDeg * index}deg)`
    gsap.set(name, { rotation: -calDeg * index })

  })
  
  setupFlip()
  introAnimation()

  function animateRotation() {

    const rotating = gsap.timeline()
    rotating.to('.team_list', {
      rotation: 360,
      repeat: -1,
      duration: 40,
      ease: 'none'
    })
    .to('.team_item_name', {
      rotation: '-=360',
      repeat: -1,
      duration: 40,
      ease: 'none'
    }, '<')

    return rotating

  }

  // Flip item
  function setupFlip() {

    const wrap = section.querySelector('.selected_member_contain')
    const items = section.querySelectorAll('.team_item')
    gsap.set(items, { filter: 'brightness(100%)' })

    items.forEach( item => {

      const container = item.querySelector('.team_item_flip')
      const name = item.querySelector('.team_item_name')
      gsap.set(name, { opacity: 0 })

      item.addEventListener('mouseenter', () => {

        pauseSmoothly()

        const state = Flip.getState(container)
        wrap.appendChild(container)
        container.classList.add('is-active')
        flip(state, reveal, 'play')
        reveal.timeScale(1).play()

        gsap.to(name, { opacity: 1, delay: 0.3 })
        teamAnim.play()

        // Fade out other items
        items.forEach((otherItem) => {
          if (otherItem !== item) {
            gsap.to(otherItem, { 
              //opacity: 0.2, 
              filter: 'brightness(30%)',
              duration: 1, 
              ease: 'power2.out' 
            })
          }
        })

      })

      item.addEventListener('mouseleave', () => {

        resumeSmoothly()

        const state = Flip.getState(container)
        item.appendChild(container)
        container.classList.remove('is-active')
        flip(state, reveal, 'reverse')
        reveal.timeScale(3).reverse()

        gsap.to(name, { opacity: 0 })
        gsap.delayedCall(0.5, () => teamAnim.reverse())
        //teamAnim.reverse()

        // Fade in other items
        items.forEach((otherItem) => {
          if (otherItem !== item) {
            gsap.to(otherItem, { 
              //opacity: 1, 
              filter: 'brightness(100%)',
              duration: 1, 
              ease: 'power2.out' })
          }
        })

      })

      const teamAnim = gsap.timeline({ paused: true })
      teamAnim.to('.is-team', {
        scale: 0.8,
        autoAlpha: 0,
        ease: 'power4.in',
        duration: 0.4
      })

    })

    // Show description
    const reveal = gsap.timeline({ paused: true })
    reveal.add(activeMember('.team_item_description'))

  }

  function pauseSmoothly() {
    gsap.to(master, {
      timeScale: 0,
      duration: 1.2,
      ease: 'power1.out'
    })
  }

  function resumeSmoothly() {
    gsap.to(master, {
      timeScale: 1,
      duration: 1.2,
      ease: 'power1.in'
    })
  }

  function flip(state) {

    Flip.from(state, {
      duration: 0.8,
      ease: 'power2.inOut',
      absolute: true,
    })

  }

  function activeMember(text) {

    const paragraph = document.querySelector(text)
    const split = new SplitType(paragraph, { types: 'lines' })

    const tl = gsap.timeline()
    tl.from(split.lines, { 
      opacity: 0,
      yPercent: 100,
      duration: 1.2,
      stagger: 0.08,
      ease: 'power3.out'
    }, 0.5)

    return tl

  }

  function introAnimation() {

    const pin = section.querySelector('.team_contain')
    const images = gsap.utils.toArray('.team_item_img')
    toggleActive()

    const subheader = new SplitType('.subheader', { types: 'chars' })
    const header = new SplitType('.section_header', { types: 'chars' })

    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      pin: pin
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top-=40%',
        end: 'center top',
        scrub: 0.5,
      }
    })
    tl.from('.team_collection', {
      scale: 0,
      rotation: '+=180',
      ease: 'power1.out'
    })
    .from(images, {
      scale: 0,
      yPercent: 200,
      xPercent: 150,
      rotationZ: 45,
      rotationX: -45,
      rotationY: -45,
      transformPerspective: 500,
      stagger: {
        from: 'start',
        amount: 0.2
      },
      ease: 'power1.inOut',
    }, '<')
    .from('.team_item_img', {
      filter: 'blur(24px)',
      stagger: {
        from: 'start',
        amount: 0.5,
        ease: 'none'
      },
      duration: 0.25,
      ease: 'none',
      onComplete: () => toggleActive(),
      onReverseComplete: () => toggleActive()
    }, '<')
    .from([ subheader.chars, header.chars ], {
      yPercent: 110,
      delay: 0.5,
      duration: 0.1,
      stagger: {
        from: 'start',
        amount: 0.1
      },
      ease: 'circ.out',
    }, '<')

  }

  function toggleActive() {
    section.classList.toggle('is-loading')
    console.log('team interactions disabled!')
  }

  // Turn off team interactions on end
  ScrollTrigger.create({
    trigger: section,
    start: 'bottom bottom',
    // markers: true,
    // onEnter: () => toggleActive(),
    // onLeaveBack: () => toggleActive()
  })

}