import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DetailsPage from "./Components/Pages/DetailsPage";
import Home from "./Components/Pages/Home";
import Layout from "./Components/Layout";
import AboutPage from "./Components/Pages/AboutPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="recipe/:url" element={<DetailsPage />} />
            <Route path="*" element={<div>No Page Found</div>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
