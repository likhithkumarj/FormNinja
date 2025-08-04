import React from 'react'

const Signin = () => {
  return (
    <>
    <h1>Signin</h1>
    <form action="">
        <label htmlFor="username">Username</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <label htmlFor="password">Conferm Password</label>
        <input type="password" />
        <button type="submit">Signin</button>
    </form>

    </>
  )
}

export default Signin
