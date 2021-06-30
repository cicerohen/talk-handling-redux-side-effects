import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 860px;
  max-width: 1020px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
`;

const ViewBody = React.memo(({ children, className }) => (
  <Wrapper className={className} data-testid="view-body">
    {children}
  </Wrapper>
));

export default ViewBody;
