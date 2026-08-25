import type { DashboardData } from '@/types/dashboard.types'

export const dashboardMock: DashboardData = {
  summary: {
    totalOrders: 990,
    pendingOrders: 347,
    invoicedOrders: 495,
    totalRevenue: 487350.8,
  },
  monthlyOrders: [
    { month: 'Janeiro', orders: 120 },
    { month: 'Fevereiro', orders: 150 },
    { month: 'Março', orders: 135 },
    { month: 'Abril', orders: 180 },
    { month: 'Maio', orders: 210 },
    { month: 'Junho', orders: 195 },
  ],
  orderStatuses: [
    { status: 'Pendente', quantity: 35 },
    { status: 'Faturado', quantity: 50 },
    { status: 'Cancelado', quantity: 15 },
  ],
  recentOrders: [
    { id: 'PED-1098', customer: 'Horizonte Materiais', date: '2026-08-24', value: 12890.5, status: 'Faturado' },
    { id: 'PED-1097', customer: 'Nova Era Comércio', date: '2026-08-24', value: 4850, status: 'Pendente' },
    { id: 'PED-1096', customer: 'Atlas Distribuidora', date: '2026-08-23', value: 9320.75, status: 'Faturado' },
    { id: 'PED-1095', customer: 'Conecta Suprimentos', date: '2026-08-22', value: 2190.9, status: 'Cancelado' },
    { id: 'PED-1094', customer: 'Ponto Sul Varejo', date: '2026-08-21', value: 7640, status: 'Pendente' },
    { id: 'PED-1093', customer: 'Grupo Meridian', date: '2026-08-20', value: 15680.2, status: 'Faturado' },
  ],
}
