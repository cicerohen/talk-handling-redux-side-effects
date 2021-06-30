import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.main`
  padding: 10px;
`;

const CardBody = React.memo(({ children, className, ...others }) => (
  <Wrapper
    className={className}
    data-testid={others["data-testid"] || "card-body"}
  >
    {children}
  </Wrapper>
));

CardBody.defaultProps = {
  children: undefined
};

CardBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default CardBody;
