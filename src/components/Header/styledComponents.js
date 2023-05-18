import styled from 'styled-components'

export const HeaderContainer = styled.div`
    border:2px solid white;
    border-radius:10px;
    width:700px;
    padding:10px;
    display:flex:
    flex-direction:row;
    justify-content:space-between;
`
export const StyledText = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-family: 'Bree Serif';
`

export const StyledScore = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 30px;
  margin-top: 0;
`
export const ScoreContainer = styled.div`
  background-color: white;
  padding: 10px;
  height: 100%;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`
