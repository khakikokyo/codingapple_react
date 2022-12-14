# REACT - SHOP

<img width="150" src="./public/img/react.png" /><br/>
React `쇼핑몰` 제작과 기본 문법에 대해 공부합니다.

# React-Bootstrap 라이브러리

[React-Bootstrap](https://react-bootstrap.github.io/)

1. Get started > Installation
```bash
$ npm install react-bootstrap bootstrap
```

2. CSS import or link
```javascript
// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
```
```html
<!-- index.html > <head> -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossorigin="anonymous"
/>
```

### 사용법

```javascript
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Button variant="primary">Primary</Button>
    </div>
  );
}

// ClassName=""을 통해 CSS로 커스터마이징 가능
```

## 이미지 & public 폴더 이용

1. src > img 폴더의 이미지 사용
```javascript
import bg from './img/bg.png';

<div className="main-bg" style={{ backgroundImage: 'url('+ bg +')' }}></div>
```

2. public 폴더의 이미지 사용 (권장되는 방식)
```html
<img src={process.env.PUBLIC_URL + '/bg.png'} />
```

## import / export 문법

1. `export`: 내보내기
```javascript
// 1개
export default 변수명;

// 여러 개
export {변수1, 변수2};
```

2. `import`: 가져와서 사용하기
```javascript
// 1개
import 작명 from '경로';

// 여러 개
import {변수1, 변수2} from '경로';
```

3. import / export 사용
```javascript
// export
let data = [
  {
    id : 0,
    title : "White and Black",
    content : "Born in France",
    price : 120000
  },

  {
    id : 1,
    title : "Red Knit",
    content : "Born in Seoul",
    price : 110000
  },

  {
    id : 2,
    title : "Grey Yordan",
    content : "Born in the States",
    price : 130000
  }
];

export default data;
```

```javascript
// import
import data from './data.js';
```

## 컴포넌트
### 상품 레이아웃

```javascript
<div className="container">
  <div className="row">
    <Card shose={shose[0]} i={1} />
    <Card shose={shose[1]} i={2} />
    <Card shose={shose[2]} i={3} />
  </div>
</div>

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ props.i +'.jpg'} alt="shoes1" />
      <h4>{ props.shose.title }</h4>
      <p>{ props.shose.price }</p>
    </div>
  )
}
```

### map() 사용하기
```javascript
{
  shoes.map(function(a, i) {
    return(
      <Card shoes={shoes[i]} i={i} />
    )
  })
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} alt="shoes1" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}
```

# 리액트 라우터 (React Router)
'페이지 이동' 기능

1. 라우팅: 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것
2. 리액트 라우터(React Router)
    - 사용자가 입력한 주소를 감지하는 역할을 하며, 여러 환경에서 동작할 수 있도록 여러 종류의 라우터 컴포넌트를 제공
    - 이중 가장 많이 사용하는 라우터 컴포넌트는 `BrowserRouter`와 `HashRouter` 이다.
3. 종류
    - `BrowserRouter`: HTML5를 지원하는 브라우저의 주소를 감지
    - `HashRouter`: 해시 주소(html://aaa.com/#test)를 감지
4. 설치
```bash
$ npm install react-router-dom@6
```

```javascript
// index.html
import { BrowserRouter } from 'react-router-dom';

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

5. 라우터로 페이지 나누기
```javascript
// App.js
import { Routes, Route, Link } from 'react-router-dom';

// <Route path="/url경로" element={<보여줄html>} />
<Routes>
  <Route path="/" element={<div>메인페이지</div>} />
  <Route path="/detail" element={<div>상세페이지</div>} />
  <Route path="/about" element={<div>어바웃페이지</div>} />
</Routes>
```

6. 페이지 이동 버튼
```javascript
<Link to="/">Home</Link>
<Link to="/detail">Page</Link>
```

6. 6-1. 페이지 이동 도와주는 함수
```javascript
import { useNavigate } from 'react-router-dom';

let navigate = useNavigate();

<Nav.Link onClick={function() { navigate('/') }}>Home</Nav.Link>
<Nav.Link onClick={function() { navigate('/detail') }}>Page</Nav.Link>

// 참고
// 앞으로 한페이지 이동
<Nav.Link onClick={function() { navigate(1) }}>Home</Nav.Link>
// 뒤로 한페이지 이동
<Nav.Link onClick={function() { navigate(-1) }}>Home</Nav.Link>
```

7. 404페이지
```javascript
// <Route path="*"> 맨 밑에 생성
// path="*" 경로는 모든 경로를 뜻하며, 정상 경로가 아닌 다른 경로의 페이지로 접속시 '*' 경로로 안내
<Route path="*" element={<div>없는 페이지입니다.</div>} />
```

8. `Nested Routes`: 서브 경로 생성
```javascript
<Route path="/about" element={<About />}>
  <Route path="/about/member" element={<About />} />
  <Route path="/about/location" element={<About />} />
</Route>
```

9. Outlet
```javascript
import { Outlet } from 'react-router-dom';

<Route path="/about" element={<About />}>
  <Route path="/about/member" element={<div>member</div>} />
  <Route path="/about/location" element={<div>location</div>} />
</Route>

// <Outlet> 위치지정
function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}
```

10. `URL파라미터` 문법: 페이지를 여러 개 만들고 싶을 때 사용
```javascript
<Route path="/detail/:id" element={<Detail shoes={shoes} />} />
```

11. `useParams()`: /:url파라미터 자리에 유저가 입력한 값을 가져올 수 있다.
```javascript
// Detail.js
import { useParams } from 'react-router-dom'

<h4 className="pt-5">{ props.shoes[id].title }</h4>
<p>{ props.shoes[id].content }</p>
<p>{ props.shoes[id].price }원</p>
```

# 컴포넌트의 Lifecycle
1. mount(생성)
2. update(재렌더링)
3. unmount(삭제)

- `Lifecycle hook`: 요청/간섭
    - 어러운 연산
    - 서버에서 데이터 가져오는 작업
    - 타이머 장착
```javascript
import { useEffect } from 'react';

// 콜백함수 추가해서 안에 코드를 적으면 그 코드는 컴포넌트가 mount & update 시 실행
useEffect(function() {});
```

- 활용 예제
```javascript
// Detail 페이지 안에 노란 박스 생성 후
// Detail 페이지 방문 후 2초 뒤에 박스가 사라지는 UI
let [alert, setAlert] = useState(true);

// useEffect()의 두번째 파라미터로 [] 넣을 수 있는데, []에 변수나 state 같은 것들을 넣을 수 있다.
// 그럴 경우 []에 있는 변수나 state가 변할 때만 useEffect 안의 코드를 실행해준다.
// (참고) []안에 state를 여러 개 넣을 수 있다.

// [] 안에 아무것도 넣지 않을 경우: 컴포넌트 mount시 1회만 실행
useEffect(function() {
  let timer = setTimeout(function() { setAlert(false) }, 2000);

  return function() {
    clearTimeout(timer); // 타이머 제거해 주는 함수
  }
}, []);

<div>
  {
    alert == true
    ? <div className="alert alert-warning">
        2초 이내 구매시 할인
      </div>
    : null
  }
</div>
```
### 정리
```javascript
useEffect(function() {  }); // 1. 재렌더링마다 코드를 실행
useEffect(function() {  }, []); // 2. mount시 1회 코드를 실행
useEffect(function() {
  return function() {  } // 3. unmount시 1회 코드를 실행
});
useEffect(function() {  }, [state명]); // 4. 특정 state 변경시에만 실행
```

# 서버
#### 유저가 데이터를 요청하면 데이터를 보내주는 프로그램
서버에 데이터 요청
1. 어떤 데이터인지 (URL 형식)
2. 요청 밥법 (GET or POST)
    - `GET`: 데이터 가져오기
    - `POST`: 데이터 보내기

## AJAX
### GET 요청
1. XMLHttpRequest
2. fetch()
```javascript
fetch('https://codingapple1.github.io/shop/data2.json')
.then(result => result.json()) // JSON > array/object 변환과정 필요
.then(data => {})
```

3. axios - 외부 라이브러리
```bash
$ npm install axios
```
- AJAX 요청하는 법 (axios)
1. import
2. axios.get('url') > get 요청
3. 요청 실패시 .catch() 예외처리
```javascript
import axios from 'axios';

<button onClick={function() {
  axios.get('https://codingapple1.github.io/shop/data2.json')
  .then((result)=>{
    console.log(result.data)
  })
  .catch(()=>{
    console.log('실패했습니다.')
  })
}}>더보기</button>
```

- 활용 예제
```javascript
// 서버에서 데이터를 가져와서 html 3개 생성
<button className="btn btn-more" onClick={function() {
  axios.get('https://codingapple1.github.io/shop/data2.json')
  .then((result)=>{
    let copy = [...shoes, ...result.data]
    setShoes(copy)
  })
  .catch(()=>{
    console.log('실패했습니다.')
  })
}}>더보기</button>
```

### 동시에 AJAX 요청 여러 개 하기
```javascript
Promise.all( [axios.get('URL1'), axios.get('URL2')] )
```

- 활용 예제
1. data2.json, data3.json GET 요청
2. 상품없음 alert창 띄우기
```javascript
let [count, setCount] = useState(0);

<button className="btn-more" onClick={function() {
  Promise.all([
    axios.get('https://codingapple1.github.io/shop/data2.json'),
    axios.get('https://codingapple1.github.io/shop/data3.json')
  ])
  .then((result) => {
    setCount(count + 1);
    if(count == 0) {
      let copy = [...shoes, ...result[0].data];
      setShoes(copy);
    } else if(count == 1) {
      let copy = [...shoes, ...result[1].data];
      setShoes(copy);
    } else {
      alert('더 이상 상품이 없습니다.');
    }
  })
  .catch(()=>{
    alert('요청에 실패했습니다.');
  })
}}>더보기 ▽</button>
```

### POST 요청
서버로 데이터 전송
```javascript
axios.post('URL', {name : 'kim'});
```

# 탭 UI 만들기
```javascript
import { Nav } from 'react-bootstrap'

// UI의 현재 상태를 저장할 state 생성
let [tab, setTab] = useState(0);

// html css로 디자인 완성(react-bootstrap 사용)
<Nav variant="tabs" defaultActiveKey="link0">
  <Nav.Item>
    <Nav.Link eventKey="link0" onClick={()=>{ setTab(0) }}>버튼0</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link1" onClick={()=>{ setTab(1) }}>버튼1</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link2" onClick={()=>{ setTab(2) }}>버튼2</Nav.Link>
  </Nav.Item>
</Nav>
<TabContent tab={tab} />

// state에 따라서 UI가 어떻게 보일지 작성 (컴포넌트)
function TabContent(props) {
  if(props.tab == 0) {
    return <div>내용0</div>
  } else if(props.tab == 1) {
    return <div>내용1</div>
  } else if(props.tab == 2) {
    return <div>내용2</div>
  }
}
```
```javascript
// if문 대신 -
function TabContent(props) {
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab]
}
```

#### props 팁
```javascript
function TabContent({props1, props2}) {
  return ()
}
```

# 전환 애니메이션 (transition)
1. 애니메이션 동작 전 스타일을 담을 className 생성
```css
.start {
  opacity: 0;
}
```
2. 애니메이션 동작 후 스타일을 담을 className 생성
```css
.end {
  opacity: 1;
}
```
3. transition 속성 추가
```css
.end {
  opacity: 1;
  transition: opacity 2s;
}
```
4. 사용 (원할 때 end 부착)
- `automatic batch` 기능 (react v18 -)
- state 변경함수들이 연달아서 여러 개 처리되어야 하면, state 변경함수를 모두 처리하고 마지막에 한 번만 재렌더링
```javascript
function TabContent(props) {

  let [fade, setFade] = useState('');

  useEffect(()=>{
    // automatic batching을 막아 주기 위해 setTimeout(약간의 시간차를 둠) 사용 (=flushSync())
    let a = setTimeout(()=>{ setFade('end') }, 10);

    return ()=>{ // 먼저 실행
      clearTimeout(a);
      setFade('');
    }
  }, [props.tab]); // 특정 state 변경시에만 실행

  return (
    <div className={'start ' + fade}>
      { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab] }
    </div>
  )
}
```

# 컴포넌트 props

1. 컴포넌트가 여러 개 중첩되어 있는 경우 부모 > 자식 간의 props를 각각 전송해야 한다.
2. props를 사용하지 않을 경우 -
    1. `Context API` (리액트 기본문법): 컴포넌트들이 props 전송없이 state 공유가능
        - 단점 -
        1. state 변경시 쓸데없는 컴포넌트까지 재렌더링 (비효율적, 성능이슈)
        2. 나중에 컴포넌트 재사용이 어려움
        3. useContext()를 쓰고 있는 컴포넌트는 나중에 다른 파일에서 재사용할 때 Context를 import 하는게 불편
        4. 그래서 redux 같은 외부 라이브러리를 많이 사용한다.
    2. `Redux` 등 외부 라이브러리 : 컴포넌트들이 props 전송없이 state 공유가능

### Context API
```javascript
// App.js
// Context API
import { createContext } from 'react'

