<template>
    <div id="app" class="container">
        <Cabecera />
        <Lista />
        <button class="btn btn-danger mt-4 btn-block" @click.prevent="SET_REINICIAR">Reiniciar</button>
    </div>
</template>

<script>
    import Cabecera from './components/Cabecera.vue';
    import Lista from './components/Lista.vue';
    import { mapMutations } from 'vuex';
    export default {
        name: 'App',
        components: {
            Cabecera,
            Lista,
        },
        methods: {
          ...mapMutations(['SET_REINICIAR'])
        },
    };
</script>

<style></style>
