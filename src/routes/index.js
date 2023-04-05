import Home from '../pages/Home';
import Home2 from '~/pages/Home2';
import About from '../pages/About';
import Service from '../pages/Service';
import Gallery from '../pages/Gallery';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Team from '~/pages/Team';

const publicRoutes = [
    { path: '/', comments: Home },
    { path: '/home2', comments: Home2 },
    { path: '/about', comments: About },
    { path: '/service', comments: Service },
    { path: '/gallery', comments: Gallery },
    { path: '/team', comments: Team },
    { path: '/blog', comments: Blog },
    { path: '/contact', comments: Contact },
];
const priveRoutes = [];
export { publicRoutes, priveRoutes };
