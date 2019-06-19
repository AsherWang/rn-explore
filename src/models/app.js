export default {
  namespace: 'app',
  state: {
    language: null,
  },
  reducers: {
    updateLang(state, action) {
      return action.payload;
    },
  },
};
