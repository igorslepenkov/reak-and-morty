import { createSelector } from "reselect";
import { RootState } from "../store";
import { ILocationsInitialState } from "../features";

const selectLocationsReducer = (state: RootState): ILocationsInitialState =>
  state.locations;

export const selectLocations = createSelector(
  [selectLocationsReducer],
  (locationsSlice) => locationsSlice.locations
);

export const selectLocationsInfo = createSelector(
  [selectLocationsReducer],
  (locationsSlice) => locationsSlice.info
);

export const selectLocationsError = createSelector(
  [selectLocationsReducer],
  (locationsSlice) => locationsSlice.error
);

export const selectLocationsLoading = createSelector(
  [selectLocationsReducer],
  (locationsSlice) => locationsSlice.isLoading
);
