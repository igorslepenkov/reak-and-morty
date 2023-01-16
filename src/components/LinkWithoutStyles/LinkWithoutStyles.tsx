import { ReactNode } from "react";
import { StyledLink } from "./style";

interface IProps {
  children: ReactNode;
  to: string;
}

export const LinkWithoutStyles = ({ to, children }: IProps) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
