import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task, updateTask, deleteTask }) => (
    <li style={{ marginBottom: '10px' }}>
        <span
            style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                marginRight: '10px',
            }}
        >
            {task.description}
        </span>
        <button
            onClick={() =>
                updateTask(task.id, { ...task, completed: !task.completed })
            }
        >
            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button onClick={() => deleteTask(task.id)} style={{ marginLeft: '10px' }}>
            Delete
        </button>
    </li>
);

TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        priority: PropTypes.number.isRequired,
    }).isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default TaskItem;
