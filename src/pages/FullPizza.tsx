import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl:string,
    title:string,
    price:number,
  }>();
  const { id } = useParams();
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://637720705c4777651214b49b.mockapi.io/pizzas/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при загрузке пиццы");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <p>"Загрузка..."</p>;
  } else {
    return (
      <div className="container">
        <img src={pizza.imageUrl} alt="Pizza" />
        <h1>{pizza.title}</h1>
        <h4>{pizza.price} ₽ </h4>
      </div>
    );
  }
};

export default FullPizza;
