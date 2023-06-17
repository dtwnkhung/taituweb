import { Container } from 'components/shared'
import React, { useState } from 'react'
import TitleBar from './components/TitleBar'
import Data from './components/Data'
import ModalAdd from './components/ModalAdd'

const QuanLyBaiViet = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <Container className="h-full">
      <TitleBar onClick={() => setModalOpen(true)} />
      <Data onEdit={() => console.log("Edit")} onDelete={() => console.log("Delete")} />
      <ModalAdd isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </Container>
  )
}

export default QuanLyBaiViet