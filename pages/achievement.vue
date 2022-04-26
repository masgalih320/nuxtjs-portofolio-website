<template>
  <div :class="{ onload: $store.state.loading }">
    <Navbar />
    <div class="min-vh-100 d-flex justify-content-center align-items-center">
      <div class="d-block container">
        <div class="card">
          <div class="card-body">
            <h5 class="page-title">
              Achievement
            </h5>
            <ul>
              <li v-for="a in getAchievement.reverse()" :key="a">
                {{ a }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAchievement',
  head: {
    title: 'Achievement - Galih Sukristyan Saputra'
  },
  computed: {
    getAchievement () {
      return [
        'TOP 5 Web Technology - Virtual Skills Competition 2021',
        '1st Website Technology - Lomba Kompetensi Siswa SMK Tingkat Provinsi Kalimantan Selatan 2021',
        'Medallion Of Excellence Website Technology - Lomba Kompetensi Siswa SMK Tingkat Nasional 2021'
      ]
    }
  }
}
</script>

<style scoped>
li {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
}
</style>
