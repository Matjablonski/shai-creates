import cursor from './components/cursor';
import footer from './components/footer';
import showcase from './components/showcase';
import specialties from './components/specialties';
import initLenis from './utils/lenis';
import './styles/style.css';

const lenis = initLenis();
showcase();
specialties(lenis);
footer();
cursor();