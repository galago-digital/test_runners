<template>
  <div id="app" class="container-fluid">
    <Form/>
    <Table/>
  </div>
</template>

<script>
import Form from './components/Form/index'
import Table from './components/Table/index'

export default {
  name: 'App',
  components: {
    Form, Table
  }
}
</script>

<style lang="scss">
</style>
