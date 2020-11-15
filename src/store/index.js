import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas: [],
    tarea: {
        id: String,
        nombre: "",
        categorias: [],
        estado: "",
        numero: 0,
    },
  },
  mutations: {
    cargar(state, payload){
      state.tareas = payload
    },
    set(state, payload){
      state.tareas.push(payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas) )
      // console.log(state.tareas)
    },
    delete(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas) )
      // console.log(state.tarea)
    },
    tarea(state, payload){
      if(!state.tareas.find(tarea => tarea.id === payload )) {
        router.push('/')
        return
      }
      // tarea =  item | tareas = array declarado en el state
      state.tarea = state.tareas.find(tarea => tarea.id === payload )
    },
    // El payload es el objeto modificado
    update(state, payload) {
      state.tareas = state.tareas.map( item => item.id === payload.id ? payload : item)
      router.push('/')
      localStorage.setItem('tareas', JSON.stringify(state.tareas) )
    }
  },
  
  actions: {
    cargarLocalStorage({ commit }){
      // tareas es el array declarao en state
      if(localStorage.getItem('tareas')){
        const tareas = JSON.parse(localStorage.getItem('tareas'))
        commit('cargar', tareas)
        return
      }
      localStorage.setItem('tareas', JSON.stringify([]))
    },
    setTareas({commit}, tarea) {
      commit('set', tarea)
    },
    setTarea({commit}, id) {
      commit('tarea', id)
    },
    deleteTareas({commit}, id){
      commit('delete', id)
    },
    updateTarea({commit}, tarea){
      commit('update', tarea)
    }
  },
  modules: {
  }
})
