import { Link } from "react-router-dom"
import s from "./AuthNav.module.css"


function AuthNav() {
  return (
    <div className={s.container}>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </div>
  )
}

export default AuthNav