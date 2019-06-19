import http from './http';

const testApi = () => http({
  url: '/',
});

const testApi2 = () => http({
  url: '/home/api/v1',
});

const testApi404 = () => http({
  url: '/home/api/v100',
});

export default {
  testApi,
  testApi2,
  testApi404,
};
