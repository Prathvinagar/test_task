export const apiDataRequest = (request) => {
  return {
    type: "FETCH_DATA",
  };
};

export const apiDataSuccess = (data) => {
  return {
    type: "ADD_DATA",
    payload: data,
  };
};

export const apiDataFailure = (error) => {
  return {
    type: "ERROR",
    payload: error,
  };
};
