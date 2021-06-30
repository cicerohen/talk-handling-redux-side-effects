import React from "react";
import { darken } from "polished";
import { ModalProvider } from "styled-react-modal";
import { render, cleanup, queryByTestId } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { themes } from "../../../css.settings";

import View from "../View";

let component;

const props = {
  title: "view title",
  subtitle: "view subtitle",
  body: <div>view body</div>,
  children: <div>view children</div>
};

const AllProviders = ({ children }) => {
  return (
    <ThemeProvider theme={themes.default}>
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  );
};

describe("<View />", () => {
  beforeEach(() => {
    cleanup();
    component = render(<View {...props} />, { wrapper: AllProviders });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar corretamente", () => {
    component.rerender(<View {...props} />);
    expect(queryByTestId(component.container, "view")).toBeTruthy();
    expect(queryByTestId(component.container, "view")).toContainHTML(
      "<div>view children</div>"
    );
    expect(queryByTestId(component.container, "header")).toBeTruthy();
    expect(queryByTestId(component.container, "footer")).toBeTruthy();

    expect(queryByTestId(component.container, "view-title")).toBeTruthy();
    expect(queryByTestId(component.container, "view-title")).toHaveTextContent(
      props.title
    );
    expect(queryByTestId(component.container, "view-subtitle")).toBeTruthy();
    expect(
      queryByTestId(component.container, "view-subtitle")
    ).toHaveTextContent(props.subtitle);
  });

  it("deve renderizar corretamente sem componentes filhos", () => {
    component.rerender(<View {...props} children={undefined} />);
    expect(queryByTestId(component.container, "view")).not.toContainHTML(
      "<div>view children</div>"
    );
    expect(queryByTestId(component.container, "view")).toContainHTML(
      "<div>view body</div>"
    );
    expect(queryByTestId(component.container, "view-title")).not.toBeTruthy();
    expect(
      queryByTestId(component.container, "view-subtitle")
    ).not.toBeTruthy();
  });
});
