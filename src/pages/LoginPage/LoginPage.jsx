import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { loginThunk } from "../../redux/auth/operations"
import { toast } from "react-toastify"
import { Field, Form, Formik } from "formik"
import s from "./LoginPage.module.css"

function LoginPage() {
  const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleSubmit = values => {
		dispatch(loginThunk(values))
			.unwrap()
			.then(() => navigate('/'))
			.catch(() => toast.error('Email or password invalid'))
	}
	const initialValues = {
		email: '',
		password: '',
	}
	return <Formik onSubmit={handleSubmit} initialValues={initialValues}>
				<Form className={s.form}>
					<label>
					Email
				<Field className={s.input} type='text' name='email' placeholder='Enter your email' />
				</label>
				<label>
					Password
				<Field className={s.input} type='password' name='password' placeholder='Enter your password' />
				</label>
					<button className='btn border' type='submit'>
						Log In
					</button>
					<p>
						You don`t have an account yet?
						<Link to= '/register'>Register</Link>
					</p>
				</Form>
			</Formik>
}

export default LoginPage