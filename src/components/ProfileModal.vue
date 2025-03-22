<script setup>
const props = defineProps({
    showModal: Boolean,
    isEditing: Boolean,
    newProfile: Object,
});

const emit = defineEmits(['close', 'save']);

const closeModal = () => {
    emit('close');
};

const saveProfile = () => {
    emit('save');
};
</script>

<template>
    <div v-if="props.showModal" class="modal-overlay">
        <div class="modal-content">
            <h3>{{ props.isEditing ? 'Editar Usuário' : 'Novo Usuário' }}</h3>
            <div class="form-group">
                <label>Nome</label>
                <input v-model="props.newProfile.name" type="text" class="form-control" />
            </div>
            <div class="form-group">
                <label>Email</label>
                <input v-model="props.newProfile.email" type="email" class="form-control" />
            </div>
            <div class="form-group">
                <label>Perfil</label>
                <div class="radio-group">
                    <label v-for="role in ['Admin', 'Desenvolvedor', 'Recursos Humanos']" :key="role"
                        class="radio-label">
                        {{ role }}
                        <input type="radio" v-model="props.newProfile.role" :value="role" />
                        <span class="custom-radio"></span>
                    </label>
                </div>
            </div>

            <div class="d-flex justify-content-between mt-3 gap-2">
                <button class="btn btn-secondary w-100" @click="closeModal">Voltar</button>
                <button class="btn btn-success w-100" @click="saveProfile">
                    {{ props.isEditing ? 'Salvar Alterações' : 'Adicionar' }}
                </button>
            </div>
        </div>
    </div>
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
    background: #5452fc;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
