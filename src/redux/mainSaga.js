import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth505Saga from '../features/EmailAuth505/redux/sagas';
import EmailAuth504Saga from '../features/EmailAuth504/redux/sagas';
import EmailAuth500Saga from '../features/EmailAuth500/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth505Saga,
EmailAuth504Saga,
EmailAuth500Saga,
EmailAuthSaga,
    
  ]);
}