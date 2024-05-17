<template>
    <div class="card mt-3">
        <div class="card-body">
            <h5 class="card-tittle">Componente Hijo</h5>
            <p class="card-text">{{ mensaje }}</p>
            <button class="btn btn-success" v-on:click="emitirEvento">Cambiar mensaje</button>
            <p v-show="mensajeCambiado">El mensaje ha sido cambiado</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Hijo',
        props: ['mensaje'],

        data() {
            return {
                mensajeCambiado: false
            }
        },
        method: {
            emitirEvento(){
                this.mensajeCambiado = true;
                this.$emit('actualizarMensaje', 'Nuevo mensaje desde el Hijo');
            }
        }
    }   
</script>