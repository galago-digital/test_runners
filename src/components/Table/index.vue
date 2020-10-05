<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Почта</th>
          <th scope="col">Номер</th>
          <th scope="col">
            Дата рождения
            <b-icon-arrow-up class="cursor-pointer" @click="sortByDate()"></b-icon-arrow-up>
            <b-icon-arrow-down class="cursor-pointer" @click="sortByDate(true)"></b-icon-arrow-down>
          </th>
          <th scope="col">
            Дистанция
            <b-icon-arrow-up class="cursor-pointer" @click="sortByDistance()"></b-icon-arrow-up>
            <b-icon-arrow-down class="cursor-pointer" @click="sortByDistance(true)"></b-icon-arrow-down>
          </th>
          <th scope="col">
            Сумма
            <b-icon-arrow-up class="cursor-pointer" @click="sortByPayment()"></b-icon-arrow-up>
            <b-icon-arrow-down class="cursor-pointer" @click="sortByPayment(true)"></b-icon-arrow-down>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in paginatedData" :key="index">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.date }}</td>
          <td>{{ user.distance }}</td>
          <td>{{ user.payment }}</td>
        </tr>
      </tbody>
    </table>
    <div class="btn-group mr-2" v-if="isShowPagination">
      <button type="button" class="btn btn-primary" @click="prevPage()" :disabled="pageNumber === 0">Previous</button>
      <button type="button" class="btn btn-primary" @click="nextPage()" :disabled="pageNumber === pageCount - 1">Next</button>
    </div>
  </div>
</template>

<script src="./table.js"></script>
<style scoped lang="scss">
.cursor-pointer {
  cursor: pointer;
}
</style>
