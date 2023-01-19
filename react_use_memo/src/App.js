import React, { useMemo , useState} from 'react';


const hardCalculate = (number) => {
  console.log("어려운 계산")
  // for(let i = 0; i < 999999999999; i++) {}
  return number + 10000;
}

const easyCalculate = (number) => {
  console.log("쉬운 계산")
  return number + 1;
}
function App() {
  const [hardNumber , setHardNumber ] = useState(1);
  const [easyNumber , setEasyNumber ] = useState(1);



  // useMemo 기능을 사용하지 않으면 쉬운계산이나 어려운계산 둘중 어떠한 기능을 사용하더라도 
  // 두개의 기능이 동시에 리랜더링 되면서 사용된다.
  // 비교적 무거운 기능으로 묘사한 어려운 계산기를 useMemo에 넣어서 hardNumber의 변화가
  // 없으면 hardCalculate는 사용되지 않게 조절한다.
  const hardSum = useMemo(()=> {
    return hardCalculate(hardNumber);
  },[hardNumber])
  const easySum = easyCalculate(easyNumber);

  return (
    <div className="App">
      <h3>어려운 계산기</h3>
     <input 
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input 
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {easySum}</span>
    </div>
  );
}

export default App;
