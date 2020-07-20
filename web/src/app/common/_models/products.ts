export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Product {
  name: string;
  price: number;
  quantity: number;
  photo: string;
  description?: string;
}

export interface ApiResponse {
  success: string;
  data: [];
}
