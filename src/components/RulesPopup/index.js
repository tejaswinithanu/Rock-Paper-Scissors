import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  PopupButton,
  PopupContainer,
  PopupImage,
  CloseButton,
} from './styledComponents'

const RulesPopup = () => (
  <CloseButton as="div">
    <Popup modal trigger={<PopupButton>RULES</PopupButton>}>
      {close => (
        <PopupContainer>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </CloseButton>
          <div>
            <PopupImage
              alt="rules"
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            />
          </div>
        </PopupContainer>
      )}
    </Popup>
  </CloseButton>
)

export default RulesPopup
