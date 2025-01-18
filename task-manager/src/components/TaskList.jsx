import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');
    const [sortOption, setSortOption] = useState('creationDate');
    const [newTask, setNewTask] = useState('');
    const [priority, setPriority] = useState(1);

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'Completed') return task.completed;
        if (filter === 'Incomplete') return !task.completed;
        return true;
    });


    const sortedTasks = [...filteredTasks].sort((a, b) => {
        if (sortOption === 'creationDate') return a.id - b.id;
        if (sortOption === 'priority') return b.priority - a.priority;
        return 0;
    });

    const addTask = () => {
        if (newTask.trim() === '') {
            alert('Task description cannot be empty!');
            return;
        }
        setTasks([
            ...tasks,
            { id: Date.now(), description: newTask, completed: false, priority },
        ]);
        setNewTask(''); 
        setPriority(1); 
    };


    const updateTask = (id, updatedTask) => {
        setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="task-container">
            <h1>Task Management</h1>

            <div className="add-task">
                <input
                    type="text"
                    placeholder="Enter a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <select
                    value={priority}
                    onChange={(e) => setPriority(Number(e.target.value))}
                >
                    <option value={1}>Low Priority</option>
                    <option value={2}>Medium Priority</option>
                    <option value={3}>High Priority</option>
                </select>
                <button onClick={addTask}>Add Task</button>
            </div>

            <div className="controls">
                <div className="filter">
                    <button onClick={() => setFilter('All')}>All</button>
                    <button onClick={() => setFilter('Completed')}>Completed</button>
                    <button onClick={() => setFilter('Incomplete')}>Incomplete</button>
                </div>
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="creationDate">Sort by Creation Date</option>
                    <option value="priority">Sort by Priority</option>
                </select>
            </div>
            <ul className="task-list">
                {sortedTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
