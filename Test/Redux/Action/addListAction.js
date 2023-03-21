
export const type = {
    ADD_LIST:'ADD_LIST',
   };


export const addListAction = (payload = {}) => async(dispatch) => {    
    dispatch({type: type.ADD_LIST, payload: payload});
};