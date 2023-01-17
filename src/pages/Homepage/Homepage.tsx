import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MapIcon from "@mui/icons-material/Map";
import CameraRollIcon from "@mui/icons-material/CameraRoll";

import { useNavigate } from "react-router-dom";

import { Page } from "../../components";
import { ROUTE } from "../../router";

export const Homepage = () => {
  const navigate = useNavigate();
  const navigateToCharacters = () => {
    navigate(ROUTE.Characters);
  };
  return (
    <Page
      styles={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper color="primary" sx={{ maxHeight: 500, padding: "20px" }}>
        <Typography variant="h4" color="primary">
          Wellcome to Rick & Morty App !
        </Typography>

        <Typography variant="h6" color="secondary" align="center">
          Choose category below:
        </Typography>

        <List>
          <ListItem>
            <ListItemButton onClick={navigateToCharacters}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>Characters</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              <ListItemText>Locations</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <CameraRollIcon />
              </ListItemIcon>
              <ListItemText>Episodes</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </Page>
  );
};
