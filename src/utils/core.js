import { gsap } from 'gsap'

export default function core() {
  const wrap = document.querySelector('.circle-wrap')
  const stars = document.querySelectorAll('.star')

  gsap.set(stars[0], { zIndex: 2 })
  gsap.set(stars[1], { zIndex: 1 })

  const coreTl = gsap.timeline({
    repeat: -1,
    defaults: {
      duration: 1,
      ease: 'circ.inOut',
    },
  })
  coreTl
    .to(stars[1], {
      rotation: -45,
      scale: 4,
    })
    .from(
      stars[0],
      {
        rotation: 45,
        scale: 0,
      },
      '<+=0.1'
    )
    .set(stars[1], {
      zIndex: 0,
      rotation: 45,
      scale: 0,
    })
    .set(stars[1].querySelector('path'), {
      fill: '#C3F464',
    })
    .set(wrap, { backgroundColor: 'var(--swatch--neon-pickle)' })
    .set(stars[0], { zIndex: 0 })
    .to(stars[0], {
      rotation: -45,
      scale: 4,
    })
    .to(
      stars[1],
      {
        rotation: 0,
        scale: 1,
      },
      '<+=0.1'
    )
}
