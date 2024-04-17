
import './App.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { refreshThunk } from './redux/auth/operations'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import PhoneBook from './pages/Phonebook/PhoneBook'



function App() {

  const dispatch = useDispatch()
	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])
  return (
    <div>
   <Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='contacts' element={<PhoneBook />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegistrationPage />} />
				</Route>
				<Route path='*' element={<ErrorPage />} />
			</Routes>
    </div>
  )
}

export default App
