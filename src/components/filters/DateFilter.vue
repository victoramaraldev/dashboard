<script setup lang="ts">
import { ref } from "vue";

const dataInicial = ref("");
const dataFinal = ref("");
const filtroSelecionado = ref<string | null>(null);

const opcoesFiltros = [
  {
    title: "Data",
    value: "DATE",
  },
];

const emit = defineEmits<{
  (
    e: "aplicar-filtros",
    filtros: {
      dataInicial: string;
      dataFinal: string;
    },
  ): void;
}>();

function aplicarFiltros() {
  emit("aplicar-filtros", {
    dataInicial: dataInicial.value,
    dataFinal: dataFinal.value,
  });
}

function limparFiltros() {
  dataInicial.value = "";
  dataFinal.value = "";
  filtroSelecionado.value = null;
}

emit("aplicar-filtros", {
  dataInicial: dataInicial.value,
  dataFinal: dataFinal.value,
});
</script>

<template>
  <v-container>
    <v-card class="pa-4">
      <v-row align="center">
        <v-col cols="12" md="3">
          <v-select
            v-model="filtroSelecionado"
            :items="opcoesFiltros"
            label="Filtro"
            variant="outlined"
            hide-details
            clearable
          />
        </v-col>

        <template v-if="filtroSelecionado === 'DATE'">
          <v-col cols="12" md="3">
            <v-text-field
              v-model="dataInicial"
              label="Data Inicial"
              type="date"
              variant="outlined"
              hide-details
              clearable
            />
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="dataFinal"
              label="Data Final"
              type="date"
              variant="outlined"
              hide-details
              clearable
            />
          </v-col>
        </template>

        <v-col
          cols="12"
          md="3"
          class="d-flex flex-column flex-sm-row align-center ga-2"
        >
          <v-btn color="primary" @click="aplicarFiltros"> Aplicar </v-btn>

          <v-btn variant="outlined" @click="limparFiltros"> Limpar </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
