import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, Keyboard,} from 'react-native';
import TaskList from './TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;

    const newTaskObject = {
      id: Date.now(),
      title: newTask,
      isDone: false,
    };

    setTasks([...tasks, newTaskObject]);
    setNewTask('');
    Keyboard.dismiss();
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Список дел</Text>
      <TextInput
        style={styles.input}
        placeholder="Добавить новую задачу"
        onChangeText={(text) => setNewTask(text)}
        value={newTask}
      />
      <Button title="Добавить" onPress={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    padding: 100,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
