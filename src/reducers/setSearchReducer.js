const setSearchReducer = (state=false, action) => {
    switch(action.type){
      case 'ACTIVATED':
        return !state;
      default:
        return state;
    }
  }

export default setSearchReducer;