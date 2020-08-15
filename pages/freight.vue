<template>
  <div>
    <h1>Freight</h1>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.$store.commit('setActiveMenuItem', 'freight')
  },
}
</script>
