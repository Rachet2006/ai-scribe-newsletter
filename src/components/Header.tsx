
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSubscribe = () => {
    const subscribeSection = document.getElementById('subscribe');
    if (subscribeSection) {
      subscribeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/921c0be1-4a56-429b-93ab-bd70d0c51df0.png" alt="NextTech Brief logo" className="w-8 h-8" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              The NextTech Brief
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <a href="#newsletter" className="text-foreground hover:text-primary transition-colors font-medium">
              Newsletter
            </a>
            <Link to="/archive" className="text-foreground hover:text-primary transition-colors font-medium">
              Archive
            </Link>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <Button
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg"
              onClick={scrollToSubscribe}
            >
              Subscribe
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 bg-background/95">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <a href="#newsletter" className="text-foreground hover:text-primary transition-colors font-medium">
                Newsletter
              </a>
              <Link to="/archive" className="text-foreground hover:text-primary transition-colors font-medium">
                Archive
              </Link>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <Button
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full shadow-lg"
                onClick={scrollToSubscribe}
              >
                Subscribe
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
