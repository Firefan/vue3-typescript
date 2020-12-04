<template>
  <div class="console-page-wrapper">
    <div class="top-header">我是顶部导航栏</div>
    <div class="middle-body">
      <div class="left-menu">我是菜单栏</div>
      <div class="right-content">
        <h1>我是控制台</h1>
        <todo-lists/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoLists from './components/todoLists'
export default {
  name: '',
  components: {
    TodoLists
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.console-page-wrapper{
  .top-header{
    height: 50px;
    background: #1c2430;
  }
  .middle-body{
    height: calc(100vh - 50px);
    width: 100%;
    display: flex;
    .left-menu{
      width: 100px;
      height: 100%;
      background: #555;
    }
    .right-content{
      width: calc(100% - 100px);
      height: 100%;
    }
  }
}
</style>
