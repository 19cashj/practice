import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Keyboard, Touchable, ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);
  function addTask() {
    if (/([^\s])/.test(task)) {
      setTasks([...tasks, task]);
      setTask('');
      Keyboard.dismiss();
      inputRef.current.clear();
    }
  }
  function deleteTask(index) {
    let tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  }
  return (
      <View style={styles.container}>
          <View style={styles.tasksWrapper}>
          <Text style={styles.header}>Tasks</Text>
            <ScrollView style={styles.scrollLimiter}>
              {tasks.map((taskText, index) => {
                return ( 
                  <Task key={index} text={taskText} delete={deleteTask} index={index}></Task>
                )
              })}
            </ScrollView>
          </View>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.taskInputWrapper}>
            <TextInput ref={inputRef} style={styles.input} placeholder={'Write Text Here'} onChangeText={t => setTask(t)}></TextInput>
            <TouchableOpacity onPress={addTask}>
              <View style={styles.addTaskWrapper}>
                <Text>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF44',
    fontSize: 12
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingBottom: 20
  },
  taskInputWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    padding: 15,
    width: 250,
    backgroundColor: 'white',
    borderRadius: 60,
    borderWidth: 3
  },
  addTaskWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3
  },
  scrollLimiter: {
    height: 410
  }
});
