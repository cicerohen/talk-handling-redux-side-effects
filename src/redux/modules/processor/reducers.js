import * as actions from "./actions";

const initialState = {
  isProcessing: false,
  totalValue: 0,
  tasks: {
    task1: {
      title: "Tarefa 1",
      description: "Inicia imediatamente",
      isProcessing: false,
      isProcessed: false,
      value: 0
    },
    task2: {
      title: "Tarefa 2",
      description: "Inicia quando a primeira tarefa for finalizada",
      isProcessing: false,
      isProcessed: false,
      value: 0
    },
    task3: {
      title: "Tarefa 3",
      description: "Inicia quando a segunda tarafa for finalizada",
      isProcessing: false,
      isProcessed: false,
      value: 0
    },
    task4: {
      title: "Tarefa 4",
      description: "Inicia quando a terceira tarefa for finalizada",
      isProcessing: false,
      isProcessed: false,
      value: 0
    },
    task5: {
      title: "Tarefa 5",
      description: "Inicia quando a quarta tarefa for finalizada",
      isProcessing: false,
      isProcessed: false,
      value: 0
    }
  },
  modals: {
    confirmStartProcessModalIsOpen: false,
    confirmCancelProcessModalIsOpen: false,
    confirmFinishProcessModalIsOpen: false
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PROCESS_STARTED: {
      return {
        ...initialState,
        isProcessing: true
      };
    }
    case actions.TASK_1_STARTED: {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          task1: {
            ...state.tasks.task1,
            isProcessing: true
          }
        }
      };
    }
    case actions.TASK_1_FINISHED: {
      const { value } = action.payload;
      return {
        ...state,
        totalValue: state.totalValue + value,
        tasks: {
          ...state.tasks,
          task1: {
            ...state.tasks.task1,
            isProcessing: false,
            isProcessed: true,
            value
          }
        }
      };
    }
    case actions.TASK_2_STARTED: {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          task2: {
            ...state.tasks.task2,
            isProcessing: true
          }
        }
      };
    }
    case actions.TASK_2_FINISHED: {
      const { value } = action.payload;
      return {
        ...state,
        totalValue: state.totalValue + value,
        tasks: {
          ...state.tasks,
          task2: {
            ...state.tasks.task2,
            isProcessing: false,
            isProcessed: true,
            value
          }
        }
      };
    }
    case actions.TASK_3_STARTED: {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          task3: {
            ...state.tasks.task3,
            isProcessing: true
          }
        }
      };
    }
    case actions.TASK_3_FINISHED: {
      const { value } = action.payload;
      return {
        ...state,
        totalValue: state.totalValue + value,
        tasks: {
          ...state.tasks,
          task3: {
            ...state.tasks.task3,
            isProcessing: false,
            isProcessed: true,
            value
          }
        }
      };
    }
    case actions.TASK_4_STARTED: {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          task4: {
            ...state.tasks.task4,
            isProcessing: true
          }
        }
      };
    }
    case actions.TASK_4_FINISHED: {
      const { value } = action.payload;
      return {
        ...state,
        totalValue: state.totalValue + value,
        tasks: {
          ...state.tasks,
          task4: {
            ...state.tasks.task4,
            isProcessing: false,
            isProcessed: true,
            value
          }
        }
      };
    }
    case actions.TASK_5_STARTED: {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          task5: {
            ...state.tasks.task5,
            isProcessing: true
          }
        }
      };
    }
    case actions.TASK_5_FINISHED: {
      const { value } = action.payload;
      return {
        ...state,
        totalValue: state.totalValue + value,
        tasks: {
          ...state.tasks,
          task5: {
            ...state.tasks.task5,
            isProcessing: false,
            isProcessed: true,
            value
          }
        }
      };
    }
    case actions.PROCESS_CANCELED: {
      return initialState;
    }
    case actions.PROCESS_FINISHED: {
      return {
        ...state,
        isProcessed: true,
        isProcessing: false
      };
    }
    case actions.PROCESS_STATE_CLEARED: {
      return initialState;
    }
    case actions.CONFIRM_START_PROCESS_MODAL_OPENED: {
      return {
        ...state,
        modals: {
          ...state.modals,
          confirmStartProcessModalIsOpen: true
        }
      };
    }
    case actions.CONFIRM_START_PROCESS_MODAL_CLOSED: {
      return {
        ...state,
        modals: {
          ...state.modals,
          confirmStartProcessModalIsOpen: false
        }
      };
    }
    case actions.CONFIRM_CANCEL_PROCESS_MODAL_OPENED: {
      return {
        ...state,
        modals: {
          ...state.modals,
          confirmCancelProcessModalIsOpen: true
        }
      };
    }
    case actions.CONFIRM_CANCEL_PROCESS_MODAL_CLOSED: {
      return {
        ...state,
        modals: {
          ...state.modals,
          confirmCancelProcessModalIsOpen: false
        }
      };
    }
    case actions.CONFIRM_FINISH_PROCESS_MODAL_OPENED: {
      return {
        ...state,
        modals: {
          ...state.modals,
          confirmFinishProcessModalIsOpen: true
        }
      };
    }
    case actions.CONFIRM_FINISH_PROCESS_MODAL_CLOSED: {
      return {
        ...state,
        modals: {
          ...state.modals,
          confirmFinishProcessModalIsOpen: false
        }
      };
    }
    default:
      return state;
  }
};
