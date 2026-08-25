import { dashboardMock } from "@/mocks/dashboard.mock";
import type { DashboardData } from "@/types/dashboard.types";

type DateFilter = {
  dataInicial: string;
  dataFinal: string;
};

export function getDashboardData(filtros?: DateFilter): Promise<DashboardData> {
  const delay = 500 + Math.floor(Math.random() * 501);

  return new Promise((resolve) => {
    window.setTimeout(() => resolve(structuredClone(dashboardMock)), delay);
  });
}
