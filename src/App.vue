<template>
  <div id="app" class="container-fluid">
    <Form @add="add"/>
    <Table :users="users"/>
  </div>
</template>

<script>
import Form from './components/Form/index'
import Table from './components/Table/index'

export default {
  name: 'App',
  components: {
    Form, Table
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    add (user) {
      this.users = [...this.users, user]
    }
  },
  mounted () {
    const data = require('./users.json')
    this.users = data.users
  }
}
</script>

<style lang="scss">
</style>
