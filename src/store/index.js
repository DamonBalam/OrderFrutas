import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        frutas: [
            { id: 1, nombre: 'Manzana', cantidad: 0 },
            { id: 2, nombre: 'Pera', cantidad: 0 },
            { id: 3, nombre: 'Fresa', cantidad: 0 },
            { id: 4, nombre: 'Uva', cantidad: 0 },
        ],
    },
    mutations: {
        SET_AUMENTAR(state, id) {
            let fruta = state.frutas.find((fruta) => fruta.id === id);
            fruta.cantidad += 1;
            
            state.frutas.sort((a, b) => b.cantidad - a.cantidad);
        },
        SET_REINICIAR(state){
          state.frutas.forEach(fruta =>  fruta.cantidad = 0);
        }
    },
    actions: {},
    modules: {},
});