// 1. createContext(): context 1개 생성 (=state 보관함)
export let Context1 = createContext(); // Detail.js에서 사용하기 위해 export
let [재고] = useState([10, 11, 12]);

// 2. <Context>로 원하는 컴포넌트 감싸기
// 3. value={{state1, state2 ...}}
<Route path="/detail/:id" element={
  <Context1.Provider value={{ 재고, shoes }}>
    <Detail shoes={shoes} />
  </Context1.Provider>
} />
```

```javascript
// Detail.js
// 1. state 사용: Context를 import
import { Context1 } from './../App.js';
function Detail(props) {
  let {재고, shoes} = useContext(Context1); // 보관함(createContext()) 해체해 주는 함수

  return (
    {재고} // props 전송없이도 App에 있던 state가 잘 출력됨
  )
}

function TabContent(props) {
  let {재고, shoes} = useContext(Context1);

  return (
    {재고}
  )
}
```

## Redux
#### 장바구니 페이지 만들기
```javascript
// App.js Cart 컴포넌트 import
import Cart from './pages/Cart.js';

// App.js <Route> cart 페이지 추가
<Route path="/cart" element={ <Cart/> } />

// Cart.js 컴포넌트 파일 생성 (react-bootstrap 활용)
import { Table } from 'react-bootstrap';

