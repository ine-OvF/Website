<template>
  <div class="signup">
    <table>
        <tr>
          <th>メールアドレス：</th>
        </tr>
        <tr>
          <td><input type="email" v-model="mailaddress"/></td>
        </tr>
        <tr>
          <th>パスワード：</th>
        </tr>
        <tr>
          <td><input type="password" v-model="password"/></td>
        </tr>
      </table>
      <button @click="signUp">登録</button>
  </div>
</template>
  
  <script>
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';
  export default {
    name: 'Signup',
    data () {
      return {
        email: '',
        password: ''
      }
    },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.mailaddress, this.password)
      .then(
        // 成功時の処理
        alert("Sign up Succses!"),
        this.$router.push('/signin')
      )
      .catch (
        // エラー時の処理 
        alert('Sign up Failed!')
      )
    }
  }
  }
  </script>
  
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
  .signup {
    margin-top: 20px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center
  }
  input {
    margin: 10px 0;
    padding: 10px;
  }
  button {
    margin: 10px 0;
    padding: 10px;
  }
  </style>