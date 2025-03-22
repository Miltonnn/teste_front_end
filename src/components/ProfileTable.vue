<script setup>
import { defineProps, emit } from "vue";

// Props recebendo a lista de perfis e a função de editar e deletar
const { profiles } = defineProps({
  profiles: {
    type: Array,
    required: true,
  }
});

// Emitir evento para editar ou deletar perfil
const editProfile = (index) => {
  emit("edit-profile", index);
};

const deleteProfile = (index) => {
  emit("delete-profile", index);
};
</script>

<template>
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
        <tr v-for="(profile, index) in profiles" :key="index">
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

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 8px 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.table .btn {
  margin-right: 5px;
}
</style>
