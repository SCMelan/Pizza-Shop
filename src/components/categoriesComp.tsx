import React, {useMemo} from "react";
import {useWhyDidYouUpdate} from 'ahooks'

type CategoriesProps ={
  value:number,
  onClickCategory: (i:number)=> void,

}

const categories = [
  "Все",
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытие",
];

const Categories:React.FC<CategoriesProps> = React.memo(({ value, onClickCategory })=> {
  return (
    <div className="categories">
      <ul>
        {categories.map((categotyName, index) => {
          return (
            <li
              key={categotyName}
              onClick={() => onClickCategory(index)}
              className={value === index ? "active" : ""}
            >
              {categotyName}
            </li>
          );
        })}
      </ul>
    </div>
  );
})

export default Categories