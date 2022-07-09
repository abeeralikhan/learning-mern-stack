import { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
    static defaultProps = {
        pokemons: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ],
    };
    render() {
        const { pokemons } = this.props;
        const temp_pokemons = pokemons;

        const getRandomNumber = (n) => {
            return Math.floor(Math.random() * n) + 0;
        }

        const dex1 = [];

        for (let i = 0; i < 4; i++) {
            const idx = getRandomNumber(temp_pokemons.length);
            dex1.push(temp_pokemons[idx]);
            temp_pokemons.splice(idx, 1);
        }

        const dex2 = temp_pokemons;

        const calcualte_total_exp = dex => {
            return dex.reduce((total, current) => {
                return total+=Number(current.base_experience);
            }, 0);
        };

        const dex1_total_exp = calcualte_total_exp(dex1);
        const dex2_total_exp = calcualte_total_exp(dex2);

        console.log(dex1_total_exp, dex2_total_exp);
        return (
            <>
                <Pokedex pokemons={dex1} total_exp={dex1_total_exp} isWinner={dex1_total_exp>dex2_total_exp}/>
                <Pokedex pokemons={dex2} total_exp={dex2_total_exp} isWinner={dex2_total_exp>dex1_total_exp}/>
            </>
        )
    }
}

export default Pokegame;