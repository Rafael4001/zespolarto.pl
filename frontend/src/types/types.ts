export interface IDay {
  day: string,
  hotel?: string,
  information?: string,
  place?: string,
  status?: string,
}

export interface IDetail {
  name: string,
  days: IDay[]
}
export interface IYear {
  name: string,
  details: IDetail[]
}
