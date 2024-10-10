import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import { WidthHeight } from "./WidthHeight";
import { LeftRightTopBottom } from "./LeftRightTopBottom";
import { MinMaxWidthHeight } from "./MinMaxWidthHeight";

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> &
  LeftRightTopBottom &
  MinMaxWidthHeight & { src?: string };

export const Div: FC<DivProps> = ({
  width,
  height,
  style: _style,
  src,
  className: _className,
  left,
  right,
  top,
  bottom,
  minWidth,
  minHieght,
  maxHeight,
  maxWidth,
  ...props
}) => {
  const style = {
    ..._style,
    width,
    height,
    backgroundImage: src && `url(${src})`,
    left,
    right,
    top,
    bottom,
    minWidth,
    minHieght,
    maxHeight,
    maxWidth,
  };

  const className = [`box-border`, src && `bg-gray-300`, _className].join(` `);
  return <div {...props} style={style} className={className} />;
};
