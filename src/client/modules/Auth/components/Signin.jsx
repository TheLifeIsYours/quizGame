import React, { useState } from 'react'

const Home = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <>
      <h1>Signin</h1>

      <form>
        <input type="text" autoComplete="username" onChange={(e) => setUsername(e.target.value)} value={username} />
        <input type="password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button onClick={handleSubmit}></button>
      </form>
    </>
  )
}

export default Home