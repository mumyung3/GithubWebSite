import { useState, useEffect } from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 70;
      const targetPosition = section.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a 
                className={activeSection === 'home' ? 'active' : ''}
                onClick={() => scrollToSection('home')}
              >
                홈
              </a>
            </li>
            <li>
              <a 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => scrollToSection('about')}
              >
                소개
              </a>
            </li>
            <li>
              <a 
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={() => scrollToSection('projects')}
              >
                프로젝트
              </a>
            </li>
            <li>
              <a 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => scrollToSection('contact')}
              >
                연락처
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;