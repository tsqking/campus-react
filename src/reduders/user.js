const initState = {
  id: null,
  name: '',
  gender: '',
  age: '',
  address: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
