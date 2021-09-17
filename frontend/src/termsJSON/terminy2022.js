import {STATUS, WEEK_DAY} from '../constants'


export const YEAR_2022 = [
  {
    name: "Styczeń",
    days: [
      {
        day: "2022-01-01"
      },
      {
        day: "2022-01-08"
      },
      {
        day: "2022-01-15"
      },
      {
        day: "2022-01-22"
      },
      {
        day: "2022-01-29"
      }
    ]
  },
  {
    name: "Luty",
    days: [
      {
        day: "2022-02-05"
      },
      {
        day: "2022-02-12"
      },
      {
        day: "2022-02-19"
      },
      {
        day: "2022-02-26"
      }
    ]
  },
  {
    name: "Marzec",
    days: [
      {
        day: "2022-03-05"
      },
      {
        day: "2022-03-12"
      },
      {
        day: "2022-03-19"
      },
      {
        day: "2022-03-26"
      }
    ]
  },
  {
    name: "Kwiecień",
    days: [
      {
        day: "2022-04-02",
      },
      {
        day: "2022-04-09",
      },
      {
        day: "2022-04-16",
      },
      {
        day: "2022-04-23",
      },
      {
        day: "2022-04-30",
        status: STATUS.HOLIDAY,
        information: "weekend majowy"
      }
    ]
  },
  {
    name: "Maj",
    days: [
      {
        day: "2022-05-01",
        status: STATUS.HOLIDAY,
        information: "weekend majowy"
      },
      {
        day: "2022-05-07",
      },
      {
        day: "2022-05-14",
        place: "Boruń",
        hotel: "Dom weselny \"Sylwia\"",
        status: STATUS.BUSY,
        "blessing": "yes",
        "blessingTime": "14.30",
        weddingHour: "15.00 (Zamość)"
      },
      {
        day: "2022-05-21",
        status: STATUS.HOLIDAY
      },
      {
        day: "2022-05-28",
        status: STATUS.HOLIDAY
      }
    ]
  },
  {
    name: "Czerwiec",
    days: [
      {
        day: "2022-06-04",
        place: "Zwierzyniec",
        hotel: "Sonata",
        status: STATUS.BUSY,
        "blessing": "Nie ma",
        weddingHour: "17.00"
      },
      {
        day: "2022-06-11",
      },
      {
        day: "2022-06-16",
        status: STATUS.HOLIDAY,
        information: "Boże Ciało"
      },
      {
        day: "2022-06-18",
        place: "Tyszowce",
        hotel: "Dom weselny \"Orfeusz\"",
        status: STATUS.BUSY,
        // weddingHour: "brak",
        information: "Rafał gra jako DJ na poprawinach na drugi dzien",
      },
      {
        day: "2022-06-25",
      }
    ]
  },
  {
    name: "Lipiec",
    days: [
      {
        day: "2022-07-02",

      },
      {
        day: "2022-07-09",
      },
      {
        day: "2022-07-16",
      },
      {
        day: "2022-07-23",
        place: "Obsza",
        hotel: "Dom weselny \"Pensjonat Roztocze\"",
        address: "Obsza 138",
        status: STATUS.BUSY,
        weddingHour: "15.00",
      },
      {
        day: "2022-07-30",
        place: "Mircze",
        hotel: "Dom weselny Jaśko",
        address: "",
        status: STATUS.BUSY,
        weddingHour: "17.00",
      }
    ]
  },
  {
    name: "Sierpień",
    days: [
      {
        day: "2022-08-06",
      },
      {
        day: "2022-08-13",
      },
      {
        day: "2022-08-20",
      },
      {
        day: "2022-08-27",
      }
    ]
  },
  {
    name: "Wrzesień",
    days: [
      {
        day: "2022-09-03",
      },
      {
        day: "2022-09-10",
      },
      {
        day: "2022-09-17",
        status: STATUS.HOLIDAY,
        information: "zostawione wolne, Darii nie będzię"
      },
      {
        day: "2022-09-24",
      }
    ]
  },
  {
    name: "Październik",
    days: [
      {
        day: "2022-10-01",
      },
      {
        day: "2022-10-08",
        place: "Hrubieszów",
        hotel: "Gniecki",
        weekDay: WEEK_DAY.SATUDRAY,
        status: STATUS.BUSY,
        // "blessing": "noInfo",
        // "blessingTime": "noInfo",
        // weddingHour: "noInfo",
        information: "przekładane z 29.05.2021"
      },
      {
        day: "2022-10-15",
      },
      {
        day: "2022-10-22",
        place: "Tyszowce",
        hotel: "Szewska Pasja",
        weekDay: WEEK_DAY.SATUDRAY,
        status: STATUS.BUSY,
        // "blessing": "noInfo",
        // "blessingTime": "noInfo",
        // weddingHour: "noInfo",
      },
      {
        day: "2022-10-29",
      }
    ]
  },
  {
    name: "Listopad",
    days: [
      {
        day: "2022-11-05",
      },
      {
        day: "2022-11-12",
      },
      {
        day: "2022-11-19"
      },
      {
        day: "2022-11-26",
      }
    ]
  },
  {
    name: "Grudzień",
    days: [
      {
        day: "2022-12-03",
      },
      {
        day: "2022-12-10",
      },
      {
        day: "2022-12-17",
      },
      {
        day: "2022-12-24",
      },
      {
        day: "2022-12-31",
      }
    ]
  }
]
