import { Box } from "@mui/material";
import { RootLayoutProps } from "../../types";

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default RootLayout;
