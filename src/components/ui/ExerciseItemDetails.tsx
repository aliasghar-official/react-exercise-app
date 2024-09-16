import { Box, Button, Stack, Typography } from "@mui/material";
import {ExerciseItemDetailsProps } from "../../types";
import {
  AccessibilityNew,
  FitnessCenter,
  ModeStandby,
} from "@mui/icons-material";

const ExerciseItemDetails: React.FC<ExerciseItemDetailsProps> = ({
  exerciseDetails,
}) => {
  const { name, gifUrl, bodyPart, equipment, target } = exerciseDetails;

  const exteraDataExercise = [
    {
      icon: <AccessibilityNew />,
      name: bodyPart,
    },
    {
      icon: <ModeStandby />,
      name: target,
    },
    {
      icon: <FitnessCenter />,
      name: equipment,
    },
  ];

  return (
    <Stack
      mx="auto"
      sx={{
        flexDirection: { sm: "row" },
        px: { xs: "20px", md: 0 },
        width: { xs: "100%", md: "80%" },
        gap: "20px",
      }}
    >
      <Box
        mx="auto"
        sx={{
          width: {
            xs: "100%",
            md: "40%",
            borderRadius: "15px",
            overflow: "hidden",
          },
        }}
      >
        <img
          src={gifUrl}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "15px",
          }}
          loading="lazy"
        />
      </Box>
      <Box mx="auto" sx={{ width: { xs: "100%", md: "50%" } }}>
        <Typography fontWeight="600" sx={{fontSize : {xs : "36px", md : "52px"}}}>
          {name}
        </Typography>
        <Typography mt="30px">
          Exercises keep you strong. {name} is one of the best exercises to
          target your {target}. It will help you improve your mood and gain
          energy.
        </Typography>

        <Stack
          mt="30px"
          sx={{
            flexDirection: { xs: "row", md: "column" },
            flexWrap: { xs: "wrap" },
            gap: {xs : "15px", md:"0"},
          }}
        >
          {exteraDataExercise.map((item) => (
            <Stack
              key={item.name}
              direction="row"
              gap="15px"
              my={"15px"}
              alignItems="center"
            >
              <Button
                color="info"
                variant="contained"
                sx={{ width: "50px", height: "60px", borderRadius: "100%" }}
              >
                {item.icon}
              </Button>
              <Typography textTransform="capitalize" fontSize="15px">
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default ExerciseItemDetails;
