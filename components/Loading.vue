<template>
  <div v-if="$store.state.loading" class="min-vh-100 d-flex justify-content-center align-items-center" tabindex="1000">
    <div class="text-center">
      <b-spinner style="width: 8rem; height: 8rem;" />
      <h5 class="mt-4 loading-text">
        Loading...
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLoading',
  mounted () {
    this.$store.commit('showLoading', false)
  }
}
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh !important;
}
</style>
