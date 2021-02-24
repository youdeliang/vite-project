<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  import { demoStore } from '/@/store/modules/demo'
  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        required: true
      }
    },
    setup: () => {
      demoStore.addCounter(1)
      console.log('demoStore.c :>> ', demoStore.counter)
      const count = ref(0)
      return { count }
    }
  })
</script>

<style scoped lang="less">
  a {
    color: yellowgreen;
  }
</style>
