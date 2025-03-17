import React from "react";
import { ComponentProps, ReactElement } from "react";
import "./NavItem.css";

type NavItemProps = ComponentProps<"li"> & {
  dataTestId: string;
  text: string;
  iconSrc?: string | ReactElement;
  iconType?: "library" | "image" | "className";
};

type IconProps = Pick<NavItemProps, "iconType" | "iconSrc">;

export const NavItem = ({
  dataTestId,
  iconSrc,
  iconType,
  text,
  className,
  ...props
}: NavItemProps) => {
  return (
    <li
      className={`list-item ${className}`}
      data-testid={dataTestId}
      {...props}
    >
      <IconDisplay iconType={iconType} iconSrc={iconSrc} />
      {text}
    </li>
  );
};

const renderImageIcon = (iconSrc: string) => (
  <img alt="icon for nav item" src={iconSrc} />
);
const renderLibraryIcon = (iconSrc: ReactElement) => iconSrc;

const renderClassNameIcon = (iconSrc: string) => <span className={iconSrc} />;

export const IconDisplay = ({ iconType, iconSrc }: IconProps) => {
  if (!iconSrc || !iconType) return null;

  switch (iconType) {
    case "image":
      return typeof iconSrc === "string" ? renderImageIcon(iconSrc) : null;
    case "library":
      return React.isValidElement(iconSrc) ? renderLibraryIcon(iconSrc) : null;
    case "className":
      return typeof iconSrc === "string" ? renderClassNameIcon(iconSrc) : null;
    default:
      return null;
  }
};
