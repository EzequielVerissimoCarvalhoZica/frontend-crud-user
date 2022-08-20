/* eslint-disable jsx-a11y/click-events-have-key-events,
jsx-a11y/no-noninteractive-element-interactions */
import React, {} from 'react';
import './UsersTableBody.css';
import { useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import { makeDelete } from '../../helpers/api';
import {
  insertUser, reload, showUserDetail, showUserEdit,
} from '../../app/slices/userSlice';
import UserDetail from '../modals/userDetail/UserDetail';
import UserEdit from '../modals/userUpdate/UserEdit';
import { changeError } from '../../app/slices/errorSlice';

export default function UserCard({ allUsers }) {
  const dispatch = useDispatch();

  const setUserInGlobalState = (user) => {
    dispatch(showUserDetail());
    dispatch(insertUser(user));
  };

  const handleEditUser = (user) => {
    dispatch(insertUser(user));
    dispatch(showUserEdit());
  };
  const handleDeleteUser = async (id) => {
    const response = await makeDelete(`user/${id}`);
    if (response.status !== 200) {
      dispatch(changeError('Erro ao excluir usuario'));
    } else {
      dispatch(reload());
    }
  };
  return (
    <tbody>
      <UserDetail />
      <UserEdit />
      {
        allUsers.map((user) => (
          <tr key={user.id} className="container-user-card">
            <td onClick={() => { setUserInGlobalState(user); }}>{user.id}</td>
            <td onClick={() => { setUserInGlobalState(user); }}>{user.name}</td>
            <td onClick={() => { setUserInGlobalState(user); }}>{user.email}</td>
            <td onClick={() => { setUserInGlobalState(user); }}>{user.status}</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Ações
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleEditUser(user)}>Editar</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDeleteUser(user.id)}>Excluir</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        ))
      }
    </tbody>
  );
}
