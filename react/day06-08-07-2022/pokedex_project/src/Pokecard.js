import { Component } from "react";
import './Pokecard.css';

class Pokecard extends Component {
    render() {
        const getExtendedId = (id) => {
            if (id < 10) {
                return '00' + id;
            } else if (id < 100) {
                return '0' + id;
            } else {
                return id;
            }
        }
        const {id, name, type, base_exp} = this.props;
        const p_id = getExtendedId(id);
        const src = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + p_id + ".png";
        return (
            <div className="Pokecard">
                <div className="Pokecard-container">
                    <img className="Pokecard-img" src={ src }/>
                    <p className="Pokecard-name"> { name } </p>
                    <p className="Pokecard-details">Type: { type }</p>
                    <p className="Pokecard-details">EXP: { base_exp }</p>
                </div>
            </div>
        );
    }
}

export default Pokecard;