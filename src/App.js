import React, { useState } from 'react';
import './App.css';
import PhoneBook from './container/phoneBook';
import PhoneBookTable from './views/phoneBookTable';

function App() {
  const usersData = []
  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  return (
    <div className="container">
      <h1>React PhoneBook using Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User Detail</h2>
          <PhoneBook addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <PhoneBookTable users={users} />
        </div>
      </div>
    </div>

  );
}

export default App;
