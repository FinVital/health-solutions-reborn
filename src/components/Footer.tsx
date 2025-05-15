
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Mission */}
          <div>
            <Link to="/" className="font-bold text-2xl mb-4 inline-block">
              Health Solutions
            </Link>
            <p className="mt-4 text-primary-foreground/90">
              Improving the health and wellbeing of individuals and communities through 
              innovative programs, advocacy, and research.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs/health-services" className="hover:text-white transition-colors">
                  Health Services
                </Link>
              </li>
              <li>
                <Link to="/programs/behavioral-health" className="hover:text-white transition-colors">
                  Behavioral Health
                </Link>
              </li>
              <li>
                <Link to="/programs/community-support" className="hover:text-white transition-colors">
                  Community Support
                </Link>
              </li>
              <li>
                <Link to="/programs/education" className="hover:text-white transition-colors">
                  Education & Training
                </Link>
              </li>
              <li>
                <Link to="/service-finder" className="hover:text-white transition-colors">
                  Service Finder Tool
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-white transition-colors">
                  Support Our Mission
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <p className="mb-4 text-primary-foreground/90">
              Subscribe to our newsletter to receive updates about our work and ways to get involved.
            </p>
            <form 
              className="mt-2" 
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing!');
              }}
            >
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="px-4 py-2 rounded text-foreground bg-white focus-visible"
                  aria-label="Email address"
                />
                <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Health Solutions. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
