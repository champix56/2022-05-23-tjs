import { ReactNode } from "react";
//def. du format des props
export interface IButtonProps {
  /**
   * Background color of button?
   */
  bgcolor?: string;
  /**
   * write color?
   */
  color?: string;
  /**
   * button type?
   */
  type?: "button" | "reset" | "submit";
  /**
   * css style overload?
   */
  styleDuButton?: object;
  /**
   * click action?
   */
  onButtonClicked?: Function;
  /**
   *  Enfants affichables+
   * chaines ou noeuds +
   */
  children: Array<ReactNode | string> | string | ReactNode;
}
