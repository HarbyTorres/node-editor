<template >
    <div>
        <div class="title-box">
            <i class="number"></i> Add
        </div>
        <div class="box">
            <input v-if="false  " df-num1 @change="cambio()" type="text" v-model="value1">
            <input v-if="false" df-num2 type="number" v-model="value2">
            <input v-if="true" disabled="true" df-num type="number" v-model="value3">
            <p v-if="value1 || value2 ">{{value1}} + {{value2}}</p>
            <p v-if="result">{{result}}</p>
        </div>
    </div>
</template>
<script>
  
export default {
  data() {
    return {
        value1: null,
        value2: null,
        value3: null
    }
  },
  props:[
      'num1',
      'num2'
  ],
  computed: {
    result(){
        return parseInt(this.value1) + parseInt(this.value2)
    }
  },
  mounted(){
  },
  methods: {
      cambio(){
          console.log("asd")
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>