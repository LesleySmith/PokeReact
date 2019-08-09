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
      <div className='all-pokemon'>
        <div className='pokeList'>
          <PokeList />
        </div>
      </div>
    )
  }
}
