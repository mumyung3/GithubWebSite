# 포트폴리오 웹사이트

이 레포지토리는 GitHub Pages를 사용한 개인 포트폴리오 웹사이트입니다.

## 🌟 특징

- 반응형 디자인으로 모든 기기에서 최적화
- 깔끔하고 모던한 UI/UX
- 부드러운 스크롤 애니메이션
- 여러 프로젝트를 한 곳에서 관리

## 🚀 사용 방법

### 1. GitHub Pages 설정

1. GitHub 레포지토리 Settings > Pages로 이동
2. Source를 "GitHub Actions"로 설정
3. 코드를 `main` 브랜치에 푸시하면 자동 배포

### 2. 개인화하기

`index.html` 파일에서 다음 정보를 수정하세요:

- **이름**: "Your Name"을 실제 이름으로 변경
- **연락처**: 이메일, GitHub, LinkedIn 링크 수정
- **프로젝트**: 실제 프로젝트 정보로 업데이트
  - 프로젝트 제목과 설명
  - 기술 스택
  - GitHub 링크와 라이브 데모 링크
- **기술 스택**: `.skill-tag` 부분에서 본인의 기술 스택으로 수정

### 3. 프로젝트 추가하기

새로운 프로젝트를 추가하려면:

1. `.project-card` div를 복사
2. 프로젝트 정보 수정:
   ```html
   <div class="project-card">
     <div class="project-image">
       <img src="프로젝트이미지URL" alt="프로젝트명">
     </div>
     <div class="project-content">
       <h3>프로젝트 제목</h3>
       <p>프로젝트 설명</p>
       <div class="project-tech">
         <span class="tech-tag">사용기술1</span>
         <span class="tech-tag">사용기술2</span>
       </div>
       <div class="project-links">
         <a href="https://username.github.io/project-name" class="btn-link" target="_blank">라이브 데모</a>
         <a href="https://github.com/username/project-name" class="btn-link" target="_blank">GitHub</a>
       </div>
     </div>
   </div>
   ```

## 📁 파일 구조

```
/
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── script.js           # JavaScript 파일
├── .github/
│   └── workflows/
│       └── pages.yml   # GitHub Actions 배포 설정
└── README.md           # 이 파일
```

## 🎨 커스터마이징

### 색상 변경
`styles.css`에서 주요 색상을 변경할 수 있습니다:
- Primary Color: `#2563eb` 
- Gradient: `#667eea` to `#764ba2`

### 폰트 변경
현재 Inter 폰트를 사용하고 있습니다. `index.html`의 Google Fonts 링크를 변경하여 다른 폰트를 사용할 수 있습니다.

## 📱 반응형 지원

- 데스크톱 (1200px+)
- 태블릿 (768px - 1199px)  
- 모바일 (480px - 767px)
- 소형 모바일 (~479px)

## 🔧 개발

로컬에서 개발하려면 단순히 `index.html` 파일을 브라우저에서 열거나, Live Server를 사용하세요.

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 제공됩니다.# GithubWebSite
