import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Trendy from "./sections/Trendy";
import Learnmore from "./sections/Learnmore";
import Categories from "./sections/Categories";
import Instagram from "./sections/Instagram";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Trendy />
      <Categories />
      <Instagram />
      <Learnmore />
    </>
  );
};

export default App;
