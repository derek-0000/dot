import { useState, useRef, useEffect } from "react";
import "./App.css";

import Dot from "./components/Dot";

type DotTask = {
  title: string;
  task_id: number | null;
  completed: boolean;
  date: Date;
  category: {
    color: string;
    shape: string;
  };
};

function App() {
  const startingTask = {
    task_id: 1,
    title: "1hr study session",
    completed: false,
    date: new Date(),
    category: {
      color: "#67e8f9",
      shape: "",
    },
  };
  const emptyTask = {
    task_id: null,
    title: "",
    completed: false,
    date: new Date(),
    category: {
      color: "",
      shape: "",
    },
  };

  const [tasks, setTasks] = useState<DotTask[]>([startingTask]);
  const [addingTask, setAddingTask] = useState<boolean>(false);
  const [inProgressTask, setInProgressTask] = useState<DotTask>(emptyTask);
  const addingTaskTitleInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (addingTask && addingTaskTitleInput.current) {
      addingTaskTitleInput.current.value = "";
      addingTaskTitleInput.current.focus();
    }
  }, [addingTask]);

  const handleUploadTask = () => {
    setTasks([...tasks, inProgressTask]);
  };
  
  const handleAddTask = () => {
    setAddingTask(!addingTask);
  };
  
  const handleInProgressTaskChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInProgressTask((inProgressTask) => ({
      ...inProgressTask,
      [e.target.name]: e.target.value,
    }));
  };
  

  return (
    <>
      <button className="h-8 px-8 bg-neutral-800 shadow-sm shadow-zinc-900 rounded-md transition-all hover:bg-neutral-700 hover:shadow-zinc-800">
        New Recurrent Task
      </button>

      <div className="mb-6 flex justify-between items-center">
        <div className="text-left text-2xl font-semibold ">October - 15</div>
        <button
          onClick={handleAddTask}
          className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-neutral-700 hover:shadow-zinc-800 hover:cursor-pointer "
        >
          +
        </button>
      </div>
      {addingTask && (
        <div id="inProgressTask">
          <div className="h-16 px-6 mb-4 flex justify-between items-center gap-12 bg-neutral-800 shadow-sm shadow-zinc-900 rounded-md hover:cursor-pointer ">
            <button
              onClick={handleUploadTask}
              className="h-8 px-8 bg-neutral-800 shadow-sm shadow-zinc-900 rounded-md transition-all hover:bg-neutral-700 hover:shadow-zinc-800"
            >
              Add
            </button>
            <div className="w-full flex gap-4 items-center justify-center">
              <input
                ref={addingTaskTitleInput}
                type="text"
                name="title"
                className="w-full rounded-sm focus:border focus:border-zinc-900"
                onChange={handleInProgressTaskChange}
                value={inProgressTask.title}
              />
            </div>
            <input
              name="color"
              type="color"
              onChange={handleInProgressTaskChange}
            />
          </div>
        </div>
      )}
      {tasks.map((task) => {
        return (
          <div
            key={task.task_id}
            className="h-16 px-6 mb-4 flex justify-between items-center gap-12 bg-neutral-800 shadow-sm shadow-zinc-900 rounded-md hover:cursor-pointer "
          >
            <div className="flex gap-4 items-center justify-center">
              <input
                id="completion-checkbox"
                type="checkbox"
                defaultChecked={task.completed}
              />
              <label
                htmlFor="completion-checkbox"
                className="hover:cursor-pointer "
              >
                {task.title}
              </label>
            </div>
            <Dot size={6} color={task.category.color} />
          </div>
        );
      })}
    </>
  );
}

export default App;
