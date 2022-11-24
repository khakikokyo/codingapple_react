import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { addItem } from './../store.js';
import { useDispatch } from 'react-redux';


// '/detail' 페이지 레이아웃 컴포넌트
function Detail(props) {

  useEffect(function() {
    let timer = setTimeout(function() { setAlert(false) }, 2000);

    return function() {
      clearTimeout(timer);
    }
  }, []);

  let {id} = useParams();
  let foundProduct = props.shoes.find(x => x.id == id);
  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);
  let dispatch = useDispatch();

  return (
    <div className="container">
      {
        alert == true
        ? <div className="alert alert-warning">
            2초 이내 구매시 할인
          </div>
        : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes1.jpg'} alt="shoes1" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{ foundProduct.title }</h4>
          <p>{ foundProduct.content }</p>
          <p>{ foundProduct.price }원</p>
          <button className="btn btn-danger" onClick={()=>{
            dispatch(addItem({
              id: foundProduct.id,
              name: foundProduct.title,
              count: 1
            }))
          }}>주문하기</button>
        </div>
      </div>

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

    </div>
  )
}

function TabContent(props) {

  let [fade, setFade] = useState('');

  useEffect(()=>{
    let a = setTimeout(()=>{ setFade('end') }, 10);

    return ()=>{
      clearTimeout(a);
      setFade('');
    }
  }, [props.tab]);

  return (
    <div className={'start ' + fade}>
      { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab] }
    </div>
  )
}

export default Detail;