import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  height: 80px;
  background-color: ${props => props.theme.palettes.secondary.background};
  color: ${props => props.theme.palettes.secondary.foreground};
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
`;

const Footer = () => (
  <Wrapper data-testid="footer">
    <h6>github.com/cicerohen</h6>
  </Wrapper>
);
export default Footer;
