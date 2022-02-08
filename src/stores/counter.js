import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
    test:0
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
    doubleCount(state){
      return state.counter*2
    }
  },
  actions: {
    increment() {
     setTimeout(()=>{
      this.counter++
     },1000)
    }
  }
})

export const usePatch = defineStore({
  id:'patch',
  state:()=>{
    return{
      number:10
    }
  }
})