import { useState } from "react";
import { Exercises, Hero, SearchExercises } from "../components/layouts";
import { T_Exercise } from "../types";

const Home = () => {
  // State variables to manage exercises and body parts
  const [exercises, setExercises] = useState<T_Exercise[] | []>([]);
  const [bodyPart, setBodyPart] = useState<string>("all");

  return (
    <>
      <Hero />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </>
  );
};

export default Home;
