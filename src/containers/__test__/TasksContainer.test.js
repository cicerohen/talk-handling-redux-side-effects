import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { ThemeProvider } from "styled-components";
import { render, cleanup, queryAllByTestId } from "@testing-library/react";

import { themes } from "../../css.settings";
import { processor as processorMock } from "../../../__test__/mock/store/processor";

import TasksContainer from "../TasksContainer";

const mockStore = configureStore([]);

const renderWithStoreMock = (initialState = {}) => {
  const store = mockStore(initialState);
  return {
    ...render(
      <Provider store={store}>
        <ThemeProvider theme={themes.default}>
          <TasksContainer />
        </ThemeProvider>
      </Provider>
    ),
    store
  };
};

describe("<TasksContainer />", () => {
  beforeEach(() => {
    cleanup();
  });

  it("deve renderizar corretamente com tasks", async () => {
    const { container } = renderWithStoreMock({
      ...processorMock
    });
    const tasksLength = Object.keys(processorMock.processor.tasks).length;
    expect(queryAllByTestId(container, "task")).toHaveLength(tasksLength);
  });

  it("deve renderizar corretamente sem tasks", async () => {
    const { container } = renderWithStoreMock({
      ...processorMock,
      processor: {
        ...processorMock.processor,
        tasks: {}
      }
    });
    expect(queryAllByTestId(container, "task")).toHaveLength(0);
  });
});
