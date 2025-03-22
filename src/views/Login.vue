<template>
    <div class="container-fluid">
        <img class="m-4" src="/src/assets/images/logo.png" alt="Logo" />
    </div>
    <div class="container min-vh-100 d-flex align-items-center">
        <div class="row w-100 justify-content-between align-items-center g-2">
            <div class="col-sm-12 col-lg-3">
                <div class="login">
                    <h2>Bem-vindo de Volta</h2>
                    <p>Insira sua credenciais para acessar a plataforma</p>
                    <form @submit.prevent="login">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" v-model="email" required />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" v-model="password" required />
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </div>
            <div class="col-sm-12 col-lg-9 d-flex justify-content-end">
                <img src="/src/assets/images/img-dash.png" alt="Imagem ilustrativa" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login() {
            if (this.email && this.password) {

                this.$router.push('/dashboard');
            } else {
                alert('Por favor, preencha o email e a senha');
            }
        }
    }
}
</script>
