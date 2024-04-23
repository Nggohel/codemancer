import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import "./App.css";
import DetailsPage from "./Components/Pages/DetailsPage";
import Home from "./Components/Pages/Home";
import Layout from "./Components/Layout";
// import Model from "./Components/Model";

function App() {
  return (
    <>
      {/* home page start */}

      {/* <Search />F
      <Cards /> */}
      {/* <Home /> */}

      {/* homepage end */}
      {/* sec-page-start */}
      {/* <DetailsPage /> */}
      {/* sec-page-end */}
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="recipe/:url" element={<DetailsPage />} />
            <Route path="*" element={<div>No Page Found</div>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
