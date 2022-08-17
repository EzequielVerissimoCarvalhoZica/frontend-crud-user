/* eslint-disable no-unused-vars */
import React from 'react';
import './UserDetail.css'
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { showUserDetail, showUserEdit } from '../app/slices/userSlice';

export default function UserDetail() {
  const show = useSelector((state) => state.user.show)
  const user = useSelector((state) => state.user.user)

  const dispatch = useDispatch()

  const handleClose = () => dispatch(showUserDetail());

  const handleEditUser = () => {
    handleClose()
    dispatch(showUserEdit());
}

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <header className="header-user-model">
          <div>
            <img src="/user.png" alt="image" />
            <h3>{user.name}</h3>
            <div className="container-edit-exit">
              <img src="/edit.svg" alt="image" onClick={handleEditUser}/>
              <img src="/close.svg" alt="image" onClick={handleClose} />
            </div>
          </div>
        </header>
        <Modal.Body>
          <h3>Detalhes do usuário</h3>
          <p>Telefone</p>
          <p>{user.email}</p>
          <p>{user.updatedAt}</p>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}
