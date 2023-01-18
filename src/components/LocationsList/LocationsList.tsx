import { Grid } from "@mui/material";
import { ILocation } from "../../types/locations";
import { LocationCard } from "../LocationCard";

interface IProps {
  locations: ILocation[];
}

export const LocationsList = ({ locations }: IProps) => {
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
      {locations.map((location) => (
        <LocationCard location={location} />
      ))}
    </Grid>
  );
};
