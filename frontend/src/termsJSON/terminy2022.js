import { STATUS, WEEK_DAY } from '../constants'

export const YEAR_2022 = [
  {
    name: 'Styczeń',
    days: []
  },
  {
    name: 'Luty',
    days: []
  },
  {
    name: 'Marzec',
    days: []
  },
  {
    name: 'Kwiecień',
    days: [
      {
        day: '2022-04-30',
        status: STATUS.HOLIDAY,
        information: 'weekend majowy'
      }
    ]
  },
  {
    name: 'Maj',
    days: [
      {
        day: '2022-05-01',
        status: STATUS.HOLIDAY,
        information: 'weekend majowy'
      },

      {
        day: '2022-05-14',
        place: 'Boruń',
        hotel: 'Dom weselny "Sylwia"',
        status: STATUS.BUSY,
        blessing: 'yes',
        blessingTime: '14.30',
        weddingHour: '15.00 (Zamość)'
      }]
  },
  {
    name: 'Czerwiec',
    days: [
      {
        day: '2022-06-04',
        place: 'Zwierzyniec',
        hotel: 'Sonata',
        status: STATUS.BUSY,
        blessing: 'Nie ma',
        weddingHour: '17.00'
      },
      {
        day: '2022-06-16',
        status: STATUS.HOLIDAY,
        information: 'Boże Ciało'
      },
      {
        day: '2022-06-18',
        place: 'Tyszowce',
        hotel: 'Dom weselny "Orfeusz"',
        status: STATUS.BUSY,
        // weddingHour: "brak",
        information: 'Rafał gra jako DJ na poprawinach na drugi dzien'
      }
    ]
  },
  {
    name: 'Lipiec',
    days: [
      {
        day: '2022-07-23',
        place: 'Obsza',
        hotel: 'Dom weselny "Pensjonat Roztocze"',
        address: 'Obsza 138',
        status: STATUS.BUSY,
        weddingHour: '15.00'
      },
      {
        day: '2022-07-30',
        place: 'Mircze',
        hotel: 'Dom weselny Jaśko',
        address: '',
        status: STATUS.BUSY,
        weddingHour: '17.00'
      }
    ]
  },
  {
    name: 'Sierpień',
    days: [
      {
        day: '2022-08-05',
        place: 'Lublin',
        hotel: 'Dom weselny "Pod Kasztanami"',
        address: 'Krężnicka 96a',
        status: STATUS.BUSY
        // weddingHour: '15.00'
      }
    ]
  },
  {
    name: 'Wrzesień',
    days: [
      {
        day: '2022-09-17',
        status: STATUS.HOLIDAY,
        information: 'zostawione wolne, Darii nie będzię'
      }
    ]
  },
  {
    name: 'Październik',
    days: [
      {
        day: '2022-10-01'
      },
      {
        day: '2022-10-08',
        place: 'Hrubieszów',
        hotel: 'Gniecki',
        weekDay: WEEK_DAY.SATUDRAY,
        status: STATUS.BUSY,
        // "blessing": "noInfo",
        // "blessingTime": "noInfo",
        // weddingHour: "noInfo",
        information: 'przekładane z 29.05.2021'
      },
      {
        day: '2022-10-22',
        place: 'Tyszowce',
        hotel: 'Szewska Pasja',
        weekDay: WEEK_DAY.SATUDRAY,
        status: STATUS.BUSY
        // "blessing": "noInfo",
        // "blessingTime": "noInfo",
        // weddingHour: "noInfo",
      }
    ]
  },
  {
    name: 'Listopad',
    days: []
  },
  {
    name: 'Grudzień',
    days: []
  }
]
