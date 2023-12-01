import { ReactSortable } from "react-sortablejs";
import { useState, useEffect } from "react";
import axios from "axios";

const Board = () => {
  const [tasks, setTasks] = useState({
    ideas: [],
    todo: [],
    inprogress: [],
    published: [],
  });
  const getNextCategory = (currentCategory) => {
    const categories = ["ideas", "todo", "inprogress", "published"];
    const currentIndex = categories.indexOf(currentCategory);
    const nextIndex = currentIndex < categories.length - 1 ? currentIndex + 1 : currentIndex;
    return categories[nextIndex];
  };
  const onDragEnd = (evt) => {
    const { oldIndex, newIndex, from, to } = evt;
    const draggedTask = tasks[from];
    
    if (to && from !== to) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(oldIndex, 1);
      updatedTasks.splice(newIndex, 0, draggedTask);
      
      setTasks(updatedTasks);
      updateTask(draggedTask.id, draggedTask.attributes, from, to);
    }
  };


  const [newTask, setNewTask] = useState("");
  const [updatedTask, setUpdatedTask] = useState({
    id: null,
    category: null,
    content: "",
  });

  const addTask = async () => {
    try {
      const response = await axios.post("http://localhost:1337/api/tasks", {
        data: {
          Idea: newTask,
        },
      });

      const newTaskData = response.data.data;

      setTasks((prevTasks) => ({
        ...prevTasks,
        ideas: [...prevTasks.ideas, newTaskData],
      }));

      setNewTask("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const deleteTask = async (id, category) => {
    try {
      const attribute = `${category.charAt(0).toUpperCase() + category.slice(1)}`;
      await axios.delete(`http://localhost:1337/api/tasks/${id}?category=${attribute}`);
  
      setTasks((prevTasks) => ({
        ...prevTasks,
        [category]: prevTasks[category].filter((task) => task.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  

  const updateTask = async (id, updatedData, sourceCategory, destinationCategory) => {
    try {
      const response = await axios.put(`http://localhost:1337/api/tasks/${id}`, {
        data: { ...updatedData, [destinationCategory]: new Date() },
      });

      const updatedTaskData = response.data.data;

      setTasks((prevTasks) => {
        const updatedTasks = {
          ...prevTasks,
          [sourceCategory]: prevTasks[sourceCategory].filter((task) => task.id !== id),
          [destinationCategory]: [...prevTasks[destinationCategory], updatedTaskData],
        };

        return updatedTasks;
      });
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  
  
  

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/tasks");
      const allTasks = response.data.data;

      const categorizedTasks = {
        ideas: allTasks.filter((task) => task.attributes.Idea !== null),
        todo: allTasks.filter((task) => task.attributes.Todo !== null),
        inprogress: allTasks.filter((task) => task.attributes.Progress !== null),
        published: allTasks.filter((task) => task.attributes.Published !== null),
      };

      setTasks(categorizedTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);


  return (
    <>
      <div className="container mx-auto mt-5 mb-5">
        <div className="flex">
          {Object.entries(tasks).map(([category, categoryTasks]) => (
            <div key={category} className="flex-1 mx-2 px-2 py-3 bg-blue-100 border rounded">
              <h6 className="text-xl font-semibold mb-2">{category.charAt(0).toUpperCase() + category.slice(1)}</h6>
              <ReactSortable
                list={categoryTasks}
                setList={(newList) => setTasks({ ...tasks, [category]: newList })}
                group="shared"
              >
                {categoryTasks.map((task) => (
                  <div key={task.id} className="bg-white p-2 mb-2 border rounded">
                    {task.attributes[category.charAt(0).toUpperCase() + category.slice(1)]}
                    <div className="mt-2">
                      <button
                        className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                        onClick={() => deleteTask(task.id, category)}
                      >
                        Delete
                      </button>
                      {category !== "published" && (
                        <button
                          className="ml-2 px-2 py-1 bg-green-500 text-white rounded"
                          onClick={() =>
                            updateTask(task.id, task.attributes, category, getNextCategory(category))
                          }
                        >
                          Move to Next
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </ReactSortable>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <textarea
          rows={1}
          cols={30}
          className="border p-1"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        ></textarea>
        <button type="button" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={addTask}>
          Add Task
        </button>
      </div>
    </>
  );
};

export default Board;
