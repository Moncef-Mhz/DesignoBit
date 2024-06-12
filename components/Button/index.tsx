import { Props } from "next/script";
import React from "react";

export type ButtonType = {
  className?: string;
  onClick?: () => void;
  label?: string;
  appearance?: "default" | "primary" | "secondary" | "none";
  href?: string;
  newTab?: boolean;
  type?: "submit" | "button";
  disabled?: boolean;
};

const Button = (props: ButtonType) => {
  const {
    className,
    onClick,
    label,
    appearance,
    href,
    newTab,
    type,
    disabled,
  } = props;

  const newTabProps = newTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const content = [];

  return (
    <button
      onClick={onClick}
      className={[className, ""].filter(Boolean).join("")}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
