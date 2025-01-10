import React, { useEffect, useState } from "react";
import TaskTable from "./TaskTable";
import taskIcon from "../assets/Desktop/task_icon.png";
import { db, storage, auth } from "../firebase.config"; // Import auth
import { collection, addDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Task } from "../types";
import TaskBoard from "./TaskBoard";
import { signOut } from "firebase/auth"; // Import signOut
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './TaskManager.scss';

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [view, setView] = useState<"table" | "board">("table");
  const [searchTerm] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      const taskData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Task[];
      setTasks(taskData);
    });

    return () => unsubscribe();
  }, []);

  const addTask = async (task: Task, file?: File) => {
    let fileUrl = "";

    if (file) {
      const fileRef = ref(storage, `tasks/${file.name}`);
      await uploadBytes(fileRef, file);
      fileUrl = await getDownloadURL(fileRef);
    }

    const newTask = { ...task, fileUrl };
    await addDoc(collection(db, "tasks"), newTask);
  };

  const deleteTask = async (id: string) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Log out the user
      navigate("/"); // Redirect to the login page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="task-manager">
      <div>
        <img src={taskIcon} alt="Task Icon" style={{ width: "40px", verticalAlign: "middle" }} />
        <h1 style={{ display: "inline-block", marginLeft: "10px" }}>TaskBuddy</h1>
      </div>
      <div className="view-toggle">
        <button onClick={() => setView("table")} disabled={view === "table"}>
          <img
            src="/src/assets/Desktop/list_icon.png"
            alt="List Icon"
            style={{ width: "20px", verticalAlign: "middle", marginRight: "8px" }}
          />
          List
        </button>
        <button onClick={() => setView("board")} disabled={view === "board"}>
          <img
            src="/src/assets/Desktop/Group 1171276211.png"
            alt="Board Icon"
            style={{ width: "20px", verticalAlign: "middle", marginRight: "8px" }}
          />
          Board
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      {view === "table" ? (
        <TaskTable tasks={filteredTasks} deleteTask={deleteTask} addTask={addTask} />
      ) : (
        <TaskBoard tasks={filteredTasks} deleteTask={deleteTask} addTask={addTask} />
      )}
    </div>
  );
};

export default TaskManager;
