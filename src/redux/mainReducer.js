import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth504Reducer from '../features/EmailAuth504/redux/reducers';
import EmailAuth500Reducer from '../features/EmailAuth500/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth504: EmailAuth504Reducer,
EmailAuth500: EmailAuth500Reducer,
EmailAuth: EmailAuthReducer,

});