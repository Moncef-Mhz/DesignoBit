import React, { Ref, forwardRef } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  ref?: Ref<HTMLDivElement>;
};

export const Gutter: React.FC<Props> = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { className, children } = props;

    return (
      <div
        className={[
          className,
          "max-w-[1920px] px-2  md:px-32 lg:px-[160px] mx-auto",
        ]
          .filter(Boolean)
          .join(" ")}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
