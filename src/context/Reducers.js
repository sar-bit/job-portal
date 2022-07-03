const Reducer = (state, action) => {
    switch (action.type) {
      case "SELECTED_LIST":
        return {
        selectedList: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  