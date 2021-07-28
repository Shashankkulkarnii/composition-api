import { reactive , readonly } from 'vue'
const state =reactive({
    counter: 0,
    color: "red"
})
const methods={
    decreaseCounter : function(){
        console.log("decrease method running");
        state.counter --;
      },
      increaseCounter : function(){
        console.log("increase method running");
        state.counter ++;
      },
      setcolor(val){
          state.color = val
      }

}

const getters = {
    counterSquare(){
        return state.counter * state.counter
    }
}
export default{
    state:readonly(state),
    methods,
    getters
}