import React, { ReactNode } from "react";
import { global } from "../styles/_global";
import "../styles/system/global/globals.css";
interface IProps {
  children: ReactNode;
}
const ThemeUI = ({ children }: IProps): JSX.Element => <div className={global}> {children}</div>;

export default ThemeUI;
