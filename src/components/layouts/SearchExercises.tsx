import { SearchOutlined } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { fetchData, exerciseRequestOptions } from "../../utils/fetchData";
import { T_Exercise, T_SearchExercisesProps } from "../../types";
import { BodyPartList, Loader } from "../ui";

const SearchExercises: React.FC<T_SearchExercisesProps> = ({
  setExercises,
  bodyPart,
  setBodyPart,
}) => {
  // State variables to manage search term and body parts
  const [search, setSearch] = useState<string>("");
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  // useEffect hook to fetch body part data on component mount
  useEffect(() => {
    const fetchExercisesData = async () => {
      // Fetch body part data from the API
      const bodyPartData = await fetchData<string[]>(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseRequestOptions
      );

      // Update body parts state with "all" prepended if data is fetched successfully
      if (bodyPartData?.length) {
        setBodyParts(["all", ...bodyPartData]);
      } else {
        // Set body parts to just "all" if no data is fetched
        setBodyParts(["all"]);
      }
    };
    fetchExercisesData();
  }, []);

  // Function to handle changes in the search input field
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // Function to handle search button click or form submission
  const handleSearch = async () => {
    const searchValue = search.trim();
    if (searchValue?.length > 2) {
      // Fetch exercise data based on the search term from the API
      const exercisesData = await fetchData<T_Exercise[]>(
        `https://exercisedb.p.rapidapi.com/exercises/name/${searchValue}`,
        exerciseRequestOptions
      );

      // Update search state to clear the input field
      setSearch("");

      // Update exercises state with fetched data or an empty array if no data is found
      setExercises(exercisesData || []);

      window.scrollTo({ top: 1600, behavior: "smooth" });
    }
  };

  return (
    <Stack alignItems="center" justifyItems="center" py="20px" mt="50px">
      <Typography
        sx={{ fontSize: { xs: "25px", md: "34px" } }}
        fontWeight="700"
      >
        Search for any exercise you like
      </Typography>
      <Box sx={{ width: "80%" }} py="35px">
        <Paper
          onSubmit={(event: FormEvent<HTMLFormElement>) =>
            event.preventDefault()
          }
          component="form"
          sx={{ display: "flex", alignItems: "center", px: "7px" }}
        >
          <InputBase
            sx={{ width: "100%", p: "15px" }}
            type="text"
            placeholder="Search exercises..."
            value={search}
            onChange={handleInputChange}
          />
          <IconButton onClick={handleSearch}>
            <SearchOutlined />
          </IconButton>
        </Paper>
      </Box>
      {bodyParts?.length > 2 ? (
        <Box sx={{ width: "80%" }}>
          <BodyPartList
            bodyPartsData={bodyParts}
            bodyParts={bodyPart}
            setBodyPart={setBodyPart}
          />
        </Box>
      ) : (
        <Loader />
      )}
    </Stack>
  );
};

export default SearchExercises;
