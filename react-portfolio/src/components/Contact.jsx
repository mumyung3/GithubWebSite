const Contact = () => {
  const contactLinks = [
    {
      icon: "📧",
      label: "이메일",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: "🐱",
      label: "GitHub",
      value: "github.com/username",
      href: "https://github.com/username"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>연락처</h2>
        <div className="contact-content">
          <p>
            새로운 기회나 협업에 관심이 있으시다면 언제든지 연락해 주세요!<br />
            함께 의미 있는 프로젝트를 만들어가고 싶습니다.
          </p>
          <div className="contact-links">
            {contactLinks.map((contact, index) => (
              <a 
                key={index}
                href={contact.href} 
                className="contact-link"
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <span>{contact.icon}</span>
                <div>
                  <strong>{contact.label}</strong><br />
                  {contact.value}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;