// src/components/TaskItem.tsx
import React from 'react';

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

const TaskItem = ({ task }:TaskItemProps) => {
  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <h2 className="text-lg font-semibold">{task.title}</h2>
      <p className="text-gray-600">{task.dueDate}</p>
      <p className="mt-2">{task.description}</p>
      <label className="mt-4 flex items-center">
        <input type="checkbox" className="mr-2" checked={task.completed} readOnly />
        Completed
      </label>
    </div>
  );
};

export default TaskItem;
