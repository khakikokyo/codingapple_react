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