
import { Container } from 'components/shared'
import React from 'react'
import { HiOutlineBell, HiOutlinePlusCircle } from 'react-icons/hi'
import { Button, Input, Tooltip } from 'components/ui'
const TitleBarGroupUser = (props) => {
  return (
    <div className='flex flex-wrap items-center justify-between'>
      <h3>Danh sách nhóm người dùng</h3>
      <div>
        <Button size="sm"
          variant="twoTone"
          icon={<HiOutlineBell />}
          className="mr-3"
          onClick={props?.onSendNotification}
        >
          Thông báo nhóm người dùng
        </Button>
        <Button size="sm"
          variant="twoTone"
          icon={<HiOutlinePlusCircle />}
          onClick={props?.onClick}
        >
          Thêm nhóm người dùng
        </Button>
      </div>
    </div>
  )
}

export default TitleBarGroupUser