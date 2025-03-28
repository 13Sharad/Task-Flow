import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import FilterSort from '../components/FilterSort';

const Home = () => {
  return (
    <div className="container grid gap-6">
      <FilterSort />
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
