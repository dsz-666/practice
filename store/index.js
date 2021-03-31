import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import vuexPersist from "vuex-persist";
export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    add(state,i){
      state.list = i
    },
    up(state){
   state.list.sort((a,b)=>{
     return b.id-a.id
   })
    },
    xia(state){
      state.list.sort((a,b)=>{
        return a.id-b.id
      })
    },
    ups(state){
   state.list.sort((a,b)=>{
     return b.price-a.price
   })
    },
    xias(state){
      state.list.sort((a,b)=>{
        return a.price-b.price
      })
    },
    sou(state,i){
     state.list = state.list.filter(item=>{
       return item.goods_name.includes(i)
     })
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    new vuexPersist({
      storage: window.localStorage,
    }).plugin,
  ],
})
