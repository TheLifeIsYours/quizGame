import React, { useState } from 'react'

const Home = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <>
      <h1>Signup</h1>
      <form>
        <input type="text" label="Username" onChange={(e) => setUsername(e.target.value)} value={username} />
        <input type="password" label="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <input type="password" label="Confirm Password" onChange={(e) => setPasswordConfirm(e.target.value)} value={passwordConfirm} />
        <button onClick={handleSubmit}></button>
      </form>
    </>
  )
}

export default Home