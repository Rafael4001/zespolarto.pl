import { STATUS, WEEK_DAY } from '../constants'


export const YEAR_2021 = [
    {
        name: "Styczeń",
        days: [
            {
                day: "02.01.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "09.01.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "16.01.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "23.01.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "30.01.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            }
        ]
    },
    {
        name: "Luty",
        days: [
            {
                day: "06.02.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "13.02.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "20.02.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "27.02.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            }
        ]
    },
    {
        name: "Marzec",
        days: [
            {
                day: "06.03.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "13.03.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "20.03.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "27.03.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            }
        ]
    },
    {
        name: "Kwiecień",
        days: [
            {
                day: "03.04.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "10.04.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "17.04.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "24.04.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            }
        ]
    },
    {
        name: "Maj",
        days: [

            {
                day: "01.05.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.HOLIDAY,
                information: "weekend majowy"
            },
            {
                day: "08.05.2021",
                free: false,
                place: "Hrubieszów",
                hotel: "Gniecki",
                weekDay: WEEK_DAY.SATUDRAY,
                status: STATUS.BUSY,
                "blessing": "noInfo",
                "blessingTime": "noInfo",
                weddingHour: "noInfo"
            },
            {
                day: "15.05.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "22.05.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "29.05.2021",
                free: false,
                place: "Hrubieszów",
                hotel: "Gniecki",
                weekDay: WEEK_DAY.SATUDRAY,
                status: STATUS.BUSY,
                "blessing": "noInfo",
                "blessingTime": "noInfo",
                weddingHour: "noInfo"
            }
        ]
    },
    {
        name: "Czerwiec",
        days: [
            {
                day: "05.06.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "12.06.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "19.06.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "26.06.2021",
                place: "Tyszowce",
                hotel: "Orfeusz",
                weekDay: WEEK_DAY.SATUDRAY,
                status: STATUS.BUSY,
                "blessing": "noInfo",
                information: "wesele z dnia 18.04.2020r."
            },
        ]
    },
    {
        name: "Lipiec",
        days: [
            {
                day: "03.07.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "10.07.2021",
                free: false,
                place: "Pawłów",
                hotel: "Regent",
                weekDay: WEEK_DAY.SATUDRAY,
                status: STATUS.BUSY,
                "blessing": "noInfo",
                "blessingTime": "noInfo",
                weddingHour: "noInfo"
            },
            {
                day: "17.07.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "24.07.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "31.07.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            }
        ]
    },
    {
        name: "Sierpien",
        days: [
            {
                day: "07.08.2021",
                free: false,
                place: "Mircze",
                hotel: "Jaśko",
                weekDay: WEEK_DAY.SATUDRAY,
                status: STATUS.BUSY,
                information: "Nie będzie Rafała i Darii",
                "blessing": "noInfo",
                "blessingTime": "noInfo",
                weddingHour: "noInfo"
            },
            {
                day: "14.08.2021",
                free: false,
                weekDay: WEEK_DAY.SATUDRAY,
                status: STATUS.HOLIDAY,
                information: "zostawić koniecznie wolne",
            },
            {
                day: "21.08.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "28.08.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            }
        ]
    },
    {
        name: "Wrzesień",
        days: [
            {
                day: "04.09.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "11.09.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "18.09.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "25.09.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            }
        ]
    },
    {
        name: "Październik",
        days: [
            {
                day: "02.10.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "09.10.2021",
                free: false,
                place: "Hrubieszów",
                hotel: "Gniecki",
                weekDay: WEEK_DAY.SATUDRAY,
                status: STATUS.BUSY,
                "blessing": "noInfo",
                "blessingTime": "noInfo",
                weddingHour: "noInfo"
            },
            {
                day: "16.10.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "23.10.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "30.10.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            }
        ]
    },
    {
        name: "Listopad",
        days: [
            {
                day: "06.11.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "13.11.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "20.11.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "27.11.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            }
        ]
    },
    {
        name: "Grudzień",
        days: [
            {
                day: "04.12.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "11.12.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "18.12.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "25.12.2021",
                free: true,
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            }
        ]
    }
]
