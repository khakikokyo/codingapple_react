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