import { ReactSortable } from "react-sortablejs";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from 'react-icons/fa';
import { IoMdAddCircle } from "react-icons/io";


const Board = () => {
    const [tasks, setTasks] = useState({
        idea: [],
        todo: [],
        progress: [],
        published: [],
    });

    const [newTask, setNewTask] = useState("");
    const [newTaskType, setNewTaskType] = useState("idea");
    const [newTaskIdea, setNewTaskIdea] = useState("");
    const [newTaskTodo, setNewTaskTodo] = useState("");
    const [newTaskProgress, setNewTaskProgress] = useState("");
    const [newTaskPublished, setNewTaskPublished] = useState("");

    const fetchTasks = async () => {
        try {
            const response = await axios.get("http://localhost:1337/api/tasks");
            const allTasks = response.data.data;

            const categorizedTasks = {
                idea: allTasks.filter((task) => task.attributes.Idea !== null),
                todo: allTasks.filter((task) => task.attributes.Todo !== null),
                progress: allTasks.filter((task) => task.attributes.Progress !== null),
                published: allTasks.filter((task) => task.attributes.Published !== null),
            };
            setTasks(categorizedTasks);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const addTaskToCategory = async (category, categoryState, categoryStateSetter) => {
        try {
            const response = await axios.post("http://localhost:1337/api/tasks", {
                data: {
                    [category.charAt(0).toUpperCase() + category.slice(1)]: categoryState,
                },
            });

            const newTaskData = response.data.data;

            setTasks((prevTasks) => ({
                ...prevTasks,
                [category]: [...prevTasks[category], newTaskData],
            }));

            categoryStateSetter("");
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const onDragEnd = async (result) => {
        const { source, destination, draggableId } = result;

        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }

        const updatedTasks = { ...tasks };
        const sourceTasks = [...tasks[source.droppableId]];
        const destinationTasks = [...tasks[destination.droppableId]];

        const [draggedTask] = sourceTasks.splice(source.index, 1);
        destinationTasks.splice(destination.index, 0, draggedTask);

        updatedTasks[source.droppableId] = sourceTasks;
        updatedTasks[destination.droppableId] = destinationTasks;

        setTasks(updatedTasks);
        updateTask(draggedTask.id, draggedTask.attributes, source.droppableId, destination.droppableId);
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
            console.error('Error updating task:', error);
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

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <>
            <div className="container mx-auto mt-5 mb-5 pt-60 ">
                <h6 class="text-white flex items-center justify-center pb-5 text-6xl">
                    X-TEAM
                </h6>
                <div className="flex  ">

                    {Object.entries(tasks).map(([category, categoryTasks]) => (
                        <div key={category} className="flex-1 mx-2  w-[550px] px-2 py-3 bg-[#161C22] rounded overflow-hidden">
                            <div className="sticky top-0 bg-[#161C22] z-10">
                                <h6 className="text-2xl text-white p-3 pl-8 bg-[#0D1117] font-bold mb-2">{category.charAt(0).toUpperCase() + category.slice(1)}</h6>
                            </div>
                            <div className="h-[400px]  overflow-y-auto scrollbar-thin scrollbar-thumb-red-500">
                                <ReactSortable
                                    list={tasks[category]}
                                    setList={(newList) => setTasks({ ...tasks, [category]: newList })}
                                    group="shared"
                                    onEnd={onDragEnd}
                                >
                                    {categoryTasks.map((task) => (
                                        <div key={task.id} className="bg-[#0D1117] text-white font-bold p-2 mb-5 rounded-xl pb-8 hover:border hover:border-[#F43F5E]">
                                            {task.attributes.Idea || task.attributes.Todo || task.attributes.Progress || task.attributes.Published}
                                            <div className="mt-2 flex">
                                                <button
                                                    className="ml-auto px-2 py-1 border-2 border-[#35354F] bg-[#26262c] text-red-500 rounded transition transform hover:bg-red-500 hover:text-white"
                                                    onClick={() => deleteTask(task.id, category)}
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </ReactSortable>
                            </div>
                            <div className="mt-2 flex ">
                                <textarea
                                    rows={1}
                                    cols={30}
                                    className="rounded border-4 border-[#35354F] bg-[#161C22] text-white"
                                    value={category === "idea" ? newTaskIdea : category === "todo" ? newTaskTodo : category === "progress" ? newTaskProgress : newTaskPublished}
                                    onChange={(e) => {
                                        if (category === "idea") {
                                            setNewTaskIdea(e.target.value);
                                        } else if (category === "todo") {
                                            setNewTaskTodo(e.target.value);
                                        } else if (category === "progress") {
                                            setNewTaskProgress(e.target.value);
                                        } else if (category === "published") {
                                            setNewTaskPublished(e.target.value);
                                        }
                                    }}
                                ></textarea>
                                <button
                                    type="button"
                                    className="ml-2 px-4 py-2 border-2 text-white rounded flex items-center hover:bg-gray-800 hover:border-gray-600 hover:text-red-500 "
                                    onClick={() => addTaskToCategory(category, category === "idea" ? newTaskIdea : category === "todo" ? newTaskTodo : category === "progress" ? newTaskProgress : newTaskPublished, category === "idea" ? setNewTaskIdea : category === "todo" ? setNewTaskTodo : category === "progress" ? setNewTaskProgress : setNewTaskPublished)}
                                > <IoMdAddCircle className="text-2xl" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

};

export default Board;
