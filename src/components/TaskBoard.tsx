import React, { useState } from "react";
import "./TaskBoard.scss";
import { Task } from "../types";

interface TaskBoardProps {
  tasks: Task[];
  deleteTask: (id: string) => Promise<void>;
  addTask: (task: Task) => void;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [dueDateFilter, setDueDateFilter] = useState<string | null>(null);

  const filteredTasks = tasks
    .filter((task) => (categoryFilter ? task.category === categoryFilter : true))
    .filter((task) => (dueDateFilter ? task.dueDate === dueDateFilter : true))
    .filter((task) =>
      searchTerm ? task.title.toLowerCase().includes(searchTerm.toLowerCase()) : true
    );

  return (
    <div className="task-board">
      {/* Filter Bar */}
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
            <select onChange={(e) => setDueDateFilter(e.target.value || null)} value={dueDateFilter || ""}>
              <option value="">All</option>
              <option value="2024-12-28">28 Dec, 2024</option>
              <option value="2024-12-29">29 Dec, 2024</option>
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

      {/* Table for headers */}
      <table className="task-table">
        <thead>
          <tr>
            <th>Todo</th>
            <th>In-Progress</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Todo Column */}
            <td className="todo-column">
              {filteredTasks
                .filter((task) => task.status === "Todo")
                .map((task) => (
                  <div key={task.id} className="task-card">
                    <p>{task.title}</p>
                    {task.tags && task.tags.length > 0 && (
                      <div className="tags">
                        {task.tags.map((tag, index) => (
                          <span key={index} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="bottom-section">
                      <span className="work-type">{task.category}</span>
                      <span className="due-date">
                        {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "No Due Date"}
                      </span>
                    </div>
                  </div>
                ))}
            </td>

            {/* In-Progress Column */}
            <td className="in-progress-column">
              {filteredTasks
                .filter((task) => task.status === "In-Progress")
                .map((task) => (
                  <div key={task.id} className="task-card">
                    <p>{task.title}</p>
                    {task.tags && task.tags.length > 0 && (
                      <div className="tags">
                        {task.tags.map((tag, index) => (
                          <span key={index} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="bottom-section">
                      <span className="work-type">{task.category}</span>
                      <span className="due-date">
                        {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "No Due Date"}
                      </span>
                    </div>
                  </div>
                ))}
            </td>

            {/* Completed Column */}
            <td className="completed-column">
              {filteredTasks
                .filter((task) => task.status === "Completed")
                .map((task) => (
                  <div key={task.id} className="task-card">
                    <p>{task.title}</p>
                    {task.tags && task.tags.length > 0 && (
                      <div className="tags">
                        {task.tags.map((tag, index) => (
                          <span key={index} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="bottom-section">
                      <span className="work-type">{task.category}</span>
                      <span className="due-date">
                        {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "No Due Date"}
                      </span>
                    </div>
                  </div>
                ))}
            </td>

          </tr>
        </tbody>
      </table>

    </div >
  );
};

export default TaskBoard;
