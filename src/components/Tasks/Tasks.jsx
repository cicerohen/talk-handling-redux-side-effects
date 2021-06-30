import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Task from "../Task";

const Wrapper = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  > * {
    flex: 1;
    margin: 0 5px;
  }
`;

const Tasks = React.memo(({ tasks }) => {
  const taskKeys = Object.keys(tasks);
  return (
    <Wrapper data-testid="tasks">
      {taskKeys.map(taskKey => {
        const palette = (tasks[taskKey].isProcessed && "primary") || "default";
        return (
          <Task
            key={taskKey}
            palette={palette}
            isProcessing={tasks[taskKey].isProcessing}
            title={tasks[taskKey].title}
            description={tasks[taskKey].description}
            value={tasks[taskKey].value}
          />
        );
      })}
    </Wrapper>
  );
});

Tasks.defaultProps = {
  tasks: {}
};

Tasks.propTypes = {
  tasks: PropTypes.objectOf(PropTypes.any)
};

export default Tasks;
