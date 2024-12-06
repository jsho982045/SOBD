import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex space-x-8">
            {[
              { name: 'HOME', path: '/' },
              { name: 'TOUR', path: '/tour' },
              { name: "DON'T TELL SET", path: '/dont-tell-set' },
              { name: 'ABOUT', path: '/about' },
              { name: 'CONTACT', path: '/contact' }
            ].map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className={`relative group px-2 py-1 font-medium tracking-wider transition-all duration-300
                  ${location.pathname === path ? 'text-green-400' : 'text-white/80 hover:text-white'}
                `}
              >
                {name}
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 transform origin-left transition-all duration-300
                  ${location.pathname === path ? 'bg-green-400 scale-x-100' : 'bg-green-400/50 scale-x-0 group-hover:scale-x-100'}
                `} />
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            {[
              { icon: faYoutube, href: 'https://www.youtube.com/@sonofaboydad', hoverColor: 'hover:text-red-500' },
              { icon: faXTwitter, href: 'https://x.com/lilsasquatch66?lang=en', hoverColor: 'hover:text-blue-400' },
              { icon: faInstagram, href: 'https://www.instagram.com/lilsasquatch666/?hl=en', hoverColor: 'hover:text-pink-500' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white/70 ${social.hoverColor} transition-colors duration-300`}
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;