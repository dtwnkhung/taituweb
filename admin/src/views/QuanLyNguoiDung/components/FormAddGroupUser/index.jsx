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
  image: Yup.array().min(1, "Trường bắt buộc"),
  userList: Yup.array().min(1, "Trường bắt buộc"),
  permissionUser: Yup.array().min(1, "Trường bắt buộc"),
  createdAt: Yup.string(),
});

const FormAddGroupUser = forwardRef((props, ref) => {
  const [avatarImg, setAvatarImg] = useState(null);

  const { formikRef, editorRef } = ref;

  const userList = [
    { value: "1", label: "Nguyễn Văn An" },
    { value: "2", label: "Trần Thị Linh" },
    { value: "3", label: "Cao An Lạc" },
    { value: "4", label: "Lên Văn Tín" },
  ];

  const permissionUser = [
    { value: "1", label: "Quyền 1" },
    { value: "2", label: "Quyền 2" },
    { value: "3", label: "Quyền 3" },
    { value: "4", label: "Quyền 4" },
  ];

  const onSend = (values) => {
    toast.push(<Notification type="success" title="Mail Sent" />, {
      placement: "top-center",
    });
  };

  const onFileUpload = (file) => {
    setAvatarImg(URL.createObjectURL(file[0]));
  };

  const beforeUpload = (files) => {
    let valid = true;

    const allowedFileType = ["image/jpeg", "image/png"];

    for (let file of files) {
      if (!allowedFileType.includes(file.type)) {
        valid = "Please upload a .jpeg or .png file!";
      }
    }

    return valid;
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
              className={""}
              label="Tên nhóm người dùng"
              labelClass="!justify-start"
              invalid={errors.title && touched.title}
              errorMessage={errors.title}
            >
              <Field autoComplete="off" name="title" component={Input} />
            </FormItem>
            <FormItem
              className={""}
              label="Thêm người dùng vào nhóm"
              labelClass="!justify-start"
              invalid={errors.userList && touched.userList}
              errorMessage={errors.userList}
            >
              <Field name="userList">
                {({ field, form }) => (
                  <Select
                    isMulti
                    field={field}
                    form={form}
                    placeholder="Chọn người dùng"
                    options={userList}
                    onChange={(user) => {
                      form.setFieldValue(field.name, user);
                    }}
                  ></Select>
                )}
              </Field>
            </FormItem>
            <FormItem
              className={""}
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
                    onChange={(permission) => {
                      form.setFieldValue(field.name, permission);
                    }}
                  ></Select>
                )}
              </Field>
            </FormItem>
            <FormItem
              className={""}
              label="Ngày tạo"
              labelClass="!justify-start"
            >
              <div className="opacity-50 pointer-events-none">
                <Field autoComplete="off" name="createdAt" component={Input} />
              </div>
            </FormItem>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
});

export default FormAddGroupUser;
