import { Avatar, FormContainer, FormItem, Input, Notification, Select, Upload, toast } from 'components/ui'
import { Field, Form, Formik } from 'formik'
import React, { forwardRef, useState } from 'react'
import { HiOutlinePlus } from 'react-icons/hi'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Trường bắt buộc'),
  image: Yup.array().min(1, 'Trường bắt buộc'),
  permissionUser: Yup.array().min(1, 'Trường bắt buộc'),
  groupUser: Yup.array().min(1, 'Trường bắt buộc'),
  createdAt: Yup.string(),
})

const FormAdd = forwardRef((props, ref) => {

  const [avatarImg, setAvatarImg] = useState(null)

  const { formikRef, editorRef } = ref

  const permissionUser = [
    { value: '1', label: 'Quyền 1' },
    { value: '2', label: 'Quyền 2' },
    { value: '3', label: 'Quyền 3' },
    { value: '4', label: 'Quyền 4' },
  ]

  const groupUser = [
    { value: '1', label: 'Nhóm người dùng 1' },
    { value: '2', label: 'Nhóm người dùng 2' },
    { value: '3', label: 'Nhóm người dùng 3' },
    { value: '4', label: 'Nhóm người dùng 4' },
  ]

  const onSend = values => {
    toast.push(
      <Notification
        type="success"
        title="Mail Sent"
      />, { placement: 'top-center' }
    )
  }

  const onFileUpload = (file) => {
    setAvatarImg(URL.createObjectURL(file[0]))
  }

  const beforeUpload = (files) => {
    let valid = true

    const allowedFileType = ['image/jpeg', 'image/png']

    for (let file of files) {
      if (!allowedFileType.includes(file.type)) {
        valid = 'Please upload a .jpeg or .png file!'
      }
    }

    return valid
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
              label="Ảnh đại diện"
              labelClass="!justify-start"
              invalid={errors.image && touched.image}
              errorMessage={errors.image}
            >
              <Field name="image">
                {({ field, form }) => (
                  <Upload
                    className="cursor-pointer"
                    onChange={onFileUpload}
                    showList={false}
                    uploadLimit={1}
                    beforeUpload={beforeUpload}
                  >
                    <Avatar size={80} src={avatarImg} icon={<HiOutlinePlus />} />
                  </Upload>
                )}
              </Field>
            </FormItem>

            <FormItem
              className={''}
              label="Tên người dùng"
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
              label="Quyền truy cập"
              labelClass="!justify-start"
              invalid={errors.permissionUser && touched.permissionUser}
              errorMessage={errors.permissionUser}
            >
              <Field name="permissionUser">
                {({ field, form }) => (
                  <Select
                    field={field}
                    form={form}
                    placeholder="Chọn quyền"
                    options={permissionUser}
                    onChange={permission => {
                      form.setFieldValue(field.name, permission)
                    }}
                  ></Select>
                )}
              </Field>
            </FormItem>
            <FormItem
              className={''}
              label="Nhóm người dùng"
              labelClass="!justify-start"
              invalid={errors.groupUser && touched.groupUser}
              errorMessage={errors.groupUser}
            >
              <Field name="groupUser">
                {({ field, form }) => (
                  <Select
                    field={field}
                    form={form}
                    placeholder="Chọn nhóm"
                    options={groupUser}
                    onChange={group => {
                      form.setFieldValue(field.name, group)
                    }}
                  ></Select>
                )}
              </Field>
            </FormItem>
            <FormItem
              className={''}
              label="Ngày tạo"
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
          </FormContainer>
        </Form>
      )}
    </Formik>
  )
})

export default FormAdd