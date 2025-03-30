import React from 'react';
import cn from 'classnames';
import Loader from "../Loader";
import Text from "../Text";
import "./Button.scss";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Состояние загрузки */
  loading?: boolean;
  /** Текст кнопки */
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
    className,
    loading,
    disabled,
    children,
    ...props
 }) => {
  return (
      <button
      className={cn(className, 'button', disabled && `button_disabled`)}
      disabled={disabled || loading}
      {...props}
      >
        {loading && <Loader className={"button__loader"} size={"s"} /> }
        <Text tag={"span"} view={"button"}>
          {children}
        </Text>
      </button>
  )
};

export default Button;
