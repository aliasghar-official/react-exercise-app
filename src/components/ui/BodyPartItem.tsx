import { FitnessCenter } from "@mui/icons-material";
import {  Card, CardContent, CardMedia, Typography } from "@mui/material";
import { T_BodyPartItemProps } from "../../types";

const BodyPartItem : React.FC<T_BodyPartItemProps> = ({ bodyParts, data, setBodyPart }) => {
  return (
    <Card
      sx={{
        borderTop: bodyParts === data ? "4px solid #0080FF" : "",
        width: "100%",
        height: "250px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        '&:hover' : {
          opacity : 0.8
        }
      }}
      onClick={() => {
        setBodyPart(data);

        window.scrollTo({top : 1500, behavior : "smooth"})
      }}
    >
      <CardMedia>
        <FitnessCenter fontSize="large" color="primary" />
      </CardMedia>
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="700"
          sx={{ textTransform: "capitalize" }}
        >
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BodyPartItem;
