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
  role?: string;
}

export interface Orders {
  _id: string;
  customer: string;
  farmer: number;
  status: number;
  products: { items: []; quantity: number; totalprice: number };
}
