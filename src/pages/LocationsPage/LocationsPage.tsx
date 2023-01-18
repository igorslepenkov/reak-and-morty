import { useEffect, useState } from "react";

import { Pagination } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

import { LocationsList, Page } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store";

import { fetchLocations } from "../../store/features";
import { selectLocations, selectLocationsInfo } from "../../store/selectors";

export const LocationsPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const onPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const locations = useAppSelector(selectLocations);
  const locationsInfo = useAppSelector(selectLocationsInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLocations(currentPage));
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
