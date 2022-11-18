# REACT : blog

<img width="150" src="./public/img/react.png" /> <br/>
React blog 제작과 기본 문법에 대해 공부합니다.

# React 설치와 개발환경 세팅 (2022 ver)
1. Node.js 설치 (v18.11.0)
2. vscode 에디터 섩치

# Project 생성
[Create React App](https://create-react-app.dev/) 라이브러리 -
1. 작업용 폴더 생성
2. 터미널
```bash
$ npx create-react-add 프로젝트명
```
3. vscode 프로젝트 폴더 오픈

# Project file 설명
- node_modules : 라이브러리 코드 보관함
- public : static 파일 보관함
- src : 코드 짜는 곳
- package.json : 프로젝트 정보

# JSX 문법
.js 파일에서 쓰는 html 대용품
1. class > className
```html
<div className="black-nav"></div>
```
2. 데이터바인딩 > 중괄호{}
```javascript
let post = '강남 우동 맛집';

<div>{ post }</div>
```
3. style > style={{스타일명:'값'}}
```javascript
<div style={ {color: 'red', fontSize: '16px'} }>글제목</div>
```

# State
state는 변동사항이 생기면 state를 사용하여 html도 `자동으로 재렌더링`
1. UI 기능 개발 편리
2. 부드러운 사이트 동작
- `state` 만드는 방법
```javascript
// 1. import
import { useState } from 'react'

// 2. let[작명1, 작명2] = useState(보관할 자료)
// 작명1-a: state에 보관했던 자료
// 작명2-b: state 변경을 도와주는 함수
let [a, b] = useState('남자 코트 추천');
```
- 참고) Destructuring 문법
```javascript
let num = [1, 2];
let [a, b] = [1, 2];
```