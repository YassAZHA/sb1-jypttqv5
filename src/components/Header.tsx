import React from 'react';
import { Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './common/Logo';
import { useAuthContext } from '../contexts/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useAuthContext();

  const navItems = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "À propos" },
    { to: "/properties", label: "Biens" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-gray-800 hover:text-primary font-display text-base tracking-wide transition-colors relative group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
            <Link
              to={user ? "/admin" : "/login"}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <User className="h-4 w-4" />
              {user ? "Admin" : "Connexion"}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col space-y-6">
              {navItems.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-gray-800 hover:text-primary font-display text-lg tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                to={user ? "/admin" : "/login"}
                className="text-gray-800 hover:text-primary font-display text-lg tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {user ? "Admin" : "Connexion"}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}