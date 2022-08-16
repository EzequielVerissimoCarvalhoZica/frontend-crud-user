import React from 'react';
import FormSearchUser from '../components/FormSearchUser';
import UsersTable from '../components/UsersTable';

function Users() {
  return (
    <div>
      <h1>Usuários</h1>
      <FormSearchUser />
      <UsersTable />
    </div>
  );
}

export default Users;
