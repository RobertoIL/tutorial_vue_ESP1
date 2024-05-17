<template>
    <div class="container">
        <h1 class="text-center">Bienvenidos al curso de Vue</h1>
        <RouterLink to="padre">
            <button class="btn btn-primary">Tutorial 2</button>
        </RouterLink>
    </div>
</template>

<style scoped>
    h1 {
    color: #3498db;
    }

</style>
<script setup>
import { RouterLink } from 'vue-router';
</script>