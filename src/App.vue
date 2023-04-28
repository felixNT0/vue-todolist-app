<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper navbar_main_context">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid navbar_context">
          <img src="/favicon.ico" class="logo_image" />
          <RouterLink class="navbar-brand" to="/">VUE CRUD APP</RouterLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link active" aria-current="page" to="/"
                  >Home</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.navbar_main_context {
  margin-bottom: 25px !important;
}

.logo_image {
  margin-right: 15px !important;
}

.navba_context {
  padding-left: 30px !important;
  padding-right: 30px !important;
}
</style>
