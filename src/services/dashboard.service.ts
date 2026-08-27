import { dashboardMock } from "@/mocks/dashboard.mock";
import type { DashboardData } from "@/types/dashboard.types";

type DateFilter = {
  dataInicial: string;
  dataFinal: string;
  status: string | null;
};

export function getDashboardData(filtros?: DateFilter): Promise<DashboardData> {
  const delay = 500 + Math.floor(Math.random() * 501);

  return new Promise((resolve) => {
    window.setTimeout(() => {
      const data = structuredClone(dashboardMock);

      if (filtros?.dataInicial || filtros?.dataFinal) {
        data.recentOrders = data.recentOrders.filter((order) => {
          const depoisDaInicial =
            !filtros.dataInicial || order.date >= filtros.dataInicial;

          const antesDaFinal =
            !filtros.dataFinal || order.date <= filtros.dataFinal;

          return depoisDaInicial && antesDaFinal;
        });
      }

      if (filtros?.status) {
        data.recentOrders = data.recentOrders.filter((order) => {
          return order.status === filtros.status;
        });
      }

      resolve(data);
    }, delay);
  });
}
