<script setup lang="ts">
import { ref } from "vue";
import DashboardView from "@/views/DashboardView.vue";

const drawer = ref(true);
</script>

<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      color="#17203A"
      theme="dark"
      width="252"
    >
      <div class="brand px-6 py-6">
        <div class="brand__mark">T</div>
        <div>
          <div class="text-subtitle-1 font-weight-bold">TEK</div>
          <div class="text-caption text-medium-emphasis">ERP Analytics</div>
        </div>
      </div>

      <v-list nav class="px-3 mt-4">
        <v-list-item
          prepend-icon="mdi-view-dashboard-outline"
          title="Dashboard"
          active
          color="white"
          rounded="lg"
        />
        <v-list-item
          prepend-icon="mdi-cart-outline"
          title="Pedidos"
          rounded="lg"
        />
        <v-list-item
          prepend-icon="mdi-account-group-outline"
          title="Clientes"
          rounded="lg"
        />
        <v-list-item
          prepend-icon="mdi-chart-line"
          title="Relatórios"
          rounded="lg"
        />
      </v-list>

      <template #append>
        <v-list nav class="px-3 pb-4">
          <v-list-item
            prepend-icon="mdi-cog-outline"
            title="Configurações"
            rounded="lg"
          />
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-app-bar flat border="b" color="surface" height="72">
      <v-app-bar-nav-icon
        aria-label="Alternar menu"
        @click="drawer = !drawer"
      />
      <v-app-bar-title class="font-weight-bold">TEK Dashboard</v-app-bar-title>
      <template #append>
        <v-btn icon="mdi-bell-outline" aria-label="Notificações" />
        <v-avatar color="primary" size="38" class="mr-5"
          ><span class="text-body-2">VA</span></v-avatar
        >
      </template>
    </v-app-bar>

    <v-main>
      <DashboardView />
    </v-main>
  </v-app>
</template>
