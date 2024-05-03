import "./Button.css";
import { ButtonType } from "./ButtonType";

type Props = {
  type: ButtonType;
  label: string;
  onClick: () => void;
};

export const Button = ({ type, label, onClick }: Props) => {
  return (
    <button className={`button button-${type}`} onClick={onClick}>
      {label}
    </button>
  );
};
