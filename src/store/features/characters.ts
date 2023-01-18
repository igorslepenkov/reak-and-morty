import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { rickAndMortyApi } from "../../services";
import { IError } from "../../types";
import { ICharacter, IGetAllCharactersSuccess } from "../../types/characters";
import { RootState } from "../store";

interface ICharactersInitialState {
  characters: ICharacter[];
  info: IGetAllCharactersSuccess["info"] | null;
  isLoading: boolean;
  error: IError | null;
}

const initialState: ICharactersInitialState = {
  characters: [],
  info: null,
  isLoading: false,
  error: null,
};

const fetchCharacters = createAsyncThunk<
  IGetAllCharactersSuccess,
  number,
  { state: RootState; rejectValue: IError }
>("characters/fetchCharacters", async (page: number, { rejectWithValue }) => {
  try {
    return await rickAndMortyApi.getAllCharacters(page);
  } catch (err: any) {
    return rejectWithValue(err);
  }
});

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(
      fetchCharacters.fulfilled,
      (state, { payload: { results, info } }) => {
        state.isLoading = false;
        state.info = info;
        state.characters = results;
      }
    );

    builder.addCase(fetchCharacters.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = payload;
      }
    });
  },
});

export default charactersSlice.reducer;
export { fetchCharacters };
export type { ICharactersInitialState };
