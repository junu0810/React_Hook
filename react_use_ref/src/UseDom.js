import React , {useEffect, useRef, useState} from 'react';


function UseDom() {

    const [input , setInput] =useState("");
    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef)
        inputRef.current.focus();
    }, [])
    
    const login = () => {
        alert(`환영합니다. ${inputRef.current.value}!!!`)
        inputRef.current.focus();
    }
    
    const onChangeLogin =(e) => {
        setInput(e.target.value)
    }
    
    const stateLogin = () => {
        alert(`환영합니다. ${input}!!!`)
    }

    // DomElement에 접근하는 방법으로 ref를 사용해서 inputRef를 통해 접근한다.
    // useRef를 통하면 값을 가져올 수도 있다.
    return (   
        <div>
            <input onChange={(e)=>onChangeLogin(e)} placeholder="Stateusername" ></input>
            <button onClick={stateLogin}>로그인 State</button>
            <br/>
            <input ref={inputRef} type="text" placeholder="username" />
            <button onClick={login}>로그인</button>
        </div>
    )
}

export default UseDom;