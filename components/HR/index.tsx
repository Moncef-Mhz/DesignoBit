import React from "react";

export const HR: React.FC<{ className?: string; color?: string }> = (props) => {
  const { className, color = "white" } = props;
  return (
    <hr
      className={[className, `h-[1px]  border-none my-4 mx-0 bg-${color}/50`]
        .filter(Boolean)
        .join(" ")}
    />
  );
};
