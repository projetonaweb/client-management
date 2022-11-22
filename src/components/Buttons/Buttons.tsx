import { ButtonPersonalized } from './style'

const Buttons = ({ onClick, color, text }: any) => {
  return <ButtonPersonalized onClick={onClick} color={color}>{text}</ButtonPersonalized>
}

export default Buttons