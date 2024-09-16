import { Box, Grid2, Pagination, Stack, Typography } from "@mui/material";
import { T_Exercise, T_ExercisesProps } from "../../types";
import { ExerciseItem, Loader } from "../ui";
import { useEffect, useState } from "react";
import { fetchData, exerciseRequestOptions } from "../../utils/fetchData";

const Exercises: React.FC<T_ExercisesProps> = ({
  exercises,
  setExercises,
  bodyPart,
}) => {
  // State variable to store the current page number
  const [currentPage, setCurrentPage] = useState(1);

  // A variable to store the number of items that should be displayed on each page
  const exercisePerPage = 9;

  // A variable to store the index of the last item
  const indexOfLastExercise = currentPage * exercisePerPage;
  // A variable to store the index of the first item
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  // A variable to trim the specified number of data to be displayed on each page
  const currentExercise = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exerciseData: T_Exercise[] | undefined = [];

      if (bodyPart === "all") {
        // Fetch data for all exercises
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseRequestOptions
        );
      } else {
        // Fetch data for exercises based on the specific bodyPart
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseRequestOptions
        );
      }
      // Update the state variable `exercises` with fetched data (or empty array if no data)
      setExercises(exerciseData ?? []);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  const paginate = (pageNumber: number) => {
    // Update the state variable `currentPage` with the new page number
    setCurrentPage(pageNumber);

    window.scrollTo({ top: 1300, behavior: "smooth" });
  };

  return (
    <Stack
      flexGrow={1}
      width="100%"
      id="exercises"
      alignItems="center"
      justifyItems="center"
      py="20px"
      mt="50px"
    >
      <Typography
        sx={{ fontSize: { xs: "25px", md: "34px" } }}
        fontWeight="700"
      >
        Show results
      </Typography>
      <Grid2
        container
        sx={{ px: { xs: "10px", md: 0 }, width: { xs: "100%", md: "80%" } }}
        gap="15px"
        justifyContent="center"
        my="40px"
        columns={{ xs: 1, sm: 3, md: 3, lg: 4 }}
      >
        {currentExercise.length > 1 ? (
          currentExercise.map((exercise: T_Exercise) => (
            <Grid2 key={exercise.id}>
              <ExerciseItem exercise={exercise} />
            </Grid2>
          ))
        ) : (
          <Loader />
        )}
      </Grid2>

      <Box>
        <Pagination
          defaultPage={1}
          page={currentPage}
          onChange={(_, page: number) => paginate(page)}
          count={Math.ceil(exercises.length / exercisePerPage)}
        />
      </Box>
    </Stack>
  );
};

export default Exercises;
