<template>
  <div class="wrapper">
    <footer>
      <!-- データを表示させます。-->
      <p>{{addr}}</p>
    </footer>
  </div>
</template>
 
<script>
export default {
  //Vue インスタンスのためのデータオブジェクトです
  data(){
    return{
      addr: "Respect Virtual Fisher.",
    }
  }
}
</script>
 
<style>
footer{
  background-color: #add8e6;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 60vh;
}
h1{
  color: #013892;
  margin: 0;
}
p{
  color:#000;
  margin: 0;
}
</style>
