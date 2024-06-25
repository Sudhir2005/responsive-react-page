import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (username && password) {
      onLogin();
    }
  };

  return (
    <div>
      <h2 style={{color:'white'}}>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
        <label style={{ fontSize: '16px', fontWeight: 'normal', color: 'white' }}>Username:     </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
        <label style={{ fontSize: '16px', fontWeight: 'normal', color: 'white' }}>Password:     </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
