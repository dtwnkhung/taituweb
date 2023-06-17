import { Input, FormItem, FormContainer, Notification, toast } from 'components/ui'
import { Field, Form, Formik } from 'formik'
import { RichTextEditor } from 'components/shared'
import React, { forwardRef, useState } from 'react'
import { useDispatch } from "react-redux"
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Trường bắt buộc'),
  createdAt: Yup.string(),
  message: Yup.string().required('Trường bắt buộc')
})

const FormAdd = forwardRef((props, ref) => {

  const { formikRef, editorRef } = ref

  const dispatch = useDispatch()

  const [showCC, setShowCC] = useState(false)
  const [showBcc, setShowBcc] = useState(false)

  const onCcClick = () => {
    setShowCC(!showCC)
  }

  const onBccClick = () => {
    setShowBcc(!showBcc)
  }

  const onSend = values => {
    toast.push(
      <Notification
        type="success"
        title="Mail Sent"
      />, { placement: 'top-center' }
    )
  }

  return (
    <Formik
      innerRef={formikRef}
      initialValues={{
        title: '',
        createdAt: new Date().toISOString(),
        message: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSend(values)
      }}
    >
      {({ touched, errors }) => (
        <Form>
          <FormContainer>
            <FormItem
              className={''}
              label="Tiêu đề"
              labelClass="!justify-start"
              invalid={errors.title && touched.title}
              errorMessage={errors.title}
            >
              <Field
                autoComplete="off"
                name="title"
                component={Input}
              />
            </FormItem>
            <FormItem
              className={''}
              label="Ngày đăng"
              labelClass="!justify-start"
            >
              <div className='opacity-50 pointer-events-none'>
                <Field
                  autoComplete="off"
                  name="createdAt"
                  component={Input}
                />
              </div>
            </FormItem>
            <FormItem
              label={'Nội dung'}
              className="mb-0"
              labelClass="!justify-start"
              invalid={errors.message && touched.message}
              errorMessage={errors.message}
            >
              <Field name="message">
                {({ field, form }) => (
                  <RichTextEditor
                    ref={editorRef}
                    value={field.value}
                    onChange={val => form.setFieldValue(field.name, val)}
                  />
                )}
              </Field>
            </FormItem>
          </FormContainer>
        </Form>
      )}
    </Formik>
  )
})

export default FormAdd