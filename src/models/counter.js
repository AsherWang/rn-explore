export default {
  namespace: 'counter',
  state: 42,
  reducers: {
    add(state) {
      return state + 1;
    },
    update(state, action) {
      return action.payload;
    },
  },
};
