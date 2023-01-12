import React, { useReducer, useState } from 'react';
import Student from './Student';

const initialState = {
    count : 0 , 
    students : []
}

const reducer = (state , action ) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case ACTION_TYPES.add :
            const name = action.payload.name;
            const newStudent = {
                id : Date.now(),
                name ,
                isHere : false   
            };
            return {
                count : state.count + 1,
                students: [ ...state.students , newStudent ]
            };
        case ACTION_TYPES.minus :
            return {
                count : state.count - 1, 
                students : state.students.filter(ele => {
                    return ele.id !== action.payload.id
                }),
            }
        case ACTION_TYPES.mark :
            return {
                count: state.count,
                students: state.students.map((ele) => {
                    if(ele.id === action.payload.id) {
                        return {...ele , isHere: !ele.isHere }
                    }
                    return ele
                })
            }
        default :
            return state;
    }
}

const ACTION_TYPES = {
    add : 'add-student',
    minus : 'minus-student',
    mark : 'mark-student'
}

function School() {
    const [ name , setName ] = useState('');
    const [ studentsInfo , dispatch ] = useReducer( reducer , initialState) 

    return (
        <div>
            <h1>출석부</h1>
            <p>총 학생 수 : {studentsInfo.count}</p>
            <input 
                type="text"
                placeholder="이름을 입력해주세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={()=> {
                dispatch({type: ACTION_TYPES.add , payload : {name}})
            }}
            >추가</button>
            {studentsInfo.students.map(ele => {
                return (
                    <Student key={ele.id} 
                             name={ele.name} 
                             id={ele.id} 
                             dispatch={dispatch}
                             action_type={ACTION_TYPES}
                             isHere={ele.isHere}
                    />
                )
            })}
        </div>
    )
}

export default School;