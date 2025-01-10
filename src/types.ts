// src/types.ts
export enum TaskStatus {
    Todo = 'Todo',
    InProgress = 'In-Progress',
    Done = 'done',
    Completed = "Completed",
  }
export interface Task {
    dueOn: string;
    id: string; // Optional because it will be added by Firestore
    title: string;
    description?: string;
    status: TaskStatus;
    name?: string;  // Optional properties
    category?: string;
    dueDate?: string;
    tags?: string[];
    date?: string;
    fileUrl?: string; 
  }
  