import React, { useState } from "react";
import "./TaskTable.scss";
import { Task, TaskStatus } from "../types";

interface TaskTableProps {
  tasks: Task[];
  deleteTask: (id: string) => Promise<void>;
  addTask: (newTask: Task) => void;
}

const TaskTable: React.FC<TaskTableProps> = ({ tasks, deleteTask, addTask }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [newTask, setNewTask] = useState<Partial<Task>>({
    title: "",
    dueDate: "",
    status: TaskStatus.Todo,
    category: "Work",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTask = () => {
    if (newTask.title && newTask.dueDate) {
      addTask({ ...newTask, id: String(Date.now()) } as Task);
      setNewTask({ title: "", dueDate: "", status: TaskStatus.Todo, category: "Work" });
      setShowAddTask(false);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const renderSubTable = (title: TaskStatus) => {
    const filteredTasks = tasks
      .filter((task) => task.status === title)
      .filter((task) =>
        searchTerm ? task.title.toLowerCase().includes(searchTerm.toLowerCase()) : true
      )
      .filter((task) => (categoryFilter ? task.category === categoryFilter : true));

    return (
      <>
        <tr>
          <td colSpan={5}>
            <div className={`subtable-heading ${title.toLowerCase().replace(" ", "-")}-heading`}>
              {title}
            </div>
          </td>
        </tr>
        {title === TaskStatus.Todo && (
          <>
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                {!showAddTask && (
                  <button className="add-task-button" onClick={() => setShowAddTask(true)}>
                    + Add Task
                  </button>
                )}
              </td>
            </tr>
            {showAddTask && (
              <tr className="add-task-row">
                <td>
                  <input
                    type="text"
                    name="title"
                    value={newTask.title}
                    onChange={handleInputChange}
                    placeholder="Task Name"
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="dueDate"
                    value={newTask.dueDate}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <select name="status" value={newTask.status} onChange={handleInputChange}>
                    <option value="Todo">To-Do</option>
                    <option value="InProgress">In-Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td>
                  <select name="category" value={newTask.category} onChange={handleInputChange}>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                  </select>
                </td>
                <td>
                  <button onClick={handleAddTask}>Save</button>
                  <button onClick={() => setShowAddTask(false)}>Cancel</button>
                </td>
              </tr>
            )}
          </>
        )}
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.dueDate || "N/A"}</td>
              <td>{task.status}</td>
              <td>{task.category || "N/A"}</td>
              <td>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} style={{ textAlign: "center" }}>
              No tasks available
            </td>
          </tr>
        )}
      </>
    );
  };

  return (
    <div className="task-manager">
      <div className="filter-bar">
        <div className="filter-left">
          <span className="filter-label">Filter by:</span>
          <button onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}>
            Category
          </button>
          {showCategoryDropdown && (
            <select onChange={(e) => setCategoryFilter(e.target.value || null)} value={categoryFilter || ""}>
              <option value="">All</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
            </select>
          )}
          <button onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}>
            Due Date
          </button>
          {showCategoryDropdown && (
            <select onChange={(e) => setCategoryFilter(e.target.value || null)} value={categoryFilter || ""}>
              <option value="All">All</option>
              <option value="28-12-24">28-12-24</option>
              <option value="29-12-24">29-12-24</option>
            </select>
          )}
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Due On</th>
            <th>Task Status</th>
            <th>Task Category</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
      <table className="main-table">
        <tbody>
          {renderSubTable(TaskStatus.Todo)}
          {renderSubTable(TaskStatus.InProgress)}
          {renderSubTable(TaskStatus.Completed)}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
