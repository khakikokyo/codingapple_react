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

2. `import`: 사용하기
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