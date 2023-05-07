<template>
  <div class="title">
    <h1>Fishサイトへようこそ！</h1>
  </div>
  <div class="letter">
    <h1>これはテストページです。<br>
        このページが表示されているということは、あなたはアクセスが出来たということです！<br>
    </h1>
  </div>
  <div class="logo-image"> 
    <img src="../assets/fisher.png">
  </div>
  <div class="image-letter">
    このサイトは、<br>
    Virtual Fisher様<br>
    をリスペクトして作られたサイトです。
  </div>
  


</template>

<script>
export default {
  // コンポーネントのデータ、メソッド、ライフサイクルフックなどを定義
}
</script>

<style>
.title h1{
  margin: 50px 0;
}
.letter h1{
  font-size: 150%;
  color: black;
  margin-bottom: 30px;
}
.logo-image{
  display: inline-block;
}
.logo-image img{
  display: inline-block;
  width: 40%;
}
.image-letter{
 display: inline-block;
 vertical-align: top;
 font-size: 150%;
 color: black;
 margin-top: 50px;
}
</style>

