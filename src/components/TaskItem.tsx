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
  setIsNotify:(value: boolean)=>void;
}

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-trash"
    viewBox="0 0 16 16"
  >
    <path d="M3.5 2a1 1 0 0 1 1 1V4h8V3a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2h-.293l-.352 9.057a2 2 0 0 1-2 1.943H4.645a2 2 0 0 1-2-1.943L2.293 7H2a1 1 0 0 1 0-2h1V3a1 1 0 0 1 1-1zm1 2v9.978l.25-.25a1 1 0 0 1 1.414 0l.25.25V4H4.5zm4 0v9.978l.25-.25a1 1 0 0 1 1.414 0l.25.25V4h-2z" />
  </svg>
);

const TaskItem = ({ task ,setIsNotify}: TaskItemProps) => {
  const [completed, setCompleted] = useState(task.completed);
  
  const handleTask = () => {
    const updatedTask = { ...task, completed: !completed };

    // Update local state
    setCompleted(!completed);

    // Update task in localStorage
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const tasks = JSON.parse(storedTasks);
      const updatedTasks = tasks.map((t: Task) =>
        t.id === updatedTask.id ? updatedTask : t
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  };

  const handleDelete = async () => {
    // Update local state
    setCompleted(false);
  
    // Delete the task from localStorage
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const tasks = JSON.parse(storedTasks);
      const updatedTasks = tasks.filter((t: Task) => t.id !== task.id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
    
    setIsNotify(true); 
  };
  

  return (
    <div className={`bg-white p-4 shadow rounded mb-4 w-[380px] h-[300px] gap-4 relative`}>
      <div className={`${completed ? "opacity-50" : "opacity-100"}`}>
        <h2 className="text-lg font-semibold uppercase">{task.title}</h2>
        <p className="text-gray-600">{task.dueDate}</p>
        <div className="w-full h-[150px] bg-gray-100 p-2 mt-3">
          <p className="mt-2">{task.description}</p>
        </div>
      </div>
      <div className="flex justify-between absolute left-3 bottom-3 gap-8">
        <label className="flex items-center cursor-pointer" onClick={handleTask}>
          <input
            type="checkbox"
            className="mr-2 form-checkbox h-5 w-5 text-blue-500"
            checked={completed}
            readOnly
            aria-label={`Mark task "${task.title}" as completed`}
          />
          Completed
        </label>
        <button
            className=" text-black flex items-center cursor-pointer gap-2"
            onClick={handleDelete}
            aria-label={`Delete task "${task.title}"`}
          >
            <TrashIcon />
            Delete
          </button>
      </div>
    </div>
  );
};

export default TaskItem;
