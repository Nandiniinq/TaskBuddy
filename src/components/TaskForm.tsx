/*import React, { useState } from 'react';
import './TaskForm.scss';
import { Task, TaskStatus } from '../types';

interface TaskFormProps {
  addTask: (task: Task, file?: File) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState<TaskStatus>(TaskStatus.Todo);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Task title is required');
      return;
    }
    const newTask: Task = { id: Date.now().toString(), title, status }; // Replace ID generation logic as needed
    addTask(newTask, file || undefined);
    setTitle('');
    setFile(null);
    setStatus(TaskStatus.Todo);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as TaskStatus)}
      >
        <option value={TaskStatus.Todo}>To Do</option>
        <option value={TaskStatus.InProgress}>In Progress</option>
        <option value={TaskStatus.Done}>Done</option>
      </select>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;*/









import React, { useState } from 'react';
import './TaskForm.scss';
import { Task, TaskStatus } from '../types';

interface TaskFormProps {
  addTask: (task: Task, file?: File) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState<TaskStatus>(TaskStatus.Todo);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Task title is required');
      return;
    }
    const newTask: Task = {
      id: Date.now().toString(), title, status,
      dueOn: ''
    }; // Replace ID generation logic as needed
    addTask(newTask, file || undefined);
    setTitle('');
    setFile(null);
    setStatus(TaskStatus.Todo);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as TaskStatus)}
      >
        <option value={TaskStatus.Todo}>To Do</option>
        <option value={TaskStatus.InProgress}>In Progress</option>
        <option value={TaskStatus.Done}>Done</option>
      </select>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

