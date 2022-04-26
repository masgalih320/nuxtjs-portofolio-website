export const state = () => ({
  loading: true
})

export const mutations = {
  showLoading (state, value) {
    state.loading = value
  }
}
