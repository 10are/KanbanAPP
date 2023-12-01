import { ReactSortable } from "react-sortablejs";
import { useState, useEffect } from "react";
import axios from "axios";

const Board = () => {
    const [tasks, setTasks] = useState({
        idea: [],
        todo: [],
        progress: [],
        published: [],
    });

    const [newTask, setNewTask] = useState("");
    const [newTaskType, setNewTaskType] = useState("idea"); 

    const [updatedTask, setUpdatedTask] = useState({
        id: null,
        category: null,
        content: "",
    });

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

    const addTask = async () => {
        try {
            const response = await axios.post("http://localhost:1337/api/tasks", {
                data: {
                    [newTaskType.charAt(0).toUpperCase() + newTaskType.slice(1)]: newTask,
                },
            });

            const newTaskData = response.data.data;

            setTasks((prevTasks) => ({
                ...prevTasks,
                [newTaskType]: [...prevTasks[newTaskType], newTaskData],
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
                                list={tasks[category]}
                                setList={(newList) => setTasks({ ...tasks, [category]: newList })}
                                group="shared"
                                onEnd={onDragEnd}
                            >
                                {categoryTasks.map((task) => (
                                    <div key={task.id} className="bg-white p-2 mb-2 border rounded">
                                        {task.attributes.Idea || task.attributes.Todo || task.attributes.Progress || task.attributes.Published}
                                        <div className="mt-2">
                                            <button
                                                className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                                                onClick={() => deleteTask(task.id, category)}
                                            >
                                                Delete
                                            </button>
                                        
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
                <select
                    className="ml-2 p-1"
                    value={newTaskType}
                    onChange={(e) => setNewTaskType(e.target.value)}
                >
                    <option value="idea">Idea</option>
                    <option value="todo">Todo</option>
                    <option value="progress">In Progress</option>
                    <option value="published">Published</option>
                </select>
                <button type="button" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={addTask}>
                    Add Task
                </button>
            </div>
        </>
    );
};

export default Board;
