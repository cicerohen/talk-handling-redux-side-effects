import React from "react";
import { lighten } from "polished";
import { render, cleanup, queryByTestId } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { themes } from "../../../css.settings";

import Card from "../Card";

let component;

const props = {
  children: <div>card children</div>,
  palette: "default"
};

const AllProviders = ({ children }) => {
  return <ThemeProvider theme={themes.default}>{children}</ThemeProvider>;
};

describe("<Card />", () => {
  beforeEach(() => {
    cleanup();
    component = render(<Card {...props} />, { wrapper: AllProviders });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar corretamente", () => {
    expect(queryByTestId(component.container, "card")).toBeTruthy();
    expect(queryByTestId(component.container, "card")).toContainHTML(
      "<div>card children</div>"
    );
  });

  it("deve renderizar corretamente com a paleta default", async () => {
    component.rerender(<Card {...props} palette="default" />);

    expect(component.queryByTestId("card")).toHaveStyleRule(
      "background-color",
      themes.default.palettes.default.background
    );
    expect(component.queryByTestId("card")).toHaveStyleRule(
      "color",
      themes.default.palettes.default.foreground
    );

    expect(component.queryByTestId("card")).toHaveStyleRule(
      "border-color",
      lighten(0.4, themes.default.palettes.default.foreground)
    );
  });

  it("deve renderizar corretamente com a paleta primary", async () => {
    component.rerender(<Card {...props} palette="primary" />);

    expect(component.queryByTestId("card")).toHaveStyleRule(
      "background-color",
      themes.default.palettes.primary.background
    );
    expect(component.queryByTestId("card")).toHaveStyleRule(
      "color",
      themes.default.palettes.primary.foreground
    );

    expect(component.queryByTestId("card")).toHaveStyleRule(
      "border-color",
      lighten(0.4, themes.default.palettes.primary.foreground)
    );
  });

  it("deve renderizar corretamente com a paleta secondary", async () => {
    component.rerender(<Card {...props} palette="secondary" />);

    expect(component.queryByTestId("card")).toHaveStyleRule(
      "background-color",
      themes.default.palettes.secondary.background
    );
    expect(component.queryByTestId("card")).toHaveStyleRule(
      "color",
      themes.default.palettes.secondary.foreground
    );

    expect(component.queryByTestId("card")).toHaveStyleRule(
      "border-color",
      lighten(0.4, themes.default.palettes.secondary.foreground)
    );
  });

  it("deve renderizar corretamente com a paleta success", async () => {
    component.rerender(<Card {...props} palette="success" />);

    expect(component.queryByTestId("card")).toHaveStyleRule(
      "background-color",
      themes.default.palettes.success.background
    );
    expect(component.queryByTestId("card")).toHaveStyleRule(
      "color",
      themes.default.palettes.success.foreground
    );

    expect(component.queryByTestId("card")).toHaveStyleRule(
      "border-color",
      lighten(0.4, themes.default.palettes.success.foreground)
    );
  });

  it("deve renderizar corretamente com a paleta alert", async () => {
    component.rerender(<Card {...props} palette="alert" />);

    expect(component.queryByTestId("card")).toHaveStyleRule(
      "background-color",
      themes.default.palettes.alert.background
    );
    expect(component.queryByTestId("card")).toHaveStyleRule(
      "color",
      themes.default.palettes.alert.foreground
    );

    expect(component.queryByTestId("card")).toHaveStyleRule(
      "border-color",
      lighten(0.4, themes.default.palettes.alert.foreground)
    );
  });

  it("deve renderizar corretamente com a paleta warning", async () => {
    component.rerender(<Card {...props} palette="warning" />);

    expect(component.queryByTestId("card")).toHaveStyleRule(
      "background-color",
      themes.default.palettes.warning.background
    );
    expect(component.queryByTestId("card")).toHaveStyleRule(
      "color",
      themes.default.palettes.warning.foreground
    );

    expect(component.queryByTestId("card")).toHaveStyleRule(
      "border-color",
      lighten(0.4, themes.default.palettes.warning.foreground)
    );
  });
});
