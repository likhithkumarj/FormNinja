import React from 'react'

const Login = () => {
  return (
    <>
    <h1>Login</h1>
    <form action="">
      <label htmlFor="username">Username</label>
      <input type="text" />
      <label htmlFor="password">Password</label>
      <input type="password" />
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <a href="/signup">Sign up</a></p>   
    </>

  )
}

export default Login
