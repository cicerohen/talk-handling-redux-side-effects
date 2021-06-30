import React from "react";
import styled, { css } from "styled-components";
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

const Wrapper = styled.div`
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
  padding: 0.3em 0.5em;
  border-style: solid;
  border-width: 1px;
  ${variant}
  ${size}
`;

const Label = React.memo(({ palette, children, ...others }) => (
  <Wrapper palette={palette} data-testid={others["data-testid"] || "label"}>
    {children}
  </Wrapper>
));

Label.defaultProps = {
  palette: "default",
  size: "default"
};

export default Label;
