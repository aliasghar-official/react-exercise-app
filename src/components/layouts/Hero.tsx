import { Box, Button, Stack, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "95%",
          height: "100%",
          borderRadius: "16px",
          backgroundImage: "url('./hero-desktop.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          overflow : "hidden"
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(90deg, rgba(21,21,22,1) 13%, rgba(21,21,22,0.04687995803790268) 100%)",
            overflow: "hidden",
          }}
        >
          <Stack
            sx={{
              width: "100%",
              height: "100%",
              px: { xs: "15px", sm: "35px", md: "55px" },
            }}
            alignItems="start"
            justifyContent="center"
            gap="5px"
          >
            <Typography variant="h5" color="#ff2526" fontWeight="700">
              Fitness Club
            </Typography>
            <Typography sx={{fontSize : {xs : "55px", md:"95px"}}} fontWeight="700">
              Sweat, Smile <br /> And Repeat
            </Typography>
            <Typography variant="h6">
              Check out the most effective exercises
            </Typography>
            <Button  variant="contained" sx={{mt : "25px"}} href="#exercises">Explore exercises</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
