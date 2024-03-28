const intialState = {
  data: [],
  loading: false,
  error: null,
};

export const UserReducer = (state = intialState, action) => {
  switch (action.type) {
    case "FETCH_DATA": {
      return { ...state, loading: true };
    }

    case "ADD_DATA": {
      return { ...state, loading: false, data: action.payload };
    }
    case "Error": {
      return { ...state, loading: false, Error: action.payload };
    }
    default:
      return state;
  }
};

export default UserReducer;
