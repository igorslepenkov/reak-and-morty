import { Grid } from "@mui/material";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { IEpisode } from "../../types/episodes";

interface IProps {
  episode: IEpisode;
}

export const EpisodeCard = ({ episode }: IProps) => {
  if (episode) {
    return (
      <Grid item xs="auto" xl="auto">
        <Card sx={{ width: 200, height: 200 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {episode.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Air Date: {episode.air_date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Episode: {episode.episode}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }

  return null;
};
