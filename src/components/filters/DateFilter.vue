<script setup lang="ts">
const props = defineProps<{
  startDate: string;
  endDate: string;
}>();

const emit = defineEmits<{
  "update:startDate": [value: string];
  "update:endDate": [value: string];
}>();
</script>

<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-text-field
        :model-value="props.startDate"
        label="Data Inicial"
        type="date"
        variant="outlined"
        @update:model-value="emit('update:startDate', $event)"
      />
    </v-col>

    <v-col cols="12" md="6">
      <v-text-field
        :model-value="props.endDate"
        label="Data Final"
        type="date"
        variant="outlined"
        @update:model-value="emit('update:endDate', $event)"
      />
    </v-col>
  </v-row>
</template>
