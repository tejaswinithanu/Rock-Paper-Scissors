import {Component} from 'react'

import Header from '../Header'
import GameView from '../GameView'
import GameResultView from '../GameResultView'
import RulesPopup from '../RulesPopup'

import {GameContainer} from './styledComponents'

class Game extends Component {
  state = {
    isClicked: false,
    yourChoice: '',
    oppChoice: '',
    score: 0,
    result: '',
  }

  onSubmitGame = id => {
    const {choicesList} = this.props
    const randomNum = Math.floor(Math.random() * 2)
    const randomUrl = choicesList[randomNum].imageUrl
    const randomId = choicesList[randomNum].id
    const yourChoice = choicesList.find(each => each.id === id)
    this.setState({
      yourChoice: yourChoice.imageUrl,
      oppChoice: randomUrl,
      isClicked: true,
    })
    if (id === randomId) {
      this.setState({result: 'IT IS DRAW'})
    } else if (
      (id === 'ROCK' && randomId === 'SCISSORS') ||
      (id === 'SCISSORS' && randomId === 'PAPER') ||
      (id === 'PAPER' && randomId === 'ROCK')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    }
  }

  onPlayAgain = () => {
    this.setState({isClicked: false})
  }

  render() {
    const {choicesList} = this.props
    const {isClicked, score, result, yourChoice, oppChoice} = this.state
    return (
      <GameContainer>
        <Header score={score} />
        {isClicked ? (
          <GameResultView
            onPlayAgain={this.onPlayAgain}
            result={result}
            yourImage={yourChoice}
            oppImage={oppChoice}
          />
        ) : (
          <GameView
            onSubmitGame={this.onSubmitGame}
            choicesList={choicesList}
          />
        )}
        <RulesPopup />
      </GameContainer>
    )
  }
}

export default Game
