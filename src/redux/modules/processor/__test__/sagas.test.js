import { delay } from "redux-saga/effects";

import { expectSaga } from "redux-saga-test-plan";
import { reducer } from "../reducers";
import * as actions from "../actions";
import sagas, { watchForTaskActions } from "../sagas";

jest.mock("../../../../utils/getRandomNumber", () => jest.fn(() => 200));

describe("Processor sagas", () => {
  it("deve abrir o modal de confirmação quando o início de um processo for anunciado", async () => {
    return expectSaga(sagas)
      .withReducer(reducer)
      .dispatch(actions.announceStartProcess())
      .put(actions.openConfirmStartProcessModal())
      .silentRun();
  });

  it("deve abrir o modal de confirmação quando o cancelamento de um processo for anunciado", async () => {
    return expectSaga(sagas)
      .withReducer(reducer)
      .dispatch(actions.announceCancelProcess())
      .put(actions.openConfirmCancelProcessModal())
      .silentRun();
  });

  it("deve abrir o modal de confirmação quando um processo for finalizado", async () => {
    return expectSaga(sagas)
      .withReducer(reducer)
      .dispatch(actions.finishProcess())
      .put(actions.openConfirmFinishProcessModal())
      .silentRun();
  });

  it("deve resetar o estado quando o modal de confirmação for fechado", async () => {
    return expectSaga(sagas)
      .withReducer(reducer)
      .dispatch(actions.closeConfirmFinishProcessModal())
      .put(actions.resetProcessState())
      .silentRun();
  });

  it("deve iniciar a primeira task imediatamente após o início de um processo", async () => {
    return expectSaga(sagas)
      .withReducer(reducer)
      .dispatch(actions.startProcess())
      .fork(watchForTaskActions)
      .put(actions.startTask1())
      .silentRun();
  });

  it("deve iniciar a segunda task imdediatamente após o término da primeira", async () => {
    return expectSaga(sagas)
      .withReducer(reducer)
      .provide({
        call(effect, next) {
          if (effect.fn.name === "delayP") {
            return Promise.resolve();
          }
          return next();
        }
      })
      .dispatch(actions.startProcess())
      .fork(watchForTaskActions)
      .put(actions.finishTask1(200))
      .put(actions.startTask2())
      .silentRun();
  });

  it("deve iniciar a terceira task imdediatamente após o término da segunda", async () => {
    return expectSaga(sagas)
      .withReducer(reducer)
      .provide({
        call(effect, next) {
          if (effect.fn.name === "delayP") {
            return Promise.resolve();
          }
          return next();
        }
      })
      .dispatch(actions.startProcess())
      .fork(watchForTaskActions)
      .put(actions.finishTask2(200))
      .put(actions.startTask3())
      .silentRun();
  });

  it("deve iniciar a quarta task imdediatamente após o término da terceira", async () => {
    return expectSaga(sagas)
      .withReducer(reducer)
      .provide({
        call(effect, next) {
          if (effect.fn.name === "delayP") {
            return Promise.resolve();
          }
          return next();
        }
      })
      .dispatch(actions.startProcess())
      .fork(watchForTaskActions)
      .put(actions.finishTask3(200))
      .put(actions.startTask4())
      .silentRun();
  });

  it("deve iniciar a quinta task imdediatamente após o término da quarta", async () => {
    return expectSaga(sagas)
      .withReducer(reducer)
      .provide({
        call(effect, next) {
          if (effect.fn.name === "delayP") {
            return Promise.resolve();
          }
          return next();
        }
      })
      .dispatch(actions.startProcess())
      .fork(watchForTaskActions)
      .put(actions.finishTask4(200))
      .put(actions.startTask5())
      .silentRun();
  });

  it("deve finalizar o processamento imdediatamente após o término da quinta task", async () => {
    return expectSaga(sagas)
      .withReducer(reducer)
      .provide({
        call(effect, next) {
          if (effect.fn.name === "delayP") {
            return Promise.resolve();
          }
          return next();
        }
      })
      .dispatch(actions.startProcess())
      .fork(watchForTaskActions)
      .put(actions.finishTask5(200))
      .put(actions.finishProcess())
      .silentRun();
  });
});
