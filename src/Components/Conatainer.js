import React from "react";
import { RiBreadLine } from "react-icons/ri";
import { LuSalad } from "react-icons/lu";
import { IoIceCreamOutline } from "react-icons/io5";
import { RiDrinks2Line } from "react-icons/ri";
import { GiCookingPot } from "react-icons/gi";
import { LuPopcorn } from "react-icons/lu";
import { TbSoup } from "react-icons/tb";
import { GiCupcake } from "react-icons/gi";
function Container({ onClose }) {
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
              <div className="icon-card">
                <RiBreadLine size={32} className="icon-color" />
              </div>
              <p>Bread</p>
            </div>
            <div className="icon-container">
              <div style={{ border: "1px solid" }} className="icon-card">
                <LuSalad size={32} className="icon-stroke" />
              </div>
              <p>Salad</p>
            </div>
            <div className="icon-container">
              <div style={{ border: "1px solid" }} className="icon-card">
                <IoIceCreamOutline size={32} className="icon-stroke" />
              </div>
              <p>Dessert</p>
            </div>
            <div className="icon-container">
              <div style={{ border: "1px solid" }} className="icon-card">
                <RiDrinks2Line size={32} className="icon-color" />
              </div>
              <p>Drinks</p>
            </div>
            <div className="icon-container">
              <div style={{ border: "1px solid" }} className="icon-card">
                <GiCookingPot size={32} className="icon-color" />
              </div>
              <p>Main</p>
            </div>
            <div className="icon-container">
              <div style={{ border: "1px solid" }} className="icon-card">
                <LuPopcorn size={32} className="icon-stroke" />
              </div>
              <p>Snack</p>
            </div>
            <div className="icon-container">
              <div style={{ border: "1px solid" }} className="icon-card">
                <TbSoup size={32} className="icon-stroke" />
              </div>
              <p>Soup</p>
            </div>
            <div className="icon-container">
              <div style={{ border: "1px solid" }} className="icon-card">
                <GiCupcake size={32} className="icon-color" />
              </div>
              <p>Pastry</p>
            </div>
          </div>
        </div>

        {/* Diet */}

        {/* <div>
            <p>Diet</p>

        </div> */}
        <div className="btn-conatainer">
            <button className="clear-filter-btn">Clear Filter</button>
            <button className="close-btn">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Container;
