import { Div, Icon, Title } from "../components";
import * as D from "../data";
import type { DivProps } from "../components";
import { FC } from "react";
import User from "./User";

export type CardProps = DivProps & {
  card: D.ICard;
};

const Card: FC<CardProps> = ({ card, ...props }) => {
  const { writer, image, title, paragraph, dayMonthYearDate, relativeDate } =
    card;

  const icons = [`home`, `search`, `settings`, `favorite`].map((name) => (
    <Icon key={name} name={name} className="mr-2 text-3xl" />
  ));

  return (
    <Div {...props}>
      <div className="flex flex-col">
        <Div src={image} className="h-60"></Div>
        <Div className="p-4" minHieght="16rem" height="16rem" maxHeight="16rem">
          <p className="mt-2 text-3xl text-center text-bold">{title}</p>
          <Div className="flex justify-between">
            <User user={writer} className="mt-2"></User>
            <Div className="mt-2">
              <p className="text-gray-500">{relativeDate}</p>
              <p className="text-gray-500">{dayMonthYearDate}</p>
            </Div>
          </Div>
          <p className="mt-2 line-clamp-4">{paragraph}</p>
          <Div className="flex flex-row items-center justify-between p-2 mt-2 text-red-500">
            {icons}
          </Div>
        </Div>
      </div>
    </Div>
  );
};

export default Card;
