<template>
  <div class="d-flex min-vh-100">
    <div v-if="showSidebar" class="sidebar bg-white text-white p-3 min-vh-100">
      <div class="logo">
        <img class="m-4" src="/src/assets/images/logo.png" alt="Logo" />
      </div>
      <h3 class="text-uppercase text-dark fs-5">Painel de dados</h3>
      <ul class="nav flex-column d-flex">
        <li class="nav-item">
          <router-link to="/dashboard" class="nav-link text-dark">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/configuracoes" class="nav-link text-dark">Configurações</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link text-dark">Sair</router-link>
        </li>
      </ul>
    </div>

    <div :class="{ 'main-content': showSidebar, 'w-100': !showSidebar }" class="flex-grow-1 p-4 bg-light">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showSidebar() {
      return this.$route.path === '/dashboard' || this.$route.path === '/configuracoes';
    }
  }
};
</script>
