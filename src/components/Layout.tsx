import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-300 bg-slate-950">
      {/* Top Bar */}
      <div className="bg-black text-slate-400 py-2 px-4 text-sm hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:704-256-5045" className="flex items-center hover:text-cyan-400 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              704-256-5045
            </a>
            <a href="mailto:getsemanim22@gmail.com" className="flex items-center hover:text-cyan-400 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              getsemanim22@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-cyan-400 tracking-wide">¡Se habla español!</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-slate-950/90 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex flex-col">
                <span className="text-2xl font-extrabold text-white leading-tight tracking-tight">GETSEMANI</span>
                <span className="text-sm font-bold text-cyan-500 tracking-widest uppercase">Multiservice</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-base font-semibold transition-all hover:text-cyan-400",
                    location.pathname === link.path ? "text-cyan-400 border-b-2 border-cyan-400 py-1" : "text-slate-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2.5 rounded-md font-bold transition-all shadow-[0_0_15px_rgba(8,145,178,0.4)] hover:shadow-[0_0_25px_rgba(8,145,178,0.6)]"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-cyan-400 focus:outline-none transition-colors"
              >
                {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 absolute w-full shadow-2xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block px-3 py-3 rounded-md text-base font-semibold transition-colors",
                    location.pathname === link.path
                      ? "bg-slate-800 text-cyan-400"
                      : "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-800">
                <a href="tel:704-256-5045" className="flex items-center px-3 py-3 text-base font-semibold text-slate-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5 mr-3 text-cyan-500" />
                  704-256-5045
                </a>
                <div className="px-3 py-3 text-base font-bold text-cyan-500">
                  ¡Se habla español!
                </div>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 block w-full text-center bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-3 rounded-md font-bold shadow-[0_0_15px_rgba(8,145,178,0.4)] transition-all"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-slate-950">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex flex-col mb-6">
                <span className="text-2xl font-extrabold text-white leading-tight tracking-tight">GETSEMANI</span>
                <span className="text-sm font-bold text-cyan-500 tracking-widest uppercase">Multiservice</span>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-slate-500">
                Family-owned and operated. Providing reliable commercial cleaning, electrical services, and pressure washing to our local community with strength and precision.
              </p>
              <p className="text-cyan-500 font-bold tracking-wide">¡Se habla español!</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 mr-4 text-cyan-500 shrink-0" />
                  <a href="tel:704-256-5045" className="hover:text-cyan-400 transition-colors font-medium">704-256-5045</a>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 mr-4 text-cyan-500 shrink-0" />
                  <a href="mailto:getsemanim22@gmail.com" className="hover:text-cyan-400 transition-colors font-medium">getsemanim22@gmail.com</a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-4 text-cyan-500 shrink-0" />
                  <span className="font-medium">Serving the local area<br/><span className="text-sm text-slate-500">(Call for specific locations)</span></span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-900 mt-16 pt-8 text-sm text-center text-slate-600 font-medium">
            <p>&copy; {new Date().getFullYear()} Getsemani Multiservice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
