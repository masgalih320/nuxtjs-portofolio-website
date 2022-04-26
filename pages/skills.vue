<template>
  <div :class="{ onload: $store.state.loading }">
    <Navbar />
    <div class="min-vh-100 d-flex justify-content-center align-items-center">
      <div class="d-block container">
        <div class="card">
          <div class="card-body">
            <h5 class="page-title mb-3">
              Skills
            </h5>
            <div class="container">
              <div class="row">
                <div v-for="data in getContact" :key="data.name" class="col">
                  <div class="card mb-3">
                    <div class="card-body text-center">
                      <i :class="data.icon" />
                    </div>
                  </div>
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
  name: 'MySkills',
  head: {
    title: 'Skills - Galih Sukristyan Saputra'
  },
  computed: {
    getContact () {
      return [
        { icon: 'devicon-php-plain colored' },
        { icon: 'devicon-html5-plain-wordmark colored' },
        { icon: 'devicon-css3-plain colored' },
        { icon: 'devicon-javascript-plain colored' },
        { icon: 'devicon-mysql-plain-wordmark colored' },
        { icon: 'devicon-postgresql-plain-wordmark colored' },
        { icon: 'devicon-mongodb-plain-wordmark colored' },
        { icon: 'devicon-flutter-plain colored' },
        { icon: 'devicon-dart-plain-wordmark colored' },
        { icon: 'devicon-vuejs-plain-wordmark colored' },
        { icon: 'devicon-nodejs-plain-wordmark colored' },
        { icon: 'devicon-nuxtjs-plain-wordmark' },
        { icon: 'devicon-react-original-wordmark colored' },
        { icon: 'devicon-nextjs-original-wordmark colored' },
        { icon: 'devicon-python-plain-wordmark colored' },
        { icon: 'devicon-java-plain-wordmark colored' },
        { icon: 'devicon-kotlin-plain-wordmark colored' },
        { icon: 'devicon-wordpress-plain-wordmark colored' },
        { icon: 'devicon-codeigniter-plain-wordmark colored' },
        { icon: 'devicon-laravel-plain-wordmark colored' },
        { icon: 'devicon-express-original-wordmark colored' }
      ]
    }
  }
}
</script>

<style scoped>
i {
  font-size: 57px;
}

.cn {
  margin-top: 5px !important;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 16px;
}
</style>
