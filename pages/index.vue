<template>
  <div class="container">
    <div>
      <h1>Home</h1>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description',
      },
    ],
  },

  async fetch() {
    this.$store.commit('setActiveMenuItem', 'home')
  },
}
</script>
