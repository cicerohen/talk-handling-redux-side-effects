import React from "react";
import {
  render,
  cleanup,
  queryByTestId,
  queryAllByTestId
} from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import { themes } from "../../../css.settings";

import { processor } from "../../../../__test__/mock/store/processor";

import Tasks from "../Tasks";

let component;

const props = {
  tasks: processor.processor.tasks
};

const AllProviders = ({ children }) => {
  return <ThemeProvider theme={themes.default}>{children}</ThemeProvider>;
};

describe("<Tasks />", () => {
  beforeEach(() => {
    cleanup();
    component = render(<Tasks {...props} />, { wrapper: AllProviders });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar corretamente", () => {
    expect(queryByTestId(component.container, "tasks")).toBeTruthy();
  });

  it("deve renderizar corretamente com tarefas", () => {
    const tasksLength = Object.keys(props.tasks).length;
    expect(queryAllByTestId(component.container, "task")).toHaveLength(
      tasksLength
    );
  });

  it("deve renderizar corretamente sem tarefas", () => {
    component.rerender(<Tasks tasks={{}} />);
    expect(queryAllByTestId(component.container, "task")).toHaveLength(0);
  });
});
