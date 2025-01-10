import React from 'react';
import './Button.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button className="custom-button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
