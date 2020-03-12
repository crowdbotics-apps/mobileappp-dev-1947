import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth502Reducer from '../features/EmailAuth502/redux/reducers';
import EmailAuth500Reducer from '../features/EmailAuth500/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth502: EmailAuth502Reducer,
EmailAuth500: EmailAuth500Reducer,
EmailAuth: EmailAuthReducer,

});