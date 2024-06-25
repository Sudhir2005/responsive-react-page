import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

function App() {
  const [page, setPage] = useState('login');

  const handleLogin = () => {
    setPage('dashboard');
  };

  return (
    <div>
      {page === 'login' ? <LoginPage onLogin={handleLogin} /> : <Dashboard />}
    </div>
  );
}

export default App;
