import { Box } from "@mui/material";
import BodyPartItem from "./BodyPartItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { T_BodyPartListProps } from "../../types";

const BodyPartList : React.FC<T_BodyPartListProps> = ({ bodyPartsData, bodyParts, setBodyPart }) => {

  return (
    <Box sx={{ width: "100%"}}>
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
          1200: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={20}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        style={{
          width: "100%",
          padding: "10px 5px",
        }}
      >
        {bodyPartsData.map((bodyPart : string) => (
          <SwiperSlide key={bodyPart}>
            <BodyPartItem data={bodyPart} bodyParts={bodyParts} setBodyPart={setBodyPart} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default BodyPartList;
