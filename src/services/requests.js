import Client from './instance';

export const getRequest = async (URL, params) => {
  const response = await Client.get(URL, params);
  return response;
};

export const postRequest = async (URL, payload) => {
  const response = await Client.post(URL, payload);
  return response;
};
