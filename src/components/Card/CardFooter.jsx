import React from "react";
import { lighten, darken } from "polished";
import styled from "styled-components";
import PropTypes from "prop-types";

const variant = ({ theme, palette }) => `
  border-color: ${lighten(0.4, theme.palettes[palette].foreground)}
  background-color: ${theme.palettes[palette].background}
  color: ${theme.palettes[palette].foreground}
`;

const Wrapper = styled.footer`
  min-height: 40px;
  align-items: center;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  border-left-width: 0;
  border-top-width: 1px;
  border-right-width: 0;
  border-bottom-width: 0;
  border-style: solid;
  border-color: #ececec;
  ${variant}
`;

const CardFooter = React.memo(({ palette, className, children, ...others }) => (
  <Wrapper
    palette={palette}
    className={className}
    data-testid={others["data-testid"] || "card-footer"}
  >
    {children}
  </Wrapper>
));

CardFooter.defaultProps = {
  children: undefined,
  palette: "default"
};

CardFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  palette: PropTypes.string
};
export default CardFooter;
