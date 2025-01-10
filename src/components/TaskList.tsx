import React from 'react';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: string) => Promise<void>;
  updateTask: (updatedTask: Task) => Promise<void>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, updateTask }) => {
  // Add a guard for task.id being undefined before calling updateTask
  const handleUpdateTask = (task: Task) => {
    if (task.id) {
      updateTask(task);
    } else {
      console.error('Task ID is missing');
    }
  };

  const handleDeleteTask = (id: string | undefined) => {
    if (id) {
      deleteTask(id);
    } else {
      console.error('Task ID is missing');
    }
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div className="task-item" key={task.id}>
          <span>{task.title}</span>
          <span>{task.dueDate}</span>
          <span>{task.status}</span>
          <span>{task.category}</span>
          
          <button onClick={() => handleUpdateTask(task)}>Update Status</button>

          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;





