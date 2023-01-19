import React, {useEffect, useMemo, useState} from 'react';

function Country(){

    const [number , setNumber ] = useState(0);
    const [isKorea , setIsKorea ] = useState(true);
    
    // location이 객체 타입이면 주솟값이 변경되기 때문에 같은 값이라도 
    // 리랜더링 되면 location의 주솟값이 바뀌어서 useEffect를 호출하게 된다.
    // 기능향상을 위해선 isKorea가 변경될때만 location값을 변경되도록 설정하여야 한다.
    // 하루 몇끼먹어요에 대한 값이 변경되더라도 useEffect의 값이 변하지 않는다.
    
    // useMemo를 쓰게되면 하루 몇끼에대한 질문과 어디에 있냐는 질문 두곳의 값중
    // 어디에 있냐는 질문에 답변 할때만 
    // isKorea를 변경되어서 location도 가변되어 useEffect를 호출하게 된다.
    const location = useMemo(() => {
        return { country : isKorea ? '한국' : '외국'}   
    },[isKorea])

    // const location = {
    //     country : isKorea ? '한국' : '외국'
    // }
    
    useEffect(() => {
        console.log('useEffect 호출')
    },[location])

    return (
        <div>
            <hr/>
            <h2>하루 몇끼 먹어요?</h2>
            <input 
                type="number"
                value={number}
                onChange={(e) => {setNumber(e.target.value)}}
            />
            <hr/>
            <h2>어디에 있나요?</h2>
            <p>나라 : {location.country}</p>
            <button onClick={()=>setIsKorea(!isKorea)}>비행기를 타자</button>
        </div>
    )
}

export default Country;