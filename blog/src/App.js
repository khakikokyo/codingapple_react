import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [postTitle, b] = useState(['남자코트 추천', '강남 우동맛집', '리액트독학']);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <div className="list">
        <h4>{postTitle[0]}</h4>
        <p>11월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{postTitle[1]}</h4>
        <p>11월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{postTitle[2]}</h4>
        <p>11월 18일 발행</p>
      </div>
    </div>
  );
}

export default App;
