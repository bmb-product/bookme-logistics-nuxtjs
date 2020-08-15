export const state = () => ({
  activeMenuItem: 'home',
})

export const mutations = {
  setActiveMenuItem(state, activeId) {
    state.activeMenuItem = activeId
  },
}
