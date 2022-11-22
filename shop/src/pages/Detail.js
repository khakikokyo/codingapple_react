import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

// '/detail' 페이지 레이아웃 컴포넌트
function Detail(props) {

  useEffect(function() {});

  let {id} = useParams();
  let foundProduct = props.shoes.find(x => x.id == id);

  return (
    <div className="container">
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