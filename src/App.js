import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecipeContextProvider } from "./Components/Hook/UseContext";
import "./App.css";
import DetailsPage from "./Components/Pages/DetailsPage";
import Home from "./Components/Pages/Home";
import Layout from "./Components/Layout";
import AboutPage from "./Components/Pages/AboutPage";
import SavedRecipesPage from "./Components/Pages/SavedRecipesPage";
function App() {
  return (
    <RecipeContextProvider>
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="recipe/:url" element={<DetailsPage />} />
              <Route path="yourallrecipe" element={<SavedRecipesPage/>} />
              <Route path="*" element={<div>No Page Found</div>} />
            </Route>
          </Routes>
        </Router>
      </>
    </RecipeContextProvider>
  );
}

export default App;
