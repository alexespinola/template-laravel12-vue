<template>
    <div class="content-container">
        <div class="p-6">
            <!-- Título de página opcional -->
            <h1 v-if="title" class="page-title">{{ title }}</h1>

            <!-- Slot para contenido personalizado -->
            <slot />
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: false
    }
});
</script>