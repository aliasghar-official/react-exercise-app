import { Box } from "@mui/material";
import { EquipmentExercises, TargetMuscleExercises } from "../layouts";
import { useEffect, useState } from "react";
import { exerciseRequestOptions, fetchData } from "../../utils/fetchData";
import { T_Exercise, T_SimilarExercisesProps } from "../../types";

const SimilarExercises: React.FC<T_SimilarExercisesProps> = ({
  targetMuscle,
  equipments,
}) => {
  // State variables to manage target muscle and equipment exercises
  const [targetMuscleExercises, setTargetMuscleExercises] = useState<
    T_Exercise[] | undefined
  >();
  const [equipmentExercises, setEquipmentExercises] = useState<
    T_Exercise[] | undefined
  >();

  // useEffect hook to fetch similar exercises based on target muscle and equipment
  useEffect(() => {
    const fetchSimilarExercisesData = async () => {
      const exerciseDatabaseUrl = "https://exercisedb.p.rapidapi.com";

      // Fetch target muscle exercises
      const targetMuscleExerciseData = await fetchData<T_Exercise[]>(
        `${exerciseDatabaseUrl}/exercises/target/${targetMuscle}`,
        exerciseRequestOptions
      );

      // Update target muscle exercises state
      setTargetMuscleExercises(targetMuscleExerciseData);

      // Fetch equipment exercises
      const equipmentMuscleExerciseData = await fetchData<T_Exercise[]>(
        `${exerciseDatabaseUrl}/exercises/equipment/${equipments}`,
        exerciseRequestOptions
      );

      // Update equipment exercises state
      setEquipmentExercises(equipmentMuscleExerciseData);
    };

    fetchSimilarExercisesData();
  }, [targetMuscle, equipments]);

  return (
    <Box
      mx="auto"
      sx={{
        px: { xs: "20px", md: 0 },
        width: { xs: "100%", md: "80%" },
      }}
    >
      {targetMuscleExercises && (
        <TargetMuscleExercises data={targetMuscleExercises} />
      )}
      {equipmentExercises && <EquipmentExercises data={equipmentExercises} />}
    </Box>
  );
};

export default SimilarExercises;
