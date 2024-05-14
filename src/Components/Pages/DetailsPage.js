import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function DetailsPage() {
  const [singlerecipes, setSingleRecipes] = useState([]);
  const { url: enc } = useParams();
  const url = atob(enc);
  console.log(url);

  useEffect(() => {
    async function fetchSingleRecipes() {
      try {
        const response = await fetch(`${url}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log();
        if (data) {
          setSingleRecipes(data.recipe);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    fetchSingleRecipes();
  }, [url]);

  const handleAddToYourRecipes = () => {
    const storedRecipes = JSON.parse(localStorage.getItem("yourRecipes")) || [];
    storedRecipes.push(singlerecipes);
    localStorage.setItem("yourRecipes", JSON.stringify(storedRecipes));
    alert("Recipe added to YourRecipes");
  };
  return (
    <>
      <div className="details-container">
        {/* phase-one start */}
        <div className="phase-one">
          <div>
            <img src={singlerecipes?.image} className="details-img" alt="..." />
          </div>
          <div className="recepi-intro">
            <h3 class="card-title">{singlerecipes?.label}</h3>
            <p>
              Cuisine Type: {singlerecipes?.cuisineType}
              {/* {singlerecipes.length > 0
                ? 
                : "Loading..."} */}
            </p>
            <hr></hr>
            {/* <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <p>Logo</p>
              <p>4 portions</p>
              <p>1hr</p>
            </div>
            <hr></hr> */}
            {/* diet and category start */}
            <div>
              <div style={{ display: "flex" }}>
                <p>Diet:</p>
                {singlerecipes?.dietLabels?.map((label, index) => (
                  <p key={index}>
                    {label}
                    {index !== singlerecipes.dietLabels.length - 1 ? " ," : ""}
                  </p>
                ))}
              </div>
              <div style={{ display: "flex" }}>
                <p>Category:</p>
                <p> {singlerecipes?.dishType} </p>
              </div>
            </div>
            {/* diet and category end */}
          </div>
        </div>
        {/* phase-one end */}

        {/* phase-two start */}
        <div className="phase-two">
          {/* about recipe start */}
          <div class="about-recipe-container">
            <h5 class="card-title">About this Recipe </h5>
            <p class="card-text">
              For more Details about recipe{" "}
              <a className="click-here" href={singlerecipes?.url}>
                Click here
              </a>
            </p>
          </div>
          {/* about recipe end */}
          {/* ingredients list start */}
          <div className="ingredients-container">
            <h5 class="card-title">Ingredients</h5>
            {singlerecipes && singlerecipes?.ingredientLines ? (
              <ul>
                {singlerecipes?.ingredientLines?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          {/* ingredients list end */}
        </div>
        {/* phase-two-end */}
        {/* phase-three start */}
        {/* instruction start */}
        <div className="phase-three">
          <div>
            <h5 class="card-title">Instruction</h5>
            {singlerecipes && singlerecipes?.ingredients ? (
              <ol>
                {singlerecipes?.ingredients?.map((item, index) => (
                  <li key={index}>take {item.text}</li>
                ))}
              </ol>
            ) : (
              <p>Loading...</p>
            )}

            {/* guten free */}
            {/* <div className="">
              <p class="card-title">Guten free</p>
            </div> */}

            {/* line start */}
            <div>
              <hr></hr>
            </div>
            {/* line end */}
            {/* four phase end */}
            {/* five phase start */}

            {/* notes started  */}
            <div className="">
              <h5 class="card-title">Notes</h5>
              {singlerecipes && singlerecipes?.healthLabels ? (
                <ul>
                  {singlerecipes?.healthLabels
                    ?.slice(0, 3)
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  {singlerecipes?.healthLabels
                    ?.slice(3, 6)
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  {singlerecipes?.healthLabels
                    ?.slice(6, 9)
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  {singlerecipes?.healthLabels
                    ?.slice(9, 12)
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  {singlerecipes?.healthLabels
                    ?.slice(12, 15)
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            {/* notes end */}
            {/* five phase end */}
            {/* line start */}
            <div>
              <hr></hr>
            </div>
            {/* line end */}

            {/* recipe Auther*/}
            <div>
              <h5 class="card-title">source: {singlerecipes?.source}</h5>
            </div>
            {/* line start */}
            <div>
              <hr></hr>
            </div>
            {/* line end */}

            {/* all recipe button */}

            <div className="allrecipes-btn-conatainer">
              <Link to="/">
                <button className="all-recipes-btn">
                  <b>All Recipes</b>
                </button>
              </Link>
              <button
                className="all-yourrecipes-btn"
                onClick={handleAddToYourRecipes}
              >
                <b>Add To YourRecipes List</b>
              </button>
            </div>
          </div>
          <div></div>
        </div>
        {/* instruction end */}
        {/* phase-three end */}
        {/* phase four */}
      </div>
    </>
  );
}

export default DetailsPage;
