import { Component } from "react";
import { Link } from "react-router-dom";
// import Food from "./Food";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcom to Home!</h1>
        <h2>Use for food -- https://localhost:3000/food/[foodName]</h2>
        <h2>
          Use for meal --
          https://localhost:3000/food/[foodName]/drink/[drinkName]
        </h2>
        <h2>
          <Link to="/searchFood">Search food by yourself!</Link>
        </h2>
      </div>
    );
  }
}

export default App;
