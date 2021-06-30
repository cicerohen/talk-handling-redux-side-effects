import React from "react";
import styled from "styled-components";

const Wrapper = styled.h3`
  text-transform: uppercase;
  text-align: center;
  font-size: 0.9rem;
  color: ${props => props.theme.palettes.default.foreground};
`;

const ViewSubtitle = React.memo(({ children, className }) => (
  <Wrapper className={className} data-testid="view-subtitle">
    {children}
  </Wrapper>
));

export default ViewSubtitle;
