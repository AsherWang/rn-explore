import { create } from 'dva-core';
import products from './products';
import counter from './counter';
import app from './app';

const dva = create();

dva.model(products);
dva.model(counter);
dva.model(app);

dva.start();

// eslint-disable-next-line no-underscore-dangle
export default dva._store;
