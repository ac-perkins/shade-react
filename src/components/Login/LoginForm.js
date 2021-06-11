import { useState } from 'react';

import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(username, password);
    console.log(password);

    verifyCredentials();
  };

  const verifyCredentials = async () => {
    const params = new URLSearchParams(
      `username=${username}&password=${password}`
    );
    console.log('params', params);

    try {
      const response = await fetch(
        `https://winchatty.com/v2/verifyCredentials`,
        {
          method: 'POST',
          body: params,
        }
      );
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={loginFormSubmitHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" value={username} onChange={usernameChangeHandler} />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        value={password}
        onChange={passwordChangeHandler}
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
