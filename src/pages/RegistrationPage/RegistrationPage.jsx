import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { registerThunk } from "../../redux/auth/operations"

import { Field, Form, Formik } from "formik"
import s from "./RegistrationPage.module.css"


function RegistrationPage() {
  const dispatch = useDispatch()

	const handleSubmit = values => {
		dispatch(registerThunk(values))
	}
	const initialValues = {
		name: '',
		password: '',
		email: '',
	}
	return 	<div className="auth-form">
			<Formik onSubmit={handleSubmit} initialValues={initialValues}>
				<Form className={s.form}>
				<label>
					Name
				<Field className={s.input} type='text' name='name' placeholder='Enter your name' />
				</label>
				<label>
					Email
				<Field className={s.input} type='text' name='email' placeholder='Enter your email' />
				</label>
				<label>
					Password
				<Field className={s.input} type='password' name='password' placeholder='Enter your password' />
				</label>
					
					<button className='btn border' type='submit'>
						Register
					</button>
					<p>
						You already have an account?
						<Link to= '/login'>Log in</Link>
					</p>
				</Form>
			</Formik>
		</div>
}

export default RegistrationPage