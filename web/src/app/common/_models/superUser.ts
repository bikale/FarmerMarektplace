export interface RequestLogs {
  url: string;
  method: string;
  response_time: string;
  request_date: string;
}

export interface OrderTransactions {
  _id: string;
  status: string;
  orderedAt: string;
  products: { items: []; quantity: number; totalprice: number };
}
