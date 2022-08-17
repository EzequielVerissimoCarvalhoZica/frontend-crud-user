import React from "react"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { showUserEdit } from "../app/slices/userSlice";

export default function UserLinksModal() {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(showUserEdit());

  return (
    <>
      <Modal.Body>
        <p>Configure os vínculos ao usuário</p>
        <Button className="mb-3" variant="outline-primary">Novo Vínculo</Button>
        <p>Usuário</p>
        <ul>
          <li>Não implementado</li>
          <li>Não implementado</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={handleClose}>
              Voltar
        </Button>
      </Modal.Footer>
    </>
  )
}