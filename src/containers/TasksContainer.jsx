import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import Tasks from "../components/Tasks";
import { processor } from "../redux";

const selectors = createStructuredSelector({
  tasks: processor.selectors.getTasks
});

const TasksContainer = () => {
  const { tasks } = useSelector(selectors);
  return <Tasks tasks={tasks} />;
};

export default TasksContainer;
