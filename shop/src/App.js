import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import Detail from './pages/Detail.js';
import Cart from './pages/Cart.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate(); // 페이지 이동 도와주는 함수
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* 메뉴바 */}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={function() { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={function() { navigate('/detail') }}>DetailPage</Nav.Link>
            <Nav.Link onClick={function() { navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            {/* 대문 */}
            <div className="main-bg"></div>

            {/* 상품 레이아웃 */}
            <div className="container">
              <div className="row">
                {
                  shoes.map(function(a, i) {
                    return(<Card shoes={shoes[i]} i={i} key={i} />)
                  })
                }
              </div>
            </div>
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
          </>
        } />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </div>
  );
}

// 상품 레이아웃 컴포넌트
function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} alt="shoes1" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}

export default App;