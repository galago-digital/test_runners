export default {
  name: 'Table',
  props: {
    users: Array
  },
  data () {
    return {
      userList: []
    }
  },
  watch: {
    users (val) {
      this.userList = val
    }
  },
  computed: {
  },
  methods: {
    sortByPayment (decrease = false) {
      if (decrease) {
        this.userList = this.userList.sort((d1, d2) => (d1.payment < d2.payment) ? 1 : -1)
      } else {
        this.userList = this.userList.sort((d1, d2) => (d1.payment > d2.payment) ? 1 : -1)
      }
    },
    sortByDate (decrease = false) {
      if (decrease) {
        this.userList = this.userList.sort((d1, d2) => new Date(d2.date.split('.').reverse().join('/')) - new Date(d1.date.split('.').reverse().join('/')))
      } else {
        this.userList = this.userList.sort((d1, d2) => new Date(d1.date.split('.').reverse().join('/')) - new Date(d2.date.split('.').reverse().join('/')))
      }
    },
    sortByDistance (decrease = false) {
      if (decrease) {
        this.userList = this.userList.sort((d1, d2) => d2.distance - d1.distance)
      } else {
        this.userList = this.userList.sort((d1, d2) => d1.distance - d2.distance)
      }
    }
  }
}
