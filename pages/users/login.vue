<template>
  <div>
    <h1>Login</h1>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.$store.commit('setActiveMenuItem', '')
  },
}
</script>
