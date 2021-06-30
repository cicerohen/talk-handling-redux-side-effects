import { reducer } from "../reducers";
import * as actions from "../actions";
import { processor } from "../../../../../__test__/mock/store/processor";

describe("Processor reducers", () => {
  it("a ação de iniciar a primeira tarefa deve alterar o estado corretamente", () => {
    const state = reducer(processor.processor, actions.startTask1());
    expect(state.tasks.task1).toEqual(
      expect.objectContaining({
        isProcessing: true
      })
    );
  });

  it("a ação de finalizar a primeira tarefa deve alterar o estado corretamente", () => {
    const state = reducer(processor.processor, actions.finishTask1(200));
    expect(state.tasks.task1).toEqual(
      expect.objectContaining({
        isProcessing: false,
        isProcessed: true,
        value: 200
      })
    );
  });

  it("a ação de iniciar a segunda tarefa deve alterar o estado corretamente", () => {
    const state = reducer(processor.processor, actions.startTask2());
    expect(state.tasks.task2).toEqual(
      expect.objectContaining({
        isProcessing: true
      })
    );
  });

  it("a ação de finalizar a primeira tarefa deve alterar o estado corretamente", () => {
    const state = reducer(processor.processor, actions.finishTask2(200));
    expect(state.tasks.task2).toEqual(
      expect.objectContaining({
        isProcessing: false,
        isProcessed: true,
        value: 200
      })
    );
  });

  it("a ação de iniciar a terceira tarefa deve alterar o estado corretamente", () => {
    const state = reducer(processor.processor, actions.startTask3());
    expect(state.tasks.task3).toEqual(
      expect.objectContaining({
        isProcessing: true
      })
    );
  });

  it("a ação de finalizar a terceira tarefa deve alterar o estado corretamente", () => {
    const state = reducer(processor.processor, actions.finishTask3(200));
    expect(state.tasks.task3).toEqual(
      expect.objectContaining({
        isProcessing: false,
        isProcessed: true,
        value: 200
      })
    );
  });

  it("a ação de iniciar a quarta tarefa deve alterar o estado corretamente", () => {
    const state = reducer(processor.processor, actions.startTask4());
    expect(state.tasks.task4).toEqual(
      expect.objectContaining({
        isProcessing: true
      })
    );
  });

  it("a ação de finalizar a quarta tarefa deve alterar o estado corretamente", () => {
    const state = reducer(processor.processor, actions.finishTask4(200));
    expect(state.tasks.task4).toEqual(
      expect.objectContaining({
        isProcessing: false,
        isProcessed: true,
        value: 200
      })
    );
  });

  it("a ação de iniciar a quinta tarefa deve alterar o estado corretamente", () => {
    const state = reducer(processor.processor, actions.startTask5());
    expect(state.tasks.task5).toEqual(
      expect.objectContaining({
        isProcessing: true
      })
    );
  });

  it("a ação de finalizar a quinta tarefa deve alterar o estado corretamente", () => {
    const state = reducer(processor.processor, actions.finishTask5(200));
    expect(state.tasks.task5).toEqual(
      expect.objectContaining({
        isProcessing: false,
        isProcessed: true,
        value: 200
      })
    );
  });

  it("a ação de cancelar um processo deve alterar o estado corretamente", () => {
    const state = reducer(processor.processor, actions.cancelProcess());
    expect(state).toEqual(processor.processor);
  });

  it("a ação de finalizar um processo deve alterar o estado corretamente", () => {
    const state = reducer(processor.processor, actions.finishProcess());
    expect(state).toEqual(
      expect.objectContaining({
        isProcessed: true,
        isProcessing: false
      })
    );
  });

  it("a ação de resetar deve alterar o estado corretamente", () => {
    const state = reducer(processor.processor, actions.resetProcessState());
    expect(state).toEqual(processor.processor);
  });

  it("a ação de abrir o modal de confirmação de inicio de processo deve alterar o estado corretamente", () => {
    const state = reducer(
      processor.processor,
      actions.openConfirmStartProcessModal()
    );
    expect(state.modals).toEqual(
      expect.objectContaining({
        confirmStartProcessModalIsOpen: true
      })
    );
  });

  it("a ação de fechar o modal de confirmação de inicio de processo deve alterar o estado corretamente", () => {
    const state = reducer(
      processor.processor,
      actions.closeConfirmStartProcessModal()
    );
    expect(state.modals).toEqual(
      expect.objectContaining({
        confirmStartProcessModalIsOpen: false
      })
    );
  });

  it("a ação de abrir o modal de confirmação de cancelamento de processo deve alterar o estado corretamente", () => {
    const state = reducer(
      processor.processor,
      actions.openConfirmCancelProcessModal()
    );
    expect(state.modals).toEqual(
      expect.objectContaining({
        confirmCancelProcessModalIsOpen: true
      })
    );
  });

  it("a ação de fechar o modal de confirmação de cancelamento de processo deve alterar o estado corretamente", () => {
    const state = reducer(
      processor.processor,
      actions.closeConfirmCancelProcessModal()
    );
    expect(state.modals).toEqual(
      expect.objectContaining({
        confirmCancelProcessModalIsOpen: false
      })
    );
  });

  it("a ação de abrir o modal de confirmação de finalização de processo deve alterar o estado corretamente", () => {
    const state = reducer(
      processor.processor,
      actions.openConfirmFinishProcessModal()
    );
    expect(state.modals).toEqual(
      expect.objectContaining({
        confirmFinishProcessModalIsOpen: true
      })
    );
  });

  it("a ação de fechar o modal de confirmação de finalização de processo deve alterar o estado corretamente", () => {
    const state = reducer(
      processor.processor,
      actions.closeConfirmFinishProcessModal()
    );
    expect(state.modals).toEqual(
      expect.objectContaining({
        confirmFinishProcessModalIsOpen: false
      })
    );
  });
});
