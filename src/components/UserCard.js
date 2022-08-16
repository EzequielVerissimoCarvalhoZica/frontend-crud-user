/* eslint-disable react/prop-types */
import React from 'react';

export default function UserCard({ allUsers }) {
  return (
    <>
      {
        allUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.status}</td>
            <td>Ações</td>
          </tr>
        ))
      }
    </>
  )
}