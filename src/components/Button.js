import React from 'react'

function Button({ text, onClick, btnClass }) {
    return (
        <button className={btnClass} type="button" onClick={onClick}>
            {text}            
        </button>
    )
}

export default Button