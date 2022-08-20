import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setReload, showUserEdit } from '../../../app/slices/userSlice';
import { makePut } from '../../../helpers/api';

export default function UserInformationsModal() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    password: '',
  });
  const handleChange = ({ target }) => {
    const { value } = target;
    const { name } = target;

    setInputs((prevalue) => ({
      ...prevalue,
      [name]: value,
    }));
  };

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(showUserEdit());

  const updateUser = async (event) => {
    event.preventDefault();

    const body = {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
    };
    await makePut(`user/${user.id}`, body);

    dispatch(showUserEdit());
    dispatch(setReload());
  };

  return (
    <Form onSubmit={updateUser}>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            name="name"
            onChange={handleChange}
            value={inputs.name}
            type="text"
            placeholder="Nome *"
            required
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Control
            name="email"
            onChange={handleChange}
            required
            value={inputs.email}
            type="email"
            placeholder="E-mail *"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Control
            name="dateOfBirth"
            onChange={handleChange}
            value={inputs.dateOfBirth}
            type="text"
            placeholder="Data de nascimento"
            autoFocus
          />
          <Form.Text>Opcional</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Control
            name="password"
            required
            onChange={handleChange}
            value={inputs.password}
            type="password"
            placeholder="Senha *"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
          <Form.Control
            required
            type="password"
            placeholder="Senha"
            autoFocus
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={handleClose}>
          Voltar
        </Button>
        <Button type="submit" variant="primary">
          Salvar
        </Button>
      </Modal.Footer>
    </Form>
  );
}
