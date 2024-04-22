// import React from "react";

// function Search() {
//   return (
//     <div>
//       <form class="d-flex">
//         <input
//           class="form-control me-2"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//         />
//         <button class="btn" type="submit">
//           Show filter
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Search;

import React, { useState } from "react";
import Container from "./Conatainer";

function Search() {
  const [showContainer, setShowContainer] = useState(false);

  const handleShowContainer = () => {
    setShowContainer(true);
  };

  const handleCloseContainer = () => {
    setShowContainer(false);
  };

  return (
    <div>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn" type="button" onClick={handleShowContainer}>
          Show container
        </button>
      </form>
      {showContainer && (
        <div>
          <Container
            className="filter-conatainer"
            onClose={handleCloseContainer}
          >
            {/* <p>This is the content inside the container.</p> */}
          </Container>
        </div>
      )}
    </div>
  );
}

export default Search;
