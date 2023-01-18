import { useEffect } from "react";
import { LocationsList, Page } from "../../components";
import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Pagination } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import {
  fetchLocationsStart,
  selectLocations,
  selectLocationsInfo,
} from "../../store/locations";

export const LocationsPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const onPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const locations = useAppSelector(selectLocations);
  const locationsInfo = useAppSelector(selectLocationsInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocationsStart(currentPage));
  }, [dispatch, currentPage]);

  return (
    <Page>
      {locations && locationsInfo && (
        <Grid container>
          <Grid item sm={12}>
            <LocationsList locations={locations} />
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
                count={locationsInfo.pages}
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
