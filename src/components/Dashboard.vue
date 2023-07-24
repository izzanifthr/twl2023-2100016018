<template>
  id = admin
  password = password
    <div class="container">
      <h1>To-Do List</h1>
      <input type="text" v-model="newTask" placeholder="Add a new task">
      <input type="date" v-model="newDate">
      <input type="text" v-model="newDescription" placeholder="Add a description">
      <button @click="addTask">Add Task</button>
  
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <template v-if="task.editing">
            <div>
              <input type="text" v-model="task.name" @keyup.enter="saveTask(index)">
            </div>
            <div>
              <input type="date" v-model="task.date" @keyup.enter="saveTask(index)">
            </div>
            <div>
              <input type="text" v-model="task.description" @keyup.enter="saveTask(index)">
            </div>
          </template>
          <template v-else>
            <div>
              <span>{{ task.name }}</span>
            </div>
            <div>
              <span>{{ task.date }}</span>
            </div>
            <div>
              <span>{{ task.description }}</span>
            </div>
          </template>
          <button @click="toggleEditTask(index)">{{ task.editing ? 'Save' : 'Edit' }}</button>
          <button @click="deleteTask(index)">Delete</button>
        </li>
      </ul>
      <router></router>
    </div>
  </template>
  
  <script>
  export default {
    name: "DashboardForm",
    data() {
      return {
        newTask: '',
        newDate: '',
        newDescription: '',
        tasks: []
      };
    },
    methods: {
      addTask() {
        if (this.newTask !== '' && this.newDate !== '') {
          const task = {
            name: this.newTask,
            date: this.newDate,
            description: this.newDescription,
            editing: false
          };
          console.log(this.newTask);
          this.tasks.push(task);
          this.newTask = '';
          this.newDate = '';
          this.newDescription = '';
          
        }
      },
      toggleEditTask(index) {
        this.tasks[index].editing = !this.tasks[index].editing;
      },
      saveTask(index) {
        this.tasks[index].editing = false;
      },
      deleteTask(index) {
        if (confirm('Are you sure you want to delete this task?')) {
          this.tasks.splice(index, 1);
        }
      }
    }
  };
  </script>
  
  <style>
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  .container {
  max-width: 600px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 25px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  text-align: center;
  color: #333;
  margin-top: 0;
}

input[type="text"],
input[type="date"] {
  padding: 10px;
  width: calc(30% - 10px);
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  margin-left: 7px;
  display: inline-block;
}

input[type="date"] {
  display: inline-block;
}
  
  .clearfix::after {
    content: "";
    display: table;
    clear: both;
  }
  
  button {
    padding: 10px 15px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 15px;
    cursor: pointer;
    width: 25%;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    background-color: #fff;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  
  li div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    margin-left: 4px;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  li div input[type="text"],
  li div input[type="date"] {
    flex-grow: 1;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 5px;
  }
  
  li button {
    padding: 4px 10px;
    margin-left: 5px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 20%;
  }
  
  
  </style>
  