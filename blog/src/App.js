/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [postTitle, setPostTitle] = useState(['남자코트 추천', '강남 우동맛집', '리액트독학']);
  let [good, setGood] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      <button onClick={ function() {
        let copy = [...postTitle];
        copy[0] = '여자코트 추천';
        setPostTitle(copy);
      } }>글수정</button>
      
      <div className="list">
        <h4>{ postTitle[0] } <span onClick={ function() { setGood(good+1) } }>👍</span> { good } </h4>
        <p>11월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{ postTitle[1] }</h4>
        <p>11월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{ postTitle[2] }</h4>
        <p>11월 18일 발행</p>
      </div>
    </div>
  );
}

export default App;
