import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";


const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [searchTerm, setSearchTerm] = useState("");

  const filterData = (data) => {
    const upperData = Menu.filter((currElem) => {
      return currElem.category === data;
    });
    setMenuData(upperData);
  };

  // search data filter
  const searchDataFilter = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = Menu.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setMenuData(filtered);
  };

  return (
    <>
      <nav className="nav">
        <div className="navbar">
          <button className="btn" onClick={() => setMenuData(Menu)}>
            All
          </button>
          <button className="btn" onClick={() => filterData("Breakfast")}>
            Breakfast
          </button>
          <button className="btn" onClick={() => filterData("Lunch")}>
            Lunch
          </button>
          <button className="btn" onClick={() => filterData("Dinner")}>
            Dinner
          </button>
          <button className="btn" onClick={() => filterData("Evening")}>
            Evening
          </button>
        </div>
      </nav>

      <div className="inptdata">
        <input
          type="text"
          value={searchTerm}
          className="inputbar"
          onChange={searchDataFilter}
          placeholder="search bar"
        />
      </div>

       <MenuCard menuDa={menuData} /> 
    </>
  );
};

export default Resturant;
