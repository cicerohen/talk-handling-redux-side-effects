import React from "react";
import { darken } from "polished";
import {
  render,
  cleanup,
  queryByTestId,
  fireEvent
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { themes } from "../../../css.settings";

import Button from "../Button";

let component;

const props = {
  tag: "a",
  onClick: jest.fn(),
  palette: "default",
  size: "small",
  disabled: false,
  children: <div>text</div>
};

const AllProviders = ({ children }) => {
  return <ThemeProvider theme={themes.default}>{children}</ThemeProvider>;
};

describe("<Button />", () => {
  beforeEach(() => {
    cleanup();
    component = render(<Button {...props} />, { wrapper: AllProviders });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar corretamente", () => {
    expect(queryByTestId(component.container, "button")).toBeTruthy();
    expect(queryByTestId(component.container, "button")).toContainHTML(
      "<div>text</div>"
    );
  });

  it("deve renderizar corretamente quando estiver habilitado/desabilitado", async () => {
    component.rerender(<Button {...props} disabled={false} />);

    expect(component.queryByTestId("button")).toHaveStyleRule(
      "opacity",
      undefined
    );
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "cursor",
      "pointer"
    );

    component.rerender(<Button {...props} disabled />);

    expect(component.queryByTestId("button")).toHaveStyleRule("opacity", "0.5");
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "cursor",
      "default"
    );
  });

  it("deve renderizar corretamente com o tamanho default", async () => {
    component.rerender(<Button {...props} size="default" />);
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "font-size",
      "0.8rem"
    );
  });

  it("deve renderizar corretamente com o tamanho small", async () => {
    component.rerender(<Button {...props} size="small" />);
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "font-size",
      "0.6rem"
    );
  });

  it("deve renderizar corretamente com o tamanho large", async () => {
    component.rerender(<Button {...props} size="large" />);
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "font-size",
      "1rem"
    );
  });

  it("deve renderizar corretamente com a paleta default", async () => {
    component.rerender(<Button {...props} palette="default" />);
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "background-color",
      themes.default.palettes.default.background
    );
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "border-color",
      darken(0.1, themes.default.palettes.default.background)
    );
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "color",
      themes.default.palettes.default.foreground
    );
  });

  it("deve renderizar corretamente com a paleta primary", async () => {
    component.rerender(<Button {...props} palette="primary" />);
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "background-color",
      themes.default.palettes.primary.background
    );
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "border-color",
      darken(0.1, themes.default.palettes.primary.background)
    );
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "color",
      themes.default.palettes.primary.foreground
    );
  });

  it("deve renderizar corretamente com a paleta secondary", async () => {
    component.rerender(<Button {...props} size="large" />);
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "font-size",
      "1rem"
    );
  });

  it("deve renderizar corretamente com a paleta success", async () => {
    component.rerender(<Button {...props} size="large" />);
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "font-size",
      "1rem"
    );
  });

  it("deve renderizar corretamente com a paleta alert", async () => {
    component.rerender(<Button {...props} size="large" />);
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "font-size",
      "1rem"
    );
  });

  it("deve renderizar corretamente com a paleta warning", async () => {
    component.rerender(<Button {...props} size="large" />);
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "font-size",
      "1rem"
    );
  });

  it("deve executar onClick quando o botão for clicado", () => {
    fireEvent.click(queryByTestId(component.container, "button"));
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it("não deve executar onClick quando o botão for do tipo button e estiver desabilitado", () => {
    component.rerender(<Button {...props} tag="button" disabled={true} />);
    fireEvent.click(queryByTestId(component.container, "button"));
    expect(props.onClick).toHaveBeenCalledTimes(0);
  });
});
