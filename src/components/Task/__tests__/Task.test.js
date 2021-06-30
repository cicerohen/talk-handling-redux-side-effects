import React from "react";
import { render, cleanup, queryByTestId } from "@testing-library/react";

import { ThemeProvider } from "styled-components";

import { themes } from "../../../css.settings";

import Task from "../Task";

let component;

const props = {
  title: "Title",
  description: "Description",
  isProcessing: false,
  value: 100,
  palette: "default"
};

const AllProviders = ({ children }) => {
  return <ThemeProvider theme={themes.default}>{children}</ThemeProvider>;
};

describe("<Task />", () => {
  beforeEach(() => {
    cleanup();
    component = render(<Task {...props} />, { wrapper: AllProviders });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar corretamente", () => {
    expect(queryByTestId(component.container, "task")).toBeTruthy();
    expect(queryByTestId(component.container, "task-title")).toHaveTextContent(
      props.title
    );
    expect(queryByTestId(component.container, "task-body")).toHaveTextContent(
      props.description
    );
    expect(queryByTestId(component.container, "task-value")).toHaveTextContent(
      props.value
    );
  });

  it("deve renderizar corretamente com o loading quando estiver processando", () => {
    component.rerender(<Task {...props} isProcessing />);
    expect(queryByTestId(component.container, "task-loader")).toBeTruthy();
  });

  it("deve renderizar corretamenta sem o loading quando não estiver processando", () => {
    component.rerender(<Task {...props} isProcessing={false} />);
    expect(queryByTestId(component.container, "task-loader")).not.toBeTruthy();
  });
});
