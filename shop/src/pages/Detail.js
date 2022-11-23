import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;