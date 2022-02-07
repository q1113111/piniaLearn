<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ counter }}</h1>
    <h1>{{ test }}</h1>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import {useCounterStore} from '@/stores/counter'
const counterStore = useCounterStore()
const {counter,test} = storeToRefs(counterStore)
const {increment} = counterStore
increment()
setInterval(()=>{
  counterStore.$patch({
    test:test.value+1
  })
},1000)
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
