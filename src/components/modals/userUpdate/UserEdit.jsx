import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { Tab, Tabs } from 'react-bootstrap';
import { showUserCustomModal } from '../../../app/slices/userSlice';
import UserLinksModal from './UserLinksModal';
import CustomFormModal from '../genericFormModal/CustomFormModal';

export default function UserEdit() {
  const modalType = useSelector((state) => state.user.modalType);

  const dispatch = useDispatch();

  const handleClose = () => dispatch(showUserCustomModal(''));

  return (
    <Modal show={modalType === 'edit'} onHide={handleClose}>
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
          <CustomFormModal />
        </Tab>
        <Tab eventKey="profile" title="Vínculos">
          <UserLinksModal />
        </Tab>
      </Tabs>
    </Modal>
  );
}
