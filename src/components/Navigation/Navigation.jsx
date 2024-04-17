import { Link } from "react-router-dom"
import s from "./Navigation.module.css"


function Navigation() {
  return (
    <div className={s.home}>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Navigation