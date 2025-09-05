import { useState } from 'react';

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    'JavaScript', 'React', 'Node.js', 'Express',
    'MongoDB', 'Git', 'HTML/CSS', 'Python',
    'TypeScript', 'Vue.js', 'MySQL', 'Docker'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>소개</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              안녕하세요! 저는 사용자 중심의 웹 애플리케이션을 만드는 것을 좋아하는 개발자입니다.
              새로운 기술을 학습하고 문제를 해결하는 과정에서 성장의 즐거움을 느낍니다.
            </p>
            <p>
              깔끔하고 효율적인 코드를 작성하며, 팀워크와 소통을 중시합니다.
              사용자 경험을 개선하고 비즈니스 가치를 창출하는 서비스 개발에 관심이 많습니다.
            </p>
          </div>
          
          <div className="skills">
            <h3>기술 스택</h3>
            <div className="skill-tags">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="skill-tag"
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{
                    transform: hoveredSkill === skill ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;