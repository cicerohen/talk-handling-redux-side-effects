import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Label from "../Label";
import { Circle } from "styled-spinkit";

import Card from "../Card";

const Wrapper = styled(Card)``;

const Body = styled(Card.Body)`
  min-height: 40px;
`;

const Header = styled(Card.Header)`
  justify-content: space-between;
`;

const Footer = styled(Card.Footer)`
  display: flex;
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
  > p {
    margin-right: 0.4rem;
  }
`;

const Loader = styled(Circle)`
  height: 20px;
  width: 20px;
  margin: 0;
`;

const Task = React.memo(
  ({ title, description, isProcessing, value, palette, ...others }) => (
    <Wrapper palette={palette} data-testid="task" {...others}>
      <Header palette={palette} data-testid="task-header">
        <Card.Title data-testid="task-title">{title}</Card.Title>
        {isProcessing && (
          <div data-testid="task-loader">
            <Loader />
          </div>
        )}
      </Header>
      <Body data-testid="task-body">{description}</Body>
      <Footer palette={palette} data-testid="task-footer">
        <Label palette={palette} data-testid="task-value">
          Value: {value}
        </Label>
      </Footer>
    </Wrapper>
  )
);

Task.defaultProps = {
  title: undefined,
  description: undefined,
  isProcessing: false,
  value: undefined,
  palette: "default"
};

Task.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isProcessing: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Task;
