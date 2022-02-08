<template>
  <div class="about">
    <div>
      <h1>This is an about page</h1>
      <h1>{{ counter }}</h1>
      <h1>{{ test }}</h1>
      <h1>{{ doubleCount }}</h1>
    </div>
    <div>
      <h1>{{ number }}</h1>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import {useCounterStore,usePatch} from '@/stores/counter'
const counterStore = useCounterStore()
const {counter,test,doubleCount} = storeToRefs(counterStore)
const {increment} = counterStore
increment()
setTimeout(()=>{
  counterStore.$patch({
    test:test.value+1
  })
},1000)
setTimeout(()=>{
  counterStore.$reset()
},4000)

counterStore.$subscribe((mutation,state)=>{
  console.log(mutation,state)
},{detached:true})

const patch = usePatch()
const {number} = storeToRefs(patch)
patch.$patch((state)=>{
  state.number++
})
patch.$state = {age:10,name:'Sam'}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
