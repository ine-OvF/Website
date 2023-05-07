<template>
  <div class="title">
    <h1>Welcome to the Menu page!</h1>
  </div>
  <div class="main">
    <button @click="randomGen();randomNum();kakeruyo();calculatePrice();updateTotal_base();randomGen_chance();randomNum_chance();calculatePrice_chance();priceTotal_have_chance();priceTotal();updateTotal_chance();updateTotal_have_chance();updateTotal();chance();">fisshing!</button><br>
    <button @click="reset()">total reset</button>
    <div style="font-size: 40px;">You caught:<br/>{{ fish[random] }}{{ kakeru }}{{ random2 }}<br>{{ caught2 }}
  <br><br><br>
     Price: {{ price }}</div>
    <div style="font-size: 40px;">Total: {{ pricesum }}</div>
  </div>
</template>
<script>
export default{
  data (){
    return{
      fish: [
        'Rawfish', 'Tropicalfish', 'Pufferfish' 
      ],
      Rawfish: 100,
      Tropicalfish: 150,
      Pufferfish: 200,
      
      random: null,
      random_chance: null,
      random2: null,
      random2_chance: null,
      price_base: 0,
      price_chance: 0,
      price: 0,
      pricesum_base: 0,
      pricesum_chance: 0,
      pricesum: 0,
      caught2: ""
    }
  },
  methods: {
    randomGen: function() {
      this.random = 0 + Math.floor( Math.random() * 3);
    },
    randomGen_chance: function() {
      this.random_chance = 0 + Math.floor( Math.random() * 3);
    },
    randomNum: function() {
      this.random2 = 1 + Math.floor( Math.random() * 7);
    },
    randomNum_chance: function() {
      this.random2_chance = 1 + Math.floor( Math.random() * 7);
    },
    kakeruyo: function() {
      this.kakeru = '×';
    },
    calculatePrice: function() {
      if (this.random === 0) {
        this.price_base = this.Rawfish * this.random2;
      } else if (this.random === 1) {
        this.price_base = this.Tropicalfish * this.random2;
      } else if (this.random === 2) {
        this.price_base = this.Pufferfish * this.random2;
      }
    },
    calculatePrice_chance: function() {
      if (this.random_chance === 0) {
        this.price_chance = this.Rawfish * this.random2_chance;
      } else if (this.random_chance === 1) {
        this.price_chance = this.Tropicalfish * this.random2_chance;
      } else if (this.random_chance === 2) {
        this.price_chance = this.Pufferfish * this.random2_chance;
      }
    },
    priceTotal_have_chance: function(){
      this.price = this.price_base + this.price_chance;
    },
    priceTotal: function(){
      this.price = this.price_base ;
    },
    updateTotal_base: function() {
      this.pricesum_base += this.price_base;
    },
    updateTotal_chance: function() {
      this.pricesum_chance += this.price_chance;
    },
    updateTotal_have_chance: function() {
      this.pricesum = this.pricesum_base + this.pricesum_chance;
    },
    updateTotal: function() {
      this.pricesum = this.pricesum_base;
    },
    reset: function(){
      this.pricesum = 0;
      this.pricesum_base = 0;
      this.pricesum_chance = 0;
    },
    chance: function() {
    var probability = Math.random();
    if (probability <= 0.3) {
    this.randomGen_chance();
    this.randomNum_chance();
    this.calculatePrice_chance();
    this.priceTotal_have_chance();
    this.updateTotal_chance();
    this.updateTotal_have_chance();
    this.caught2 = this.fish[this.random_chance] + this.kakeru + this.random2_chance;
      }else {
        this.caught2 = "";
        this.priceTotal();
        this.updateTotal();
    }
    } 
  }
}

</script>
<style>
.title h1{
  margin: 50px 0;
}

.main button {
  width: 10em;
  height:3em;
  font-size: 130%;
}
</style>