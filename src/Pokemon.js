import React, {Component} from 'react';
import PokeList from './PokeList.js';

export default class Pokemon extends Component {
  constructor() {
    super()
    this.state = {
    };
  }

  render () {

    return (
      <div id='all-pokemon'>
        <div id='pokeList'>
          <PokeList />
        </div>
      </div>
    )
  }
}
