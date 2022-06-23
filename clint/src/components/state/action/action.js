export const TrackLogin = (x) => {
  return (dispatch) => {
    dispatch({
      type: "TrackLogin",
      payload: x,
    });
  };
};
