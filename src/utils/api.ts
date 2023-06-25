import axios, { AxiosResponse } from 'axios';

export const api = axios.create({
  baseURL: 'https://17e246be-bef6-4291-9d4a-b9ed1626d36c.mock.pstmn.io/',
});

api.interceptors.response.use((response: AxiosResponse) => response.data?.data || response.data);
