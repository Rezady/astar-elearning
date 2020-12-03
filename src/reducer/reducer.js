
// menyimpan variable global
const initialState = {count: 0};

 function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 10};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export {initialState, reducer}; 

