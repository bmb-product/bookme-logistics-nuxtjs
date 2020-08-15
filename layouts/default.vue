<template>
  <div class="center examplex">
    <vs-navbar center-collapsed fixed shadow shadow-scroll>
      <template #left>
        <vs-navbar-item to="/" :active="activeItem == 'logo'" id="logo">
          <img src="~/assets/images/logo.jpg" height="32" />
        </vs-navbar-item>
      </template>

      <vs-navbar-item
        v-for="item in menuItems"
        :to="item.path"
        :active="activeItem == item.id"
        :id="item.id"
        :key="item.id"
      >
        <span> {{ item.text }}</span>
      </vs-navbar-item>

      <template #right>
        <vs-button flat to="/users/login">Login</vs-button>
        <vs-button to="/guides/get_started">Get Started</vs-button>
      </template>
    </vs-navbar>

    <div class="square">
      <div class="child" style="margin-top: 70px;">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      menuItems: [
        { path: '/', id: 'home', text: 'home' },
        { path: '/parcel', id: 'parcel', text: 'parcel' },
        { path: '/freight', id: 'freight', text: 'freight' },
        { path: '/faq', id: 'faq', text: 'faq' },
        { path: '/about_us', id: 'about_us', text: 'about us' },
      ],
    }
  },
  methods: {
    activeMenuItem: function () {
      return this.$store.state.activeMenuItem
    },
    activeMenuItemFromPath: function () {
      var menuItemKey = ''

      for (var i = 0; i < this.menuItems.length; i++) {
        var item = this.menuItems[i]

        if (item.path == this.$nuxt.$route.path) {
          menuItemKey = item.id
          break
        }
      }
      return menuItemKey
    },
  },
  computed: mapState({
    activeItem: (state) => {
      return state.activeMenuItem
    },
  }),
}
</script>

<style>
html,
body {
  background: #f0f0f0 !important;
}
.vs-navbar__item {
  text-transform: uppercase;
}
</style>
