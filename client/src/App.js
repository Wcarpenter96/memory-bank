import React, { Component } from 'react';
import Nav from './components/Nav'
import CardGrid from './containers/CardGrid'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faApple, faAmazon, faAirbnb, faFacebook, faGoogle, faLinkedin, faMicrosoft, 
  faNapster, faSalesforce, faSoundcloud, faTwitter, faUber, faSnapchat, faSteam, faYoutube, 
  faReddit, faAndroid, faInstagram, faGithub, faTripadvisor, faTrello } 
  from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
 
library.add(faCoffee, faApple, faAmazon, faAirbnb, faFacebook, faGoogle, faLinkedin, faMicrosoft, 
  faNapster, faSalesforce, faSoundcloud, faTwitter, faUber, faSnapchat, faSteam, faYoutube, 
  faReddit, faAndroid, faInstagram, faGithub, faTripadvisor, faTrello)

class App extends Component {
  state = {
    gameOver: false
  }
  render() {
    return (
      <div>
        <Nav/>
        <CardGrid/>
      </div>
    );
  }
}

export default App;
