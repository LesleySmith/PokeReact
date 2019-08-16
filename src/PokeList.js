import React, {Component} from 'react';
import OnePokemon from './OnePokemon.js';

export default class PokeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [],
      paginate: [],
      offset: 0,
      top: 2,
      request: 'https://pokeapi.co/api/v2/pokemon',
    };
    this.handleBack = this.handleBack.bind(this)
    this.handleForward = this.handleForward.bind(this)
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=150/`)
    .then(results => {
      return results.json();
    }).then(data => {
      let pokemons = data.results
      this.setState({ pokemon: pokemons });
      this.paginate(this.state.pokemon);
    })
  }

  async paginate(pokemon) {
    let newPokeSet = [];

    for(let i = this.state.offset; i <= this.state.top; i++) {
      newPokeSet.push(pokemon[i]);
    }
    await this.setState({ paginate: newPokeSet });
  }

  handleBack() {
    if(this.state.offset >= 0) {
      this.setState({
         offset: this.state.offset - 3,
         top: this.state.top - 3
        }, () => { this.paginate(this.state.pokemon) });
    }
  }

  handleForward() {
    if(this.state.top !== 150) {
      this.setState({
        offset: this.state.offset + 3,
        top: this.state.top + 3,
       }, () => { this.paginate(this.state.pokemon) });
    }
  }

  render() {
    const paginate = this.state.paginate

    return (
      <div className='single-pokemon'>
        <div className='pokemon-card'>
          {
            paginate.map((pokemon, index) => <OnePokemon id={index+1} key={pokemon.name} pokemon={this.state.pokemon} singlePoke={pokemon} />)
          }
        </div>
        <div className='button-box'>
          <div className='buttons'>
            <button onClick={this.handleBack}>Back</button>
          </div>
          <div className='buttons'>
            <button onClick={this.handleForward}>Forward</button>
          </div>
        </div>
      </div>
    )
  }
}
