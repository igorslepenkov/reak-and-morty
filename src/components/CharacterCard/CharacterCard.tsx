import { Grid } from "@mui/material";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ICharacter } from "../../types/characters";

interface IProps {
  character: ICharacter;
}

export const CharacterCard = ({ character }: IProps) => {
  if (character) {
    return (
      <Grid item xs="auto" xl="auto">
        <Card sx={{ width: 250, height: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={character.image}
              alt={`${character.name} image`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Status: {character.status}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Last known location: {character.location.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }

  return null;
};
