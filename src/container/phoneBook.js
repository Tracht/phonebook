import React, { useState } from 'react'

const AddContactDetailsForm = props => {
    const initialFormState = { id: null, firstName: '', lastName: '', phoneNumber: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!user.firstName || !user.lastName || !user.phoneNumber) return
                props.addUser(user)
                setUser(initialFormState)
            }}
        >
            <label>First Name</label>
            <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
            <label>lastName</label>
            <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
            <label>Phone Number</label>
            <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleInputChange} />
            <button>Add new Contact</button>
        </form>
    )
}

export default AddContactDetailsForm