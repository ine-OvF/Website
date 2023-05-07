<template>
  <div class="about">
    <h1>This is a login page</h1>
    <input v-model="userId" />
    <button @click="login()" :disabled="!userId">ログイン</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: ''
    }
  },
  methods: {
    login () {
      this.$store.commit('setUserId', this.userId)
      this.$router.push(this.$route.query.redirect)
    }
  }
}
</script>
<style>
.about h1{
  margin: 50px 0;
}
</style>