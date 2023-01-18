import { createSelector } from "reselect";
import { RootState } from "../rootReducer";
import { IEpisodesState } from "./episodesReducers";

const selectEpisodesReducer = (state: RootState): IEpisodesState =>
  state.episodes;

export const selectEpisodes = createSelector(
  [selectEpisodesReducer],
  (episodesSlice) => episodesSlice.episodes
);

export const selectEpisodesInfo = createSelector(
  [selectEpisodesReducer],
  (episodesSlice) => episodesSlice.info
);

export const selectEpisodesError = createSelector(
  [selectEpisodesReducer],
  (episodesSlice) => episodesSlice.error
);

export const selectEpisodesLoading = createSelector(
  [selectEpisodesReducer],
  (episodesSlice) => episodesSlice.isLoading
);
