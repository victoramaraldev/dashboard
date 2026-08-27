<script setup lang="ts">
import { reactive } from "vue";
import type { DashboardFilters } from "@/types/dashboard.types";
import DateFilter from "@/components/filters/DateFilter.vue";
import StatusFilter from "@/components/filters/StatusFilter.vue";

const emit = defineEmits<{
  apply: [filters: DashboardFilters];
}>();

const filters = reactive<DashboardFilters>({
  startDate: "",
  endDate: "",
  status: null,
});

function applyFilters() {
  emit("apply", { ...filters });
}

function clearFilters() {
  filters.startDate = "";
  filters.endDate = "";
  filters.status = null;
  emit("apply", { ...filters });
}
</script>

<template>
  <v-container>
    <v-card class="pa-4">
      <v-row>
        <v-col cols="12" md="6">
          <DateFilter
            v-model:start-date="filters.startDate"
            v-model:end-date="filters.endDate"
          />
        </v-col>

        <v-col cols="12" md="6">
          <StatusFilter v-model="filters.status" />
        </v-col>
      </v-row>

      <div class="d-flex justify-end ga-2 mt-4">
        <v-btn variant="outlined" @click="clearFilters"> Limpar </v-btn>

        <v-btn color="primary" @click="applyFilters"> Aplicar </v-btn>
      </div>
    </v-card>
  </v-container>
</template>
