<template>
    <div class='signup_after'>
      <h1>{{ msg }}</h1>
      <button @click="signOut">Sign out</button>
    </div>
</template>
  
  <script>
  import axios from 'axios'
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';

  export default {
    name: 'SignUp',
    data () {
      return {
        msg: 'Want you log out? Click the button below.',
        name: firebase.auth().currentUser.email
      }
    },
    methods: {
      signOut: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/signin')
        })
      },
      apiPublic: async function () {
        let res = await axios.get('http://localhost:8082/public')
        this.msg = res.data
      },
      apiPrivate: async function () {
        let res = await axios.get('http://localhost:8082/private')
        this.msg = res.data
      }
    }
  }
  </script>
  
  <!-- Add 'scoped' attribute to limit CSS to this component only -->
  <style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  button {
    margin: 10px 0;
    padding: 10px;
  }
  </style>