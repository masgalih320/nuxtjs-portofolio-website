<template>
  <div :class="{ 'onload': $store.state.loading }">
    <Navbar />
    <div class="min-vh-100 d-flex justify-content-center align-items-center">
      <div class="text-center">
        <img src="3.jpg" class="me">
        <h3 class="myName mt-4">
          Galih Sukristyan Saputra
        </h3>
        <span class="tagline"><span class="text-success">Web</span> Developer</span>

        <div class="links">
          <a href="https://github.com/masgalih320" target="_blank" class="launcher"><i class="fab fa-github fa-2x" /></a>
          <a href="https://instagram.com/galihsptr320" target="_blank" class="launcher"><i class="fab fa-instagram fa-2x" /></a>
          <a href="https://facebook.com/galihsptr.id" target="_blank" class="launcher"><i class="fab fa-facebook fa-2x" /></a>
          <a href="https://linkedin.com/in/galihsptr320" target="_blank" class="launcher"><i class="fab fa-linkedin fa-2x" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyIndex'
}
</script>

<style scoped>
a {
  text-decoration: none !important;
  color: #000 !important;
}

.me {
  border-radius: 50% !important;
  filter: drop-shadow(0 10px 30px #ccc);
  width: 16rem;
}

.myName {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 36px;
  color: #0a192f !important;
}

.tagline {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serife;
  font-weight: 400;
  font-size: 20px;
  color: #0a192f !important;
}

.min-vh-100 {
  min-height: 92vh !important;
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
}

.links a:not(:last-child) {
  margin-right: 20px;
}

.links a:hover {
  transform: translateY(-2px);
}

@media only screen and (min-width: 275px) {
  .me {
    width: 10rem !important;
  }

  .myName {
    font-size: 22px !important;
  }
}

@media only screen and (min-width: 375px) {
  .me {
    width: 12rem !important;
  }

  .myName {
    font-size: 32px !important;
  }
}
</style>
