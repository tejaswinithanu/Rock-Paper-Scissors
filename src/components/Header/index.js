import {
  HeaderContainer,
  StyledText,
  StyledScore,
  ScoreContainer,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderContainer>
      <StyledText color="white" size="15px">
        ROCK
        <br />
        PAPER
        <br />
        SCISSORS
      </StyledText>
      <ScoreContainer>
        <StyledText as="p" color="#223a5f">
          Score
        </StyledText>
        <StyledScore>{score}</StyledScore>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header
