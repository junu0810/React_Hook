import React, { useRef, useState } from 'react';

function App() {

  const [count , setCount ] =useState(0);
  const countRef = useRef(0); 
  let countVar = 0;

  const increaseCountState = () => {
    setCount(count + 1);
  }
  
  const increaseCountRef = () => {
    // Ref는 아무리 변화가 되더라도 화면이 렌더링 되지 않는다. 즉 State를 변화시켜 재 랜더링시키면 값이 변한다.
    countRef.current = countRef.current+=1; 
    countVar+=1;
  }
  const increaseCountVar = () => {
    // 변수로 선언되면 재 렌더링시 값이 초기화 되어서 값이 저장이 안된다.
    countVar+=1;
  }

  const printResult = () => {
    console.log(`Ref : ${countRef.current} , Var : ${countVar}`)
  }

  return (
    <div className="App">
      <p>Count : {count}</p>
      <p>Ref : {countRef.current}</p>
      <p>let : {countVar}</p>
      <button onClick={increaseCountState}>State 증가하기</button>
      <button onClick={increaseCountRef}>Ref 증가하기 </button>
      <button onClick={increaseCountVar}>Var 증가하기 </button>
      <button onClick={printResult}>값을 콘솔로 확인</button>
    </div>
  );
}

export default App;
