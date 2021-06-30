import MODULE_NAME from "./constants";

export const PROCESS_START_ANNOUNCED = `${MODULE_NAME}/PROCESS_START_ANNOUNCED`;
export const PROCESS_STARTED = `${MODULE_NAME}/PROCESS_STARTED`;

export const TASK_1_STARTED = `${MODULE_NAME}/TASK_1_STARTED`;
export const TASK_1_FINISHED = `${MODULE_NAME}/TASK_1_FINISHED`;

export const TASK_2_STARTED = `${MODULE_NAME}/TASK_2_STARTED`;
export const TASK_2_FINISHED = `${MODULE_NAME}/TASK_2_FINISHED`;

export const TASK_3_STARTED = `${MODULE_NAME}/TASK_3_STARTED`;
export const TASK_3_FINISHED = `${MODULE_NAME}/TASK_3_FINISHED`;

export const TASK_4_STARTED = `${MODULE_NAME}/TASK_4_STARTED`;
export const TASK_4_FINISHED = `${MODULE_NAME}/TASK_4_FINISHED`;

export const TASK_5_STARTED = `${MODULE_NAME}/TASK_5_STARTED`;
export const TASK_5_FINISHED = `${MODULE_NAME}/TASK_5_FINISHED`;

export const PROCESS_CANCEL_ANNOUNCED = `${MODULE_NAME}/PROCESS_CANCEL_ANNOUNCED`;
export const PROCESS_CANCELED = `${MODULE_NAME}/PROCESS_CANCELED`;

export const PROCESS_FINISHED = `${MODULE_NAME}/PROCESS_FINISHED`;
export const PROCESS_STATE_CLEARED = `${MODULE_NAME}/PROCESS_STATE_CLEARED`;

export const CONFIRM_START_PROCESS_MODAL_OPENED = `${MODULE_NAME}/CONFIRM_START_PROCESS_MODAL_OPENED`;
export const CONFIRM_START_PROCESS_MODAL_CLOSED = `${MODULE_NAME}/CONFIRM_START_PROCESS_MODAL_CLOSED`;

export const CONFIRM_CANCEL_PROCESS_MODAL_OPENED = `${MODULE_NAME}/CONFIRM_CANCEL_PROCESS_MODAL_OPENED`;
export const CONFIRM_CANCEL_PROCESS_MODAL_CLOSED = `${MODULE_NAME}/CONFIRM_CANCEL_PROCESS_MODAL_CLOSED`;

export const CONFIRM_FINISH_PROCESS_MODAL_OPENED = `${MODULE_NAME}/CONFIRM_FINISH_PROCESS_MODAL_OPENED`;
export const CONFIRM_FINISH_PROCESS_MODAL_CLOSED = `${MODULE_NAME}/CONFIRM_FINISH_PROCESS_MODAL_CLOSED`;

export const announceStartProcess = () => ({
  type: PROCESS_START_ANNOUNCED
});

export const startProcess = () => ({
  type: PROCESS_STARTED
});

export const startTask1 = () => ({
  type: TASK_1_STARTED
});

export const finishTask1 = value => ({
  type: TASK_1_FINISHED,
  payload: {
    value
  }
});

export const startTask2 = () => ({
  type: TASK_2_STARTED
});

export const finishTask2 = value => ({
  type: TASK_2_FINISHED,
  payload: {
    value
  }
});

export const startTask3 = () => ({
  type: TASK_3_STARTED
});

export const finishTask3 = value => ({
  type: TASK_3_FINISHED,
  payload: {
    value
  }
});

export const startTask4 = () => ({
  type: TASK_4_STARTED
});

export const finishTask4 = value => ({
  type: TASK_4_FINISHED,
  payload: {
    value
  }
});

export const startTask5 = () => ({
  type: TASK_5_STARTED
});

export const finishTask5 = value => ({
  type: TASK_5_FINISHED,
  payload: {
    value
  }
});

export const announceCancelProcess = () => ({
  type: PROCESS_CANCEL_ANNOUNCED
});

export const cancelProcess = () => ({
  type: PROCESS_CANCELED
});

export const finishProcess = () => ({
  type: PROCESS_FINISHED
});

export const resetProcessState = () => ({
  type: PROCESS_STATE_CLEARED
});

export const openConfirmStartProcessModal = () => ({
  type: CONFIRM_START_PROCESS_MODAL_OPENED
});

export const closeConfirmStartProcessModal = () => ({
  type: CONFIRM_START_PROCESS_MODAL_CLOSED
});

export const openConfirmCancelProcessModal = () => ({
  type: CONFIRM_CANCEL_PROCESS_MODAL_OPENED
});

export const closeConfirmCancelProcessModal = () => ({
  type: CONFIRM_CANCEL_PROCESS_MODAL_CLOSED
});

export const openConfirmFinishProcessModal = () => ({
  type: CONFIRM_FINISH_PROCESS_MODAL_OPENED
});

export const closeConfirmFinishProcessModal = () => ({
  type: CONFIRM_FINISH_PROCESS_MODAL_CLOSED
});
