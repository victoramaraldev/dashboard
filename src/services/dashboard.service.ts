import { dashboardMock } from "@/mocks/dashboard.mock";
import type { DashboardData, DashboardFilters } from "@/types/dashboard.types";

export function getDashboardData(
  filtros?: DashboardFilters,
): Promise<DashboardData> {
  const delay = 500 + Math.floor(Math.random() * 501);

  return new Promise((resolve) => {
    window.setTimeout(() => {
      const data = structuredClone(dashboardMock);

      if (filtros?.startDate || filtros?.endDate) {
        data.recentOrders = data.recentOrders.filter((order) => {
          const depoisDaInicial =
            !filtros.startDate || order.date >= filtros.startDate;

          const antesDaFinal =
            !filtros.endDate || order.date <= filtros.endDate;

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
