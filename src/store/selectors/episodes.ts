import { createSelector } from "reselect";
import { RootState } from "../store";
import { IEpisodesInitialState } from "../features";

const selectEpisodesReducer = (state: RootState): IEpisodesInitialState =>
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
