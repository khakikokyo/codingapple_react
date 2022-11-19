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
- `node_modules` : 라이브러리 코드 보관함
- `public` : static 파일 보관함
- `src` : 코드 짜는 곳
- `package.json` : 프로젝트 정보

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
state는 변동사항이 생기면 state를 사용하여 html도 자동으로 `재렌더링`
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

### onClick 이벤트 핸들러
1. 대문자
2. 중괄호{} 사용
3. 함수
```html
<div onClick={실행할함수}></div>

<div onClick={ function() { 실행할코드 } }></div>
<div onClick={ () => { 실행할코드 } }></div>
```
## state 변경하는 방법
- state 변경함수 사용
- 👍 클릭 시 good이 1씩 증가
```javascript
let [good, setGood] = useState(0);

<span onClick={ function() { setGood(good+1) } }>👍</span> { good }
```

## array, object state 변경하는 방법
array, object 자료를 다룰 때는 기존값은 보존해 주는 식으로 코드를 짜는게 좋은 관습이다. (원본보존)
```javascript
// <button> 클릭 시 '남자코트 추천' > '여자코트 추천'으로 변경
let [postTitle, setPostTitle] = useState(['남자코트 추천', '강남 우동맛집', '리액트독학']);

<button onClick={function() {
  let copy = [...postTitle];
  copy[0] = '여자코트 추천';
  setPostTitle(copy);
}}> 수정버튼 </button>
```
- state 변경함수 동작원리
  1. 기존state === 신규state 검사
  2. true > state 변경 X
- array/object 동작원리 (추가학습: javascript `reference data type`)
  1. 자바스크립트는 array/object 자료를 하나 만들면 램이라는 가상공간에 몰래 저장되고, 해당 자료의 변수엔 그 자료가 어디있는지 가리키는 화살표만 담겨있다.
  2. 즉, 변수에는 해당 자료를 가리키는 화살표만 저장된다.
  3. 때문에 같은 화살표를 가지고 있는 변수끼리는 등호로 비교해도 똑같다고 나온다.
  4. `[...]`: 화살표가 달라지는 문법

## spread operator 문법 [...]
array나 object 자료형 왼쪽에 붙일 수 있으며 뜻은 간단하게 **괄호를 벗겨달라** 는 뜻이다. (괄호벗기기용 연산자)<br/><br/>
또는 화살표가 다른 완전 **독립적인 array 복사본을 생성** 해줄 수도 있다.<br/>
독립적인 사본을 `shallow copy` 아니면 `deep copy`라고 한다.

## 활용 연습
가나다순 정렬
```javascript
let [postTitle, setPostTitle] = useState(['남자코트 추천', '강남 우동맛집', '리액트독학']);

<button onClick={function() {
  let copy = [...postTitle];
  copy.sort();
  setPostTitle(copy);
}}>가나다순 정렬</button>
```

## 컴포넌트(Component)
긴 HTML을 한 단어로 깔끔하게 치환해서 넣을 수 있는 문법
1. function 생성 (다른 함수 바깥에 생성 & 작명:영어대문자)
```javascript
function Modal() {}
```
2. return() 안에 html 담기
```javascript
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```
3. <함수명></함수명> 쓰기
```javascript
function App() {
  return (
    // <Modal></Modal>
    <Modal/>
  )
}
```
- 참고
```javascript
// return () 안에 html 병렬기입하려면,
// 1. 하나의 <div>로 감싸기
function Modal() {
  <div>
    <div></div>
    <div></div>
  </div>
}

// 2. fragment 문법: 의미없는 <div> 대신 사용가능
function Modal() {
  <>
    <div></div>
    <div></div>
  </>
}
```