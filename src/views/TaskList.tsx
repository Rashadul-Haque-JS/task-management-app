import React, { useEffect, useState } from "react";
import TaskItem, { Task } from "../components/TaskItem";

const TaskList = () => {
  const [tasksList, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Retrieve tasks from localStorage
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);

      // Sort tasks so that task.completed === false comes before others
      const sortedTasks = parsedTasks.sort((a: any, b: any) =>
        a.completed === b.completed ? 0 : a.completed ? 1 : -1
      );

      setTasks(sortedTasks);
    }
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-3">
      <h1 className="text-2xl font-semibold mb-4 text-center w-full shadow-sm p-4">
        Tasks List
      </h1> 
      {!tasksList.length && (
        <div className="text-center flex flex-col justify-between items-center gap-16 mt-4">
          <p className="text-gray-500">Your Task List Is Empty!</p>
          <img
            src="/empty.png" // Replace with the actual path to your image
            alt="Empty Task List"
            className="mt-2 max-w-[400px] mx-auto"
          />
        </div>
      )}

      {tasksList.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
