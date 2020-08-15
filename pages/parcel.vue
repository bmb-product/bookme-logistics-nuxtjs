<template>
  <div class="center content-inputs">
    <Parcel />
  </div>
</template>

<script>
import Parcel from '@/components/Parcel'
export default {
  head() {},
  asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    return {}
  },

  async fetch() {
    this.$store.commit('setActiveMenuItem', 'parcel')
  },
  data: () => ({
    // active: 'parcel',
  }),

  components: {
    Parcel,
  },
}
</script>
