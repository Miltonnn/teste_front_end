<script>
import AdminLayout from "@/layouts/AdminLayout.vue";

export default {
    components: {
        AdminLayout,
    },
};
</script>

<template>
    <AdminLayout>
        <div class="container">
            <h1>Estatisticas</h1>
            <div class="row g-2 mt-4">
                <div class="col-sm-12 col-lg-4">
                    <div class="bg-white rounded-3 p-5 w-100">
                        <h3 class="text-dark">Downloads</h3>
                        <p class="text-dark">330</p>
                        <div class="content d-flex align-items-center gap-5">
                            <span class="text-dark">240</span>
                            <span class="text-dark">90</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                    <div class="bg-white rounded-3 p-5 w-100">
                        <h3 class="text-dark">Avaliações</h3>
                        <p class="text-dark">330</p>
                        <div class="content d-flex align-items-center gap-5">
                            <span class="text-dark">240</span>
                            <span class="text-dark">90</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                    <div class="bg-white rounded-3 p-5 w-100">
                        <h3 class="text-dark">Erros</h3>
                        <p class="text-dark">330</p>
                        <div class="content d-flex align-items-center gap-5">
                            <span class="text-dark">240</span>
                            <span class="text-dark">90</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
