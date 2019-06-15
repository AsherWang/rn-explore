import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://test.writeyoursmile.com',
  timeout: 5000,
});


instance.interceptors.response.use((response) => {
  // Do something with response data
  const { data } = response;
  if (data && data.code === 200) {
    return data;
  }
  return Promise.reject(new Error('http request err'));
}, error => Promise.reject(error));

export default instance;
