import React, { ReactNode } from "react";
import { cx } from "emotion";
import { boxCard } from "./_cardStyle";

type Props = {
  bg: string;
  className: string;
  children?: ReactNode;
};

export const Card: React.FC<Props> = ({ bg, className, children }) => {
  return (
    <div className={cx(boxCard, className)}>
      <div className="card">
        <div className="image">
          <svg viewBox="0 0 50 60" xmlns="http://www.w3.org/2000/svg">
            <image
              height="100%"
              width="100%"
              preserveAspectRatio="xMidYMid"
              xlinkHref={bg}
              clipPath="url(#image-mask)"
            ></image>
          </svg>
        </div>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export const CardPreloader = (): JSX.Element => {
  return (
    <div className={boxCard}>
      <div className="card is-loading">
        <div className="image"></div>
        <div className="card-body">
          <h2></h2>
          <h3></h3>
          <h4></h4>
        </div>
      </div>
    </div>
  );
};
