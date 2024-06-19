import React from "react";
import { Gantt, ViewMode } from "gantt-task-react";

import "gantt-task-react/dist/index.css";

const GanttChart = ({ data }) => {
  const tasks = data.task.map((e) => {
    e.start = new Date(e.start);
    e.end = new Date(e.end);
    return e;
  });

  const handleTaskChange = (task) => {
    console.log("On date change Id:" + task.id);
  };

  const handleDblClick = (task) => {
    alert("On Double Click event Id:" + task.id);
  };

  const customColumnRenderer = (task) => {
    return (
      <>
        <td>{task.name}</td>
        <td>{task.progress}%</td>
        {/* Add other columns you want to display */}
      </>
    );
  };

  return (
    <div>
      <Gantt
        tasks={tasks}
        viewMode={ViewMode.Day}
        columnWidth={60}
        renderListCell={customColumnRenderer}
        // listCellWidth=""
        // fromColumnWidth={0}
        // toColumnWidth={0}
        onDateChange={handleTaskChange}
        // onDelete={handleTaskDelete}
        // onProgressChange={handleProgressChange}
        onDoubleClick={handleDblClick}
        // onClick={handleClick}
        // onSelect={handleSelect}
        // onExpanderClick={handleExpanderClick}
        // listCellWidth={isChecked ? "155px" : ""}
        // columnWidth={columnWidth}
      />
    </div>
  );
};

export default GanttChart;
