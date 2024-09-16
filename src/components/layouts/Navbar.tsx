import { FitnessCenter } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack direction="row" px={5} py={4} bgcolor="transparent" alignItems="center" gap={{xs : 3, sm : 15}}>
      <Link to="/">
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography variant="h6" fontWeight={900} color="primary">
            BRAND
          </Typography>
          <FitnessCenter color="primary" />
        </Stack>
      </Link>
      <Stack direction="row" gap={{xs : 2, sm : 5}}>
        <Link to="/">Home</Link>
        <Link to="/#exercises" onClick={() => window.scrollTo({top : 1800, behavior : "smooth"})}>Exercises</Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
