import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { registerThunk } from "../../redux/auth/operations"
import { toast } from "react-toastify"
import { Field, Form, Formik } from "formik"
import s from "./RegistrationPage.module.css"


function RegistrationPage() {
  const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleSubmit = values => {
		dispatch(registerThunk(values))
			.unwrap()
			.then(data => {
				toast.success(`Welcome, ${data.user.name}!`)
				navigate('/')
			})
			.catch(() => toast.error('Credentials invalid'))
	}
	const initialValues = {
		name: '',
		password: '',
		email: '',
	}
	return 	<div className="auth-form">
			<Formik onSubmit={handleSubmit} initialValues={initialValues}>
				<Form className={s.form}>
					<Field className={s.input} type='text' name='name' placeholder='Enter your name' />
					<Field className={s.input} type='text' name='email' placeholder='Enter your email' />
					<Field className={s.input} type='password' name='password' placeholder='Enter your password' />
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