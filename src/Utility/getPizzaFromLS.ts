import { calcTotalPrice } from "./calcTotalPrice";
export const getPizzaFromLS = () => {
  const data = localStorage.getItem("pizzaInCart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);
  return {
    items,
    totalPrice,
  };
};
