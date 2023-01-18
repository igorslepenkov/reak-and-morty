import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../router";
import { LinkWithoutStyles } from "../LinkWithoutStyles";

export const Header = () => {
  const navigate = useNavigate();
  const navigateToCharacters = () => navigate(ROUTE.Characters);
  const navigateToLocations = () => navigate(ROUTE.Locations);
  const navigateToEpisodes = () => navigate(ROUTE.Episodes);
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          <LinkWithoutStyles to={ROUTE.Home}>Rick & Morty </LinkWithoutStyles>
        </Typography>

        <Button color="inherit" onClick={navigateToCharacters}>
          Characters
        </Button>
        <Button color="inherit" onClick={navigateToLocations}>
          Locations
        </Button>
        <Button color="inherit" onClick={navigateToEpisodes}>
          Episodes
        </Button>
      </Toolbar>
    </AppBar>
  );
};
