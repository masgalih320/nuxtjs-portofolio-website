<template>
  <div :class="{ onload: $store.state.loading }">
    <Navbar />
    <div class="min-vh-100 d-flex justify-content-center align-items-center">
      <div class="d-block container">
        <div class="card">
          <div class="card-body">
            <h5 class="page-title mb-3">
              Hubungi Saya
            </h5>
            <div class="container">
              <div class="row">
                <div v-for="data in getContact" :key="data.name" class="col-lg-3">
                  <a :href="data.url" target="_blank">
                    <div class="card mb-3 launchv2">
                      <div class="card-body d-flex justify-content-center align-items-center">
                        <i :class="data.icon" />
                        <span class="cn">{{ data.name }}</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyContact',
  head: {
    title: 'Hubungi Saya - Galih Sukristyan Saputra'
  },
  computed: {
    getContact () {
      return [
        { name: 'Instagram', url: 'https://instagram.com/galihsptr320', icon: 'fab fa-instagram' },
        { name: 'Facebook', url: 'https://facebook.com/galihsptr.id', icon: 'fab fa-facebook' },
        { name: 'Twitter', url: 'https://twitter.com/galihsptr320', icon: 'fab fa-twitter' },
        { name: 'GitHub', url: 'https://github.com/masgalih320', icon: 'fab fa-github' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/galihsptr320', icon: 'fab fa-linkedin' },
        { name: 'Email', url: 'mailto:halo@galihsptr.id', icon: 'fa fa-envelope' },
        { name: 'Telegram', url: 'https://t.me/masgalih320', icon: 'fab fa-telegram' },
        { name: 'Line', url: 'https://line.me/R/ti/p/galihsptr320', icon: 'fab fa-line' }
      ]
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none !important;
  color: #000 !important;
}

i {
  margin-right: 5px !important;
}

.cn {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 16px;
}

.launchv2:hover {
  background-color: #dcdde1 !important;
}
</style>
