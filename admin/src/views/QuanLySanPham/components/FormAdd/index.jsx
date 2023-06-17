import { Input, FormItem, FormContainer, Notification, toast, Upload, Select } from 'components/ui'
import { Field, Form, Formik } from 'formik'
import { RichTextEditor } from 'components/shared'
import React, { forwardRef, useState } from 'react'
import { useDispatch } from "react-redux"
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Trường bắt buộc'),
  image: Yup.array().min(1, 'Trường bắt buộc'),
  price: Yup.number().required('Trường bắt buộc'),
  categoryProduct: Yup.array().min(1, 'Trường bắt buộc'),
  groupProduct: Yup.array().min(1, 'Trường bắt buộc'),
  createdAt: Yup.string(),
  message: Yup.string().required('Trường bắt buộc')
})

const FormAdd = forwardRef((props, ref) => {

  const { formikRef, editorRef } = ref

  const categoryProduct = [
    { value: '1', label: 'Gỏi' },
    { value: '2', label: 'Xào' },
    { value: '3', label: 'Chiên' },
    { value: '4', label: 'Tráng miệng' },
  ]

  const groupProduct = [
    { value: '1', label: 'Nhóm SP 1' },
    { value: '2', label: 'Nhóm SP 2' },
    { value: '3', label: 'Nhóm SP 3' },
    { value: '4', label: 'Nhóm SP 4' },
  ]

  const onSend = values => {
    toast.push(
      <Notification
        type="success"
        title="Mail Sent"
      />, { placement: 'top-center' }
    )
  }

  const maxUpload = 5

  const beforeUpload = (file, fileList) => {
    let valid = true

    const allowedFileType = ['image/jpeg', 'image/png']

    if (fileList.length >= maxUpload) {
      return `Bạn chỉ có thể tải lên tối đa ${maxUpload} ảnh`
    }

    for (let f of file) {
      if (!allowedFileType.includes(f.type)) {
        valid = 'Please upload a .jpeg or .png file!'
      }
    }

    return valid
  }

  const tip = <p className="mt-2">Ảnh định dạng JPG hoặc PNG, tối đa 5 ảnh</p>

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
              label="Hình ảnh sản phẩm"
              labelClass="!justify-start"
              invalid={errors.image && touched.image}
              errorMessage={errors.image}
            >
              <Upload
                name="image"
                beforeUpload={beforeUpload}
                uploadLimit={maxUpload}
                tip={tip}
              />
            </FormItem>

            <FormItem
              className={''}
              label="Tên sản phẩm"
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
              label="Danh mục"
              labelClass="!justify-start"
              invalid={errors.categoryProduct && touched.categoryProduct}
              errorMessage={errors.categoryProduct}
            >
              <Field name="categoryProduct">
                {({ field, form }) => (
                  <Select
                    field={field}
                    form={form}
                    placeholder="Chọn danh mục"
                    options={categoryProduct}
                    onChange={category => {
                      form.setFieldValue(field.name, category)
                    }}
                  ></Select>
                )}
              </Field>
            </FormItem>
            <FormItem
              className={''}
              label="Nhóm sản phẩm"
              labelClass="!justify-start"
              invalid={errors.groupProduct && touched.groupProduct}
              errorMessage={errors.groupProduct}
            >
              <Field name="groupProduct">
                {({ field, form }) => (
                  <Select
                    field={field}
                    form={form}
                    placeholder="Chọn nhóm"
                    options={groupProduct}
                    onChange={category => {
                      form.setFieldValue(field.name, category)
                    }}
                  ></Select>
                )}
              </Field>
            </FormItem>
            <FormItem
              className={''}
              label="Giá sản phẩm"
              labelClass="!justify-start"
              invalid={errors.price && touched.price}
              errorMessage={errors.price}
            >
              <Field
                autoComplete="off"
                name="price"
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
              label={'Thông tin chi tiết sản phẩm'}
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