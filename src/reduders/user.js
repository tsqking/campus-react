import User from '../models/user';

const initState = { ...new User() };

export default (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
