import { ScrollTrigger } from 'gsap/ScrollTrigger'

import cursor from './components/cursor'
import footer from './components/footer'
import showcase from './components/showcase'
import specialties from './components/specialties'
import team from './components/team'
import lenis from './utils/lenis'
import './styles/style.css'

lenis()
cursor()
showcase()
specialties()
team()
footer()

ScrollTrigger.sort()
ScrollTrigger.refresh()