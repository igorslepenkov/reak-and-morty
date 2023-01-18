import { Grid } from "@mui/material";
import { IEpisode } from "../../types/episodes";
import { EpisodeCard } from "../EpisodesCard";

interface IProps {
  episodes: IEpisode[];
}

export const EpisodesList = ({ episodes }: IProps) => {
  return (
    <Grid
      container
      spacing={5}
      sx={{
        alignItems: "baseline",
        justifyContent: "center",
        marginTop: "5px",
      }}
    >
      {episodes.map((episode) => (
        <EpisodeCard episode={episode} />
      ))}
    </Grid>
  );
};
