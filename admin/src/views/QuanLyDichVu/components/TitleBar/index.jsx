
import { Container } from 'components/shared'
import React from 'react'
import { HiOutlinePlusCircle } from 'react-icons/hi'
import { Button, Input, Tooltip } from 'components/ui'
const TitleBar = (props) => {
  return (
    <div className='flex flex-wrap items-center justify-between'>
      <h3>Danh sách dịch vụ</h3>
      <Button size="sm"
        variant="twoTone"
        icon={<HiOutlinePlusCircle />}
        onClick={props?.onClick}
      >
        Thêm dịch vụ
      </Button>
    </div>
  )
}

export default TitleBar