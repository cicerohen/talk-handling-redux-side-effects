import React from "react";
import { ModalProvider } from "styled-react-modal";
import {
  render,
  cleanup,
  queryByTestId,
  fireEvent
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { themes } from "../../../css.settings";

import ConfirmModal from "../ConfirmModal";

let component;

const props = {
  title: "modal title",
  isOpen: true,
  palette: "default",
  cancelFn: jest.fn(),
  confirmFn: jest.fn(),
  children: <div>content</div>
};

const AllProviders = ({ children }) => {
  return (
    <ThemeProvider theme={themes.default}>
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  );
};

describe("<ConfirmModal />", () => {
  beforeEach(() => {
    cleanup();
    component = render(<ConfirmModal {...props} />, { wrapper: AllProviders });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar corretamente quando o modal estiver fechado", () => {
    component.rerender(<ConfirmModal {...props} isOpen={false} />);
    expect(
      queryByTestId(component.container, "confirm-modal")
    ).not.toBeTruthy();
  });

  it("deve renderizar corretamente quando o modal estiver aberto", () => {
    component.rerender(<ConfirmModal {...props} isOpen />);
    expect(queryByTestId(component.container, "confirm-modal")).toBeTruthy();

    expect(
      queryByTestId(component.container, "confirm-modal-title")
    ).toBeTruthy();

    expect(
      queryByTestId(component.container, "confirm-modal-title")
    ).toHaveTextContent(props.title);

    expect(
      queryByTestId(component.container, "confirm-modal-cancel-button")
    ).toBeTruthy();

    expect(
      queryByTestId(component.container, "confirm-modal-cancel-button")
    ).toHaveTextContent("Cancel");

    expect(
      queryByTestId(component.container, "confirm-modal-confirm-button")
    ).toBeTruthy();

    expect(
      queryByTestId(component.container, "confirm-modal-confirm-button")
    ).toHaveTextContent("Ok");
  });

  it("deve renderizar o cabeçalho do modal corretamente", async () => {
    component.rerender(<ConfirmModal {...props} palette="default" />);

    expect(
      queryByTestId(component.container, "confirm-modal-header")
    ).toHaveStyleRule(
      "background-color",
      themes.default.palettes.primary.background
    );

    expect(
      queryByTestId(component.container, "confirm-modal-header")
    ).toHaveStyleRule("color", themes.default.palettes.primary.foreground);
  });

  it("deve executar cancelFn quando o botão de cancelar for clicado", () => {
    fireEvent.click(
      queryByTestId(component.container, "confirm-modal-cancel-button")
    );
    expect(props.cancelFn).toHaveBeenCalledTimes(1);
  });

  it("deve executar confirmFn quando o botão de confirmar for clicado", () => {
    fireEvent.click(
      queryByTestId(component.container, "confirm-modal-confirm-button")
    );
    expect(props.confirmFn).toHaveBeenCalledTimes(1);
  });
});
