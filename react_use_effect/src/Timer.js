import React, { useEffect } from 'react';

const Timer = ( ) => {
    
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("타이머 실행중")
        } , 1500); 

        // Timer Component가 화면에서 사라질때 반영되는 콜백함수 
        return () => {
            clearInterval(timer)
        }
    }, [])
    
    return (
        <div>
            <span>타이머를 시작합니다. 콘솔을 확인하세요</span>
        </div>
    )
}

export default Timer