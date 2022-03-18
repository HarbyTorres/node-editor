<template>
    <div>
        <div class="title-box">
            <i class="number"></i> Number
        </div>
            <div class="box">
            <p>number</p>
            <input type="number" v-model="num" df-num>
        </div>
    </div>
</template>

<script>
  
export default {
  data() {
    return {
        num:0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>