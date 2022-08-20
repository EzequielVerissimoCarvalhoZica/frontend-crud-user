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
    password1: '',
    password2: '',
    phoneNumber: '',
    status: true,
    error: '',
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

    if (inputs.password1 !== inputs.password2) {
      setInputs({
        ...inputs,
        error: 'As senhas precisam ser iguais',
      });
      return;
    }

    const body = {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password1,
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
            name="phoneNumber"
            required
            onChange={handleChange}
            value={inputs.phoneNumber}
            pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
            type="tel"
            placeholder="Ex: 11 98888-7777"
            autoFocus
          />
          <Form.Text>Formato: DDD 00000-0000</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
          <Form.Text>Status: </Form.Text>
          <Form.Check
            checked={inputs.status}
            onClick={() => {
              setInputs({
                ...inputs,
                status: !inputs.status,
              });
            }}
            onChange={() => {}}
            inline
            label="Ativo"
            name="status"
            type="radio"
            id="ativo"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
          <Form.Control
            name="password1"
            required
            onChange={handleChange}
            value={inputs.password1}
            type="password"
            placeholder="Senha *"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
          <Form.Control
            name="password2"
            required
            onChange={handleChange}
            value={inputs.password2}
            type="password"
            placeholder="Senha *"
            autoFocus
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        { inputs.error && <Form.Text bsPrefix="">{inputs.error}</Form.Text> }
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
