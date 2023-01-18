import charactersSlice, {
  fetchCharacters,
  ICharactersInitialState,
} from "./characters";

import locationsSlice, {
  fetchLocations,
  ILocationsInitialState,
} from "./locations";

import episodesSlice, {
  fetchEpisodes,
  IEpisodesInitialState,
} from "./episodes";

export {
  charactersSlice,
  fetchCharacters,
  fetchLocations,
  locationsSlice,
  episodesSlice,
  fetchEpisodes,
};
export type {
  ICharactersInitialState,
  ILocationsInitialState,
  IEpisodesInitialState,
};