function Cart() {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Cart;
```

### Redux 설치 & 셋팅
```bash
# "react", "react-dom" (v18.1.x -)
$ npm install @reduxjs/toolkit react-redux
```

1. store.js 파일 생성 & 코드 기재
```javascript
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {}
});
```

2. index.js 선언
```javascript
import { Provider } from 'react-redux';
import store from './store.js';

// stroe.js에 있던 state 전부 사용가능
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
```

### Redux store에 state 보관하는 방법
1. createSlice()로 state 생성
```javascript
import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user', // state 이름
  initialState: 'kim' // state 값
});
```
2. configureStore() 안에 등록
```javascript
export default configureStore({
  reducer: {
    user: user.reducer // 작명: createSlice(변수명).reducer
  }
});
```

### Redux store에 있던 state 가져다 사용하는 법
```javascript
// Cart.js
import { useSelector } from 'react-redux';

function Cart() {
  let a = useSelector((state)=>{ return state }); // store에 있던 모든 state
  // let a = useSelector((state)=>{ return state.user }); // store의 state 중 user만 저장
}
```

#### Redux 활용 예제
1. stroe.js에 장바구니 데이터 보관
```javascript
let cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ]
});

export default configureStore({
  reducer: {
    cart: cart.reducer
  }
});
```
2. Cart.js에 데이터 바인딩
```javascript
let state = useSelector((state)=>{ return state });

