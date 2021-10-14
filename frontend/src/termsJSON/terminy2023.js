import { STATUS } from '../constants'

export const YEAR_2023 = [
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
        day: '2023-04-29',
        status: STATUS.HOLIDAY,
        information: 'weekend majowy'
      },
      {
        day: '2023-04-30',
        status: STATUS.HOLIDAY,
        information: 'weekend majowy'
      }
    ]
  },
  {
    name: 'Maj',
    days: [
      {
        day: '2023-05-01',
        status: STATUS.HOLIDAY,
        information: 'weekend majowy'
      },
      {
        day: '2023-05-02',
        status: STATUS.HOLIDAY,
        information: 'weekend majowy'
      },
      {
        day: '2023-05-03',
        status: STATUS.HOLIDAY,
        information: 'weekend majowy'
      },
      {
        day: '2023-05-04',
        status: STATUS.HOLIDAY,
        information: 'weekend majowy'
      },
      {
        day: '2023-05-05',
        status: STATUS.HOLIDAY,
        information: 'weekend majowy'
      },
      {
        day: '2023-05-06',
        status: STATUS.HOLIDAY,
        information: 'weekend majowy'
      },
      {
        day: '2023-05-07',
        status: STATUS.HOLIDAY,
        information: 'weekend majowy'
      }
    ]
  },
  {
    name: 'Czerwiec',
    days: [
      {
        day: '2023-06-08',
        status: STATUS.HOLIDAY,
        information: 'Boże Ciało'
      }
    ]
  },
  {
    name: 'Lipiec',
    days: []
  },
  {
    name: 'Sierpień',
    days: []
  },
  {
    name: 'Wrzesień',
    days: [
      {
        day: '2023-09-02',
        place: 'Wojsławice',
        hotel: 'Dom weselny "Belweder"',
        address: 'Chełmska 122',
        status: STATUS.BUSY
        // weddingHour: '15.00'
      }
    ]

  },
  {
    name: 'Październik',
    days: []
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
