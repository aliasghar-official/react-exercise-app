import { Box, Typography } from "@mui/material";
import { T_ExerciseVideoProps } from "../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ExerciseVideoItem from "./ExerciseVideoItem";

const ExerciseVideos: React.FC<T_ExerciseVideoProps> = ({
  exerciseVideos,
  name,
}) => {
  return (
    <Box
      mx="auto"
      sx={{
        px: { xs: "20px", md: 0 },
        py: "20px",
        mt: "70px",
        width: { xs: "100%", md: "80%" },
        gap: "20px",
      }}
    >
      <Typography
        sx={{ fontSize: { xs: "25px", md: "34px" } }}
        fontWeight="700"
      >
        Watch <span style={{ color: "Highlight" }}>{name}</span> exercise videos
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Swiper
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
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
          {exerciseVideos.map((video, index: number) => (
            <SwiperSlide key={index}>
              <ExerciseVideoItem video={video.video} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default ExerciseVideos;
