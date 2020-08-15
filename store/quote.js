export const state = () => ({
  requestLoading: false,
})

export const mutations = {
  setRequestLoading(state, status) {
    console.log('committed state----------------', status)
    state.requestLoading = status
  },
}

export const actions = {
  async submitQuoteForm(context, payloads) {
    // context.commit('setRequestLoading', true)
    console.log('submit form in the action', payloads)

    const ip = await this.$axios.$post('/api/quotes', payloads)
    console.log('test ip: ------------- ', ip)

    context.commit('setRequestLoading', false)
  },
}
