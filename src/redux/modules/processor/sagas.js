import { take, all, put, delay, fork, cancel } from "redux-saga/effects";
import * as actions from "./actions";
import getRandomNumber from "../../../utils/getRandomNumber";

function* processTask1() {
  const value = getRandomNumber();
  yield delay(6000);
  yield put(actions.finishTask1(value));
  yield put(actions.startTask2());
}

function* processTask2() {
  const value = getRandomNumber();
  yield delay(6000);
  yield put(actions.finishTask2(value));
  yield put(actions.startTask3());
}

function* processTask3() {
  const value = getRandomNumber();
  yield delay(6000);
  yield put(actions.finishTask3(value));
  yield put(actions.startTask4());
}

function* processTask4() {
  const value = getRandomNumber();
  yield delay(6000);
  yield put(actions.finishTask4(value));
  yield put(actions.startTask5());
}

function* processTask5() {
  const value = getRandomNumber();
  yield delay(6000);
  yield put(actions.finishTask5(value));
  yield put(actions.finishProcess());
}

export function* watchForTaskActions() {
  while (true) {
    const action = yield take([
      actions.TASK_1_STARTED,
      actions.TASK_2_STARTED,
      actions.TASK_3_STARTED,
      actions.TASK_4_STARTED,
      actions.TASK_5_STARTED
    ]);

    if (action.type === actions.TASK_1_STARTED) {
      yield fork(processTask1);
    }
    if (action.type === actions.TASK_2_STARTED) {
      yield fork(processTask2);
    }
    if (action.type === actions.TASK_3_STARTED) {
      yield fork(processTask3);
    }
    if (action.type === actions.TASK_4_STARTED) {
      yield fork(processTask4);
    }
    if (action.type === actions.TASK_5_STARTED) {
      yield fork(processTask5);
    }
  }
}

function* watchForProcessActions() {
  let taskWatchers;
  while (true) {
    const action = yield take([
      actions.PROCESS_START_ANNOUNCED,
      actions.PROCESS_STARTED,
      actions.PROCESS_CANCEL_ANNOUNCED,
      actions.PROCESS_CANCELED,
      actions.PROCESS_FINISHED
    ]);

    if (action.type === actions.PROCESS_START_ANNOUNCED) {
      yield put(actions.openConfirmStartProcessModal());
    }

    if (action.type === actions.PROCESS_STARTED) {
      taskWatchers = yield fork(watchForTaskActions);
      yield put(actions.startTask1());
    }

    if (action.type === actions.PROCESS_CANCEL_ANNOUNCED) {
      yield put(actions.openConfirmCancelProcessModal());
    }

    if (
      (action.type === actions.PROCESS_CANCELED ||
        action.type === actions.PROCESS_FINISHED) &&
      taskWatchers
    ) {
      yield cancel(taskWatchers);
    }

    if (action.type === actions.PROCESS_FINISHED) {
      yield put(actions.openConfirmFinishProcessModal());
    }
  }
}

function* watchForModalActions() {
  while (true) {
    yield take(actions.CONFIRM_FINISH_PROCESS_MODAL_CLOSED);
    yield put(actions.resetProcessState());
  }
}

function* rootSaga() {
  yield all([watchForProcessActions(), watchForModalActions()]);
}

export default rootSaga;
