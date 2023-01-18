import { AnyAction } from "redux";
import {
  fetchEpisodesStart,
  fetchEpisodesSuccess,
  fetchEpisodesFailed,
} from "./episodesActions";
import { IError } from "../../types";
import { IEpisode, IGetAllEpisodesSuccess } from "../../types/episodes";

export interface IEpisodesState {
  readonly episodes: IEpisode[] | null;
  readonly info: IGetAllEpisodesSuccess["info"] | null;
  readonly isLoading: boolean;
  readonly error: IError | null;
}

const episodesInitialState: IEpisodesState = {
  episodes: [],
  info: null,
  isLoading: false,
  error: null,
};

export const episodesReducer = (
  state = episodesInitialState,
  action: AnyAction
): IEpisodesState => {
  if (fetchEpisodesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchEpisodesSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      episodes: action.payload.results,
      info: action.payload.info ? action.payload.info : null,
    };
  }

  if (fetchEpisodesFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
