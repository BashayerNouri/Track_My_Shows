const DELETE_SHOW = "DELETE_SHOW";


export const deleteShow = show => {
  return {
    type: DELETE_SHOW,
    payload: show
  };
};

