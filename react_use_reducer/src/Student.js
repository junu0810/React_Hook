import React from 'react';

const Student = ({name , dispatch  ,id , action_type , isHere}) => {
    return (
        <div>
            <span 
            style={{
                textDecoration : isHere ? "line-through" : 'none' ,
                color : isHere ? 'gray' : 'black' ,
            }}
            onClick={() => {
                dispatch({type: action_type.mark , payload : {id}})
            }}
            >{name}</span>
            <button onClick={() => {
                dispatch({ type: action_type.minus ,  payload : { id } })
            }}>
            삭제
            </button>
        </div>
    )
}

export default Student