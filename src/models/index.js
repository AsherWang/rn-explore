import { create } from 'dva-core';
import products from './products';
import counter from './counter';

const app = create();

app.model(products);
app.model(counter);

app.start();

// eslint-disable-next-line no-underscore-dangle
export default app._store;
