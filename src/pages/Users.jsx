import React from 'react';
import './Users.css';
import FormSearchUser from '../components/FormSearchUser';
import UsersTable from '../components/UsersTable';

function Users() {
  return (
    <div>
      <header className="container-header-users">
        <h2>Usuários</h2>
      </header>
      <div className="container-users">
        <div className="container-form-search">
          <FormSearchUser />
        </div>
        <UsersTable />
      </div>

    </div>
  );
}

export default Users;
