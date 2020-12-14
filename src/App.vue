<!--
 * @Author: PT
 * @Date: 2020-05-31 20:46:45
 * @LastEditors: PT
 * @LastEditTime: 2020-12-14 08:52:20
 * @Description: 入口模版
--> 
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'APP'
}
</script>
<style lang="scss">
#app {
  height: 100%;
}
</style>