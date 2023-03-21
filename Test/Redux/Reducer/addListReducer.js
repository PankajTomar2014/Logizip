import {type} from '../Action/addListAction';

const initialState={
  todoList:[]
}

export const addListReducer = (state = initialState, action)=> {
    switch (action.type) {
        case type.ADD_LIST:      
          return {...state, todoList: action.payload};
        default:
          return state;
      }
};