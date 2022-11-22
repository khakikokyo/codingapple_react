import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import Detail from './pages/Detail';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      {/* 메뉴바 */}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/detail" className="nav-link">Page</Link>
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
                  return(<Card shoes={shoes[i]} i={i} />)
                })
              }
            </div>
          </div>
          </>
        } />

        <Route path="/detail" element={<Detail />} />
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
