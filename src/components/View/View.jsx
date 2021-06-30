import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import ViewTitle from "./ViewTitle";
import ViewSubtitle from "./ViewSubtitle";
import ViewBody from "./ViewBody";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    @import url('https://fonts.googleapis.com/css?family=Ubuntu');
    font-family: 'Ubuntu', sans-serif;
  }
`;

const Wrapper = styled.div``;

const View = React.memo(({ title, subtitle, body, children }) => (
  <>
    <GlobalStyle />
    <Wrapper data-testid="view">
      <Header />
      {children ? (
        <ViewBody>
          <ViewTitle>{title}</ViewTitle>
          {subtitle && <ViewSubtitle>{subtitle}</ViewSubtitle>}
          {children}
        </ViewBody>
      ) : (
        body
      )}
      <Footer />
    </Wrapper>
  </>
));

View.Title = ViewTitle;
View.Subtitle = ViewSubtitle;
View.Body = ViewBody;

export default View;
