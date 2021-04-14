import React, { useState } from 'react';
import { sortAtoZ } from '../utils/util';
import './App.css';
import PhoneBook from '../components/phoneBook';
import Table from '../views/Table';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  return (
    <div className="container">
      <h1>React PhoneBook using Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User Detail</h2>
          <PhoneBook addUser={addUser} />
        </div>
      </div>

      <div className="flex-row">
        <div className="flex-large">
          <Table
            primaryKey={'id'}
            title={'Generic User List 1'}
            columns={['First Name', 'Last Name']}
            rowsKeys={['firstName', 'lastName']}
            data={sortAtoZ(users, 'lastName')} />
        </div>
       
        <div className="flex-large">
          <Table
            primaryKey={'id'}
            title={'Generic User List 2'}
            columns={['First Name', 'Last Name', 'Phone Number']}
            rowsKeys={['firstName', 'lastName', 'phoneNumber']}
            data={sortAtoZ(users, 'lastName')} />
        </div>
        
      </div>
    </div>

  );
}

export default App;
