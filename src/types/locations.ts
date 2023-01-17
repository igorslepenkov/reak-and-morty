export interface ILocation {
  id: 3;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface IGetAllLocationSuccess {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ILocation[];
}
