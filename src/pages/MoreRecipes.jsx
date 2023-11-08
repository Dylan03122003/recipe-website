import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomRecipes } from "../api/recpie";

const MoreRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRandomRecipes(10, setRecipes);
  }, []);

  return (
    <div className="my-5 flex justify-center flex-wrap gap-10">
      {recipes.map((r) => (
        <Link
          key={r.id}
          to={`/more-recipes/${r.id}`}
          className="flex flex-col w-[300px] bg-gray-50 p-4 rounded-md shadow-custom"
        >
          <img src={r.image} alt="" className="w-full" />
          <h2 className="flex-grow my-5 text-gray-600 font-semibold">
            {r.title}
          </h2>
          <div className="flex items-start justify-start flex-wrap flex-grow gap-2">
            {r.dishTypes.map((type, index) => (
              <p
                className="py-1 px-3 rounded-full bg-green-100 text-green-600"
                key={index}
              >
                {type}
              </p>
            ))}
          </div>
          <p className="mt-5 text-gray-500">
            Healthscore:{" "}
            <span className="text-gray-600 font-semibold">{r.healthScore}</span>
          </p>
        </Link>
      ))}
    </div>
  );
};

export default MoreRecipes;
