import axios from 'axios';

const PORT = 3001;
const BASE_URL = `http://localhost:${PORT}`;

export const getToken = async () => {
  const data = {
    email: process.env.REACT_APP_EMAIL,
    password: process.env.REACT_APP_PASSWORD,
  };

  const result = await axios.post(`${BASE_URL}/user/login`, data)
    .catch((error) => error.message);

  return {
    headers: { Authorization: `Bearer ${result.data.access_token}` },
  };
};

export const makeGet = async (path) => {
  const token = await getToken();

  const response = await axios.get(`${BASE_URL}/${path}`, token)
    .catch((error) => error.response);

  return response;
};

export const makePut = async (path, body) => {
  const token = await getToken();

  const response = await axios
    .put(`${BASE_URL}/${path}`, body, token)
    .catch((error) => error.response);
  return response;
};

export const makePost = async (path, body) => {
  const token = await getToken();

  const response = await axios
    .post(`${BASE_URL}/${path}`, body, token)
    .catch((error) => error.response);

  return response;
};

export const makeDelete = async (path) => {
  const token = await getToken();

  const response = await axios.delete(`${BASE_URL}/${path}`, token).catch((error) => error.response);

  return response;
};
