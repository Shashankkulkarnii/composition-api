<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div :style="{color:store.state.color}" class="counter">
      {{store.state.counter}}
    </div>
    <div class="squar_counter">
      {{store.state.counter}}<sup>2</sup> = {{store.getters.counterSquare()}}
    </div>
    <div class="btns">
      <button class="btn" @click="store.methods.decreaseCounter" >-</button>
      <button class="btn" @click="store.methods.increaseCounter" >+</button>
    </div>
    <div class="input">
      <input type="text" placeholder="Enter color"
       v-model="color"
       name="" id="">
    </div>
  </div>
</template>

<script>
import { inject, computed} from 'vue'

export default {
  name:'Home', 
  setup(){
    let store = inject('store');
    
    const color = computed({
      get(){
        return store.state.color
      } ,
      set(val){
        store.methods.setcolor(val)
      }
    })
    return{
      store,
      color
    }
    
  }
  
}
</script>
<style>
.counter{
  font-size: 80px;
}
.btns{
  margin-top: 20px;
}
.btn{
  font-size: 30px;
  margin: 0 10px;
  padding: 10px 40px;
}
</style>
