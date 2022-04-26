<template>
  <div :class="{ onload: $store.state.loading }">
    <Navbar />
    <div class="min-vh-100 d-flex justify-content-center align-items-center">
      <div class="d-block container">
        <div class="card">
          <div class="card-body">
            <h5 class="page-title mb-3">
              Project
            </h5>
            <div class="container">
              <div class="row">
                <div
                  v-for="data in getContact"
                  :key="data.name"
                  class="col-lg-6"
                >
                  <a :href="data.url" target="_blank">
                    <div class="card mb-3 launchv2">
                      <div class="card-body">
                        <h5 class="project-title">
                          {{ data.name }}
                        </h5>
                        <span class="project-description">
                          {{ data.description }}
                        </span>
                        <div class="type">
                          Type: <span class="badge badge-primary">{{ data.type }}</span><br>
                          Tech Stack: <span v-for="mylang in data.lang" :key="mylang" class="badge badge-success mr-1">{{ mylang }}</span>
                        </div>
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
  name: 'MyProject',
  head: {
    title: 'Project - Galih Sukristyan Saputra'
  },
  computed: {
    getContact () {
      return [
        {
          name: 'Instagram profile scrapper',
          url: 'https://github.com/masgalih320/ig-scrapper',
          description: 'Scrapping profile instagram menggunakan Python 3',
          type: 'Public Projects',
          lang: ['Python']
        },
        {
          name: 'Simple calculator',
          url: 'https://github.com/masgalih320/simple-calculator-html',
          description: 'Simple kalkulator menggunakan HTML, CSS, JS',
          type: 'Public Projects',
          lang: ['HTML', 'CSS', 'JS']
        },
        {
          name: 'Telegram channel message sender',
          url: 'https://github.com/masgalih320/telegram-auto-reminder-bot',
          description: 'Script kirim pesan ke channel telegram menggunakan script, dapat diintegrasikan menjadi BOT auto reminder',
          type: 'Public Projects',
          lang: ['PHP']
        },
        {
          name: 'Cek resi',
          url: '#',
          description: 'Aplikasi untuk melakukan cekresi ke berbagai ekspedisi di dalam maupun luar negeri',
          type: 'Private Projects',
          lang: ['PHP', 'HTML', 'CSS', 'JS']
        }
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

.project-title {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 20px;
}

.project-description {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 18px;
}

.type {
  margin-top: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 16px;
}

.launchv2:hover {
  background-color: #dcdde1 !important;
}
</style>
