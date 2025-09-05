import { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "E-커머스 웹사이트",
      description: "React와 Node.js를 이용한 전자상거래 플랫폼입니다. 사용자 인증, 결제 시스템, 상품 관리 등의 기능을 포함합니다.",
      image: "https://via.placeholder.com/400x250/2563eb/ffffff?text=E-Commerce+Website",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "날씨 앱",
      description: "현재 위치 기반 날씨 정보를 제공하는 반응형 웹 애플리케이션입니다. OpenWeatherMap API를 활용했습니다.",
      image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Weather+App",
      technologies: ["JavaScript", "HTML/CSS", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "할 일 관리 앱",
      description: "Vue.js로 개발한 할 일 관리 애플리케이션입니다. 드래그 앤 드롭, 카테고리 분류, 로컬 스토리지 저장 기능을 지원합니다.",
      image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Todo+App",
      technologies: ["Vue.js", "Vuex", "Local Storage", "CSS3"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "블로그 플랫폼",
      description: "Next.js와 TypeScript로 구축한 개인 블로그 플랫폼입니다. 마크다운 에디터와 댓글 시스템을 포함합니다.",
      image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Blog+Platform",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>프로젝트</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => cardRefs.current[index] = el}
              data-index={index}
              className={`project-card ${visibleCards.has(index) ? 'animate' : ''}`}
              style={{
                transitionDelay: `${index * 0.1}s`,
                opacity: visibleCards.has(index) ? 1 : 0,
                transform: visibleCards.has(index) ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} className="btn-link" target="_blank" rel="noopener noreferrer">
                    라이브 보기
                  </a>
                  <a href={project.githubUrl} className="btn-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;