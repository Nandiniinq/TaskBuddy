import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase.config";

const addTask = async () => {
  try {
    const docRef = await addDoc(collection(db, "tasks"), {
      title: "Sample Task",
      status: "todo",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

addTask();
