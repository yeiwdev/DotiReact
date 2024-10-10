import { Button, ButtonProps } from "./Button";
import type { IconsProps as CIconProps } from "../../components";
import { Icon as CIcon } from "../../components";
import { FC } from "react";

export type IconProps = ButtonProps &
  CIconProps & {
    iconClassName?: string;
  };

export const Icon: FC<IconProps> = ({
  name,
  iconClassName,
  className,
  ...buttonProps
}) => {
  const btnClassName = [`btn-circle`, className].join(` `);

  return (
    <Button {...buttonProps} className={btnClassName}>
      <CIcon className={iconClassName} name={name} />
    </Button>
  );
};
