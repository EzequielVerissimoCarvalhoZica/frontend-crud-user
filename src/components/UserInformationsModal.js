import React, { useState } from "react"
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { showUserEdit } from "../app/slices/userSlice";
import { makePut } from "../helpers/api";

export default function UserInformationsModal() {
  let [inputs, setInputs] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    password: "",
  })
  const handleChange = ({ target }) => {
    const value = target.value;
    const name = target.name;
  
    setInputs((prevalue) => {
      return {
        ...prevalue,          
        [name]: value
      }
    })
  }

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(showUserEdit());

  const updateUser = async (event) => {
    event.preventDefault();

    const body = {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
    }
    const result = await makePut(`user/${user.id}`, body)
    console.log(result);
  }

  return (
    <>
      <Form onSubmit={updateUser}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              name="name"
              onChange={handleChange}
              value={inputs.name}
              type="text"
              placeholder="Nome *"
              required={true}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              name="email"
              onChange={handleChange}
              required={true}
              value={inputs.email}
              type="email"
              placeholder="E-mail *"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              name="password"
              required={true}
              onChange={handleChange}
              value={inputs.password}
              type="password"
              placeholder="Senha *"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              required={true}
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
    </>
  )
}