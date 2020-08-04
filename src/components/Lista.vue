<template>
    <div>
        <ul class="list-group">
            <li v-for="(fruta) in frutas" :key="fruta.id" class="list-group-item d-flex justify-content-between align-items-center" @click.prevent="SET_AUMENTAR(fruta.id)">
                {{ fruta.nombre }}
                <span class="badge badge-primary badge-pill">{{ fruta.cantidad }}</span>
            </li>
            
        </ul>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';
    export default {
        name: 'Lista',
        computed: {
            ...mapState(['frutas']),
        },
        methods: {
            ...mapMutations(['SET_AUMENTAR'])
        },
    };
</script>

<style></style>