<tbody>
  {
    state.cart.map((a, i)=>{
      return (
        <tr key={i}>
          <td>{ state.cart[i].id }</td>
          <td>{ state.cart[i].name }</td>
          <td>{ state.cart[i].count }</td>
          <td>안녕</td>
        </tr>
      )
    })
  }
</tbody>
```

### Redux의 state 변경하는 방법

```javascript
// store.js
// initialState: 'kim' > 'john kim'
// 1. state 수정해 주는 함수 만들기
let user = createSlice({
  name: 'user',
  initialState: 'kim',
  reducers: {
    // initialState: 'kim' > 'john kim'으로 수정해 주는 함수
    changeName(state) { // 기존 state
      return 'john ' + state
    }
  }
});

// 또는 -
reducers: {
  changeName() {
    return 'john kim'
  }
}

// 2. 만든 함수를 가져다 쓸 수 있게 export
export let { changeName, 함수2 ... } = user.actions;
```

```javascript
// Cart.js
// 3. 만든 함수를 import 해서 사용
import { useDispatch } from 'react-redux';

// store.js로 요청 보내주는 함수
let dispatch = useDispatch();

// dispatch(state변경함수())
<td><button onclick={()=>{
  dispatch(changeName())
}}>+</button></td>
```

### Redux: array/object인 경우 state 변경하는 방법

```javascript
// Cart.js
import { changeName, increase } from '../store';

