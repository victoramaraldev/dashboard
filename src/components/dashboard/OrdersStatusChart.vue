<script setup lang="ts">
import { computed, ref } from "vue";
import type { ApexOptions } from "apexcharts";
import type { OrderStatus } from "@/types/dashboard.types";

const props = defineProps<{ data: OrderStatus[] }>();

const labels = ref(props.data.map((item) => item.status));
const chartOptions = computed<ApexOptions>(() => ({
  chart: { fontFamily: "Roboto, sans-serif" },
  labels: labels.value,
  colors: ["#E7A21A", "#12A474", "#D64D5B"],
  dataLabels: { enabled: false },
  legend: { position: "bottom", fontSize: "13px", markers: { offsetX: -3 } },
  plotOptions: {
    pie: {
      donut: {
        size: "68%",
        labels: {
          show: true,
          total: { show: true, label: "Total", formatter: () => "100%" },
        },
      },
    },
  },
  stroke: { width: 0 },
  tooltip: { y: { formatter: (value) => `${value}%` } },
}));

const series = computed(() => props.data.map((item) => item.quantity));
</script>

<template>
  <v-card variant="flat" border class="pa-5 h-100">
    <div class="text-subtitle-1 font-weight-bold mb-1">Status dos pedidos</div>
    <div class="text-caption text-medium-emphasis mb-3">
      Distribuição atual da carteira
    </div>
    <apexchart
      type="donut"
      height="310"
      :options="chartOptions"
      :series="series"
    />
  </v-card>
</template>
