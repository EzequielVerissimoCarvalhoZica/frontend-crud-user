import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertSearch, reload } from '../app/slices/userSlice';

export default function FormSearchUser() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch()

  const handleChange = ({ target }) => {
    setSearch(target.value)
    dispatch(insertSearch(target.value))
  };
  const changeReload = ({ target }) => {
    dispatch(reload(target.value));
    setSearch('');
  };
  return (
    <form action="">
      <button type="button">Novo</button>
      <input type="text" value={search} name="search" onChange={handleChange} placeholder="Pesquisar Usuários" id=""/>
      <button type="button" onClick={changeReload}>Atualizar</button>
    </form>
  )
}