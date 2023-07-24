<template>
  id = admin
  password = password
    <div class="container">
      <form @submit.prevent="login">
        <h2>Halaman Login</h2>
        <div class="input-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>

  export default {
    name: "LoginForm",
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Perform login validation
        if (this.username === 'admin' && this.password === 'password') {
          alert('Login berhasil');
          this.$router.push('Dashboard');
          //const router = useRoute();
          //const login = () => {
          //this.$router.push({name: "Dashboard" })
          //}
        } else {
          alert('Username atau password salah');
          // Kosongkan input field atau tampilkan pesan kesalahan
        }
      }
    }
  };
  
  </script>
  
  <style>
  .container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  h2 {
    text-align: center;
  }
  
  .input-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .input-group input {
    width: 90%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
  }
  </style>
  