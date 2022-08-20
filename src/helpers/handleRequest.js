import { makePost, makePut } from './api';
import { formatPhoneNumber } from './formatPhoneNumber';

export const handleRequest = async (data, requestType, id) => {
  const body = {
    name: data.name,
    email: data.email,
    password: data.password1,
    dateOfBirth: data.dateOfBirth,
    phoneNumber: formatPhoneNumber(data.phoneNumber),
    status: data.status,
  };
  let response;
  if (requestType === 'create') {
    response = await makePost('user', body);
  } else {
    response = await makePut(`user/${id}`, body);
  }

  const message = {
    create: 'Erro ao criar usuário',
    edit: 'Erro ao atualizar usuário',
  };

  if (response.status !== 200 && response.status !== 201) {
    return { err: message[requestType] };
  }
  return 'Success';
};

export const lint = '';
