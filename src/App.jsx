
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { refreshThunk } from './redux/auth/operations'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import PhoneBook from './pages/Phonebook/PhoneBook'
import { RestrictedRoute } from './routes/RestrictedRoute'
import { PrivateRoute } from './routes/PrivateRoute'
import { selectIsRefreshing } from './redux/auth/slice'
import Loader from './components/Loader/Loader'



function App() {

	const dispatch = useDispatch()
	const isRefreshing = useSelector(selectIsRefreshing)

	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])
  return isRefreshing ? (
		<Loader />
	) : (
    <div>
   <Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='contacts' element={<PrivateRoute redirectTo="/login" component={<PhoneBook />} />} />
				<Route path='/login' element={ <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
          <Route path='/register' element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />} />
				</Route>
				<Route path='*' element={<ErrorPage />} />
			</Routes>
    </div>
  )
}

export default App
