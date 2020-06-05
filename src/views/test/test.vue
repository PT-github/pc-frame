<!--
 * @Author: PT
 * @Date: 2020-06-04 10:04:33
 * @LastEditors: PT
 * @LastEditTime: 2020-06-05 09:57:56
 * @Description: 测试文件
--> 
<template>
  <div class="test">
    <h1>test</h1>
    <el-button type="primary">按钮</el-button>
    <h2 class="h2">h2标签</h2>
  </div>
</template>

<script>
  export default {
    name:'Test',
    data () {
      return {}
    },

    components: {},

    computed: {},

    mounted () {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
.test {
  border: 1px solid red;
  color: $color;
}
</style>
<style lang='less' scoped>
.test {
  .h2 {
    color: @color;
  }
}
</style>