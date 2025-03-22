<script setup>
import { ref, onMounted } from 'vue';
import ProfileModal from '@/components/ProfileModal.vue';
import ProfileList from '@/components/ProfileList.vue';

// Estado do modal
const showModal = ref(false);
const isEditing = ref(false);
const editIndex = ref(null);
const profiles = ref([]);

// Novo perfil temporário
const newProfile = ref({
  name: '',
  email: '',
  role: '',
});

// Carregar os perfis do localStorage ao montar o componente
onMounted(() => {
  const savedProfiles = localStorage.getItem('profiles');
  if (savedProfiles) {
    profiles.value = JSON.parse(savedProfiles);
  }
});

// Função para abrir o modal
const openModal = () => {
  showModal.value = true;
  isEditing.value = false;
  newProfile.value = { name: '', email: '', role: '' }; // Limpa os campos
};

// Função para fechar o modal
const closeModal = () => {
  showModal.value = false;
};

// Função para salvar ou editar o perfil
const saveProfile = () => {
  if (!newProfile.value.name || !newProfile.value.email || !newProfile.value.role) {
    alert('Preencha todos os campos!');
    return;
  }

  // Se estamos editando, atualiza o perfil
  if (isEditing.value) {
    profiles.value[editIndex.value] = { ...newProfile.value };
  } else {
    // Caso contrário, adiciona um novo perfil
    profiles.value.push({ ...newProfile.value });
  }

  // Salva os perfis no localStorage
  localStorage.setItem('profiles', JSON.stringify(profiles.value));

  closeModal();
};

// Função para editar um perfil
const editProfile = (index) => {
  isEditing.value = true;
  editIndex.value = index;
  newProfile.value = { ...profiles.value[index] };
  showModal.value = true;
};

// Função para deletar um perfil
const deleteProfile = (index) => {
  profiles.value.splice(index, 1);
  localStorage.setItem('profiles', JSON.stringify(profiles.value));
};
</script>

<template>
  <div class="container mt-5 bg-white py-4">
    <div class="d-flex justify-content-between">
      <h2>Perfis</h2>
      <button class="btn btn-envia" @click="openModal">+</button>
    </div>

    <!-- Lista de Perfis -->
    <ProfileList
      :profiles="profiles"
      @edit="editProfile"
      @delete="deleteProfile"
    />

    <!-- Modal -->
    <ProfileModal
      :showModal="showModal"
      :isEditing="isEditing"
      :newProfile="newProfile"
      @close="closeModal"
      @save="saveProfile"
    />
  </div>
</template>

<style scoped>
/* Adicione aqui os estilos do seu componente principal */
</style>
