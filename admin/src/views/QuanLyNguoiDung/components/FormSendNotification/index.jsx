import {
  Avatar,
  FormContainer,
  FormItem,
  Input,
  Notification,
  Select,
  Upload,
  toast,
} from "components/ui";
import { Field, Form, Formik } from "formik";
import React, { forwardRef, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Trường bắt buộc"),
  groupUser: Yup.array().min(1, "Trường bắt buộc"),
  content: Yup.string().required("Trường bắt buộc"),
});

const FormSendNotification = forwardRef((props, ref) => {
  const [avatarImg, setAvatarImg] = useState(null);

  const { formikRef, editorRef } = ref;

  const groupUser = [
    { value: '1', label: 'Nhóm người dùng 1' },
    { value: '2', label: 'Nhóm người dùng 2' },
    { value: '3', label: 'Nhóm người dùng 3' },
    { value: '4', label: 'Nhóm người dùng 4' },
  ]

  const onSend = (values) => {
    toast.push(<Notification type="success" title="Mail Sent" />, {
      placement: "top-center",
    });
  };

  return (
    <Formik
      innerRef={formikRef}
      initialValues={{
        title: "",
        createdAt: new Date().toISOString(),
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSend(values);
      }}
    >
      {({ touched, errors }) => (
        <Form>
          <FormContainer>
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
              className={""}
              label="Tiêu đề"
              labelClass="!justify-start"
              invalid={errors.title && touched.title}
              errorMessage={errors.title}
            >
              <Field autoComplete="off" name="title" component={Input} />
            </FormItem>
            <FormItem
              label="Content"
              invalid={errors.content && touched.content}
              errorMessage={errors.content}
            >
              <Field
                textArea
                type="text"
                autoComplete="off"
                name="content"
                placeholder="Nội dung thông báo"
                component={Input}
              />
            </FormItem>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
});

export default FormSendNotification;
