import React from "react";

function DetailsPage() {
  return (
    <div className="details-container">
      {/* phase-one start */}
      <div className="phase-one">
        <div>
          <img
            src="https://as1.ftcdn.net/v2/jpg/02/70/35/00/1000_F_270350073_WO6yQAdptEnAhYKM5GuA9035wbRnVJSr.jpg"
            className="details-img"
            alt="..."
          />
        </div>
        <div className="recepi-intro">
          <h3 class="card-title">Name of Recipe</h3>
          <p>Ketegenic chocalte</p>
          <hr></hr>
          <div
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
          <hr></hr>
          {/* diet and category start */}
          <div>
            <div style={{ display: "flex" }}>
              <p>Diet:</p>
              <p>Keto</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>Category:</p>
              <p>Pastry</p>
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
            Some quick example text Some quick example text Some quick example
            <br></br>
            text Some quick example text Some quick example text Some quick{" "}
            <br></br>
            example text
          </p>
          <p class="card-text">
            Some quick example text Some quick example text Some quick example
            <br></br>
            text Some quick example text Some quick example text Some quick
            <br></br>
            example text
          </p>
          <p class="card-text">
            Some quick example text Some quick example text Some quick example
            <br></br>
            text Some quick example text Some quick example text Some quick
            <br></br>
            example text
          </p>
          <p class="card-text">
            Some quick example text Some quick example text Some quick example
            <br></br>
            text Some quick example text Some quick example text Some quick
            <br></br>
            example text
          </p>
        </div>
        {/* about recipe end */}
        {/* ingredients list start */}
        <div className="ingredients-container">
          <h5 class="card-title">Ingredients</h5>
          <ul>
            <li>Some quick example text text</li>
            <li>text Some quick example text</li>
            <li>text Some quick example text</li>
            <li>text Some quick example text</li>
            <li>text Some quick example text</li>
            <li>text Some quick example text</li>
            <li>text Some quick example text</li>
            <li>text Some quick example text</li>
            <li>text Some quick example text</li>
          </ul>
        </div>
        {/* ingredients list end */}
      </div>
      {/* phase-two-end */}
      {/* phase-three start */}
      {/* instruction start */}
      <div className="phase-three">
        <div>
          <h5 class="card-title">About this Recipe </h5>
          <ol>
            <li>
              Some quick example text Some quick example text Some quick example
              text
            </li>
            <li>
              Some quick example text Some quick example text Some quick example
              text
            </li>
            <li>
              Some quick example text Some quick example text Some quick example
              text
            </li>
            <li>
              Some quick example text Some quick example text Some quick example
              text
            </li>
            <li>
              Some quick example text Some quick example text Some quick example
              text
            </li>
            <li>
              Some quick example text Some quick example text Some quick example
              text
            </li>
          </ol>
          {/* guten free */}
          <div className="">
            <p class="card-title">Guten free</p>
          </div>

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
            <ul>
              <li>
                Some quick example text Some quick example text Some quick
                example text
              </li>
              <li>
                Some quick example text Some quick example text Some quick
                example text
              </li>
              <li>
                Some quick example text Some quick example text Some quick
                example text
              </li>
            </ul>
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
            <h5 class="card-title">Auther</h5>
          </div>
          {/* line start */}
          <div>
            <hr></hr>
          </div>
          {/* line end */}

          {/* all recipe button */}

          <div>
            <button className="all-recipes-btn">All Recipes</button>
          </div>
        </div>
        <div></div>
      </div>
      {/* instruction end */}
      {/* phase-three end */}
      {/* phase four */}
    </div>
  );
}

export default DetailsPage;
