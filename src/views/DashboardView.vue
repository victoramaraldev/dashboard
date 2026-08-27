<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import SummaryCard from "@/components/dashboard/SummaryCard.vue";
import OrdersBarChart from "@/components/dashboard/OrdersBarChart.vue";
import OrdersStatusChart from "@/components/dashboard/OrdersStatusChart.vue";
import RecentOrdersTable from "@/components/dashboard/RecentOrdersTable.vue";
import Filter from "@/components/filters/Filters.vue";
import { getDashboardData } from "@/services/dashboard.service";
import type { DashboardData } from "@/types/dashboard.types";
import type { DashboardFilters } from "@/types/dashboard.types";

const dashboard = ref<DashboardData | null>(null);
const loading = ref(false);
const error = ref("");
const lastUpdate = ref<Date | null>(null);

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
const formattedUpdate = computed(
  () =>
    lastUpdate.value?.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }) ?? "—",
);

async function applyFilters(filtros: DashboardFilters) {
  await loadDashboard(filtros);
}

async function loadDashboard(filtros?: DashboardFilters) {
  loading.value = true;
  error.value = "";
  try {
    dashboard.value = await getDashboardData(filtros);
    lastUpdate.value = new Date();
  } catch {
    error.value = "Não foi possível carregar os dados. Tente novamente.";
  } finally {
    loading.value = false;
  }
}

onMounted(loadDashboard);
</script>

<template>
  <div class="dashboard-shell pa-4 pa-sm-6 pa-lg-8">
    <div
      class="d-flex flex-column flex-sm-row align-sm-center justify-space-between ga-4 mb-6"
    >
      <div>
        <h1 class="text-h4 font-weight-bold mb-1">Visão geral</h1>
        <p class="text-body-2 text-medium-emphasis mb-0">
          Acompanhe os principais indicadores do seu ERP.
        </p>
      </div>
      <div class="d-flex align-center ga-3">
        <span class="text-caption text-medium-emphasis"
          >Atualizado às {{ formattedUpdate }}</span
        >
        <v-btn
          color="primary"
          prepend-icon="mdi-refresh"
          :loading="loading"
          @click="loadDashboard"
          >Atualizar dados</v-btn
        >
      </div>
    </div>

    <Filter @apply="applyFilters"/>

    <v-alert
      v-if="error"
      type="error"
      variant="tonal"
      closable
      class="mb-6"
      @click:close="error = ''"
      >{{ error }}</v-alert
    >

    <template v-if="loading && !dashboard">
      <v-row>
        <v-col v-for="item in 4" :key="item" cols="12" sm="6" lg="3"
          ><v-skeleton-loader type="article"
        /></v-col>
        <v-col cols="12"
          ><v-skeleton-loader type="image, table-heading, table-row@4"
        /></v-col>
      </v-row>
    </template>

    <template v-else-if="dashboard">
      <v-row>
        <v-col cols="12" sm="6" lg="3">
          <SummaryCard
            title="Total de pedidos"
            :value="dashboard.summary.totalOrders.toLocaleString('pt-BR')"
            icon="mdi-cart-outline"
            color="primary"
            caption="No período selecionado"
          />
        </v-col>
        <v-col cols="12" sm="6" lg="3">
          <SummaryCard
            title="Pedidos pendentes"
            :value="dashboard.summary.pendingOrders.toLocaleString('pt-BR')"
            icon="mdi-clock-outline"
            color="warning"
            caption="Aguardando processamento"
          />
        </v-col>
        <v-col cols="12" sm="6" lg="3">
          <SummaryCard
            title="Pedidos faturados"
            :value="dashboard.summary.invoicedOrders.toLocaleString('pt-BR')"
            icon="mdi-check-circle-outline"
            color="success"
            caption="Concluídos com sucesso"
          />
        </v-col>
        <v-col cols="12" sm="6" lg="3">
          <SummaryCard
            title="Faturamento total"
            :value="currency.format(dashboard.summary.totalRevenue / 100)"
            icon="mdi-currency-usd"
            color="primary"
            caption="Receita acumulada"
          />
        </v-col>
      </v-row>

      <v-row class="mt-1">
        <v-col cols="12" lg="8"
          ><OrdersBarChart :data="dashboard.monthlyOrders"
        /></v-col>
        <v-col cols="12" lg="4"
          ><OrdersStatusChart :data="dashboard.orderStatuses"
        /></v-col>
      </v-row>

      <v-row class="mt-1">
        <v-col cols="12"
          ><RecentOrdersTable :orders="dashboard.recentOrders"
        /></v-col>
      </v-row>
    </template>

    <v-empty-state
      v-else-if="!loading"
      icon="mdi-database-off-outline"
      title="Nenhum dado disponível"
      text="Atualize a página para tentar novamente."
    />
  </div>
</template>
