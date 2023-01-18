import { IError } from "../../types";
import { IGetAllEpisodesSuccess } from "../../types/episodes";
import {
  Action,
  ActionWithPayload,
  createActionObject,
  withMatcher,
} from "../../utils/reducers";

export enum EpisodesActionType {
  FetchEpisodesStart = "episodes/fetchStart",
  FetchEpisodesSuccess = "episodes/fetchSuccess",
  FetchEpisodesFailed = "episodes/fetchFailed",
}

export type FetchEpisodesStartAction =
  Action<EpisodesActionType.FetchEpisodesStart>;

export type FetchEpisodesSuccessAction = ActionWithPayload<
  EpisodesActionType.FetchEpisodesSuccess,
  IGetAllEpisodesSuccess
>;

export type FetchEpisodesFailedAction = ActionWithPayload<
  EpisodesActionType.FetchEpisodesFailed,
  IError
>;

export const fetchEpisodesStart = withMatcher(
  (page: number): FetchEpisodesStartAction =>
    createActionObject(EpisodesActionType.FetchEpisodesStart, page)
);

export const fetchEpisodesSuccess = withMatcher(
  (response: IGetAllEpisodesSuccess): FetchEpisodesSuccessAction =>
    createActionObject(EpisodesActionType.FetchEpisodesSuccess, response)
);

export const fetchEpisodesFailed = withMatcher(
  (errorObject: IError): FetchEpisodesFailedAction =>
    createActionObject(EpisodesActionType.FetchEpisodesFailed, errorObject)
);
