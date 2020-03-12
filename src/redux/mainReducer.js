import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth505Reducer from '../features/EmailAuth505/redux/reducers';
import EmailAuth500Reducer from '../features/EmailAuth500/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth505: EmailAuth505Reducer,
EmailAuth500: EmailAuth500Reducer,
EmailAuth: EmailAuthReducer,

});