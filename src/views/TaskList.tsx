// src/components/TaskList.tsx
import React from 'react';
import {tasks} from '../db/tasks';
import TaskItem from '../components/TaskItem';

const TaskList= () => {
    return (
      <div className='flex flex-wrap justify-center items-center gap-3'>
        <h1 className="text-2xl font-semibold mb-4 text-center w-full shadow-sm p-4">Tasks List</h1>

        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    );
  };
  
  export default TaskList;