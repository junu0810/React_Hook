import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Timer from './Timer';

function App() {

  const [count , setCount] = useState(0);
  const [name , setName] = useState("");
  const [showTime , setShowTime] = useState(false);

  useEffect(() => {
    console.log("렌더링 호출")
  // dependency array라는 2번째 argument로 추가된값이 변화되거나 처음 렌더링 될때만 useEffect가 실행된다.
  } , [count])

  const handleCountUpdate = () => {
    setCount(count+1)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }


  return (
    <div>
      {showTime && <Timer />}
      <button onClick={() => setShowTime(!showTime)}>Toggle Timer</button>
      <br/>
      <br/>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <br/>
      <br/>
      <input type="text" value={name} onChange={handleNameChange}></input> 
      <span>name: {name}</span>
    </div>
  )
}

export default App;
