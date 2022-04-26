<template>
  <div>
    <b-navbar type="light" variant="light" fixed="bottom">
      <b-collapse is-nav>
        <b-navbar-nav>
          <b-nav-item
            as="nuxt-link"
            to="/contact"
            :class="{ 'item-active': $route.path === '/contact' }"
          >
            <div class="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <span class="link-title">Contact</span>
            </div>
          </b-nav-item>
          <b-nav-item
            as="nuxt-link"
            to="/skills"
            :class="{ 'item-active': $route.path === '/skills' }"
          >
            <div class="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <span class="link-title">Skills</span>
            </div>
          </b-nav-item>
          <b-nav-item
            as="nuxt-link"
            to="/"
            :class="{ 'item-active': $route.path === '/' }"
          >
            <div class="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="link-title">Tentang saya</span>
            </div>
          </b-nav-item>
          <b-nav-item
            as="nuxt-link"
            to="/project"
            :class="{ 'item-active': $route.path === '/project' }"
          >
            <div class="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <span class="link-title">Project</span>
            </div>
          </b-nav-item>
          <b-nav-item
            as="nuxt-link"
            to="/achievement"
            :class="{ 'item-active': $route.path === '/achievement' }"
          >
            <div class="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M11 20v-2.08a6 6 0 0 1-4.24-3A4.02 4.02 0 0 1 2 11V6c0-1.1.9-2 2-2h2c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v5a4 4 0 0 1-4.76 3.93A6 6 0 0 1 13 17.92V20h4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h4zm6.92-7H18a2 2 0 0 0 2-2V6h-2v6c0 .34-.03.67-.08 1zM6.08 13A6.04 6.04 0 0 1 6 12V6H4v5a2 2 0 0 0 2.08 2zM8 4v8a4 4 0 1 0 8 0V4H8z"
                />
              </svg>
              <span class="link-title">Achievement</span>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'MyNavbar'
}
</script>

<style scoped>
.navbar-nav,
.navbar-nav.mr-auto {
  flex: 1;
  margin: auto !important;
  display: flex;
  justify-content: space-around;
}

.nav-item {
  font-family: "Outfit", sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
}

.nav-item svg {
  width: 1.5em !important;
  color: #0a192f !important;
}

.navbar.bg-light {
  background-color: #dfe6e9 !important;
}

.nav-item:not(:last-child) {
  margin-right: 15px;
}

@media only screen and (min-width: 1024px) {
  .navbar-nav,
  .navbar-nav.mr-auto {
    flex: 0 !important;
  }

  .nav-item:not(:last-child) {
    margin-right: 20px !important;
  }
}
</style>
