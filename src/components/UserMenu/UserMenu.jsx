import { Link, useNavigate } from "react-router-dom"
import s from "./UserMenu.module.css"
import { useDispatch } from "react-redux"
import { logoutThunk } from "../../redux/auth/operations"

function UserMenu() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className={s.container}>
      <Link to="/contacts">Phone Book</Link>
      <button onClick={() => {
        navigate('/')
        dispatch(logoutThunk())
        
      }}>Logout</button>
    </div>
  )
}

export default UserMenu