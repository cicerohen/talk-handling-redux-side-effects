import React, { Component } from "react";
import { createStructuredSelector } from "reselect";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";
import HomeContainer from "./containers/HomeContainer";
import { ui } from "./redux";
import { themes } from "./css.settings";

const selectors = createStructuredSelector({
  theme: ui.selectors.getTheme
});

const App = () => {
  const { theme } = useSelector(selectors);
  return (
    <ThemeProvider theme={themes[theme]}>
      <ModalProvider>
        <>
          <BrowserRouter>
            <Switch>
              <Route exact path="*" component={HomeContainer} />
            </Switch>
          </BrowserRouter>
        </>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default App;
