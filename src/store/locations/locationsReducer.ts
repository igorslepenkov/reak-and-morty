import { AnyAction } from "redux";
import {
  fetchLocationsStart,
  fetchLocationsSuccess,
  fetchLocationsFailed,
} from "./locationsActions";
import { IError } from "../../types";
import { ILocation, IGetAllLocationSuccess } from "../../types/locations";

export interface ILocationsState {
  readonly locations: ILocation[] | null;
  readonly info: IGetAllLocationSuccess["info"] | null;
  readonly isLoading: boolean;
  readonly error: IError | null;
}

const lcoationsInitialState: ILocationsState = {
  locations: [],
  info: null,
  isLoading: false,
  error: null,
};

export const locationsReducer = (
  state = lcoationsInitialState,
  action: AnyAction
): ILocationsState => {
  if (fetchLocationsStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchLocationsSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      locations: action.payload.results,
      info: action.payload.info ? action.payload.info : null,
    };
  }

  if (fetchLocationsFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
