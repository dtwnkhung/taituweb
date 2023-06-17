import React from 'react'
import SignInForm from './SignInForm'

const SignIn = () => {
	return (
		<>
			<div className="mb-8">
				<h3 className="mb-1">Hệ thống quản trị Tài Tử Web</h3>
				<p>Điền thông tin đăng nhập</p>
			</div>
			<SignInForm disableSubmit={false} />
		</>
	)
}

export default SignIn