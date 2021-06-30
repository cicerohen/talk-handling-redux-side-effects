import React from "react";
import styled from "styled-components";
import { WHITE } from "../../css.settings";

const Wrapper = styled.header`;
  background-color: ${props => props.theme.palettes.primary.background}
  color: ${WHITE}
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
`;

const LeftContent = styled.div`
  display: flex;
`;
const RightContent = styled.div``;

const Username = styled.h4`
  font-size: 1.3rem;
  font-weight: normal;
`;

const Header = () => (
  <Wrapper data-testid="header">
    <LeftContent>
      <Username>Cícero Viana</Username>
    </LeftContent>
    <RightContent>Redux-Saga</RightContent>
  </Wrapper>
);
export default Header;
