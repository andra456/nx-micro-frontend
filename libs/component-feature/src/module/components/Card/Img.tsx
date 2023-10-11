import React from "react";
import { cx } from "emotion";
import { boxCard } from "./_cardStyle";
type Props = {
  src: string;
  className?: string;
};

export const Img: React.FC<Props> = ({ src, className }) => {
  return <div className={cx(boxCard, className)} style={{ backgroundImage: `url(${src})` }}></div>;
};
