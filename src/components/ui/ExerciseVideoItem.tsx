import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {T_ExerciseVideoItemProps} from "../../types";

const ExerciseVideoItem: React.FC<T_ExerciseVideoItemProps> = ({video}) => {
    return (
        <a
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            rel="noreferrer"
            target="_blank"
        >
            <Card
                sx={{
                    width: "100%",
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
                    height="300px"
                    component="img"
                    src={video.thumbnails[0].url}
                    sx={{height: "300px", objectFit: "cover"}}
                    title={video.title}
                />
                <CardContent
                    sx={{width: "100%", height: "100px", overflow: "hidden"}}
                >
                    <Typography
                        variant="h6"
                        fontWeight="700"
                        sx={{
                            textTransform: "capitalize",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: {xs: "nowrap", md: "wrap"},
                            pl: "5px",
                        }}
                    >
                        {video.title ?? ""}
                    </Typography>
                </CardContent>
            </Card>
        </a>
    );
};

export default ExerciseVideoItem;
