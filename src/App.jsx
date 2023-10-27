import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Trendy from "./sections/Trendy";
import Learnmore from "./sections/Learnmore";
import Categories from "./sections/Categories";
import Instagram from "./sections/Instagram";
import TastyRecipe from "./sections/TastyRecipe";
import DeliciousRecipe from "./sections/DeliciousRecipe";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Trendy />
      <Categories />
      <TastyRecipe />
      <Instagram />
      <Learnmore />
      <DeliciousRecipe />
    </>
  );
};

export default App;