<h6>{ state.user.name } { state.user.age }의 장바구니</h6>
<button onClick={()=>{ dispatch(increase()) }}>버튼</button>
```

```javascript
// store.js
// array/object의 경우 직접 수정해도 state가 변경된다.
let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      state.name = 'park'
    },
    increase(state) {
      state.age += 1
    }
  }
});
export let { changeName, increase } = user.actions;
```

#### state 변경함수가 여러 개 필요한 경우
```javascript
// store.js
let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    increase(state, action) { // 파라미터
      state.age += action.payload
    }
  }
});

// Cart.js
<button onClick={()=>{ dispatch(increase(100)) }}>버튼</button>
```

#### store 파일 분할
1. store 폴더 > userSlice.js 생성
```javascript
import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      state.name = 'park'
    },
    increase(state) {
      state.age += 1
    }
  }
});
export let { changeName, increase } = user.actions;

export default user;
```

2. store.js import
```javascript
import user from './store/userSlice.js';
```

### 활용 예제
1. 버튼을 누르면 수량 + 1 기능 만들기
```javascript
// store.js
let cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers: {
    addCount(state, action) {
      let num = state.findIndex((a)=>{ return a.id === action.payload }) // 해당하는 id의 수량 +1
      state[num].count++
    }
  }
});
```
```javascript
// Cart.js
import { addCount } from '../store.js';

<button onClick={()=>{
  dispatch(addCount(state.cart[i].id));
}}>+</button>
```

2. Detail 페이지에서 주문하기 버튼 클릭시 장바구니에 상품 추가하기
```javascript
// store.js 수정함수 생성
let cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers: {
    addCount(state, action) {
      let num = state.findIndex((a)=>{ return a.id === action.payload })
      state[num].count++
    },
    addItem(state, action) {
      state.push(action.payload);
    }
  }
});
export let { addCount, addItem } = cart.actions;
```

```javascript
// Detail.js
import { addItem } from './../store.js';
import { useDispatch } from 'react-redux';

let dispatch = useDispatch();

<button className="btn btn-danger" onClick={()=>{
  dispatch(addItem({
    id: foundProduct.id,
    name: foundProduct.title,
    count: 1
  }))
}}>주문하기</button>
```

# localStorage

- key : value 형태로 저장
- 최대 5MB까지 문자만 저장가능
- 사이트 재접속해도 데이터가 남아있음 (브라우저 청소하면 삭제)

1. localStorage 문법
```javascript
// 1. 데이터 저장
localStorage.setItem('이름', '값')

// 2. 데이터 출력(읽기)
localStorage.getItem('이름')

