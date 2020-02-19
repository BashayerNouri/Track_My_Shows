import shows from "../Data/shows";

const initialState = {
  shows: shows,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_SHOW":
      return {
        ...state,
        shows: state.shows.filter(show => action.payload !== show)
      };
    default:
      return state;
  }
};

export default reducer;
