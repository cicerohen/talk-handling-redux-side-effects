import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Wrapper = styled.h5`
  text-transform: uppercase;
  font-size: 1rem;
  margin: 0;
  padding: 0;
`;

const CardTitle = React.memo(({ tag, children, ...others }) => (
  <Wrapper as={tag} data-testid={others["data-testid"] || "card-title"}>
    {children}
  </Wrapper>
));

CardTitle.defaultProps = {
  tag: "h5",
  children: undefined
};

CardTitle.propTypes = {
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string
  ])
};

export default CardTitle;
