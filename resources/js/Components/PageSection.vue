<template>
    <div class="mb-6">
        <h2 v-if="title" class="section-title">{{ title }}</h2>
        <slot></slot>
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