/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let [postTitle, setPostTitle] = useState(['남자코트 추천', '강남 우동맛집', '리액트 독학']);
  let [good, setGood] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      {/* <div className="list">
        <h4>{ postTitle[0] } <span onClick={ function() { setGood(good+1) } }>👍</span> { good } </h4>
        <p>11월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{ postTitle[1] }</h4>
        <p>11월 18일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={function() {setModal(!modal)}}>{ postTitle[2] }</h4>
        <p>11월 18일 발행</p>
      </div> */}

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

      {
        modal == true ? <Modal/> : null
      }

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
