import { useParams, Link } from "react-router-dom";

const Food = (props) => {
  const { name } = useParams();
  const URL = `https://source.unsplash.com/1600x900/?${name}`;
  return (
    <div className="Food">
      <Link to="/">Back to home</Link>
      <Link to="/searchFood">Back to search</Link>
      <h1>I Love to eat {name}</h1>
      <img src={URL} alt={name} style={{ width: "50%" }} />
    </div>
  );
};

export default Food;
