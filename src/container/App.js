import React, { useState } from 'react';
import { sortAtoZ } from '../utils/util';
import './App.css';
import PhoneBook from '../components/phoneBook';
import Table from '../views/Table';

function App() {
  const [climbs, setClimbs] = useState([]);

  const addClimb = climb => {
    climb.id = climbs.length + 1;
    setClimbs([...climbs, climb]);
  }

  return (
    <div className="container">
      <h1>Climbing Book using Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Climb</h2>
          <PhoneBook addClimb={addClimb} />
        </div>
      </div>

      <div className="flex-row">
        <div className="flex-large">
          <Table
            primaryKey={'id'}
            title={'Routes'}
            columns={['Route', 'Country']}
            rowsKeys={['route', 'country']}
            data={sortAtoZ(climbs, 'country')} />
        </div>
       
        <div className="flex-large">
          <Table
            primaryKey={'id'}
            title={'Routes & Grades'}
            columns={['Route', 'Country', 'Grade']}
            rowsKeys={['route', 'country', 'grade']}
            data={sortAtoZ(climbs, 'country')} />
        </div>

      </div>
    </div>

  );
}

export default App;
