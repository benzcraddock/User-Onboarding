import React from 'react'

const User = ({ details }) => {
    if (!details) {
        return <h3>Working on fetching user's details...</h3>
    }
    
    return (
        <div className='user container'>
            <h2>{details.first_name}</h2>
            <h2>{details.last_name}</h2>
            <p>Email: {details.email}</p>      
        </div>
    )
}

export default User;