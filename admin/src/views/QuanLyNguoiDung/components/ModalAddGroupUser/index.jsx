
import { Button, Dialog } from 'components/ui'
import React, { useRef } from 'react'
import FormAddGroupUser from '../FormAddGroupUser'

const ModalAddGroupUser = (props) => {
  const addPostRef = {
    formikRef: useRef()
  }

  const onSend = () => {
    addPostRef.formikRef.current?.submitForm();
    // Add condition, if form submited then close modal
    props.onClose();
  }
  return (
    <Dialog
      isOpen={props.isOpen}
      onClose={props.onClose}
      onRequestClose={props?.onRequestClose}
    >
      <div className="flex flex-col h-full justify-between">
        <h5 className="mb-4">Thêm nhóm người dùng</h5>
        <div className="max-h-[65vh] overflow-y-auto">
          <FormAddGroupUser ref={addPostRef} />
        </div>
        <div className="text-right mt-6">
          <Button
            className="ltr:mr-2 rtl:ml-2"
            variant="plain"
            onClick={props.onClose}
          >
            Đóng
          </Button>
          <Button variant="solid" onClick={onSend}>
            Xác nhận
          </Button>
        </div>
      </div>
    </Dialog>
  )
}

export default ModalAddGroupUser

