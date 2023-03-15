export interface IStadium {
  _id: number;
  name: string;
  address: string;
  pitchSize?: any;
  photoId?: number;
  league_id: number;
}

export interface ITeam {
  _id: number;
  name: string;
  shortName: string;
  logo: string;
  logoId: number;
  color: string;
  league_id: number;
  parentTeam_id?: any;
  reserveTeam_id?: number;
}

export interface IEvent {
  _id: number;
  date: Date;
  tourNumber: number;
  netPosition?: any;
  techDefeat: boolean;
  scoreFtHome: number;
  scoreFtAway: number;
  scorePenHome?: number;
  scorePenAway?: number;
  partsScoreHome: string;
  partsScoreAway: string;
  stateCode: number;
  homeLineupMarked: boolean;
  awayLineupMarked: boolean;
  stadium: IStadium;
  stage: any;
  season: any;
  champ: any;
  league: any;
  teamHome: ITeam;
  teamAway: ITeam;
  pitch: any;
}

export interface ServerResponse<T> {
  total: number;
  items: T[];
}
