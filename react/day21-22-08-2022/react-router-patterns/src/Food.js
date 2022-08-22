// import { Component } from "react";
import { useParams } from "react-router-dom";

// class Food extends Component {
//   render() {
//     console.log(this.props);
//     const name = this.props.name;
//     const URL = `https://source.unsplash.com/1600x900/?${name}`;
//     return (
//       <div className="Food">
//         <h1>I Love to eat {name}</h1>
//         <img src={URL} alt={name} style={{ width: "50%" }} />
//       </div>
//     );
//   }
// }

const Food = (props) => {
  const { name } = useParams();
  const URL = `https://source.unsplash.com/1600x900/?${name}`;
  return (
    <div className="Food">
      <h1>I Love to eat {name}</h1>
      <img src={URL} alt={name} style={{ width: "50%" }} />
    </div>
  );
};

export default Food;
