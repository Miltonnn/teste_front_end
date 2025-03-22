<script setup>
import { defineProps, defineEmits } from 'vue';

// Props
const props = defineProps({
  profiles: Array,
});

// Emite eventos para o componente pai
const emit = defineEmits(['edit', 'delete']);

// Função para editar o perfil
const editProfile = (index) => {
  emit('edit', index);
};

// Função para deletar o perfil
const deleteProfile = (index) => {
  emit('delete', index);
};
</script>

<template>
  <div v-if="props.profiles.length === 0" class="text-muted">
    Nenhum perfil cadastrado.
  </div>
  <div v-else class="col-12">
    <table class="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Perfil</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(profile, index) in props.profiles" :key="index">
          <td>{{ profile.name }}</td>
          <td>{{ profile.email }}</td>
          <td>{{ profile.role }}</td>
          <td>
            <button class="btn btn-success" @click="editProfile(index)">Editar</button>
            <button class="btn btn-danger" @click="deleteProfile(index)">Deletar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
