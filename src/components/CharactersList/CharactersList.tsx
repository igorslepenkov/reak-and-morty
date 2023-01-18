import { Grid } from "@mui/material";
import { ICharacter } from "../../types/characters";
import { CharacterCard } from "../CharacterCard";

interface IProps {
  characters: ICharacter[];
}

export const CharactersList = ({ characters }: IProps) => {
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
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Grid>
  );
};
