
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { 
      title: 'About', 
      url: '/about',
      dropdown: [
        { title: 'Our History', url: '/about/history' },
        { title: 'Our Team', url: '/about/team' },
        { title: 'Leadership', url: '/about/leadership' },
        { title: 'Annual Reports', url: '/about/reports' },
      ] 
    },
    { 
      title: 'Programs', 
      url: '/programs',
      dropdown: [
        { title: 'Health Services', url: '/programs/health-services' },
        { title: 'Behavioral Health', url: '/programs/behavioral-health' },
        { title: 'Community Support', url: '/programs/community-support' },
        { title: 'Education', url: '/programs/education' },
      ]
    },
    { 
      title: 'Resources', 
      url: '/resources',
      dropdown: [
        { title: 'Research', url: '/resources/research' },
        { title: 'Publications', url: '/resources/publications' },
        { title: 'Media', url: '/resources/media' },
      ]
    },
    { 
      title: 'News', 
      url: '/news',
      dropdown: [
        { title: 'Latest News', url: '/news' },
        { title: 'Events', url: '/news/events' },
        { title: 'Press Releases', url: '/news/press-releases' },
      ]
    },
    { title: 'Contact', url: '/contact' },
  ];

  const toggleLanguageOptions = [
    { title: 'English', code: 'en' },
    { title: 'Español', code: 'es' },
    { title: 'Français', code: 'fr' },
    { title: '中文', code: 'zh' },
  ];
  
  const [currentLanguage, setCurrentLanguage] = useState(toggleLanguageOptions[0]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-primary font-bold text-2xl">Health Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center text-foreground/80 hover:text-primary transition-colors">
                        {item.title}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-48">
                      {item.dropdown.map((subItem) => (
                        <DropdownMenuItem key={subItem.title} asChild>
                          <Link to={subItem.url} className="w-full">
                            {subItem.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.url}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Language Selector and CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center">
                  {currentLanguage.title}
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {toggleLanguageOptions.map((option) => (
                  <DropdownMenuItem 
                    key={option.code} 
                    onClick={() => setCurrentLanguage(option)}
                    className={currentLanguage.code === option.code ? "bg-secondary" : ""}
                  >
                    {option.title}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="h-5 w-5" />
            </Button>

            <Link to="/donate">
              <Button className="health-cta">Donate</Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 p-4 overflow-y-auto md:hidden animate-slide-in">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.title} className="py-2 border-b">
                {item.dropdown ? (
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span className="font-medium">{item.title}</span>
                      <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="mt-2 ml-4 flex flex-col space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link 
                          key={subItem.title} 
                          to={subItem.url}
                          className="py-1 text-foreground/80"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link 
                    to={item.url}
                    className="block w-full font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4 flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <p className="text-sm text-foreground/70">Language</p>
                <div className="grid grid-cols-2 gap-2">
                  {toggleLanguageOptions.map((option) => (
                    <Button
                      key={option.code}
                      variant={currentLanguage.code === option.code ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentLanguage(option)}
                      className="justify-start"
                    >
                      {option.title}
                    </Button>
                  ))}
                </div>
              </div>
              
              <Link to="/donate" onClick={() => setMobileMenuOpen(false)}>
                <Button className="health-cta w-full">Donate</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 px-4 animate-fade-in">
          <div className="bg-white rounded-lg p-4 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Search</h2>
              <Button variant="ghost" size="icon" onClick={() => setSearchOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Search for programs, resources..."
                className="flex-1 border border-border rounded-l-md px-4 py-2 outline-none focus:border-primary"
                autoFocus
              />
              <Button className="rounded-l-none">Search</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
