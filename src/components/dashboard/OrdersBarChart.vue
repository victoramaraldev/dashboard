<script setup lang="ts">
import { computed } from "vue";
import type { ApexOptions } from "apexcharts";
import type { MonthlyOrder } from "@/types/dashboard.types";

const props = defineProps<{ data: MonthlyOrder[] }>();

const chartOptions = computed<ApexOptions>(() => ({
  chart: { toolbar: { show: false }, fontFamily: "Roboto, sans-serif" },
  colors: ["#3156D3"],
  dataLabels: { enabled: false },
  grid: { borderColor: "#E9EDF5", strokeDashArray: 4 },
  plotOptions: { bar: { borderRadius: 7, columnWidth: "48%" } },
  xaxis: {
    categories: props.data.map((item) => item.month.slice(0, 3)),
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { labels: { formatter: (value) => Math.round(value).toString() } },
  tooltip: { y: { formatter: (value) => `${value} pedidos` } },
}));

const series = computed(() => [
  { name: "Pedidos", data: props.data.map((item) => item.orders) },
]);
</script>

<template>
  <v-card variant="flat" border class="pa-5 h-100">
    <div class="text-subtitle-1 font-weight-bold mb-1">Pedidos por mês</div>
    <div class="text-caption text-medium-emphasis mb-3">
      Volume mensal no primeiro semestre
    </div>
    <apexchart
      type="bar"
      height="310"
      :options="chartOptions"
      :series="series"
    />
  </v-card>
</template>
