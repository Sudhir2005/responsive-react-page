import React, { useState, useEffect } from 'react';
import './Dashboard.css';


const users = [
  { id: 1, name: 'Sudhir ', status: 'In Progress' },
  { id: 2, name: 'Kumar', status: 'Queries' },
  { id: 3, name: 'Raja', status: 'History' },
  { id: 4, name: 'Jake', status: 'In Progress' },
  { id: 5, name: 'David', status: 'Queries' },
  { id: 1, name: 'Putin ', status: 'In Progress' },
  { id: 1, name: 'Aakash ', status: 'In Progress' },
  
];

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [counts, setCounts] = useState({ inProgress: 0, queries: 0, history: 0 });

  useEffect(() => {
    const countInProgress = users.filter(user => user.status === 'In Progress').length;
    const countQueries = users.filter(user => user.status === 'Queries').length;
    const countHistory = users.filter(user => user.status === 'History').length;

    setCounts({
      inProgress: countInProgress,
      queries: countQueries,
      history: countHistory,
    });
  }, []);

  const handleBoxClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredUsers = selectedCategory
    ? users.filter(user => user.status === selectedCategory)
    : [];       

  return (
    <div className="db">
      <h2 className='dashboard-name-header'>Dashboard</h2>
      <div className="boxes">
        <div className="box" onClick={() => handleBoxClick('In Progress')}>
          In Progress
          <div className="count">{counts.inProgress}</div>
        </div>
        <div className="box" onClick={() => handleBoxClick('Queries')}>
          Queries
          <div className="count">{counts.queries}</div>
        </div>
        <div className="box" onClick={() => handleBoxClick('History')}>
          History
          <div className="count">{counts.history}</div>
        </div>
      </div>
      {selectedCategory && (
        <div>
          <h3>{selectedCategory} List</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default Dashboard;
