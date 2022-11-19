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

## 동적인 UI 만드는 step
1. html css로 미리 디자인 완성
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
```css
.modal {
  margin-top: 20px;
  padding: 20px;
  background-color: #eee;
  text-align: left;
}
```
2. UI의 현재 상태를 state로 저장
```javascript
// 형식은 자유
let [modal, setModal] = useState(false);
```
3. state에 따라 UI가 어떻게 보일지 작성 (조건문 등)
```javascript
// 삼항연산자(ternary operator)
// JSX에서 if else 문법을 바로 사용할 수 없다.
// 하지만 if 문법 대신 삼항연사자는 JSX 중괄호 안에서도 사용이 가능하다.
{
  modal == true ? <Modal/> : null
}
```

- 활용) 글제목(postTitle) 클릭시 모달창 열고 닫기
```html
<div className="list">
  <h4 onClick={function() {
    setModal(!modal)
  }}>{ postTitle[2] }</h4>
</div>
```

## 맵(Map)
map() 사용법
1. array에 들어있는 자료의 개수만큼 그 안에 있는 코드를 반복실행해 준다.
```javascript
let array = [2,3,4]
array.map(function() {
  console.log(1);
});
// console.log(1)이 3번 실행된다.
```

2. 콜백함수에 파라미터 작성하면 그 파라미터는 array 안에 있던 모든 자료를 하나씩 출력해 준다. (소괄호 안에 있는 함수를 콜백함수라고 한다.)
```javascript
let array = [2,3,4]
array.map(function(a) {
  console.log(a);
});
// 2,3,4가 콘솔창에 출력된다.
```

3. return 오른쪽에 있는걸 array로 담아준다.
```javascript
let array = [2,3,4]
let newArray = array.map(function(a) {
  return a * 10;
});
console.log(newArray);
// newArray: [20,30,40]이 출력된다.
```

- 활용1) JSX 안에서 html을 반복생성<br/>
반복문으로 html 생성하면 key={html마다 다른숫자} 추가해줘야 한다.

```javascript
// i: 반복문이 돌 때 마다 0부터 1씩 증가하는 정수
{
  postTitle.map(function(a, i) {
    return (
      <div className="list" key={i}>
        <h4>{ a }</h4> or <h4>{ postTitle[i] }</h4>
        <p>11월 18일 발행</p>
      </div>
    )
  })
}
```
- 활용2) 👍 클릭 시 good이 1씩 증가
```javascript
{
  postTitle.map(function(a, i) {
    return (
      <div className="list" key={i}>
        <h4 onClick={function() { setModal(!modal) }}>
          { postTitle[i] }
          <span onClick={ function() {
            let copy = [...good];
            copy[i] = copy[i] + 1;
            setGood(copy);
          } }>👍</span> { good[i] }
        </h4>
        <p>11월 18일 발행</p>
      </div>
    )
  })
}
```

## props
자식 컴포넌트가 부모 컴포넌트에 있던 state를 사용하고 싶으면 `props` 문법을 사용하여 전송<br/>
props 전송은 부모 > 자식만 가능<br/>
state 만드는 곳은 state 사용하는 컴포넌트들 중 `최상위 컴포넌트`

### props로 부모 > 자식 state 전송하는 방법

1. 자식 컴포넌트를 사용하는 곳에서 <자식컴포넌트 작명 = {state이름}/>
```javascript
{
  modal == true ? <Modal postTitle={postTitle}/> : null
}
```
2. 자식 컴포넌트 만드는 function으로 가서 props라는 파라미터를 등록한 후 props.작명 사용
```javascript
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.postTitle[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```

- 활용) 글수정 버튼 클릭시 첫 글이 '여자코트 추천'으로 변경

```javascript
{
  modal == true ? <Modal postTitle={postTitle} setPostTitle={setPostTitle}/> : null
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.postTitle[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={function() {
        let copy = [...props.postTitle];
        copy[0] = '여자코트 추천';
        props.setPostTitle(copy);
      }}>글수정</button>
    </div>
  )
}
```

## props 응용: 상세페이지 만들기

