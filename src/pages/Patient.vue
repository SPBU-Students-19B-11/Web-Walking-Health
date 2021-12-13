<template>
  <div>
    <loader
      v-if="loading"
      object="#489EE2"
      color1="#ffffff"
      color2="#423189"
      size="5"
      speed="2"
      bg="#343a40"
      objectbg="#999793"
      opacity="80"
      name="circular"
    ></loader>
    <div class="header">
      <div class="header__name">Пациент: {{ patientName }}</div>
      <button @click="$router.push('/profile')">Назад</button>
    </div>
    <div class="body">
      <div class="body__btn_chat">
        <v-btn @click="$router.push(`/messages/${$route.params.login}`)"
          >Чат с пацентом</v-btn
        >
      </div>
      <!-- <div class="patients__header">Данные пациента</div>
      <div class="patients__list">
        <v-card>
          <v-card-title>Дата рождения</v-card-title>
          <v-card-subtitle>15.06.1965</v-card-subtitle>
          <v-card-title>Test</v-card-title>
          <v-card-subtitle>Test</v-card-subtitle>
          <v-card-title>Test</v-card-title>
          <v-card-subtitle>test</v-card-subtitle>
        </v-card>
      </div> -->
      <div class="patients__header">Последняя активность пацента</div>
      <div class="date-picker">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Дата"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @input="changeDate"
            :events="dates"
          ></v-date-picker>
        </v-menu>
      </div>
      <!-- <div class="patients__select">
        <v-select
          v-model="select"
          :items="items"
          label="Select"
          dense
          solo
        ></v-select>
      </div> -->
      <div class="patients__charts" v-show="show">
        <!-- <div class="patients__chart chart">
          <div class="chart__header">Количество шагов</div>
          <apexchart type="scatter" :options="options" :series="series">
          </apexchart>
        </div> -->
        <div class="patients__chart">
          <div class="chart__header">Средняя скорость</div>
          <apexchart
            ref="chart1"
            type="scatter"
            :options="options"
            :series="speeds"
          >
          </apexchart>
        </div>
        <div class="patients__chart">
          <div class="chart__header">Среднее ускорение</div>
          <apexchart
            ref="chart2"
            type="scatter"
            :options="options"
            :series="acceleration"
          >
          </apexchart>
        </div>
        <div class="patients__chart">
          <div class="chart__header">Среднее пройденое расстояние</div>
          <apexchart
            ref="chart3"
            type="scatter"
            :options="options"
            :series="distances"
          >
          </apexchart>
        </div>
      </div>
      <div class="patients__charts--no-data" v-show="!show">
        Данных об активности нет
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data: function () {
    return {
      options: {
        chart: {
          id: "last-activity",
        },
        xaxis: {
          type: "datetime",
        },
        tooltip: {
          x: {
            format: "dd/MM  HH:mm",
          },
        },
        noData: {
          text: "Loading...",
        },
      },
      acceleration: [
        {
          name: "Ускорение",
          data: [],
        },
      ],
      speeds: [
        {
          name: "Скорость",
          data: [],
        },
      ],
      distances: [
        {
          name: "Дистанция",
          data: [],
        },
      ],

      // items: ["По дням", "По неделям", "По месяцам"],

      // select: "По дням",

      date: new Date().toISOString().split("T")[0],

      menu: false,
    };
  },

  computed: {
    ...mapState({
      patientName: (state) => state.patient.name,
      show: (state) => state.patient.show,
      dates: (state) => state.patient.datesOfActivity,
      getAcceleration: (state) => state.patient.acceleration,
      getSpeeds: (state) => state.patient.speeds,
      getDistances: (state) => state.patient.distances,
      loading: (state) => state.patient.loading,
    }),
  },

  methods: {
    ...mapActions({
      getInformationAboutPatient: "patient/getInformationAboutPatient",
      getDates: "patient/getDatesOfActivity",
    }),
    async changeDate() {
      this.menu = false;

      await this.getInformationAboutPatient({
        patientLogin: this.$route.params.login,
        date: this.date.split("-").reverse().join("."),
      });

      this.$refs.chart1.updateSeries([{ data: this.getAcceleration }]);
      this.$refs.chart2.updateSeries([{ data: this.getSpeeds }]);
      this.$refs.chart3.updateSeries([{ data: this.getDistances }]);
    },
  },

  beforeCreate() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/");
    }
  },

  async mounted() {
    const dateStr = new Date()
      .toISOString()
      .split("T")[0]
      .split("-")
      .reverse()
      .join(".");

    await this.getInformationAboutPatient({
      patientLogin: this.$route.params.login,
      date: dateStr,
    });

    await this.getDates(this.$route.params.login);

    this.$refs.chart1.updateSeries([{ data: this.getAcceleration }]);
    this.$refs.chart2.updateSeries([{ data: this.getSpeeds }]);
    this.$refs.chart3.updateSeries([{ data: this.getDistances }]);
  },
};
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
  max-height: 40px;
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
    // display: flex;
    // flex-wrap: wrap;
  }

  &__chart {
    flex: 0 1 49%;
  }

  &__item {
    margin-bottom: 5px;
  }

  &__select {
    margin-left: 25px;
    width: 300px;
  }
}

.chart {
  &__header {
    margin-left: 20px;
  }
}

.body {
  &__btn_chat {
    margin: 20px 0 0 5px;
  }
}

.date-picker {
  max-width: 150px;
}
</style>