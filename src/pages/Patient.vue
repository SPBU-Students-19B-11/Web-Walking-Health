<template>
  <div>
    <div class="header">
      <div class="header__name">Пациент: Иванов Иван Иванович</div>
      <button @click="$router.push('/profile')">Назад</button>
    </div>
    <div class="body">
      <div class="body__btn_chat">
        <v-btn @click="$router.push('/messages')">Чат с пацентом</v-btn>
      </div>
      <div class="patients__header">Данные пациента</div>
      <div class="patients__list">
        <v-card>
          <v-card-title>Дата рождения</v-card-title>
          <v-card-subtitle>15.06.1965</v-card-subtitle>
          <v-card-title>Test</v-card-title>
          <v-card-subtitle>Test</v-card-subtitle>
          <v-card-title>Test</v-card-title>
          <v-card-subtitle>test</v-card-subtitle>
        </v-card>
      </div>
      <div class="patients__header">Последняя активность пацента</div>
      <div class="patients__select">
          <v-select
              v-model="select"
              :items="items"
              label="Select"
              dense
              solo
          ></v-select>
      </div>
      <div class="patients__charts">
        <div class="patients__chart chart">
            <div class="chart__header">Количество шагов</div>
            <apexchart
                type="bar"
                :options="options"
                :series="series"
            > </apexchart>
        </div>
        <div class="patients__chart">
            <div class="chart__header">Средняя скорость</div>
            <apexchart
                type="bar"
                :options="options"
                :series="series"
            > </apexchart>
        </div>
        <div class="patients__chart">
            <div class="chart__header">Среднее ускорение</div>
            <apexchart
                type="bar"
                :options="options"
                :series="series"
            > </apexchart>
        </div>
        <div class="patients__chart">
            <div class="chart__header">Среднее пройденое расстояние</div>
            <apexchart
                type="bar"
                :options="options"
                :series="series"
            > </apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            options: {
                chart: {
                id: 'last-activity'
                },
                xaxis: {
                categories: ['01.01.21', '01.01.21', '01.01.21', '01.01.21', '01.01.21', '01.01.21', '01.01.21']
                }
            },
            series: [{
                name: 'Количество шагов',
                data: [100, 200, 300, 200, 250, 350, 400]
            }],

            items: ['По дням', 'По неделям', 'По месяцам'],

            select: 'По дням',
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #423189;
  border-radius: 0px 0px 20px 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;

  &__name {
    color: #fff;
    font-size: 24px;
  }
}

button {
  background-color: #364759;
  color: white;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: #ff5252;
  }
}

.patients {
  &__header {
    margin: 16px;
    font-size: 24px;
  }

  &__charts {
    margin: 0 5px 0 5px;
    display: flex;
    flex-wrap: wrap;
  }

  &__chart {
      flex: 0 1 49%
  }

  &__item {
    margin-bottom: 5px;
  }

  &__select{
      margin-left: 25px;
      width: 300px;
  }
}

.chart {

    &__header{
        margin-left: 20px;
    }
}

.body {
  &__btn_chat {
    margin: 20px 0 0 5px;
  }
}
</style>