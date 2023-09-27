import React from 'react';
import {FlatList} from 'react-native';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(task) => task.id.toString()}
      renderItem={({ item }) => (
        <Task task={item} onDelete={onDelete} onToggle={onToggle} />
      )}
    />
  );
};

export default TaskList;
