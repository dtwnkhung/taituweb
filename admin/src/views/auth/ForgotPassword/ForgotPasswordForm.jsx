import React, { useState } from 'react'
import { Input, Button, FormItem, FormContainer, Alert } from 'components/ui'
import { ActionLink } from 'components/shared'
import { apiForgotPassword } from 'services/AuthService'
import useTimeOutMessage from 'utils/hooks/useTimeOutMessage'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
	email: Yup.string().required('Trường bắt buộc'),
})

const ForgotPasswordForm = props => {

	const { disableSubmit = false, className, signInUrl = '/sign-in' } = props

	const [emailSent, setEmailSent] = useState(false)

	const [message, setMessage] = useTimeOutMessage()

	const onSendMail = async (values, setSubmitting) => {
		setSubmitting(true)
		try {
			const resp = await apiForgotPassword(values)
			if (resp.data) {
				setSubmitting(false)
				setEmailSent(true)
			}
		} catch (errors) {
			setMessage(errors?.response?.data?.message || errors.toString())
			setSubmitting(false)
		}
	}

	return (
		<div className={className}>
			<div className="mb-6">
				{
					emailSent ?
						<>
							<h3 className="mb-1">Kiểm tra email của bạn</h3>
							<p>Chúng tôi đã gửi mật khẩu đến email của bạn, vui lòng kiểm tra email.</p>
						</>
						:
						<>
							<h3 className="mb-1">Quên mật khẩu</h3>
							<p>Vui lòng nhập địa chỉ email của bạn để nhận mã xác nhận</p>
						</>
				}
			</div>
			{message && <Alert className="mb-4" type="danger" showIcon>{message}</Alert>}
			<Formik
				initialValues={{
					email: 'admin@mail.com',
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					if (!disableSubmit) {
						onSendMail(values, setSubmitting)
					} else {
						setSubmitting(false)
					}
				}}
			>
				{({ touched, errors, isSubmitting }) => (
					<Form>
						<FormContainer>
							<div className={emailSent ? 'hidden' : ''}>
								<FormItem
									invalid={errors.email && touched.email}
									errorMessage={errors.email}
								>
									<Field
										type="email"
										autoComplete="off"
										name="email"
										placeholder="Email"
										component={Input}
									/>
								</FormItem>
							</div>
							<Button block loading={isSubmitting} variant="solid" type="submit">
								{emailSent ? 'Gửi lại email' : 'Gửi email'}
							</Button>
							<div className="mt-4 text-center">
								<span>Trở về </span>
								<ActionLink to={signInUrl}>
									Đăng nhập
								</ActionLink>
							</div>
						</FormContainer>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default ForgotPasswordForm