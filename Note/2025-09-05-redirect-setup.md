# Index.html 리다이렉트 설정 기록

## 작업 개요
- **날짜**: 2025년 9월 6일
- **작업자**: Claude Code (claude-sonnet-4-20250514)
- **요청자**: 사용자

## 작업 내용

### 1. 기존 상황
- 정적 HTML 포트폴리오 사이트가 루트 디렉토리에 있었음
- `index.html`, `styles.css`, `script.js` 파일들로 구성
- GitHub Pages로 배포 예정

### 2. Vite + React 환경 추가
- `react-portfolio/` 디렉토리에 React 앱 생성
- 하지만 실제로는 루트 디렉토리에 직접 생성됨
- Vite 개발 서버: `http://localhost:5173/`

### 3. 진입점 변경 작업
사용자가 GitHub Pages에서 React 앱이 메인으로 보이게 하고 싶어함

**수행한 작업들:**
1. **백업 시도**: `cp index.html index.html.backup` (실행됨)
2. **React 프로덕션 빌드**: `npm run build` → `dist/` 폴더 생성
3. **리다이렉트 HTML 생성**: 루트 `index.html`을 React 앱으로 리다이렉트하도록 교체

### 4. 최종 index.html 내용
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Redirecting...</title>
    <style>
        /* 로딩 스피너와 스타일링 */
        body { /* ... */ }
        .spinner { /* 회전 애니메이션 */ }
    </style>
    <script>
        window.location.href = './dist/';
    </script>
</head>
<body>
    <div class="loading">
        <div class="spinner"></div>
        <h2>포트폴리오로 이동 중...</h2>
        <p>잠시만 기다려주세요.</p>
        <p><a href="./dist/">수동으로 이동하기</a></p>
    </div>
</body>
</html>
```

## 결과
- **GitHub Pages 접속**: `username.github.io` → 자동으로 React 앱으로 리다이렉트
- **개발 환경**: `localhost:5173` (Vite 개발 서버)
- **프로덕션**: `./dist/` 폴더의 빌드된 React 앱

## 백업 상태
- **백업 시도**: `index.html.backup` 생성했으나 현재 파일이 보이지 않음
- **Git 히스토리**: `ca096cf` 커밋에 원본 HTML 포트폴리오 보존됨
- **기타 파일**: `styles.css`, `script.js` 그대로 유지

## 복구 방법
원본 HTML 포트폴리오 복구가 필요한 경우:
```bash
git show ca096cf:index.html > original-portfolio.html
```

## WSL 환경 이슈
- Node.js 버전 충돌 해결: `export PATH="/snap/bin:$PATH"`
- WSL Node.js v22.19.0, npm v10.9.3 사용
- 윈도우 npm과 충돌 방지