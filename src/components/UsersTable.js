import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { makeGet } from '../helpers/api';
import UserCard from './UserCard';

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [usersFiltered, setUsersFiltered] = useState([]);
  const [error, setError] = useState();
  const reload = useSelector((state) => state.user.reload)

  useEffect(() => {
    async function getOrderDatail() {
      const response = await makeGet('user');

      if (response.status !== 200) setError({ status: response.status, message: response.statusText})
      
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
        <span>{`${error.status} ${error.message}`}</span>:
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