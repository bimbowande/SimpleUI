import { ComponentProps } from "react";
import clsx from "clsx";
import "./TitleHeader.scss";

type TitleHeaderProps = ComponentProps<"h3"> & {
  link: string;
  text: string;
  dataTestId: string;
  variant: "primary" | "secondary";
};
const TitleHeader = ({
  link,
  dataTestId,
  className,
  text,
  variant = "primary",
  ...props
}: TitleHeaderProps) => {
  return (
    <h3
      data-testid={dataTestId}
      className={clsx("title-header", className)}
      {...props}
    >
      <a
        className={clsx(
          variant === "secondary" && "secondary",
          className,
        )}
        href={link}
      >
        {text}
      </a>
    </h3>
  );
};

export default TitleHeader;
