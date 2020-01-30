import React, { Component } from 'react';
import './styles/main.scss';
import About from './components/about';
import Projects from './components/projects';
import Social from './components/social';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();


class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  getNowPlaying(){
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: { 
              name: response.item.name, 
              albumArt: response.item.album.images[0].url
            }
        });
      })
  }

  render() {
    return (
      <div className="App">
        <About />
        <Projects />
        <Social />
        <div className="spotify">
          <a href='http://localhost:8888' className="btn btn-dark">Spotify Login</a>
          <div>
            Now Playing: {this.state.nowPlaying.name}
          </div>
          <div>
            <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} alt="spotify albumn art" />
          </div>
          {this.state.loggedIn &&
            <button onClick={() => this.getNowPlaying()} className="btn btn-dark"> Check Now Playing </button>}
        </div>
      </div>
    );
  }
}


export default App;
