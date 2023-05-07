<template>
  <header>
    <div class="image">
    <h1>
      <a href="http://localhost/">
        <img src="../assets/fisher_logo.png">
      </a>
    </h1>
  </div>
    <!-- データを表示させます。-->
    <h1>{{title}}</h1>
    <p class="subtitle">{{subTitle}}</p>
    <nav>
      <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
      <li><router-link to="/Menu">Menu</router-link></li>
      <li><router-link to="/Signup">SignUp</router-link></li>
      <li><router-link to="/Signin">SignIn</router-link></li>
      
      <li><router-link to="/Sign_after">Signout</router-link></li>
      </ul>
    </nav>
  </header>
</template>
 
<script>
export default {
//Vue インスタンスのためのデータオブジェクトです
  data(){
    return{
      title: "fishing site",
      subTitle: "For \"rare\" fish."
    }
  }
}
</script>
 
<style>
.image img{
  width: 70%;
  padding: 0 10px;
}
ul {
  list-style:none;
}
header {
  background-color: #add8e6;
  display: flex;
  height:60px;
  align-items: center;
  padding: 5px 30px;
}
.subtitle{
  margin-left:15px ;
}
header nav {
  margin-left: auto;
}
header ul {
  display: flex;
}
header ul li {
  margin-left: 20px;
}
header nav ul li a{
  text-decoration: none;
  color: #013892;
}
</style>
