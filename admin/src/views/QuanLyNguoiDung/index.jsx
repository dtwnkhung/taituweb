import { Container } from 'components/shared'
import { Segment, Tabs } from 'components/ui'
import React, { useState } from 'react'
import Data from './components/Data'
import ModalAdd from './components/ModalAdd'
import TitleBar from './components/TitleBar'
import TitleBarGroupUser from './components/TitleBarGroupUser'
import DataGroupUser from './components/DataGroupUser'
import ModalAddGroupUser from './components/ModalAddGroupUser'
import ModalSendNotification from './components/ModalSendNotification'

const QuanLyNguoiDung = () => {

  const { TabNav, TabList, TabContent } = Tabs
  const [modalOpen, setModalOpen] = useState(false);
  const [modalGroupUserOpen, setModalGroupUserOpen] = useState(false);
  const [modalSendNotification, setModalSendNotification] = useState(false);
  return (
    <Container className="h-full">
      <Tabs defaultValue="user" variant="pill">
        <TabList>
          <TabNav value="user">Người dùng</TabNav>
          <TabNav value="groupUser">Nhóm người dùng</TabNav>
        </TabList>
        <div className="p-4">
          <TabContent value="user">
            <TitleBar onClick={() => setModalOpen(true)} />
            <Data onEdit={() => console.log("Edit")} onDelete={() => console.log("Delete")} />
          </TabContent>
          <TabContent value="groupUser">
            <TitleBarGroupUser onClick={() => setModalGroupUserOpen(true)} onSendNotification={() => setModalSendNotification(true)} />
            <DataGroupUser onEdit={() => console.log("Edit")} onDelete={() => console.log("Delete")} />
          </TabContent>
        </div>
      </Tabs>
      <ModalAdd isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <ModalAddGroupUser isOpen={modalGroupUserOpen} onClose={() => setModalGroupUserOpen(false)} />
      <ModalSendNotification isOpen={modalSendNotification} onClose={() => setModalSendNotification(false)} />
    </Container>
  )
}

export default QuanLyNguoiDung