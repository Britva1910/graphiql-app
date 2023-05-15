import React, { ReactNode } from 'react';

import './Button.scss';

interface ButtonProps {
  children: ReactNode;
  color: 'cyan' | 'purple' | 'red';
}

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <>
      <button className={`btn btn--arrow btn--${props.color}`}>{props.children}</button>
    </>
  );
};

export default Button;
