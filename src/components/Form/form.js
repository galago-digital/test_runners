import { mask } from 'vue-the-mask'

export default {
  name: 'Form',
  directives: { mask },
  data () {
    return {
      phone: '',
      name: '',
      date: '',
      email: '',
      payment: '',
      distance: 0,
      regPhone: /^(\+7)[\s\\-]\([0-9]{3}\)[\s][0-9]{3}[\\-][0-9]{2}[\\-][0-9]{2}$/,
      regEmail: /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  computed: {
    isEmailValid () {
      return (this.email === '') || (this.regEmail.test(this.email))
    },
    isPhoneValid () {
      return (this.phone === '') || (this.regPhone.test(this.phone))
    },
    isFormValid () {
      return (this.name && this.date && this.email && this.phone && this.isPhoneValid && this.isPhoneValid && this.payment && this.distance)
    }

  },
  methods: {
    add () {
      const user = {
        date: new Date(this.date).toLocaleString('ru', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }),
        name: this.name,
        email: this.email,
        phone: this.phone.replace(/[^+0-9]/g, ''),
        distance: Number(this.distance),
        payment: this.payment
      }
      this.$emit('add', user)
      this.phone = ''
      this.name = ''
      this.date = ''
      this.email = ''
      this.payment = ''
      this.distance = 0
    }
  }
}
