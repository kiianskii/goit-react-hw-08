import { useSelector } from "react-redux"
import Navigation from "../Navigation/Navigation"
import { selectIsLoggedIn } from "../../redux/auth/slice"
import UserMenu from "../UserMenu/UserMenu"
import AuthNav from "../AuthNav/AuthNav"
import s from "./AppBar.module.css"


function AppBar() {
    const isLogged = useSelector(selectIsLoggedIn)
  return (
    <div className={s.container}>
          <Navigation />
          {isLogged ? <UserMenu/> : <AuthNav/>}
    </div>
  )
}

export default AppBar