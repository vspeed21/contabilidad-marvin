import './BurgerButton.css';

interface Props {
  isClicked: boolean
}

function BurgerButton({ isClicked }: Props) {
  return (
    <div className={`z-30 burger_icon_container ${isClicked ? 'open' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default BurgerButton;
