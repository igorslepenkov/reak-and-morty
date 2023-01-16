import { ReactNode } from "react";
import { Container, SxProps, Theme } from "@mui/material";

interface IProps {
  children: ReactNode;
  styles?: SxProps<Theme>;
}

export const Page = ({ children, styles }: IProps) => {
  const newStyles = {
    ...styles,
    flexGrow: 1,
  };
  return <Container sx={newStyles}>{children}</Container>;
};
