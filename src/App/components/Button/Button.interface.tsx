import { ReactNode } from 'react';
//def. du format des props
export interface IButtonProps {
  bgcolor?: string;
  color?: string;
  type?: 'button' | 'reset' | 'submit';
  styleDuButton?: object;
  onButtonClicked?: Function;
  children: Array<ReactNode | string> | string | ReactNode;
}
