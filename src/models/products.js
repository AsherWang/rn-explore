export default {
  namespace: 'products',
  state: [{ name: '1232' }],
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
