import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
//import giphy from 'giphy-api';
var giphy = require('giphy-api')();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };

  }

  search = (query) => {
    giphy.search({
      q: query,
      rating: 'g',
      https: true
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (selectedId) => {
    this.setState({
      selectedGifId: selectedId
    })
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;
