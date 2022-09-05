import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/players';
import * as api from '../api/players';

function* getPlayers() {
  try {
    const result = yield call(api.getPlayers);
    yield put(actions.getPlayersSuccess(result.data));
  } catch (error) {
    console.error(error);
  }
}

function* watchGetPlayersRequest() {
  yield takeEvery(actions.Types.GET_PLAYERS_REQUEST, getPlayers);
}

const playerSagas = [fork(watchGetPlayersRequest)];

export default playerSagas;
