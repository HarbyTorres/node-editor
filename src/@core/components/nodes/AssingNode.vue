<template >
    <div>
        <div class="title-box">
            <i class="number"></i> Assing
        </div>
        <div class="box">
            <input v-if="true" disabled="true" type="number" v-model="value" df-num >
            <p v-if="value">{{value}}</p>
        </div>
    </div>
</template>
<script>
  
export default {
  data() {
    return {
        value: null
    }
  },
  props:[
  ],
  computed: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>