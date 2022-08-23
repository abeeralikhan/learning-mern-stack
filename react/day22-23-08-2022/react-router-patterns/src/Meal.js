import { useParams } from "react-router-dom";

const Meal = (props) => {
  const { foodName, drinkName } = useParams();
  const URL = (name) => `https://source.unsplash.com/1600x900/?${name}`;
  const foodURL = URL(foodName);
  const drinkURL = URL(drinkName);

  return (
    <div className="Food">
      <h1>
        I Love to eat {foodName} and drink {drinkName}
      </h1>
      <img src={foodURL} alt={foodName} style={{ width: "50%" }} />
      <img src={drinkURL} alt={drinkName} style={{ width: "50%" }} />
    </div>
  );
};

export default Meal;
