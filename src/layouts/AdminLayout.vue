<template>
    <div class="d-flex min-vh-100">
        <Sidebar v-if="showSidebar" />

        <div :class="{ 'main-content': showSidebar, 'w-100': !showSidebar }" class="flex-grow-1 p-4 bg-light">
            <slot /> 
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
    components: {
        Sidebar,
    },
    computed: {
        showSidebar() {
            return ["/dashboard", "/configuracoes"].includes(this.$route.path);
        },
    },
};
</script>


