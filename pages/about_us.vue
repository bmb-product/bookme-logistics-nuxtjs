<template>
  <div>
    <h1>About us</h1>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.$store.commit('setActiveMenuItem', 'about_us')
  },
}
</script>
