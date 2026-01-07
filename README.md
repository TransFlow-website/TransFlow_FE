# TransFlow Frontend

번역 웹 서비스 프론트엔드

## 기술 스택

- **React 18.3** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빠른 개발 서버 및 빌드 도구
- **React Router** - 클라이언트 사이드 라우팅
- **Axios** - HTTP 클라이언트

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

개발 서버가 `http://localhost:3000`에서 실행됩니다.

### 3. 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

### 4. 프로덕션 프리뷰

```bash
npm run preview
```

## 프로젝트 구조

```
TransFlow_FE/
├── src/
│   ├── pages/           # 페이지 컴포넌트
│   │   ├── Home.tsx     # 홈 페이지
│   │   └── Translation.tsx  # 번역 페이지
│   ├── App.tsx          # 메인 앱 컴포넌트
│   ├── main.tsx         # 엔트리 포인트
│   └── index.css        # 글로벌 스타일
├── public/              # 정적 파일
├── index.html           # HTML 템플릿
├── package.json         # 의존성 관리
├── tsconfig.json        # TypeScript 설정
└── vite.config.ts       # Vite 설정
```

## 주요 기능

- 🏠 **홈 페이지**: 서비스 소개 및 주요 기능 안내
- 🌐 **번역 페이지**: 실시간 번역 인터페이스
  - 다국어 지원 (한국어, 영어, 일본어, 중국어, 스페인어, 프랑스어)
  - 언어 교환 기능
  - 텍스트 입력 카운터

## 개발 스크립트

- `npm run dev` - 개발 서버 시작
- `npm run build` - 프로덕션 빌드
- `npm run preview` - 빌드된 앱 프리뷰
- `npm run lint` - ESLint 실행

## 환경 변수

프로젝트 루트에 `.env` 파일을 생성하고 다음 변수를 설정하세요:

```env
VITE_API_URL=http://localhost:8000/api
VITE_API_KEY=your_api_key_here
```

## TODO

- [ ] 백엔드 API 연동
- [ ] 번역 히스토리 기능
- [ ] 즐겨찾기 번역 저장
- [ ] 다크모드 지원
- [ ] 음성 입력 기능
- [ ] 파일 번역 기능

## 라이선스

MIT
