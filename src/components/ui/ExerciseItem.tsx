import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { T_ExerciseItemProps } from "../../types";
import { Link } from "react-router-dom";

const ExerciseItem: React.FC<T_ExerciseItemProps> = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} onClick={() => window.scrollTo({top : 0, behavior : "smooth"})}>
      <Card
        sx={{
          maxWidth : {xs : "100%", sm : "400px"},
          height: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          "&:hover": {
            opacity: 0.8,
          },
        }}
      >
        <CardMedia
          width="100%"
          height="300px"
          component="img"
          src={exercise.gifUrl}
          sx={{ height: "300px", objectFit: "cover" }}
          title={exercise.name}
        />

        <CardContent>
          <Typography
            variant="h6"
            sx={{
              textTransform: "capitalize",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: { xs: "nowrap", md: "wrap" },
              pl: "5px",
            }}
          >
            {exercise.name}
          </Typography>
        </CardContent>
        <CardActions sx={{ pb: "35px" }}>
          <Button color="warning">{exercise.target}</Button>
          <Button color="info">{exercise.bodyPart}</Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default ExerciseItem;
