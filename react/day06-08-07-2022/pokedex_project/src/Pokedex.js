import { Component } from "react";
import Pokecard from './Pokecard';

class Pokedex extends Component {
    render() {
        const { pokemons } = this.props;
        return (
            <div>
                {pokemons.map(((p) => {
                    return <Pokecard id={p.id} name={p.name} type={p.type} base_exp={p.base_experience}/>
                }))}
            </div>
        )
    }
}
export default Pokedex;