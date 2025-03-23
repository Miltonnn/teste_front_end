<template>
  <div class="d-flex min-vh-100">
    <aside v-if="showSidebar" :class="{ 'sidebar-toggle': true, 'collapsed': isSidebarCollapsed }" id="sidebar"
      class="bg-white">
      <div class="sidebar-logo">
        <router-link to="/dashboard">
          <img class="m-2" src="/src/assets/images/logo.png" alt="Logo" />
        </router-link>
      </div>
      <ul class="sidebar-nav p-0">
        <h2 class="sidebar-tile fs-4 text-black">
          Painel de dados
        </h2>
        <li class="sidebar-item">
          <router-link to="/dashboard" class="sidebar-link text-dark">
            <i class="fa-solid fa-ethernet"></i> Dashboard
          </router-link>
        </li>

      </ul>
      <div class="sidebar-footer">
        <router-link to="/configuracoes" class="sidebar-link text-dark">
          <i class="fa-solid fa-gear"></i> Configurações
        </router-link>
        <router-link to="/" class="sidebar-link text-dark">
          <i class="fa-solid fa-share-from-square"></i> Sair
        </router-link>
      </div>
    </aside>


    <div class="main flex-grow-1 d-flex flex-column">
      <nav v-if="showSidebar" class="navbar navbar-expand">
        <button @click="toggleSidebar" class="toggler-btn" type="button">
          <i class="fa-solid fa-bars"></i>
        </button>
      </nav>

      <div :class="{ 'main-content': showSidebar, 'w-100 h-100': !showSidebar }" class="bg-light flex-grow-1">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarCollapsed: false
    };
  },
  computed: {
    showSidebar() {
      return this.$route.path === '/dashboard' || this.$route.path === '/configuracoes';
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
  }
};
</script>
<style scoped>
li {
  list-style: none;
}

a {
  text-decoration: none;
}

#sidebar {
  max-width: 264px;
  min-width: 264px;
  transition: all 0.35s ease-in-out;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #000;
}

#sidebar.collapsed {
  margin-left: -264px;
}

.toggler-btn {
  background-color: transparent;
  cursor: pointer;
  border: 0;
}

.toggler-btn i {
  font-size: 1.75rem;
  color: #000;
  font-weight: 1000;
}

.navbar {
  padding: 1.15rem 1.5rem;
}

.sidebar-nav {
  flex: 1 1 auto;
}

.sidebar-logo {
  padding: 1.15rem 1.5rem;
  text-align: center;
}

.sidebar-logo a {
  color: #FFF;
  font-weight: 800;
  font-size: 1.5rem;
}

.sidebar-tile {
  font-size: .75rem;
  padding: 1.5rem 1.5rem .375rem;
}

a.sidebar-link {
  padding: .625rem 1.625rem;
  color: #FFF;
  position: relative;
  transition: all 0.35s;
  display: block;
  font-size: 1rem;
}

a.sidebar-link:hover {
  background-color: #5452FC;
  color: #fff !important;
}


.sidebar-link[data-bs-toggle="collapse"]::after {
  border: solid;
  border-width: 0 .075rem .075rem 0;
  content: "";
  display: inline-block;
  padding: 2px;
  position: absolute;
  right: 1.5rem;
  top: 1.4rem;
  transform: rotate(-135deg);
  transition: all .2s ease-out;
}

.sidebar-link[data-bs-toggle="collapse"].collapsed::after {
  transform: rotate(45deg);
  transition: all .2s ease-out;
}


@media (max-width:768px) {

  .sidebar-toggle {
    margin-left: -264px;
  }

  #sidebar.collapsed {
    margin-left: 0;
  }
}
</style>