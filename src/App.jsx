import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Trendy from "./sections/Trendy";
import Learnmore from "./sections/Learnmore";
import Categories from "./sections/Categories";
import Instagram from "./sections/Instagram";
import Health from "./sections/Health";
import Ingredients from "./sections/Ingredients";
import Directions from "./sections/Directions";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Trendy />
      <Categories />
      <Learnmore />
      <Instagram />
      <Health />
      <Ingredients />
      <Directions />
    </>
  );
};

export default App;
