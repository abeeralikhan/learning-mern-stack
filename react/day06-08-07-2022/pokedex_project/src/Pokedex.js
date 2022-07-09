import { Component } from "react";
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        const { pokemons, isWinner, total_exp } = this.props;
        const verdictClasses = ['Pokedex-verdict']
        let verdict;
        if (isWinner) {
            verdict = 'Winning Hand';
            verdictClasses.push('Pokedex-win');
        } else {
            verdict = 'Losing Hand';
            verdictClasses.push('Pokedex-lose');
        }
        return (
            <div className="Pokedex">
                <div className="Pokedex-header">
                    <p className={ verdictClasses.join(' ') }>{ verdict }</p>
                    <p className="Pokedex-total-exp">Total experience: {total_exp}</p>
                </div>
                <div className="Pokedex-deck">
                    {pokemons.map(((p) => {
                        return <Pokecard id={p.id} name={p.name} type={p.type} base_exp={p.base_experience}/>
                    }))}
                </div>
            </div>
        )
    }
}
export default Pokedex;