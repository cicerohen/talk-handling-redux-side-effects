export const confirmStartProcessModalIsOpen = state =>
  state.processor.modals.confirmStartProcessModalIsOpen || false;

export const confirmCancelProcessModalIsOpen = state =>
  state.processor.modals.confirmCancelProcessModalIsOpen || false;

export const confirmFinishProcessModalIsOpen = state =>
  state.processor.modals.confirmFinishProcessModalIsOpen || false;

export const getTasks = state => state.processor.tasks || {};

export const getTotalValue = state => state.processor.totalValue || 0;

export const isProcessing = state => state.processor.isProcessing || false;
