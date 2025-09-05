# GitHub Actions 자동 배포 설정

## 작업 개요
- **날짜**: 2025년 9월 5일
- **작업자**: Claude Code (claude-sonnet-4-20250514)
- **요청자**: 사용자

## 문제 상황

### 초기 문제
- GitHub Pages에서 React 앱 접속 시 404 오류 발생
- 리다이렉트 설정: `index.html` → `./dist/`로 이동하도록 설정했으나 실패

### 원인 분석
1. **dist 폴더 부재**: 로컬에서 빌드한 `dist/` 폴더가 GitHub 저장소에 없음
2. **Git 추적 문제**: 빌드된 파일들이 Git에 커밋되지 않음
3. **배포 방식의 한계**: "Deploy from branch" 방식으로는 빌드 과정이 없음

## 해결 방법: GitHub Actions 자동 배포

### 선택한 접근법
기존의 수동 `dist/` 폴더 커밋 방식 대신 **GitHub Actions CI/CD 파이프라인** 구축

### 구현한 솔루션

#### 1. GitHub Actions 워크플로우 생성
파일: `.github/workflows/deploy.yml`

```yaml
name: Deploy React Portfolio to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write  
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'
          cache-dependency-path: 'react-portfolio/package-lock.json'
      
      - name: Install dependencies
        run: |
          cd react-portfolio
          npm ci
      
      - name: Build React app
        run: |
          cd react-portfolio
          npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './react-portfolio/dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### 2. 배포 방식 변경
- **기존**: Deploy from branch (main) - 정적 파일 직접 배포
- **변경**: GitHub Actions - 자동 빌드 후 배포

#### 3. 불필요한 파일 정리
- 로컬 `dist/` 폴더 삭제 (CI에서 자동 생성)
- Git 추적에서 빌드 파일 제외

## 장점

### 자동화 측면
- ✅ 푸시 시 자동 빌드 및 배포
- ✅ 수동 `dist/` 폴더 관리 불필요
- ✅ 빌드 실패 시 배포 중단 (안전성)

### 개발 효율성
- ✅ Git 히스토리 깔끔 유지 (빌드 파일 제외)
- ✅ 항상 최신 코드 기반 배포
- ✅ 여러 개발자 협업 시 충돌 방지

### 배포 안정성
- ✅ 일관된 빌드 환경 (Ubuntu, Node.js 22)
- ✅ 종속성 캐싱으로 빌드 속도 향상
- ✅ 단계별 실패 처리

## 설정 변경 사항

### GitHub Pages 설정
- Settings → Pages → Source: **"GitHub Actions"**로 변경 필요
- 기존 "Deploy from branch" 설정 비활성화

### 프로젝트 구조
```
/mnt/d/GithubWebSite/
├── .github/workflows/deploy.yml    # 새로 추가
├── react-portfolio/               # React 소스코드
│   ├── src/
│   ├── package.json
│   └── dist/                      # 로컬 빌드 (CI에서만 사용)
├── index.html                     # 리다이렉트 페이지
└── Note/                          # 작업 기록
```

## 배포 프로세스

1. **개발자 액션**: 코드 변경 후 `git push origin main`
2. **GitHub Actions 트리거**: 푸시 감지
3. **빌드 단계**: 
   - Node.js 22 환경 설정
   - 종속성 설치 (`npm ci`)
   - React 앱 빌드 (`npm run build`)
4. **배포 단계**: 빌드된 파일을 GitHub Pages에 자동 배포
5. **결과**: `username.github.io`에서 최신 React 앱 확인 가능

## 향후 개선 가능사항

- 빌드 캐싱 최적화
- 테스트 단계 추가
- 브랜치별 미리보기 배포
- 배포 알림 설정

이 방식으로 dist 폴더 ignore 문제를 우회하면서도 더욱 전문적인 CI/CD 파이프라인을 구축할 수 있었습니다.