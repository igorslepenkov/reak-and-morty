import { IError } from "../../types";
import { IGetAllLocationSuccess } from "../../types/locations";
import {
  Action,
  ActionWithPayload,
  createActionObject,
  withMatcher,
} from "../../utils/reducers";

export enum LocationsActionType {
  FetchLocationsStart = "locations/fetchStart",
  FetchLocationsSuccess = "locations/fetchSuccess",
  FetchLocationsFailed = "locations/fetchFailed",
}

export type FetchLocationsStartAction =
  Action<LocationsActionType.FetchLocationsStart>;

export type FetchLocationsSuccessAction = ActionWithPayload<
  LocationsActionType.FetchLocationsSuccess,
  IGetAllLocationSuccess
>;

export type FetchLocationsFailedAction = ActionWithPayload<
  LocationsActionType.FetchLocationsFailed,
  IError
>;

export const fetchLocationsStart = withMatcher(
  (page: number): FetchLocationsStartAction =>
    createActionObject(LocationsActionType.FetchLocationsStart, page)
);

export const fetchLocationsSuccess = withMatcher(
  (charactersResponse: IGetAllLocationSuccess): FetchLocationsSuccessAction =>
    createActionObject(
      LocationsActionType.FetchLocationsSuccess,
      charactersResponse
    )
);

export const fetchLocationsFailed = withMatcher(
  (errorObject: IError): FetchLocationsFailedAction =>
    createActionObject(LocationsActionType.FetchLocationsFailed, errorObject)
);
