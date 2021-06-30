import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";
import {
  render,
  cleanup,
  queryByTestId,
  fireEvent
} from "@testing-library/react";

import { themes } from "../../css.settings";
import { processor as processorMock } from "../../../__test__/mock/store/processor";
import { processor } from "../../redux";

import HomeContainer from "../HomeContainer";

const mockStore = configureStore([]);

const renderWithStoreMock = (initialState = {}) => {
  const store = mockStore(initialState);
  return {
    ...render(
      <Provider store={store}>
        <ThemeProvider theme={themes.default}>
          <ModalProvider>
            <HomeContainer />
          </ModalProvider>
        </ThemeProvider>
      </Provider>
    ),
    store
  };
};

describe("<HomeContainer />", () => {
  beforeEach(() => {
    cleanup();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar com o valor total correto", async () => {
    const totalValue = 10;
    const { store, container, debug } = renderWithStoreMock({
      ...processorMock,
      processor: {
        ...processorMock.processor,
        totalValue
      }
    });

    expect(queryByTestId(container, "total-value")).toHaveTextContent(
      totalValue
    );
  });

  it("deve renderizar o botão de inciar processo quando não houver processo em andamento", async () => {
    const { container } = renderWithStoreMock({
      ...processorMock,
      processor: {
        ...processorMock.processor,
        isProcessing: false
      }
    });

    expect(queryByTestId(container, "start-process-button")).toBeTruthy();
  });

  it("não renderizar o botão de inciar processo quando houver processo em andamento", async () => {
    const { container } = renderWithStoreMock({
      ...processorMock,
      processor: {
        ...processorMock.processor,
        isProcessing: true
      }
    });

    expect(queryByTestId(container, "start-process-button")).not.toBeTruthy();
  });

  it("deve renderizar o botão de cancelar processo quando houver processo em andamento", async () => {
    const { container } = renderWithStoreMock({
      ...processorMock,
      processor: {
        ...processorMock.processor,
        isProcessing: true
      }
    });

    expect(queryByTestId(container, "cancel-process-button")).toBeTruthy();
  });

  it("não deve renderizar o botão de cancelar processo quando não houver processo em andamento", async () => {
    const { container } = renderWithStoreMock({
      ...processorMock,
      processor: {
        ...processorMock.processor,
        isProcessing: false
      }
    });

    expect(queryByTestId(container, "cancel-process-button")).not.toBeTruthy();
  });

  it("deve disparar a ação para iniciar um processo quando o botão for clicado", async () => {
    const { store, container } = renderWithStoreMock({
      ...processorMock,
      processor: {
        ...processorMock.processor,
        isProcessing: false
      }
    });
    fireEvent.click(queryByTestId(container, "start-process-button"));

    expect(store.getActions()[0]).toEqual(
      processor.actions.announceStartProcess()
    );
  });

  it("deve disparar a ação para cancelar um processo quando o botão for clicado", async () => {
    const { store, container } = renderWithStoreMock({
      ...processorMock,
      processor: {
        ...processorMock.processor,
        isProcessing: true
      }
    });

    fireEvent.click(queryByTestId(container, "cancel-process-button"));

    expect(store.getActions()[0]).toEqual(
      processor.actions.announceCancelProcess()
    );
  });
});
