import React from "react";
import styled from "styled-components";
import { lighten, darken } from "polished";
import PropTypes from "prop-types";

const variant = ({ theme, palette }) => `
  border-color: ${lighten(0.4, theme.palettes[palette].foreground)}
  background-color: ${theme.palettes[palette].background}
  color: ${theme.palettes[palette].foreground}
`;

const Wrapper = styled.header`
  min-height: 40px;
  align-items: center;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  border-left-width: 0;
  border-top-width: 0;
  border-right-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  ${variant}
`;

const CardHeader = React.memo(({ palette, className, children, ...others }) => (
  <Wrapper
    palette={palette}
    className={className}
    data-testid={others["data-testid"] || "card-header"}
  >
    {children}
  </Wrapper>
));

CardHeader.defaultProps = {
  children: undefined,
  palette: "default"
};

CardHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  palette: PropTypes.string
};
export default CardHeader;
