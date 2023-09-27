import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <View style={styles.task}>
      <TouchableOpacity onPress={() => onToggle(task.id)}>
        <View style={task.isDone ? styles.taskDone : styles.taskUndone} />
      </TouchableOpacity>
      <Text style={task.isDone ? styles.taskTextDone : styles.taskTextUndone}>
        {task.title}
      </Text>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text style={styles.deleteButton}>Удалить</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  taskDone: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'green',
    marginRight: 10,
  },
  taskUndone: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
  },
  taskTextDone: {
    textDecorationLine: 'line-through',
    fontSize: 18,
    flex: 1,
  },
  taskTextUndone: {
    fontSize: 18,
    flex: 1,
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10,
  },
});

export default Task;
