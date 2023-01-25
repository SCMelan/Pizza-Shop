import React, { useContext,useCallback } from "react";

import qs from "qs";

import Categories from "../components/categoriesComp";
import Pizza from "../components/PizzaBlock";
import Sort from "../components/sortComp";
import Skeleton from "../components/PizzaBlock/Skeleton";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Pagination } from "../components/Pagination";
import { searchContext } from "../App";
import axios from "axios";

import { setCategoryId, setPageCount } from "../redux/slices/filter/slice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { useAppSelector } from "../tsCustom";

const Home:React.FC = React.memo(() => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { sort, categoryId, pageCount } = useAppSelector(
      (state) => state.filterSlice
    );

    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const searchValue = useContext(searchContext);

    const onClickCategory = useCallback((id:number) => {
      dispatch(setCategoryId(id));
    },[]);
    const onChangePage = useCallback((num:number) => dispatch(setPageCount(num)),[]);

    useEffect(() => {
      setIsLoading(true);
      const order = sort.sortProperty.includes("-") ? "asc" : "desc";
      const sortBy = sort.sortProperty.replace("-", "");
      const categoty = categoryId > 0 ? `category=${categoryId}` : "";
      const search = searchValue ? `&search=${searchValue}` : "";

      axios
        .get(
          `https://637720705c4777651214b49b.mockapi.io/pizzas?page=${pageCount}&limit=4&${categoty}&sortBy=${sortBy}&order=${order}${search}`
        )
        .then((res) => {
          setPizzas(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
        });
    }, [categoryId, sort.sortProperty, searchValue, pageCount]);

    useEffect(() => {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        pageCount,
      });
      navigate(`?${queryString}`);
    }, [categoryId, sort.sortProperty, pageCount]);

    const items = pizzas.map((pizzas) => (
        <Pizza key={pizzas.id} {...pizzas} />
    ));
    const skeletons = [...new Array(4)].map((_, index) => (
      <Skeleton key={index} />
    ));

    return (
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onClickCategory={onClickCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeletons : items}</div>
        <Pagination currentPage={pageCount} onChange={onChangePage} />
      </div>
    );
  }
  )

export default Home