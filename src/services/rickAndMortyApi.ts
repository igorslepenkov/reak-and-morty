import axios from "axios";
import { ICharacter, IGetAllCharactersSuccess } from "../types/characters";
import { IGetAllEpisodesSuccess } from "../types/episodes";
import { IGetAllLocationSuccess } from "../types/locations";
import {
  addOptionalQueryParametersToUrl,
  createDinamicUrlPath,
} from "../utils";

export enum RickAndMortyEndpoint {
  Characters = "character",
  Character = "character/:id",
  Locations = "location",
  Location = "location/:id",
  Episodes = "episode",
  Episode = "episode/:id",
}

class RickAndMortyApi {
  private readonly BASE_URL = "https://rickandmortyapi.com/api";
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  getAllCharacters = async (page?: number) => {
    let data = null;

    if (page) {
      data = (
        await this.API.get<IGetAllCharactersSuccess>(
          addOptionalQueryParametersToUrl(RickAndMortyEndpoint.Characters, {
            page,
          })
        )
      ).data;
    } else {
      data = (
        await this.API.get<IGetAllCharactersSuccess>(
          RickAndMortyEndpoint.Characters
        )
      ).data;
    }

    return data;
  };

  getOneCharacter = async (id: number) => {
    const { data } = await this.API.get<ICharacter>(
      createDinamicUrlPath(RickAndMortyEndpoint.Character, { id })
    );
    return data;
  };

  getAllLocations = async () => {
    const { data } = await this.API.get<IGetAllLocationSuccess>(
      RickAndMortyEndpoint.Locations
    );
    return data;
  };

  getOneLocation = async (id: number) => {
    const { data } = await this.API.get<ICharacter>(
      createDinamicUrlPath(RickAndMortyEndpoint.Location, { id })
    );
    return data;
  };

  getAllEpisodes = async () => {
    const { data } = await this.API.get<IGetAllEpisodesSuccess>(
      RickAndMortyEndpoint.Episodes
    );
    return data;
  };

  getOneEpisode = async (id: number) => {
    const { data } = await this.API.get<ICharacter>(
      createDinamicUrlPath(RickAndMortyEndpoint.Episode, { id })
    );
    return data;
  };
}

export const rickAndMortyApi = new RickAndMortyApi();
