import { useEffect } from "react";
import { CharactersList, Page } from "../../components";
import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import {
  selectCharacters,
  fetchCharactersStart,
  selectCharactersInfo,
} from "../../store/characters";
import { useState } from "react";
import { Pagination } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

export const CharactersPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const onPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const characters = useAppSelector(selectCharacters);
  const charactersInfo = useAppSelector(selectCharactersInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharactersStart(currentPage));
  }, [dispatch, currentPage]);

  return (
    <Page>
      {characters && charactersInfo && (
        <Grid container>
          <Grid item sm={12}>
            <CharactersList characters={characters} />
          </Grid>
          <Grid item sm={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px 0",
              }}
            >
              <Pagination
                count={charactersInfo.pages}
                color="secondary"
                size="large"
                onChange={onPageChange}
              />
            </Box>
          </Grid>
        </Grid>
      )}
    </Page>
  );
};
