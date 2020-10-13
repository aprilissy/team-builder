import React from 'react';
import { render } from 'react-dom';

function TeamMate(props) {
    const { details } = props

    if (!details) {
        return <h3>Waiting for &apos;s details...</h3>
    }

    return (
        <div className='teamMate container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}

export default TeamMate;