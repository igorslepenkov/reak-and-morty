import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { rickAndMortyApi } from "../../services";
import { IError } from "../../types";
import { IGetAllLocationSuccess, ILocation } from "../../types/locations";
import { RootState } from "../store";

interface ILocationsInitialState {
  locations: ILocation[];
  info: IGetAllLocationSuccess["info"] | null;
  isLoading: boolean;
  error: IError | null;
}

const initialState: ILocationsInitialState = {
  locations: [],
  info: null,
  isLoading: false,
  error: null,
};

const fetchLocations = createAsyncThunk<
  IGetAllLocationSuccess,
  number,
  { state: RootState; rejectValue: IError }
>("locations/fetchLocations", async (page: number, { rejectWithValue }) => {
  try {
    return await rickAndMortyApi.getAllLocations(page);
  } catch (err: any) {
    return rejectWithValue(err);
  }
});

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchLocations.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(
      fetchLocations.fulfilled,
      (state, { payload: { results, info } }) => {
        state.isLoading = false;
        state.info = info;
        state.locations = results;
      }
    );

    builder.addCase(fetchLocations.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = payload;
      }
    });
  },
});

export default locationsSlice.reducer;
export { fetchLocations };
export type { ILocationsInitialState };
