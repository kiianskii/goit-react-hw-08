import { Link } from "react-router-dom"


function ErrorPage() {

    return (
		<div className='error-box'>
			<h1 className="title-error">Page not found</h1>
			<Link to='/'>Go to homepage!</Link>
		</div>
	)
  
}

export default ErrorPage