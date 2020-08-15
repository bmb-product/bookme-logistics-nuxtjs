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
  submitQuoteForm(context, payload) {
    context.commit('setRequestLoading', true)
    console.log('submit form', payload)
    context.commit('setRequestLoading', false)
  },
}
