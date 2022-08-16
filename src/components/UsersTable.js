import React, { useEffect, useState } from 'react';
import { makeGet } from '../helpers/api';
import UserCard from './UserCard';

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();


  useEffect(() => {
    async function getOrderDatail() {
      const response = await makeGet('user');

      if (response.status !== 200) setError({ status: response.status, message: response.statusText})
      
      setUsers(response.data)
    }
    getOrderDatail();
  }, [])
  return (
    <>
      {
        error ?
        <span>error</span>:
        <table>
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
            <UserCard  allUsers={users} />
          </tbody>
        </table>
      }
    </>
  )
}