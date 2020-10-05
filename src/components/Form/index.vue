<template>
  <div class="mt-4 mb-4">
    <div class="row">
      <div class="col">
        <label for="email" class="col col-form-label">Email</label>
        <div class="col">
          <input
            type="email"
            :class="['form-control', { 'is-invalid': !isEmailValid }]"
            placeholder="Email Address"
            v-model="email"
            id="email"
          />
        </div>
      </div>
      <div class="col">
        <label for="name" class="col col-form-label">ФИО</label>
        <div class="col">
          <input
            type="text"
            :class="['form-control']"
            placeholder="ФИО"
            v-model="name"
            id="name"
          />
        </div>
      </div>
      <div class="col">
        <label for="datepicker" class="col col-form-label"
          >Дата рождения</label
        >
        <b-form-datepicker
          id="datepicker"
          placeholder="Дата рождения"
          :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric'}"
          locale="ru"
          v-model="date"
          class="mb-2"
        ></b-form-datepicker>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="phone" class="col col-form-label">Phone</label>
        <div class="col">
          <input
            type="tel"
            id="phone"
            :class="['form-control', { 'is-invalid': !isPhoneValid }]"
            v-mask="'+7 (###) ###-##-##'"
            v-model="phone"
            required
          />
        </div>
      </div>
      <div class="col">
        <label for="distance" class="col col-form-label"
          >Дистанция</label
        >
        <div class="col">
          <select class="form-control col" id="exampleFormControlSelect1" v-model="distance">
            <option value="3">3 км</option>
            <option value="5">5 км</option>
            <option value="10">10 км</option>
          </select>
        </div>
      </div>
      <div class="col">
        <label for="payment" class="col col-form-label"
          >Сумма взноса</label
        >
        <input
          type="number"
          id="payment"
          placeholder="0"
          :class="['form-control']"
          v-model="payment"
          required
        />
      </div>
    </div>

      <div class="col">
        <button type="submit" class="btn btn-primary mt-4" :disabled="!isFormValid" @click="add">Добавить</button>
      </div>
  </div>
</template>

<script src="./form.js"></script>
<style scoped lang="scss">
</style>
