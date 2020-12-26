import React from 'react';
import UserInput from '../UserInput/UserInput';
import './UserOutput.css';

const userOutput = props => {
    return (
        <div className='UserOuput'>
            <UserInput value={props.username} changed={props.changed}></UserInput>
            <p>Your username is {props.username}</p>
            <p>You have been a member for {props.years} years</p>
        </div>
    )
}

export default userOutput;