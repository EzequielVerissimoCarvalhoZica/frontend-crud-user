/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { showUserEdit } from '../app/slices/userSlice';
import { Tab, Tabs } from 'react-bootstrap';
import UserInformationsModal from './UserInformationsModal';
import UserLinksModal from './UserLinksModal';

export default function UserEdit() {
  const showEdit = useSelector((state) => state.user.showEdit);

  const dispatch = useDispatch();

  const handleClose = () => dispatch(showUserEdit());

  return (
    <Modal show={showEdit} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Usuário</Modal.Title>
      </Modal.Header>
      <Tabs
        defaultActiveKey="home"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="Informações">
          <UserInformationsModal />
        </Tab>
        <Tab eventKey="profile" title="Vínculos">
          <UserLinksModal />
        </Tab>
     </Tabs>
    </Modal>
  );
}
