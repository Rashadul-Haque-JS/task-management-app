import React, { useState } from "react";

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleTask = () => {
    const updatedTask = { ...task, completed: !completed };

    // Update local state
    setCompleted(!completed);

    // Update task in localStorage
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const tasks = JSON.parse(storedTasks);
      const updatedTasks = tasks.map((t: Task) => (t.id === updatedTask.id ? updatedTask : t));
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  };

  return (
    <div
      className={`bg-white p-4 shadow rounded mb-4 ${
        completed ? "opacity-50" : "opacity-100"
      } w-[380px] h-[300px] gap-4 relative`}
    >
      <h2 className="text-lg font-semibold uppercase">{task.title}</h2>
      <p className="text-gray-600">{task.dueDate}</p>
      <div className="w-full h-[150px] bg-gray-100 p-2 mt-3">
        <p className="mt-2">{task.description}</p>
      </div>
      <div className="absolute left-3 bottom-3">
        <label className="mt-4 flex items-center cursor-pointer" onClick={handleTask}>
          <input
            type="checkbox"
            className="mr-2 form-checkbox h-5 w-5 text-blue-500 "
            checked={completed}
            readOnly
            aria-label={`Mark task "${task.title}" as completed`}
          />
          Completed
        </label>
      </div>
    </div>
  );
};

export default TaskItem;
