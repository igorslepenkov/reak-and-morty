import { useEffect, useState } from "react";

import { Grid, Pagination } from "@mui/material";
import { Box } from "@mui/system";

import { Page, EpisodesList } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  selectEpisodes,
  fetchEpisodesStart,
  selectEpisodesInfo,
} from "../../store/episodes";

export const EpisodesPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const onPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const episodes = useAppSelector(selectEpisodes);
  const episodesInfo = useAppSelector(selectEpisodesInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEpisodesStart(currentPage));
  }, [dispatch, currentPage]);

  return (
    <Page>
      {episodes && episodesInfo && (
        <Grid container>
          <Grid item sm={12}>
            <EpisodesList episodes={episodes} />
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
                count={episodesInfo.pages}
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
