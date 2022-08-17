/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { insertUser, showUserDetail } from '../app/slices/userSlice';
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';

export default function UserCard({ allUsers }) {
  const dispatch = useDispatch()

  const userDetail = (user) => {
    dispatch(showUserDetail());
    dispatch(insertUser(user));
  }
  return (
    <>
      <UserDetail />
      <UserEdit />
      {
        allUsers.map((user) => (
          <tr key={user.id}>
            <td onClick={() => { userDetail(user) }}>{user.id}</td>
            <td onClick={() => { userDetail(user) }}>{user.name}</td>
            <td onClick={() => { userDetail(user) }}>{user.email}</td>
            <td onClick={() => { userDetail(user) }}>{user.status}</td>
            <td>Ações</td>
          </tr>
        ))
      }
    </>
  )
}