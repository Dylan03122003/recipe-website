import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Blog from "./sections/Blog";
import BlogList from "./sections/BlogList";
import RecipeDetail from "./sections/RecipeDetail";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:recipeID" element={<RecipeDetail />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:blogID" element={<Blog />} />
      </Routes>
    </>
  );
};

export default App;
