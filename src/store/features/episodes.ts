import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { rickAndMortyApi } from "../../services";
import { IError } from "../../types";
import { IEpisode, IGetAllEpisodesSuccess } from "../../types/episodes";
import { RootState } from "../store";

interface IEpisodesInitialState {
  episodes: IEpisode[];
  info: IGetAllEpisodesSuccess["info"] | null;
  isLoading: boolean;
  error: IError | null;
}

const initialState: IEpisodesInitialState = {
  episodes: [],
  info: null,
  isLoading: false,
  error: null,
};

const fetchEpisodes = createAsyncThunk<
  IGetAllEpisodesSuccess,
  number,
  { state: RootState; rejectValue: IError }
>("episodes/fetchEpisodes", async (page: number, { rejectWithValue }) => {
  try {
    return await rickAndMortyApi.getAllEpisodes(page);
  } catch (err: any) {
    return rejectWithValue(err);
  }
});

const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchEpisodes.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(
      fetchEpisodes.fulfilled,
      (state, { payload: { results, info } }) => {
        state.isLoading = false;
        state.info = info;
        state.episodes = results;
      }
    );

    builder.addCase(fetchEpisodes.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = payload;
      }
    });
  },
});

export default episodesSlice.reducer;
export { fetchEpisodes };
export type { IEpisodesInitialState };