// 3. 데이터 삭제
localStorage.removeItem('age')

// 4. 데이터 수정하는 문법은 없음
// 저장된 데이터를 꺼내서 수정하고 다시 저장
```

2. array/abject 저장 > JSON
```javascript
function App() {
  let obj = { name: 'kim' }
  
  // 1. array/object > JSON 변환 (JSON.stringify())
  localStorage.setItem('data', JSON.stringify(obj));

  // 2. JSON > array/object 변환 (JSON.parse())
  let data = localStorage.getItem('data');
  JSON.parse(data);
}
```

3. 최근 본 상품 기능 만들기
```javascript
// App.js
useEffect(() => {
  if(localStorage.getItem('watched') === null) {
    localStorage.setItem('watched', JSON.stringify([]));
  }
}, []);
```

```javascript
// Detail.js
useEffect(function() {
  let watched = JSON.parse(localStorage.getItem('watched'));
  watched.push(foundProduct.id);
  watched = new Set(watched); // 중복 허용 X
  watched = Array.from(watched); // 다시 array로 변환
  if(watched.length > 2) { watched.shift() } // watched의 길이가 2 이상인 경우 뒤에서부터 배열 삭제
  localStorage.setItem('watched', JSON.stringify(watched));
}, []);
```

```javascript
// Watched.js
function Watched(props) {

  // 뒤에서부터 watched 읽기
  let watchedAll = JSON.parse(localStorage.getItem('watched')).reverse();

  return (
    <div className="watched">
      <p>최근 본 상품</p>
      {
        watchedAll !== null
        ? watchedAll.map((watched, i)=>{
            return (
              <div className="watched-item" key={i}>
                <img src={`https://codingapple1.github.io/shop/shoes${watched+1}.jpg`}
                alt="item" onClick={()=>{ props.navigate('detail/'+watchedAll[i]) }} />
                <p className="title">{ props.shoes.title }</p>
              </div>
            )
          })
        : null
      }
    </div>
  )
}

export default Watched;
```

## 성능개선 - lazy import

리액트로 만든 Single Page Application의 특징은 html, js 파일이 하나만 생성되어 파일 사이즈가 크다.<br/>
그래서 리액트 사이트들은 첫 페이지 로딩속도가 매우 느릴 수 있다.<br/>

개선하기 위한 방법으로는 js 파일을 잘게 쪼개야 하는데, 해당 방식으로는 lazy import 방식이 있다.<br/>
import한 컴포넌트가 메인 페이지에서 전혀 보이지 않는 컴포넌트들을 아래와 같은 문법으로 import 하는 방식이다.

```javascript
// App.js
import { lazy } from 'react';

// 전
import Detail from './pages/Detail.js';
import Cart from './pages/Cart.js';

// 후: 해당 컴포넌트가 필요해지면 import, 그래서 첫 페이지 로딩속도를 향상시킬 수 있다.
const Detail = lazy( () => import('./pages/Detail.js') );
const Cart = lazy( () => import('./pages/Cart.js') );
```
lazy를 사용하면 해당 컴포넌트 로드까지 지연시간이 발생할 수 있어,<br/>
1. Suspense import
2. 해당하는 컴포넌트(Detail/Cart)를 감싸주면, 컴포넌트가 로딩중일 때 대신 보여줄 html 작성도 가능
3. 해당하는 컴포넌트 말고, <Routes> 전부를 감싸도 된다.

```javascript
import { Suspense } from 'react';

<Suspense fallback={<div>로딩중</div>}>
  <Routes><Routes>
</Suspense>
```

# 성능개선 - 재렌더링 막는 memo, useMemp

컴포넌트가 재렌더링되면 자식 컴포넌트는 항상 함께 재렌더링 된다.<br/>
평소에는 별 문제가 없겠으나, 자식 컴포넌트가 렌더링 시간이 오래 걸리는 무거운 컴포넌트인 경우, 자식 컴포넌트의 재렌더링을 막는 함수를 사용한다.<br/>
사실 재렌더링을 막는다기 보다는, 특정 상황에서만 재렌더링, props가 변할 때만 재렌더링을 해준다.<br/>

memo()로 감싼 컴포넌트는 불필요한 재렌더링을 막고, 기존 props와 바뀐 props를 비교하는 연산이 추가로 진행된다.<br/>
props가 크고 복잡하면 이거 자체로도 부담이 될 수 있으니, 꼭 필요한 곳에서만 사용하도록 한다.

1. memo()로 컴포넌트 불필요한 재렌더링 막기
```javascript
import { memo } from 'react';

