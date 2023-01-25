export type CartItem = {
  reduce(arg0: (sum: number, obj: any) => any, arg1: number): unknown;
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};

export interface CartSliceState {
  items: CartItem[];
  totalPrice:any;
}
