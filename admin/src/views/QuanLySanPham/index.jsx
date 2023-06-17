import { Container, DataTable } from 'components/shared'
import React, { useState } from 'react'
import TitleBar from './components/TitleBar'
import { Button } from 'components/ui'
import Data from './components/Data'
import { dataTest } from './components/Data/data'
import ModalAdd from './components/ModalAdd'
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi'

const QuanLySanPham = () => {

  const [modalOpen, setModalOpen] = useState(false);
  // const columns = [
  //   {
  //     Header: 'STT',
  //     accessor: 'id',
  //     sortable: true
  //   },
  //   {
  //     Header: 'Hình ảnh sản phẩm',
  //     accessor: 'hinhAnhSanPham',
  //     sortable: true,
  //     Cell: props => {
  //       const row = props.row.original
  //       return <img src={row.hinhAnhSanPham} className='rounded-xl h-20 w-auto' />
  //     },
  //   },
  //   {
  //     Header: 'Giá sản phẩm',
  //     accessor: 'giaSanPham',
  //     sortable: true,
  //     Cell: props => {
  //       const row = props.row.original
  //       return (
  //         <div className="text-right">
  //           {row.giaSanPham}
  //         </div>
  //       )
  //     },
  //   },
  //   {
  //     Header: 'Ngày đăng',
  //     accessor: 'ngayDang',
  //     sortable: true
  //   },
  //   {
  //     Header: 'Thao tác',
  //     id: 'action',
  //     accessor: (row) => row,
  //     Cell: props => {
  //       const row = props.row.original
  //       return (
  //         <div className='flex items-center'>
  //           <div className='mr-3'>
  //             <Button
  //               shape="circle"
  //               size="sm"
  //               variant="twoTone"
  //               icon={<HiOutlinePencilAlt />}
  //             />
  //           </div>
  //           <div>
  //             <Button
  //               shape="circle"
  //               size="sm"
  //               variant="twoTone"
  //               icon={<HiOutlineTrash />}
  //             />
  //           </div>
  //         </div>
  //       )
  //     }
  //   },
  // ]
  return (
    <Container className="h-full">
      <TitleBar onClick={() => setModalOpen(true)} />
      {/* <DataTable data={dataTest} columns={columns} /> */}
      <Data onEdit={() => console.log("Edit")} onDelete={() => console.log("Delete")} />
      <ModalAdd isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </Container>
  )
}

export default QuanLySanPham