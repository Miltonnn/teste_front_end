<script setup>
import { ref, onMounted } from "vue";
import AdminLayout from "@/layouts/AdminLayout.vue";

// Estado do modal
const showModal = ref(false);
const isEditing = ref(false);
const editIndex = ref(null);
const profiles = ref([]);

// Novo perfil temporário
const newProfile = ref({
    name: "",
    email: "",
    role: "",
});

onMounted(() => {
    const savedProfiles = localStorage.getItem("profiles");
    if (savedProfiles) {
        profiles.value = JSON.parse(savedProfiles);
    }
});

const openModal = () => {
    showModal.value = true;
    isEditing.value = false;
    newProfile.value = { name: "", email: "", role: "" };
};

const closeModal = () => {
    showModal.value = false;
};


const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
};

const saveProfile = () => {
    if (!newProfile.value.name || !newProfile.value.email || !newProfile.value.role) {
        alert("Preencha todos os campos!");
        return;
    }

    if (!isEmailValid(newProfile.value.email)) {
        alert("Por favor, insira um email válido!");
        return;
    }

    if (isEditing.value) {
        profiles.value[editIndex.value] = { ...newProfile.value };
    } else {
        profiles.value.push({ ...newProfile.value });
    }

    localStorage.setItem("profiles", JSON.stringify(profiles.value));

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
    localStorage.setItem("profiles", JSON.stringify(profiles.value));
};
</script>

<template>
    <AdminLayout>
        <div class="container">
            <h1>Configurações</h1>
        </div>

        <div class="container mt-5 bg-white py-4">
            <div class="d-flex justify-content-between">
                <h2>Perfis</h2>
                <button class="btn btn-envia" @click="openModal">+</button>
            </div>

            <div class="row mt-3">
                <div v-if="profiles.length === 0" class="text-muted">Nenhum perfil cadastrado.</div>
                <div v-else class="col-12">
                    <div class="table-responsive">
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
                                        <button class="btn btn-success btn-sm"
                                            @click="editProfile(index)">Editar</button>
                                        <button class="btn btn-danger btn-sm"
                                            @click="deleteProfile(index)">Deletar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="showModal" class="modal-overlay">
            <div class="modal-content">
                <h3>{{ isEditing.value ? "Editar Usuário" : "Novo Usuário" }}</h3>
                <div class="form-group">
                    <label>Nome</label>
                    <input v-model="newProfile.name" type="text" class="form-control" />
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input v-model="newProfile.email" type="email" class="form-control" />
                </div>
                <div class="form-group">
                    <label>Perfil</label>
                    <div class="radio-group">
                        <label v-for="role in ['Admin', 'Desenvolvedor', 'Recursos Humanos']" :key="role"
                            class="radio-label">
                            {{ role }}
                            <input type="radio" v-model="newProfile.role" :value="role" />
                            <span class="custom-radio"></span>
                        </label>
                    </div>
                </div>

                <div class="d-flex justify-content-between mt-3 gap-2">
                    <button class="btn btn-secondary w-100" @click="closeModal">Voltar</button>
                    <button class="btn btn-success w-100" @click="saveProfile">{{ isEditing.value ? "Salvar Alterações"
                        : "Adicionar" }}</button>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 3rem 2rem;
    border-radius: 10px;
    max-width: 700px;
}

.radio-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
}

.radio-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    padding: 8px 12px;
    border-radius: 8px;
    background: #f8f9fa;
}

.radio-label input {
    display: none;
}

.custom-radio {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #333;
    display: inline-block;
    position: relative;
}

.radio-label input:checked+.custom-radio::after {
    content: "";
    width: 12px;
    height: 12px;
    background: #5452FC;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

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

.btn-envia {
    width: 2rem;
    height: 2rem;
    background-color: #3e3bfd;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.5rem;
    transition: .3s;
}

.btn-envia:hover {
    background-color: #3e3bfd;
    color: #fff;
}


</style>

