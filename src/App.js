import React, { Component } from 'react';
import './styles/main.scss';
import About from './components/about';
import Projects from './components/projects';
import { SocialIcon } from 'react-social-icons';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();


class App extends Component {
  constructor() {
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

  getNowPlaying() {
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: {
            name: response.item.name,
            albumArt: response.item.album.images[0].url
          }
        });
      })
      .catch(error => alert('cannot retrieve spotify information right now'));
  }

  render() {
    return (
      <div className="App">
        <About />
        <Projects />
        <div id="social" className="Social">
          <h2 className="Subtitle">Get in Touch</h2>
          <br />
          <p className="Paragraph">Feel free to get in touch through any of the social media platforms listed below.</p>
          <br />
          <div className="spotify">
            <div className="Paragraph">
              Now Playing: {this.state.nowPlaying.name}
            </div>
            <br />
            <div>
              <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} alt="album art" />
            </div>
            <br />
            {this.state.loggedIn &&
              <button onClick={() => this.getNowPlaying()} className="btn btn-dark">
               Check Spotify Now Playing
          </button>
            }
          </div>
          <br />
          <a className="btn btn-dark cv" href="https://drive.google.com/file/d/10JS6e8AnNfVwuHiB5PUV1HUbs8W-Qzqp/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
          <br />
          <div className="social-icons">
            <SocialIcon url="https://twitter.com/CodesJamber" network="twitter" target="_blank" style={{ height: 25, width: 25, margin: 5 }} bgColor="#272727" fgColor="#ffffff" />
            <SocialIcon url="https://www.linkedin.com/in/jasmine-amber-patel-b04956a1/" network="linkedin" target="_blank" style={{ height: 25, width: 25, margin: 5 }} bgColor="#272727" fgColor="#ffffff" />
            <SocialIcon url="https://github.com/JasmineAmberPatel" network="github" target="_blank" style={{ height: 25, width: 25, margin: 5 }} bgColor="#272727" fgColor="#ffffff" />
            <SocialIcon url="https://www.behance.net/jasmineamberdesign" network="behance" target="_blank" style={{ height: 25, width: 25, margin: 5 }} bgColor="#272727" fgColor="#ffffff" />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
