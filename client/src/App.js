import React, { Component } from 'react';
import Nav from './components/Nav'
import CardGrid from './components/CardGrid'

class App extends Component {
  state = {
    icons: ['microsoft', 'google', 'napster', 'amazon', 'salesforce', 'twitter',
      'facebook', 'soundcloud', 'snapchat', 'reddit', 'android', 'instagram', 'github',
      'tripadvisor', 'airbnb', 'linkedin', 'uber', 'apple', 'steam', 'youtube', 'trello',
      'adobe', 'dropbox', 'spotify'],
    iconsClicked: [],
    score: 0,
    highscore: 0,
    animation: ''
  }

  reset = () => {
    this.setState({
      iconsClicked: [],
      score: 0,
      animation: 'restart'
    })
  }

  lose = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({
        highscore: this.state.score
      })
    }
    this.setState({
      iconsClicked: [],
      score: 0,
      animation: 'lose'
    })
  }

  win = () => {
    this.setState({
      iconsClicked: [],
      highscore: 24,
      score: 0,
      animation: 'win'
    })
  }

  handleClick = (icon) => {
    this.setState({
      animation: ''
    })
    let unique = true;
    let { iconsClicked, icons } = this.state
    for (let i = 0; i < iconsClicked.length; i++) {
      if (icon === iconsClicked[i]) unique = false;
    }
    if (unique) {
      iconsClicked.push(icon);
      this.setState({
        score: this.state.score + 1
      })
      if (iconsClicked.length === icons.length) {
        this.win();
      }
      let shuffledIcons = this.shuffle(icons)
      this.setState({
        icons: shuffledIcons
      })
    } else {
      this.lose();
    }
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  render() {
    let { score, highscore, icons, animation } = this.state
    return (
      <div>
        <Nav score={score} highscore={highscore} reset={this.reset} />
        <CardGrid icons={icons} animation={animation} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
