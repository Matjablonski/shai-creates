import { gsap } from "gsap";

export default function identity() {
  const eye = document.querySelector("#eye");
  const iris = document.querySelector("#iris");
  const pupil = document.querySelector("#pupil");

  const timeline = gsap.timeline({
    repeat: -1,
    defaults: {
      duration: 0.6,
      ease: "circ.inOut",
    },
  });

  timeline
    .to([iris, pupil], {
      xPercent: (i, target) => (target === iris ? -45 : -30),
      delay: 0.2,
    })
    .to([iris, pupil], {
      xPercent: 0,
    })
    .to([iris, pupil], {
      xPercent: (i, target) => (target === iris ? 45 : 30),
    })
    .to([iris, pupil], {
      xPercent: 0,
    })
    .to(eye, {
      clipPath: "ellipse(50% 0% at 50% 50%)",
      duration: 0.2,
    })
    .to(eye, {
      clipPath: "ellipse(50% 50% at 50% 50%)",
      duration: 0.2,
    });
}
