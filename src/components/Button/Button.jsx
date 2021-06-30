import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { darken } from "polished";

const variant = ({ theme, palette }) =>
  `background-color: ${theme.palettes[palette].background};
  border-color: ${darken(0.1, theme.palettes[palette].background)};
  color: ${theme.palettes[palette].foreground}; 
  `;

const size = ({ size }) => css`
  ${size === "small" && `font-size: 0.6rem;`}
  ${size === "default" && `font-size: 0.8rem;`}
  ${size === "large" && `font-size: 1rem;`}
`;

const Wrapper = styled.button`
  color: #fff;
  border-left-width: 1px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  padding: 1em 1.5em;
  cursor: pointer;
  border-radius: 0.2rem;
  display: inline-block;
  text-transform: uppercase;
  ${variant}
  ${size}
  ${props =>
    props.disabled &&
    `
    opacity: 0.5;
    cursor: default;
  `}
`;

const Button = React.memo(
  ({ palette, size, tag, disabled, onClick, children, ...others }) => (
    <Wrapper
      as={tag}
      palette={palette}
      size={size}
      disabled={disabled}
      onClick={onClick}
      data-testid={others["data-testid"] || "button"}
    >
      {children}
    </Wrapper>
  )
);

Button.defaultProps = {
  palette: "default",
  disabled: false,
  size: "default",
  tag: "a"
};

Button.propType = {
  size: PropTypes.oneOf(["small", "default", "large"]),
  palette: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "alert",
    "warniing"
  ])
};

export default Button;
