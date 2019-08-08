import React, {Component} from 'react';

export default class OnePokemon extends Component {
  constructor (props) {
    super(props)
    this.state = {
      singlePokemon: {},
      pokeId: '',
      requestRoot: 'https://pokeapi.co/api/v2/pokemon/',
    };
  }

  componentDidMount () {
    const request = `${this.state.requestRoot}${this.props.id}`
    fetch(request)
    .then(results => results.json())
    .then(data => {
      this.setState({ singlePokemon: data })
    })
  }

  render () {
    let pokemonId = this.props.id
    // console.log('PROPS',this.props,'STATE', this.state)

    return (
      <div id='one-pokemon'>
        <h2>{this.props.pokemon.name}</h2>
        <h4>Pokemon Id: {this.props.id}</h4>
        <img alt='pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}></img>
      </div>
    )
  }
}
