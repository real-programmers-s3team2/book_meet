# 회의실 예약
개발자의 품격 3기 2팀



## 🚩 프로젝트 기간

	2021. 09. 04 - 12. 04 (3개월)



## 🚩 기술 스택

- Frontend
  - HTML5/CSS3
  - React
- Backend
  - Python
  - Django



## 🚩 Settings

### **Frontend**

환경변수는 `.env` 파일로 관리

#### Usage

`npm i` : 패키지 설치
`npm start`: 앱 실행



### Details

**프로젝트 생성 (CRA)**

**Extension 설치**

- Prettier: 코드 자동 정렬 도구
  - [참고: Options - Prettier](https://prettier.io/docs/en/options.html)

- ESLint: 자바스크립트 문법 유효성 검사 도구
  - [참고: ESLint 설정 살펴보기](https://velog.io/@kyusung/eslint-config-2)

**디렉터리 구조** 

```
📁 Project
ㄴ 📁 public
   ㄴ 📁 assets
ㄴ 📁 src
   ㄴ 📁 components
   	  ㄴ Router.jsx
   ㄴ 📁 functions	
   ㄴ 📁 pages
   	  ㄴ 📁 Login
   	  	 ㄴ index.jsx
   	  	 ㄴ styles.js
```

**절대경로 설정**

`import Login from '../pages/Login';`

➡ **`import Login from '@pages/Login';`**

<u>`jsconfig.json` 파일 참고</u>



**코드 스플리팅**

@loadable/component 패키지

[참고: 리액트 프로젝트 코드 스플리팅 정복하기](https://velog.io/@velopert/react-code-splitting)

