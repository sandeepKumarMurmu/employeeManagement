// const initalState = JSON.parse(localStorage.getItem("cartUrl"));

export const TrackLogin = (
  state = {
    isEmployee: true,
    selected: false,
  },
  action
) => {
  if (action.type === "TrackLogin") {
    return action.payload;
  } else return state;
};
