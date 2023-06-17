import { Container } from 'components/shared'
import React, { useState } from 'react'
import Data from './components/Data'
import ModalAdd from './components/ModalAdd'
import TitleBar from './components/TitleBar'

const QuanLyDichVu = () => {

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Container className="h-full">
      <TitleBar onClick={() => setModalOpen(true)} />
      <Data onEdit={() => console.log("Edit")} onDelete={() => console.log("Delete")} />
      <ModalAdd isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </Container>
  )
}

export default QuanLyDichVu