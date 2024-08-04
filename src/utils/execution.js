import { gsap } from 'gsap'

export default function execution() {

  const items = document.querySelectorAll('.triangle-wrap > svg')
  const delay = 0.4
  const origin = '0% 50%'

  items.forEach(item => {
    gsap.set(item, {
      transformOrigin: origin,
    })
  })

  const timeline = gsap.timeline({
    repeat: -1,
    defaults: {
      duration: 1,
      ease: 'circ.inOut',
    },
  })

  for (let i = 5; i >= 3; i--) {
    timeline
      .to(items, { x: '+=100%' })
      .to(items[i], { scale: 0 }, '<')
      .to({}, { duration: delay })
  }

}
