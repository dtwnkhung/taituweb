
import { Container } from 'components/shared'
import React from 'react'
import { HiOutlinePlusCircle } from 'react-icons/hi'
import { Button, Input, Tooltip } from 'components/ui'
const TitleBar = (props) => {
  return (
    <div className='flex flex-wrap items-center justify-between'>
      <h3>Danh sách người dùng</h3>
      <Button size="sm"
        variant="twoTone"
        icon={<HiOutlinePlusCircle />}
        onClick={props?.onClick}
      >
        Thêm người dùng
      </Button>
    </div>
  )
}

export default TitleBar