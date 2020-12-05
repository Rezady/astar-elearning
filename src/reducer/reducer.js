// menyimpan variable global
const initialState = {count: 0};

 function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.value};
    default:
      throw new Error();
  }
}

export {initialState, reducer}; 

