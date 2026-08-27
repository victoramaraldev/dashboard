<script setup lang="ts">
defineProps<{
  title: string;
  value: string;
  icon: string;
  color: string;
  caption: string;
}>();
</script>

<template>
  <v-card variant="flat" border class="pa-5 h-100">
    <div class="d-flex align-start justify-space-between">
      <div>
        <div class="text-body-2 text-medium-emphasis mb-2">{{ title }}</div>
        <div class="text-h5 font-weight-bold">{{ value }}</div>
        <div class="text-caption text-medium-emphasis mt-2">{{ caption }}</div>
      </div>
      <v-avatar :color="color" variant="tonal" rounded="lg" size="46">
        <v-icon :icon="icon" />
      </v-avatar>
    </div>
  </v-card>
</template>
