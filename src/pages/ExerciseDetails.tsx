import { Box } from "@mui/material";
import {
  ExerciseItemDetails,
  ExerciseVideos,
  Loader,
  SimilarExercises,
} from "../components/ui";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchData,
  exerciseRequestOptions,
  youtubeRequestOptions,
} from "../utils/fetchData";
import { T_Exercise, T_ExerciseVideoList, T_YoutubeData } from "../types";

const ExerciseDetails = () => {
  // State variables to manage exercise details and exercise videos
  const [exerciseDetails, setExerciseDetails] = useState<T_Exercise>();
  const [exerciseVideos, setExerciseVideos] = useState<
    T_ExerciseVideoList | undefined
  >();

  // Extract exercise ID from URL parameters
  const { id } = useParams();

  // useEffect hook to fetch exercise details and related videos
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDatabaseUrl = "https://exercisedb.p.rapidapi.com";

      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      // Fetch exercise details from the exercise database
      const exerciseDetailsData = await fetchData<T_Exercise>(
        `${exerciseDatabaseUrl}/exercises/exercise/${id}`,
        exerciseRequestOptions
      );

      // Update exercise details state
      setExerciseDetails(exerciseDetailsData);

      // If exercise details are fetched successfully, search for related videos
      if (exerciseDetailsData?.name) {
        const videosData = await fetchData<T_YoutubeData>(
          `${youtubeSearchUrl}/search?query=${exerciseDetails?.name} workout`,
          youtubeRequestOptions
        );

        // Filter for videos if any video results are found
        if (videosData?.contents.length) {
          const exerciseVideosData = videosData?.contents.filter((video) => {
            if ("video" in video) {
              return video;
            }
          });

          // Update exercise videos state with filtered video data

          setExerciseVideos(exerciseVideosData);
        }
      }
    };

    fetchExerciseData();
  }, [id, exerciseDetails?.name]);

  return (
    <Box sx={{ minHeight: "90vh" }}>
      {exerciseDetails ? (
        <ExerciseItemDetails exerciseDetails={exerciseDetails} />
      ) : (
        <Loader />
      )}
      {exerciseVideos && (
        <ExerciseVideos
          exerciseVideos={exerciseVideos}
          name={exerciseDetails?.name}
        />
      )}
      {exerciseDetails && (
        <SimilarExercises
          targetMuscle={exerciseDetails?.target}
          equipments={exerciseDetails?.equipment}
        />
      )}
    </Box>
  );
};

export default ExerciseDetails;
