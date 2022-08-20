import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setReload, showUserCustomModal } from '../../../app/slices/userSlice';
import { changeError } from '../../../app/slices/errorSlice';
import CustomInput from '../../forms/CustomInput';
import { verifyPass } from '../../../helpers/verifyInputs';
import { handleRequest } from '../../../helpers/handleRequest';

export default function CustomFormModal() {
  const [error, setError] = useState('');
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    password1: '',
    password2: '',
    phoneNumber: '',
    status: true,
  });
  const modalType = useSelector((state) => state.user.modalType);

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
  const handleClose = () => dispatch(showUserCustomModal(''));

  const request = async (event) => {
    event.preventDefault();

    if (!verifyPass(inputs.password1, inputs.password2)) {
      setError('As senhas precisam ser iguais');
      return;
    }
    const result = await handleRequest(inputs, modalType, user.id);

    if (result.err) {
      dispatch(changeError('Erro ao criar usuário'));
    }
    handleClose();
    dispatch(setReload());
  };

  return (
    <Form onSubmit={request}>
      <Modal.Body>
        <CustomInput handleChange={handleChange} modalType={modalType} value={inputs.name} inputName="name" placeHolder="Nome" type="text" id="1" text={{ show: false, data: '' }} />
        <CustomInput handleChange={handleChange} modalType={modalType} value={inputs.email} inputName="email" placeHolder="E-mail" type="email" id="2" text={{ show: false, data: '' }} />
        <CustomInput handleChange={handleChange} modalType={modalType} value={inputs.dateOfBirth} inputName="dateOfBirth" placeHolder="Data de nascimento" type="text" id="3" text={{ show: true, data: 'Opcional' }} />
        <CustomInput handleChange={handleChange} modalType={modalType} value={inputs.phoneNumber} inputName="phoneNumber" placeHolder="Ex: 11 98888-7777" type="tel" id="4" text={{ show: true, data: 'Formato: DDD 00000-0000' }} />
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
        <CustomInput handleChange={handleChange} modalType={modalType} value={inputs.password1} inputName="password1" placeHolder="Senha" type="password" id="6" text={{ show: false, data: '' }} />
        <CustomInput handleChange={handleChange} modalType={modalType} value={inputs.password2} inputName="password2" placeHolder="Senha" type="password" id="7" text={{ show: false, data: '' }} />
      </Modal.Body>
      <Modal.Footer>
        { error && <Form.Text>{error}</Form.Text> }
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
