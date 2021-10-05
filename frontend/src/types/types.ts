export interface IDay {
  blessingTime?: string,
  day: string,
  hotel?: string,
  information?: string,
  place?: string,
  status?: string,
  weddingHour?: string,
}

export interface IDetail {
  name: string,
  days: IDay[]
}
export interface IYear {
  name: string,
  details: IDetail[]
}
