import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeError } from '../app/slices/errorSlice';
import { makeGet } from '../helpers/api';
import AlertError from './AlertDismissible/AlertError';
import UserCard from './UserCard';

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [usersFiltered, setUsersFiltered] = useState([]);
  const error = useSelector((state) => state.error.errorMessage)
  const reload = useSelector((state) => state.user.reload)
  const dispatch = useDispatch();

  useEffect(() => {
    async function getOrderDatail() {
      const response = await makeGet('user');

      if (response.status !== 200)  dispatch(changeError('Erro ao listar usuarios'))

      
      setUsers(response.data)
      setUsersFiltered(response.data)
    }
    getOrderDatail();
  }, [reload])

  const searched = useSelector((state) => state.user.search)
  useEffect(() => {
    const newUsers = users.filter(({ name }) => name.toLowerCase().includes(searched))
    setUsersFiltered(newUsers)
  }, [searched])
  return (
    <>
      {
        error ?
        <AlertError />:
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <UserCard  allUsers={usersFiltered} />
          </tbody>
        </Table>
      }
    </>
  )
}