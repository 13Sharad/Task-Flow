import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from '../features/taskSlice';
import { Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="grid gap-4">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available. Add some!</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="card flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Checkbox
                checked={task.completed}
                onChange={() => dispatch(toggleComplete(task.id))}
              />
              <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.title}
              </span>
            </div>
            <IconButton onClick={() => dispatch(deleteTask(task.id))} color="error">
              <DeleteIcon />
            </IconButton>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
