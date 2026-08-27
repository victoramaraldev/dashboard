<script setup lang="ts">
import type { RecentOrder } from "@/types/dashboard.types";

defineProps<{ orders: RecentOrder[] }>();

const headers = [
  { title: "Pedido", key: "id" },
  { title: "Cliente", key: "customer" },
  { title: "Data", key: "date" },
  { title: "Valor", key: "value", align: "end" as const },
  { title: "Status", key: "status" },
];

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
const date = new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" });
const statusColor = {
  Pendente: "warning",
  Faturado: "success",
  Cancelado: "error",
} as const;
</script>

<template>
  <v-card variant="flat" border>
    <div class="pa-5 pb-2">
      <div class="text-subtitle-1 font-weight-bold">Últimos pedidos</div>
      <div class="text-caption text-medium-emphasis">
        Movimentações mais recentes do ERP
      </div>
    </div>
    <v-data-table
      :headers="headers"
      :items="orders"
      item-value="id"
      :items-per-page="6"
      hide-default-footer
    >
      <template #item.id="{ value }"
        ><span class="font-weight-medium text-primary">{{
          value
        }}</span></template
      >
      <template #item.date="{ value }">{{
        date.format(new Date(value))
      }}</template>
      <template #item.value="{ value }">{{ currency.format(value) }}</template>
      <template #item.status="{ value }">
        <v-chip
          :color="statusColor[value as keyof typeof statusColor]"
          size="small"
          variant="tonal"
          >{{ value }}</v-chip
        >
      </template>
    </v-data-table>
  </v-card>
</template>
