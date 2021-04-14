import React, { useState } from 'react'

const PhoneBook = (props) => {
    
    const addClimb = props.addClimb;
    
    const initialFormState = { 
        id: null,
        route: '', 
        country: '', 
        grade: '' 
    }
                            
    const [climb, setClimb] = useState(initialFormState)

    const handleInputChange = e => {
        const { name, value } = e.target
        setClimb({ ...climb, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!climb.route || !climb.country || !climb.grade) return
        addClimb(climb);
        setClimb(initialFormState); // resets the form
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="route">Route</label>
            <input type="text" name="route" value={climb.route} onChange={handleInputChange} />
            <label htmlFor="country">Country</label>
            <input type="text" name="country" value={climb.country} onChange={handleInputChange} />
            <label htmlFor="grade">Grade</label>
            <input type="text" name="grade" value={climb.grade} onChange={handleInputChange} />
            <button type="submit">Add new climb</button>
        </form>
    )
}

export default PhoneBook