// 원하는 컴포넌트 정의 부분을 감싼다.
let Child = memo(function() {
  return <div>자식 컴포넌트</div>
});

function Cart() {
  return(
    <Child />
  )
}
```

2. useMemo(): 컴포넌트 로드시 1회만 실행하고 싶은 코드가 있는 경우
#### useEffect와 비슷한 용도: 실행시점의 차이가 있다.
```javascript
import { useMemo } from 'react'

function 함수() {
  return 결과
}

function Cart() {
  let result = useMemo(()=>{ return 함수() , []});
}
```

# 성능개선 - batching, useTransition, useDeferredValue

1. 일관된 batching (react v18-)
    - automatic batching 기능
    - state 변경함수를 연달아서 3개 사용하면 재렌더링도 원래는 3번 되어야 하지면, 리액트는 재렌더링을 마지막 1회만 처리해준다. 일종의 쓸데없는 재렌더링 방지기능이고, 이를 batching이라고 한다.
```javascript
setCount(1);
setName(2);
setValue(3); // 여기서 1번만 재렌더링
```
리액트 17버전까지는 ajax요청, setTimeout 안에 state 변경함수가 있는 경우 batching이 일어나지 않았는데, 18버전 이후부터는 어디있든지 재렌더링은 마지막 1회만 실행된다.<br/>

batching 되는게 싫고 state 변경함수 실행마다 재렌더링 시키고 싶으면 `flushSync`라는 함수를 사용하면 된다.

2. useTransition (react v18-)

렌더링 시간이 매우 오래 걸리는 컴포넌트가 있는 경우, 버튼클릭, 타이핑할 때 마다 해당 컴포넌트를 렌더링한다면 반응속도가 느려진다.<br/>
이를 개선하기 위한 방법으로는 해당 컴포넌트 안의 html 갯수를 줄이거나, 여러 페이지로 쪼개서 관리하거나, `useTransition` 기능을 사용한다.

```javascript
import { useState, useTransition } from 'react';

let a = new Array(10000).fill(0);

function App() {
  let [name, setName] = useState('');
  // [변수, 함수]
  let [isPending, startTransition] = useTransition();

  return (
    <div>
      <input onChange={(e) => {
        // startTransition() 함수로 state변경함수 같은걸 묶으면 그걸 다른 코드들보다 나중에 처리
        startTransition(()=>{ setName(e.target.value) })
      }} />

      {
        // isPending: startTransition()으로 감싼 코드가 처리중일 때 true로 변하는 변수
        isPending ? "로딩중입니다. 잠시만 기다려 주세요." :
        a.map(()=>{
          return <div>{ name }</div>
        })
      }
    </div>
  )
}
```

3. useDeferredValue

startTransition() 용도가 똑같다.<br/>
다만 useDererredValue는 state 또는 변수 하나를 집어넣을 수 있게 되어있다. 그래서 해당 변수(state)에 변동사항이 생기면 그걸 늦게 처리해 준다.<br/>

useDeferredValue 안에 state를 집어넣으면 그 state가 변동사항이 생겼을 때 나중에 처리, 그리고 그 처리결과는 `let state`에 저장해 준다.

```javascript
import { useState, useDeferredValue } from 'react';

let a = new Array(10000).fill(0);

function App() {
  let [name, setName] = useState('');
  let state = useDeferredValue(name);

  return (
    <div>
      <input onChange={(e) => { setName(e.target.value) }} />

      {
        a.map(()=>{
          return <div>{ state1 }</div>
        })
      }
    </div>
  )
}
```