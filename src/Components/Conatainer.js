import React, { useState } from "react";
import { RiBreadLine } from "react-icons/ri";
import { LuSalad } from "react-icons/lu";
import { IoIceCreamOutline } from "react-icons/io5";
import { RiDrinks2Line } from "react-icons/ri";
import { GiCookingPot } from "react-icons/gi";
import { LuPopcorn } from "react-icons/lu";
import { TbSoup } from "react-icons/tb";
import { GiCupcake } from "react-icons/gi";
import { useRecipeContext } from "./Hook/UseContext";
function Container({ onClose }) {
  const {
    selectedIcon,
    handleIconClick,
    handleApplyFilter,
    clearFilter,
    setSelectedIcon,
  } = useRecipeContext();

  return (
    <div className="container">
      <div className="container-content">
        <div className="filter-conatainer">
          <h5 className="filter-title">Filter Section</h5>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>

        <div>
          <h5>Category</h5>
          {/* category type card */}
          <div style={{ display: "flex", gap: "10px" }}>
            <div className="icon-container">
              <div
                className={`icon-card ${
                  selectedIcon === "Bread" ? "selected" : ""
                }`}
                onClick={() => handleIconClick("Bread")}
              >
                <RiBreadLine size={32} className="icon-color" />
              </div>
              <p>Bread</p>
            </div>
            <div className="icon-container">
              <div
                className={`icon-card ${
                  selectedIcon === "Salad" ? "selected" : ""
                }`}
                onClick={() => handleIconClick("Salad")}
              >
                <LuSalad size={32} className="icon-stroke" />
              </div>
              <p>Salad</p>
            </div>
            <div className="icon-container">
              <div
                className={`icon-card ${
                  selectedIcon === "Dessert" ? "selected" : ""
                }`}
                onClick={() => handleIconClick("Dessert")}
              >
                <IoIceCreamOutline size={32} className="icon-stroke" />
              </div>
              <p>Dessert</p>
            </div>
            <div className="icon-container">
              <div
                className={`icon-card ${
                  selectedIcon === "Drinks" ? "selected" : ""
                }`}
                onClick={() => handleIconClick("Drinks")}
              >
                <RiDrinks2Line size={32} className="icon-color" />
              </div>
              <p>Drinks</p>
            </div>
            <div className="icon-container">
              <div
                className={`icon-card ${
                  selectedIcon === "Main" ? "selected" : ""
                }`}
                onClick={() => handleIconClick("Main")}
              >
                <GiCookingPot size={32} className="icon-color" />
              </div>
              <p>Main</p>
            </div>
            <div className="icon-container">
              <div
                className={`icon-card ${
                  selectedIcon === "Snack" ? "selected" : ""
                }`}
                onClick={() => handleIconClick("Snack")}
              >
                <LuPopcorn size={32} className="icon-stroke" />
              </div>
              <p>Snack</p>
            </div>
            <div className="icon-container">
              <div
                className={`icon-card ${
                  selectedIcon === "Soup" ? "selected" : ""
                }`}
                onClick={() => handleIconClick("Soup")}
              >
                <TbSoup size={32} className="icon-stroke" />
              </div>
              <p>Soup</p>
            </div>
            <div className="icon-container">
              <div
                className={`icon-card ${
                  selectedIcon === "Pastry" ? "selected" : ""
                }`}
                onClick={() => handleIconClick("Pastry")}
              >
                <GiCupcake size={32} className="icon-color" />
              </div>
              <p>Pastry</p>
            </div>
          </div>
        </div>

        {/* Diet */}

        {/* <div>
            <p>Diet</p>
             */}

        <div className="btn-conatainer">
          {selectedIcon && (
            <button className="clear-filter-btn" onClick={handleApplyFilter}>
              Apply
            </button>
          )}
          <button
            className={`close-btn ${selectedIcon ? "apply-btn" : ""}`}
            onClick={() => setSelectedIcon(null)}
          >
            Clear Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Container;
