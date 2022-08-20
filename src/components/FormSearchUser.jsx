/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { setUserSearched, setReload } from '../app/slices/userSlice';

export default function FormSearchUser() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setSearch(target.value);
    dispatch(setUserSearched(target.value));
  };

  const changeReload = () => {
    dispatch(setReload());
    setSearch('');
  };
  return (
    <Form className="d-flex mb-4">
      <Button as={Col} type="button">Novo</Button>
      <Form.Control type="text" value={search} name="search" onChange={handleChange} placeholder="Pesquisar Usuários" />
      <Button type="button" onClick={changeReload}>Atualizar</Button>
    </Form>
  );
}
