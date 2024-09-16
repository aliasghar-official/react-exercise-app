import { FitnessCenter } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      direction="row"
      px={5}
      py={4}
      bgcolor="#1E1E1E"
      alignItems="center"
      justifyContent="center"
      gap={15}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Typography variant="h6" fontWeight={900} color="primary">
          BRAND
        </Typography>
        <FitnessCenter color="primary" />
      </Stack>
    </Stack>
  );
};

export default Footer;
