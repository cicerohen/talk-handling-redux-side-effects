export const processor = {
  processor: {
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
  }
};
