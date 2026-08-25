export interface DashboardSummary {
  totalOrders: number
  pendingOrders: number
  invoicedOrders: number
  totalRevenue: number
}

export interface MonthlyOrder {
  month: string
  orders: number
}

export type OrderStatusName = 'Pendente' | 'Faturado' | 'Cancelado'

export interface OrderStatus {
  status: OrderStatusName
  quantity: number
}

export interface RecentOrder {
  id: string
  customer: string
  date: string
  value: number
  status: OrderStatusName
}

export interface DashboardData {
  summary: DashboardSummary
  monthlyOrders: MonthlyOrder[]
  orderStatuses: OrderStatus[]
  recentOrders: RecentOrder[]
}
