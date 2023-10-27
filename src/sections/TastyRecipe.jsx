import "./tasty_recipe.css";
import { useState } from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

const dishes = [
  {
    img: "src/assets/img/image-26.png",
    // '\src\assets\img'
    name: "Big and Juicy Wagyu Beef Cheeseburge",
    foodType: "Snack",
  },
  {
    img: "src/assets/img/image-27.png",
    name: "Fresh Lime Roasted Salmon with Ginger Sauce",
    foodType: "Fish",
  },
  {
    img: "src/assets/img/image-28.png",
    name: "Strawberry Oatmeal Pancake with Honey Syrup",
    foodType: "Breakfast",
  },
  {
    img: "src/assets/img/image-29.png",
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    foodType: "Healthy",
  },
  {
    img: "src/assets/img/image-30.png",
    name: "Chicken Meatballs with Cream Chese",
    foodType: "Meat",
  },
  {
    img: "src/assets/img/image-31.png",
    name: "Fruity Pancake with Orange & Blueberry",
    foodType: "Sweet",
  },
  {
    img: "src/assets/img/image-32.png",
    name: "The Best Easy One Pot Chicken and Rice",
    foodType: "Snack",
  },
  {
    img: "src/assets/img/image-33.png",
    name: "The Creamiest Creamy Chicken and Bacon Pasta",
    foodType: "Noodles",
  },
];

function Header() {
  return (
    <div className="header">
      <h1>Simple and tasty recipes</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut <br /> labore et dolore magna aliqut enim ad minim
      </p>
    </div>
  );
}

function Menu({ dishes }) {
  return (
    <div className="menu">
      {dishes.map((dish, index) =>
        index === 5 ? (
          <>
            <div className="ads-image" key={index + 1}>
              <img src="src/assets/img/ads.png" />
            </div>
            <Dish dish={dish} key={index} />
          </>
        ) : (
          <Dish dish={dish} key={index} />
        )
      )}
    </div>
  );
}

function Dish({ dish }) {
  const [color, setColor] = useState(false);

  return (
    <div className="dish">
      <div className="dish-content">
        <div className="dish-image">
          <div className="dish-icon" onClick={() => setColor((h) => !h)}>
            <FontAwesomeIcon
              values={color}
              className={`heart ${color ? "active" : ""}`}
              icon="fa-solid fa-heart"
            />
            {/* <i
              value={color}
              className={`fa-solid fa-heart ${color ? "active" : ""}`}
            ></i> */}
          </div>
          <img src={dish.img} alt="" />
        </div>

        <div className="dish-description">
          <h4>{dish.name}</h4>
          <div>
            <span>
              {/* <i className="fa-solid fa-clock"></i> */}
              <FontAwesomeIcon
                className="bottom-icon clock"
                icon="fa-solid fa-clock"
              />
              30 minutes
            </span>
            <span>
              {/* <i className="bx bx-fork"></i> */}
              <img
                className="bottom-icon knife"
                src="src/assets/img/ForkKnife.png"
                alt=""
              />
              {dish.foodType}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TastyRecipe() {
  return (
    <>
      <Header />
      <Menu dishes={dishes} />
    </>
  );
}
