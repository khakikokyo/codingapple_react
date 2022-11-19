/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let [postTitle, setPostTitle] = useState(['남자코트 추천', '강남 우동맛집', '리액트 독학']);
  let [good, setGood] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      {
        postTitle.map(function(a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={function() { setModal(!modal); setTitle(i) }}>
                { postTitle[i] }
                <span onClick={ function(e) {
                  e.stopPropagation();
                  let copy = [...good];
                  copy[i] = copy[i] + 1;
                  setGood(copy);
                } }>👍</span> { good[i] }
              </h4>
              <p>11월 18일 발행</p>
              <button onClick={function() {
                let copy = [...postTitle];
                copy.splice(i, 1);
                setPostTitle(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      <div>
        <input onChange={ function(e) { setInputValue(e.target.value) } } />
        <button onClick={function() {
          let copy = [...postTitle];
          copy.unshift(inputValue);
          setPostTitle(copy);
        }}>글발행</button>
      </div>

      {
        modal == true ? <Modal title={title} postTitle={postTitle}/> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{ props.postTitle[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
