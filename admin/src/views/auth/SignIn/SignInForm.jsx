import React from 'react'
import { Input, Button, Checkbox, FormItem, FormContainer, Alert } from 'components/ui'
import { PasswordInput, ActionLink } from 'components/shared'
import useTimeOutMessage from 'utils/hooks/useTimeOutMessage'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import useAuth from 'utils/hooks/useAuth'

const validationSchema = Yup.object().shape({
	userName: Yup.string().required('Vui lòng nhập tên tài khoản'),
	password: Yup.string().required('Vui lòng nhập mật khẩu'),
})

const SignInForm = props => {

	const {
		disableSubmit = false,
		className,
		forgotPasswordUrl = '/forgot-password',
		signUpUrl = '/sign-up'
	} = props

	const [message, setMessage] = useTimeOutMessage()

	const { signIn } = useAuth()

	const onSignIn = async (values, setSubmitting) => {
		const { userName, password } = values
		setSubmitting(true)

		const result = await signIn({ userName, password })

		if (result.status === 'failed') {
			setMessage(result.message)
		}

		setSubmitting(false)
	}

	return (
		<div className={className}>
			{message && <Alert className="mb-4" type="danger" showIcon>{message}</Alert>}
			<Formik
				// Remove this initial value
				initialValues={{
					userName: 'admin',
					password: '123Qwe',
					rememberMe: true
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					if (!disableSubmit) {
						onSignIn(values, setSubmitting)
					} else {
						setSubmitting(false)
					}
				}}
			>
				{({ touched, errors, isSubmitting }) => (
					<Form>
						<FormContainer>
							<FormItem
								label="Tên tài khoản"
								invalid={errors.userName && touched.userName}
								errorMessage={errors.userName}
							>
								<Field
									type="text"
									autoComplete="off"
									name="userName"
									placeholder="Nhập tên tài khoản"
									component={Input}
								/>
							</FormItem>
							<FormItem
								label="Mật khẩu"
								invalid={errors.password && touched.password}
								errorMessage={errors.password}
							>
								<Field
									autoComplete="off"
									name="password"
									placeholder="Nhập mật khẩu"
									component={PasswordInput}
								/>
							</FormItem>
							<div className="flex justify-center mb-6">
								<ActionLink to={forgotPasswordUrl}>
									Quên mật khẩu ?
								</ActionLink>
							</div>
							<Button block loading={isSubmitting} variant="solid" type="submit">
								{isSubmitting ? 'Đăng thực hiện...' : 'Đăng nhập'}
							</Button>
						</FormContainer>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default SignInForm