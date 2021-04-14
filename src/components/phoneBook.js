import React, { useState } from 'react'

const PhoneBook = (props) => {
    
    const addUser = props.addUser;
    
    const initialFormState = { 
        id: null,
        firstName: '', 
        lastName: '', 
        phoneNumber: '' 
    }
                            
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!user.firstName || !user.lastName || !user.phoneNumber) return
        addUser(user);
        setUser(initialFormState); // resets the form
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
            <label htmlFor="lastName">lastName</label>
            <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
            <label htmlFor="phoneNumber" >Phone Number</label>
            <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleInputChange} />
            <button type="submit">Add new Contact</button>
        </form>
    )
}

export default PhoneBook