import {
  GameContainer,
  StyledImage,
  StyledButton,
  ListItem,
} from './styledComponents'

const Button = props => {
  const {onSubmitGame, choiceDetails} = props
  const {id, imageUrl} = choiceDetails
  const onClickImage = () => {
    onSubmitGame(id)
  }
  return (
    <ListItem>
      <StyledButton
        onClick={onClickImage}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <StyledImage alt={id} src={imageUrl} />
      </StyledButton>
    </ListItem>
  )
}

const GameView = props => {
  const {choicesList, onSubmitGame} = props

  return (
    <GameContainer>
      {choicesList.map(each => (
        <Button
          key={each.id}
          choiceDetails={each}
          onSubmitGame={onSubmitGame}
        />
      ))}
    </GameContainer>
  )
}

export default GameView
