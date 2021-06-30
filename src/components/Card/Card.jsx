import React from "react";
import styled from "styled-components";
import { lighten } from "polished";
import PropTypes from "prop-types";
import CardWrapper from "./CardWrapper";
import CardBody from "./CardBody";
import CardTitle from "./CardTitle";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";

const variant = ({ theme, palette }) =>
  `background-color: ${theme.palettes[palette].background};
  color: ${theme.palettes[palette].foreground};
  border-color: ${lighten(0.4, theme.palettes[palette].foreground)}
`;
const Wrapper = styled.section`
  border-radius: 5px;
  overflow: hidden;
  border-style: solid;
  border-width: 1px;
  ${variant}
`;

const Card = React.memo(({ palette, className, children, ...others }) => (
  <Wrapper
    palette={palette}
    className={className}
    data-testid={others["data-testid"] || "card"}
  >
    {children}
  </Wrapper>
));

Card.defaultProps = {
  children: undefined,
  palette: "default"
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  palette: PropTypes.string
};

Card.Wrapper = CardWrapper;
Card.Body = CardBody;
Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.Title = CardTitle;

export default Card;
