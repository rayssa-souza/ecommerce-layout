export interface iNavitem {
  title: {
    text: string;
    url: string;
  };
  sublinks: {
    text: string;
    url: string;
    id: string;
  }[];
  id: string;
}
