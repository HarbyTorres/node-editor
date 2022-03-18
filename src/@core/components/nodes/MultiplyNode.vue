<template >
    <div>
        <div class="title-box">
            <i class="number"></i> Multiply
        </div>
        <div class="box">
            <input v-if="false" type="number" v-model="value1" df-num1>
            <input v-if="false" type="number" v-model="value2" df-num2>
            <input v-if="true" disabled="true" df-num type="number" v-model="value3">
            <p v-if="value1 || value2 ">{{value1}}*{{value2}}</p>
            <p v-if="result">{{result}}</p>
        </div>
    </div>
</template>
<script>
  
export default {
  data() {
    return {
        value1: null,
        value2: null
    }
  },
  props:[
  ],
  computed: {
      result(){
          return this.value1 * this.value2
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>