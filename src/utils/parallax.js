import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function parallax() {

  const items = document.querySelectorAll('.showcase_item')
  const speeds = [0.9, 0.75, 0.8];

  items.forEach((item, index) => {
    if (speeds[index] !== undefined) {
      item.setAttribute('data-speed', speeds[index]);
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