import { Box, Typography } from "@mui/material";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {T_Exercise, T_TargetMuscleExercisesProps} from "../../types";
import { ExerciseItem } from "../ui";



const TargetMuscleExercises: React.FC<T_TargetMuscleExercisesProps> = ({
  data,
}) => {
  return (
    <Box
      sx={{
        px: { xs: "20px", md: 0 },
        width: "100%",
        py : "40px",
        gap: "20px",
      }}
    >
      <Typography
        sx={{ fontSize: { xs: "25px", md: "34px" } }}
        fontWeight="700"
      >
        Similar <span style={{ color: "Highlight" }}>Target Muscle</span>{" "}
        exercises
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Swiper
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            645: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1580: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={20}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          style={{
            width: "100%",
            padding: "30px 5px",
          }}
        >
          {data.map((exercise: T_Exercise) => (
            <SwiperSlide key={exercise.id}>
              <ExerciseItem exercise={exercise} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default TargetMuscleExercises;
