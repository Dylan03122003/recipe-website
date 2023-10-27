import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Trendy from "./sections/Trendy";
import Learnmore from "./sections/Learnmore";
import Categories from "./sections/Categories";
import Instagram from "./sections/Instagram";
import TastyRecipe from "./sections/TastyRecipe";
import DeliciousRecipe from "./sections/DeliciousRecipe";
import HealthJapanese from "./sections/HealthJapanese";
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
      <HealthJapanese />
    </>
  );
};

export default App;
