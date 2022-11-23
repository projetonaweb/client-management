import { ButtonPersonalized } from "./style";

type ButtonsTypes = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color: string;
  text: string;
  color2?: string
};

const Buttons = ({ onClick, color, text, color2 }: ButtonsTypes) => {
  return (
    <ButtonPersonalized onClick={onClick} color2={color2} color={color}>
      {text}
    </ButtonPersonalized>
  );
};

export default Buttons;
