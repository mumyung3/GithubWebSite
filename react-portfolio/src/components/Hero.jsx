import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = '안녕하세요! 저는 <span class="highlight">개발자</span>입니다';

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 50);
      }
    };

    const timer = setTimeout(typeWriter, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      const headerHeight = 70;
      const targetPosition = section.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      const headerHeight = 70;
      const targetPosition = section.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h2 dangerouslySetInnerHTML={{ __html: displayText }}></h2>
          <p>
            웹 개발을 통해 사용자에게 의미 있는 경험을 제공하고자 합니다.<br />
            새로운 기술을 배우고 성장하는 것을 즐깁니다.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn primary"
              onClick={scrollToProjects}
            >
              프로젝트 보기
            </button>
            <button 
              className="btn secondary"
              onClick={scrollToContact}
            >
              연락하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;