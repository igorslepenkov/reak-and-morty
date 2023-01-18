export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  character: string[];
  url: string;
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
