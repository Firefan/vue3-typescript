<template>
  <div class="com-wrapper-todoList">
    <div class="body">
      <div class="input-area">
        <a-input
          placeholder="请输入待办的事项"
          size="small"
          v-model:value="newTodo"
          @pressEnter="setTodo"
        />
        <a-button @click="setTodo" type="primary">确定</a-button>
      </div>
      <a-table :columns="columns" :data-source="tableData" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'
import { ITodoItem, ITEM_STATUS } from '@/types/todoList'
import { useStore, createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('todoList')
const columns = [
  {
    title: '日期',
    dataIndex: 'time',
    key: 'time'
  },
  {
    title: '事项',
    dataIndex: 'content',
    key: 'content'
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status'
  }
]

export default defineComponent({
  name: '',
  components: {},
  data() {
    return {}
  },
  setup(props, ctx) {
    const newTodo = ref<string>('')
    const store = useStore()
    const { getTodoList } = mapGetters(['getTodoList'])
    let { SET_TOOD: addTodo } = mapActions(['SET_TOOD'])
    addTodo = addTodo.bind({ $store: store })
    const tableData = computed(getTodoList.bind({ $store: store }))
    /** 以下写法会报错，在vuex的源码中，会用到this.$store（具体详见源码）而在setup中this不是该活跃实例的引用，this.$store报错 */
    // const tableData = computed(getters.getTodoList)

    const setTodo = (e: KeyboardEvent | MouseEvent) => {
      // 按回车键后，将数据存入data里
      if (newTodo.value) {
        const newItem = {
          id: tableData.value.length + 1,
          key: tableData.value.length + 1,
          time: '2020-12-3',
          content: newTodo.value,
          status: ITEM_STATUS.WILLDO
        }
        addTodo(newItem)
        newTodo.value = ''
      }
    }
    return {
      newTodo,
      columns,
      setTodo,
      tableData
    }
  },
  methods: {}
})
</script>

<style lang='scss' scoped>
.com-wrapper-todoList {
  padding: 20px;
  background: #f4f5f5;
  .body {
    padding: 20px;
    background: #fff;
    .input-area {
      margin-bottom: 20px;
      display: flex;
      width: 20%;
      button {
        margin-left: 20px;
      }
    }
  }
}
</style>
