import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { showUserCustomModal } from '../../../app/slices/userSlice';
import CustomFormModal from '../genericFormModal/CustomFormModal';

export default function UserCreate() {
  const modalType = useSelector((state) => state.user.modalType);

  const dispatch = useDispatch();

  const handleClose = () => dispatch(showUserCustomModal(''));

  return (
    <Modal show={modalType === 'create'} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Criar Usuário</Modal.Title>
      </Modal.Header>
      <CustomFormModal modalType="create" />
    </Modal>
  );
}
