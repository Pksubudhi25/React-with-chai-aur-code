import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'
function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    
    //we are sending the data here
    //we pass setUser in a object here
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        type="text" 
        placeholder='username' />
      <input 
      type="password"
      onChange={(e) =>setPassword(e.target.value) }
      value={password} 
      placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
