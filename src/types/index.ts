import { Dispatch, ReactNode, SetStateAction } from "react";

export type RootLayoutProps = {
  children: ReactNode;
};

export type T_EquipmentExercisesProps = {
  data: T_Exercise[];
};

export type T_ExercisesProps = {
  exercises: T_Exercise[] | [];
  setExercises: Dispatch<SetStateAction<T_Exercise[] | []>>;
  bodyPart: string;
};

export type T_SearchExercisesProps = {
  setExercises: Dispatch<SetStateAction<T_Exercise[] | []>>;
  bodyPart: string;
  setBodyPart: Dispatch<SetStateAction<string>>;
};

export type T_TargetMuscleExercisesProps = {
  data: T_Exercise[];
};

export type T_BodyPartItemProps = {
  bodyParts: string;
  data: string;
  setBodyPart: Dispatch<SetStateAction<string>>;
};

export type T_BodyPartListProps = {
  bodyPartsData: string[];
  bodyParts: string;
  setBodyPart: Dispatch<SetStateAction<string>>;
};

export type T_ExerciseItemProps = {
  exercise: T_Exercise;
};

export type ExerciseItemDetailsProps = {
  exerciseDetails: T_Exercise;
};

export type T_ExerciseVideoItemProps = {
  video: T_ExerciseVideo;
};

export type T_ExerciseVideoProps = {
  exerciseVideos: T_ExerciseVideoList;
  name: string | undefined;
};

export type T_SimilarExercisesProps = {
  targetMuscle: string | null;
  equipments: string | null;
};

export type T_Exercise = {
  id: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  instructions: string[];
  name: string;
  secondaryMuscles: string[];
  target: string;
};

export type T_ThumbnailsExerciseVideo = {
  width: number;
  height: number;
  url: string;
};

export type T_ExerciseVideo = {
  channelId: string;
  channelName: string;
  description: string;
  lengthText: string;
  publishedTimeText: string;
  thumbnails: T_ThumbnailsExerciseVideo[];
  title: string;
  videoId: string;
  viewCountText: string;
};

export type T_ExerciseVideoList = Array<{ video: T_ExerciseVideo }>;

export type T_YoutubeData = {
  contents: T_ExerciseVideoList;
  extimatedResults: string;
  next: string;
};
