
export enum FilterTypes {
    TITLE = 'title',
    GENRE = 'genre',
    PLATFORM = 'platform',
}

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;

  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  description?:string;


}