<script setup lang="ts">
import { ref } from "vue";

const dataInicial = ref("");
const dataFinal = ref("");
const status = ref<string | null>(null);
const filtroSelecionado = ref<string | null>(null);

const opcoesFiltros = [
  {
    title: "Data",
    value: "DATE",
  },
  {
    title: "Status",
    value: "STATUS",
  },
];

const opcoesStatus = [
  {
    title: "Faturado",
    value: "Faturado",
  },
  {
    title: "Pendente",
    value: "Pendente",
  },
  {
    title: "Cancelado",
    value: "Cancelado",
  },
];

const emit = defineEmits<{
  (
    e: "aplicar-filtros",
    filtros: {
      dataInicial: string;
      dataFinal: string;
      status: string | null;
    },
  ): void;
}>();

function aplicarFiltros() {
  emit("aplicar-filtros", {
    dataInicial: dataInicial.value,
    dataFinal: dataFinal.value,
    status: status.value,
  });
}

function limparFiltros() {
  dataInicial.value = "";
  dataFinal.value = "";
  filtroSelecionado.value = null;
  status.value = null;

  emit("aplicar-filtros", {
    dataInicial: "",
    dataFinal: "",
    status: null,
  });
}
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
            density="comfortable"
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
              density="comfortable"
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
              density="comfortable"
              hide-details
              clearable
            />
          </v-col>
        </template>

        <v-col v-if="filtroSelecionado === 'STATUS'" cols="12" md="3">
          <v-select
            v-model="status"
            :items="opcoesStatus"
            label="Status"
            variant="outlined"
            density="comfortable"
            hide-details
            clearable
          />
        </v-col>

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
