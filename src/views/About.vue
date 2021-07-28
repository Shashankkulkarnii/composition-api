<template>
  <div class="about">
    <h1>We useing Counter also in this page</h1>
    <h1>{{store.state.counter}}</h1>
  </div>
</template>
<script>
import { inject } from 'vue';
export default {
  setup() {
    let store = inject('store')

    return{
      store
    }
  },
}
</script>