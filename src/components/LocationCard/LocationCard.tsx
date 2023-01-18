import { Grid } from "@mui/material";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { ILocation } from "../../types/locations";

interface IProps {
  location: ILocation;
}

export const LocationCard = ({ location }: IProps) => {
  if (location) {
    return (
      <Grid item xs="auto" xl="auto">
        <Card sx={{ width: 200, height: 200 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {location.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dimension: {location.dimension}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Type: {location.type}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }

  return null;
};
