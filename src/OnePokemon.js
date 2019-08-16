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
      this.setState({ singlePokemon: data }, () => {this.sliceTheId(this.props.singlePoke.url) });
    })
  }

  sliceTheId(url) {
    // Helper function to grab correct pokemon ID/Sprite from URL

    let count = 0;
    let theId = '';

    for(let i = url.length - 1; i >= 0; i--) {
      if(count === 1 && url[i] === '/') {
        let theSlice = url.slice(i + 1, url.length-1);
        theId = theSlice;

        console.log(theId);
        this.setState({ pokeId: theId });

        return theId;

      } else if(url[i] === '/') {
        count++;
      }
    }
  }

  render () {

    return (
      <div id='one-pokemon'>
        <h2 className='uppercase'>{this.props.singlePoke.name}</h2>
        <h4>Pokemon Id: {this.state.pokeId}</h4>
        <img alt='pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.pokeId}.png`}></img>
      </div>
    )
  }
}