1. 현재 UI 상태를 state로 만들기
```javascript
let [title, setTitle] = useState(0);
```

2. state에 따라서 UI가 어떻게 보일지 작성
```javascript
{
  modal == true ? <Modal title={title} postTitle={postTitle}/> : null
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{ props.postTitle[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```

3. onClick 기능구현
```javascript
{
  postTitle.map(function(a, i) {
    return (
      <div className="list" key={i}>
        <h4 onClick={function() { setModal(!modal); setTitle(i) }}>
          { postTitle[i] }
          <span onClick={ function() {
            let copy = [...good];
            copy[i] = copy[i] + 1;
            setGood(copy);
          } }>👍</span> { good[i] }
        </h4>
        <p>11월 18일 발행</p>
      </div>
    )
  })
}
```

## input

### input type

속성값 | 설명
--|--
text | type 속상의 기본값으로 한 줄로 된 텍스트 필드를 정의
button | 클릭할 수 있는 버튼을 정의
checkbox | 체크박스(checkbox)를 정의
color | 색을 선택할 수 있는 입력 필드(color picker)를 정의
date | 날짜를 선택할 수 있는 입력 필드를 정의 (year, month, day)
datetime-local | 날짜와 시간을 선택할 수 있는 입력 필드를 정의 (year, month, day, hour, minute)
email | 이메일 주소를 입력할 수 있는 입력 필드를 정의
file | 업로드할 파일을 선택할 수 있는 입력 필드와 '파일선택' 버튼을 정의
hidden | 사용자에게는 보이지 않는 숨겨진 입력 필드를 정의
image | 제출 버튼(submit button)으로 사용될 이미지를 정의
month | 날짜를 선택할 수 있는 입력 필드를 정의 (year, month)
number | 숫자를 입력할 수 있는 입력 필드를 정의
password | 비밀번호를 입력할 수 있는 입력 필드를 정의
radio | 라디오 버튼(radio button)을 정의
range | 슬라이드 바를 조정하여 범위 내의 숫자를 선택할 수 있는 입력 필드를 정의
reset | 리셋 버튼(reset button)을 정의
search | 검색어를 입력할 수 있는 텍스트 필드를 정의
submit | 제출 버튼(submit button)을 정의
tel | 전화번호를 입력할 수 있는 입력 필드를 정의
time | 시간을 선택할 수 있는 입력 필드를 정의 (hour, minute)
url | URL 주소를 입력할 수 있는 입력 필드를 정의
week | 날짜를 선택할 수 있는 입력 필드를 정의 (year, week)

## 이벤트 핸들러: 매우 많음

종류 | 설명
--|--
onChange={}/onInput={} | input 안에 값(타이핑)을 입력할 때마다 중괄호{} 안의 코드를 실행
onMouseOver={} | input에 마우스를 올렸을 때 중괄호{} 안의 코드를 실행
onScroll={} | input 안의 스크롤 바를 조작할 때마다 중괄호{} 안의 코드를 실행
onClick={} | button을 클릭할 때마다 중괄호{} 안의 코드를 실행

## 이벤트 객체

```javascript
// e: 작명, 지금 발생하는 이벤트에 관련한 여러 기능이 담겨있다.
// e.target.value: 이벤트 발생한 html 태그에 입력한 값
<input onChange={ function(e) { console.log(e.target.value) } } />

// state InputValue에 input 입력값 저장
// state 변경함수는 늦게 처리됨
<input onChange={ function(e) {
  setInputValue(e.target.value); // 비동기 처리
  console.log(inputValue);
}} />
```

## 이벤트 버블링
### 클릭 이벤트는 상위 html로 퍼진다.

```javascript
{
  postTitle.map(function(a, i) {
    return (
      <div className="list" key={i}>
        <h4 onClick={function() { setModal(!modal); setTitle(i) }}>
          { postTitle[i] }
          <span onClick={ function(e) {
            e.stopPropagation(); // 이벤트 버블링 막기
            let copy = [...good];
            copy[i] = copy[i] + 1;
            setGood(copy);
          } }>👍</span> { good[i] }
        </h4>
        <p>11월 18일 발행</p>
      </div>
    )
  })
}
```