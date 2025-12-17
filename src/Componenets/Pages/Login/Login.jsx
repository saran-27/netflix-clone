import React,{useState} from 'react'
import './Login.css'
import logo from '../../../assets/logo.png'
import {login,Signup} from '../../Firebase'
import netflix_spinner from '../../../assets/netflix_spinner.gif'


function Login() {

  const [name,setName]=useState("");
    const [email,setEmail]=useState("");
      const [password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);

  const [signState,setSignState]=useState("Sign In")

 const user_auth = async (e) => {
  e.preventDefault();
  setLoading(true);
  if (signState === "Sign In") {
    await login(email, password);
  } else {
    await Signup(name, email, password);
  }
   setLoading(false);
};
  return (
    loading?<div className="loading-icon">
      <img src={netflix_spinner} alt=''></img>
    </div>:
    <div className='login'>
      <div className="login-logo">
        <img src={logo} alt='' className='login-logo'></img>
      </div>
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {signState==="Sign Up"?
          <input name='username' type='text'  placeholder='Your Name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
          :<></>}
          <input name='email' type='text' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
          <input name='password' type='password' placeholder='Your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
          <button type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?          <p>New To Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>
          :          <p>Already Have Account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>  
        }        
        </div>
      </div>
    </div>
  )
}

export default Login