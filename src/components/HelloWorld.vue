<template>
  <div class="hello">
    <h1>{{ modelValue }}</h1>
    <input :value="modelValue" @input="changeMsg">
    <h1>{{ custome }}</h1>
    <input :value="custome" @input="changeCustome">
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
interface Resturant {
  address: string;
  jugement: string;
  level: number;
}
export default defineComponent({
  name: 'HelloWorld',
  props: {
    modelValue: { type: String },
    custome: { type: String },
    resturant: {
      type: Object as PropType<Resturant>
    }
  },
  methods: {
    changeMsg (e: { target: HTMLInputElement }): void{
      this.$emit('update:modelValue', e.target.value)
    },
    changeCustome (e: Event & { target: HTMLInputElement }): void {
      this.$emit('update:custome', e.target.value)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
