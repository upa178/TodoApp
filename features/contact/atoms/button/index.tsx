import { ReactNode } from "react";
import * as Styled from "./style";

type Props = {
  children: ReactNode;
} & JSX.IntrinsicElements["button"];

export const Button = (props: Props) => {
  const { children, ...rest } = props;
  return <Styled.MyButton {...rest}>{children}</Styled.MyButton>;
};
