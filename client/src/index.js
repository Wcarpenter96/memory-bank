import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faApple, faAmazon, faAirbnb, faFacebook, faGoogle, faLinkedin, faMicrosoft,
    faNapster, faSalesforce, faSoundcloud, faTwitter, faUber, faSnapchat, faSteam, faYoutube,
    faReddit, faAndroid, faInstagram, faGithub, faTripadvisor, faTrello, faAdobe, faDropbox, faSpotify
}
    from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee, faApple, faAmazon, faAirbnb, faFacebook, faGoogle, faLinkedin, faMicrosoft,
    faNapster, faSalesforce, faSoundcloud, faTwitter, faUber, faSnapchat, faSteam, faYoutube,
    faReddit, faAndroid, faInstagram, faGithub, faTripadvisor, faTrello, faAdobe, faDropbox, faSpotify)

ReactDOM.render(<App />, document.getElementById('root'));

