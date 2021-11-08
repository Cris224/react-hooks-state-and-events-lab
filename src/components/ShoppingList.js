import React from "react";
import { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  function filterCategory(items){
    const newItemList = items.filter((food) => food.category !== selectedCategory.value)
    setSelectedCategory(newItemList);
    }
  

  return (
    <div className="ShoppingList">
      <div  className="Filter">
        <select onChange={() => filterCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items" id="items-list">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
