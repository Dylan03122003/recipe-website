import Categories from "../sections/Categories";
import { default as DeliciousRecipe } from "../sections/DeliciousRecipe";
import Hero from "../sections/Hero";
import Instagram from "../sections/Instagram";
import Learnmore from "../sections/Learnmore";
import TastyRecipe from "../sections/TastyRecipe";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <TastyRecipe />
      <Instagram />
      <Learnmore />
      <DeliciousRecipe />
    </>
  );
};

export default Home;
