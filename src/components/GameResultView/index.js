import {
  StyledImage,
  ResultContainer,
  ResultText,
  CustomButton,
  CustomContainer,
} from './styledComponents'

const GameResultView = props => {
  const {oppImage, yourImage, result, onPlayAgain} = props
  const onClickPlayAgain = () => {
    onPlayAgain()
  }
  return (
    <div>
      <ResultContainer>
        <CustomContainer>
          <ResultText>YOU</ResultText>
          <StyledImage alt="your choice" src={yourImage} />
        </CustomContainer>
        <CustomContainer>
          <ResultText>OPPONENT</ResultText>
          <StyledImage alt="opponent choice" src={oppImage} />
        </CustomContainer>
      </ResultContainer>
      <div>
        <ResultText as="h1">{result}</ResultText>
        <CustomButton type="button" onClick={onClickPlayAgain}>
          PLAY AGAIN
        </CustomButton>
      </div>
    </div>
  )
}

export default GameResultView
