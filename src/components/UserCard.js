/* eslint-disable react/prop-types */
import React, {} from 'react';
import './UserCard.css'
import { useDispatch } from 'react-redux';
import { makeDelete } from "../helpers/api";
import Dropdown from 'react-bootstrap/Dropdown';
import { insertUser, reload, showUserDetail, showUserEdit } from '../app/slices/userSlice';
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';
import { changeError } from '../app/slices/errorSlice';

export default function UserCard({ allUsers }) {
  const dispatch = useDispatch();

  const userDetail = (user) => {
    dispatch(showUserDetail());
    dispatch(insertUser(user));
  }

  const handleEditUser = (user) => {
    dispatch(insertUser(user));
    dispatch(showUserEdit());
  }
  const handleDeleteUser = async (user) => {
    const response = await makeDelete(`user/${user.id}`)
    if (response.status !== 200) {
      dispatch(changeError('Erro ao excluir usuario'))
    } else {
      dispatch(reload());
    }

  }
  return (
    <>
      <UserDetail />
      <UserEdit />
      {
        allUsers.map((user) => (
          <tr key={user.id} className="container-user-card">
            <td onClick={() => { userDetail(user) }}>{user.id}</td>
            <td onClick={() => { userDetail(user) }}>{user.name}</td>
            <td onClick={() => { userDetail(user) }}>{user.email}</td>
            <td onClick={() => { userDetail(user) }}>{user.status}</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                Ações
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => { handleEditUser(user) }}>Editar</Dropdown.Item>
                  <Dropdown.Item onClick={() => { handleDeleteUser(user) }}>Excluir</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        ))
      }
    </>
  )
}