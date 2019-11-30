import React from 'react'

const PhoneBookTable = props => (
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone Number</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.phoneNumber}</td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
    </tbody>
  </table>
)

export default PhoneBookTable