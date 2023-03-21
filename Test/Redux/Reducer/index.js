import {combineReducers} from 'redux';
import { addListReducer } from './addListReducer';


const appReducer = combineReducers({
 todo:addListReducer

});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;