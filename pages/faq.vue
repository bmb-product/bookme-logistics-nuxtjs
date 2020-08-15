<template>
  <div>
    <h1>Fag</h1>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.$store.commit('setActiveMenuItem', 'faq')
  },
}
</script>
