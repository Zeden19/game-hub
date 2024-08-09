interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

export interface TrailerResponse {
  id: number;
  results: Trailer[];
}
