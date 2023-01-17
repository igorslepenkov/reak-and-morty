export interface IEpisode {
  id: number;
  name: string;
  air_dat: string;
  episod: string;
  character: string[];
  ur: string;
  create: string;
}

export interface IGetAllEpisodesSuccess {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: IEpisode[];
}
