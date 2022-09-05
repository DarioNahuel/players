import { all } from 'redux-saga/effects';
import playerSagas from './players';

export default function* rootSaga() {
   yield all([...playerSagas]);
}
