import React from 'react';
import './UserInput.css';

const userInput = props => {
    return (
        <div className='UserInput'>
            <p>Username:</p>
            <input type='text' onChange={props.changed} value={props.value}></input>
        </div>
    )
}

export default userInput;