import React from "react";
import styled from "styled-components";

const Wrapper = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.palettes.default.foreground};
`;

const ViewTitle = React.memo(({ children, className }) => (
  <Wrapper className={className} data-testid="view-title">
    {children}
  </Wrapper>
));

export default ViewTitle;
