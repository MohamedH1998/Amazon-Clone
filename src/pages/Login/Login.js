import React, { useState, useEffect } from "react"
import AmazonLogo from "../../utils/Amazon_Logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { loginInitiate } from "../../redux/actions"
import "./Login.css"
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.data)

  const signIn = e => {
    e.preventDefault()
    dispatch(loginInitiate(email, password))
    setEmail("")
    setPassword("")
  }

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user, navigate])
  return (
    <div className="login">
      <Link to="/">
        <img src={AmazonLogo} className="login-logo" alt="logo" />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login-signIn">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's COnditions of Use and Privacy
          Notice.
        </p>
      </div>
      <p>New to Amazon ?</p>
      <Link to="/register">
        <button className="login-register">Create Your Amazon Account</button>
      </Link>
    </div>
  )
}

export default Login
