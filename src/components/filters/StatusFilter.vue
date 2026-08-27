<script setup lang="ts">
import type { OrderStatusName } from "@/types/dashboard.types";

const props = defineProps<{
  modelValue: OrderStatusName | null;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: OrderStatusName | null];
}>();

const statusOptions = [
  { title: "Todos", value: null },
  { title: "Pendente", value: "Pendente" },
  { title: "Faturado", value: "Faturado" },
  { title: "Cancelado", value: "Cancelado" },
];
</script>

<template>
  <v-select
    :model-value="props.modelValue"
    :items="statusOptions"
    label="Status"
    variant="outlined"
    clearable
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>
