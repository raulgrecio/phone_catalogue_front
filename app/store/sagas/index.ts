/**
 *  Redux saga class init
 */
import {SagaIterator} from 'redux-saga';
import {takeEvery, all} from 'redux-saga/effects';
import * as types from '../actions/types';

//import Sagas
import phonesSaga from './phonesSaga';

export default function* watch(): SagaIterator {
  yield all([
    //takeEvery(types.OTHER_REQUEST, otherSaga),
    takeEvery(types.PHONE_REQUEST, phonesSaga),
  ]);
}
