import { STATUS, WEEK_DAY } from '../constants'


export const YEAR_2020 = [
    {
        name: "Styczeń",
        days: [
            {
                day: "04.01.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "11.01.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "18.01.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "25.01.2020",
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
                day: "01.02.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "08.02.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "15.02.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "22.02.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "29.02.2020",
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
                day: "07.03.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "14.03.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "21.03.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "28.03.2020",
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
                day: "04.04.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "11.04.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "18.04.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "25.04.2020",
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
                day: "01.05.2020",
                place: "",
                hotel: "",
                weekDay: WEEK_DAY.FRIDAY,
                status: STATUS.HOLIDAY,
                information: "weekend majowy"
            },
            {
                day: "02.05.2020",
                place: "",
                hotel: "",
                weekDay: WEEK_DAY.SATUDRAY,
                status: STATUS.HOLIDAY,
                information: "weekend majowy",
            },
            {
                day: "03.05.2020",
                place: "",
                hotel: "",
                weekDay: WEEK_DAY.SUNDAY,
                status: STATUS.HOLIDAY,
                information: "weekend majowy"
            },
            {
                day: "09.05.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "16.05.2020",
                place: "",
                hotel: "",
                address: "",
                status: STATUS.EMPTY
            },
            {
                day: "23.05.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "30.05.2020",
                status: STATUS.EMPTY,
            }
        ]
    },
    {
        name: "Czerwiec",
        days: [
            {
                day: "06.06.2020",
                place: "Bogucin",
                hotel: "Dwór Bogucin",
                weekDay: WEEK_DAY.SATUDRAY,
                status: STATUS.BUSY,
                "blessing": "noInfo",
                "blessingTime": "noInfo",
                weddingHour: "noInfo"
            },
            {
                day: "11.06.2020",
                place: "",
                hotel: "",
                weekDay: WEEK_DAY.THURSDAY,
                status: STATUS.HOLIDAY,
                information: "BOŻE CIAŁO"
            },
            {
                day: "13.06.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "20.06.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "27.06.2020",
                place: "Chełm",
                hotel: "Dom weselny JAMBA",
                address: "",
                status: STATUS.BUSY
            }
        ]
    },
    {
        name: "Lipiec",
        days: [
            {
                day: "04.07.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "11.07.2020",
                place: "Tomaszow Lub.",
                hotel: "Zacisze",
                address: "",
                status: STATUS.BUSY
            },
            {
                day: "18.07.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "25.07.2020",
                place: "Zamość",
                hotel: "Koronny",
                address: "",
                status: STATUS.BUSY
            }
        ]
    },
    {
        name: "Sierpien",
        days: [
            {
                day: "01.08.2020",
                place: "Różaniec Pierwszy",
                hotel: "Zajazd \"Gospoda\" ",
                address: "Różaniec Pierwszy 99A",
                status: STATUS.BUSY
            },
            {
                day: "08.08.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "15.08.2020",
                status: STATUS.EMPTY
            },
            {
                day: "22.08.2020",
                status: STATUS.EMPTY
            },
            {
                day: "28.08.2020",
                place: "Zamość",
                hotel: "Hotel Koronny",
                weekDay: WEEK_DAY.FRIDAY,
                status: STATUS.BUSY,
                "blessing": "Zamość",
                "blessingTime": "noInfo",
                weddingHour: "16.00",
                information: "przeniesione z 25.04.2020"
            },
            {
                day: "29.08.2020",
                status: STATUS.EMPTY
            },
        ]
    },
    {
        name: "Wrzesień",
        days: [
            {
                day: "05.09.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "12.09.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "13.09.2020",
                place: "Hrubieszów",
                hotel: "Gniecki",
                address: "ul. kolejowa",
                weekDay: WEEK_DAY.SUNDAY,
                status: STATUS.BUSY,
                information: "przeniesione z 16.05.2020"

            },
            {
                day: "19.09.2020",
                place: "",
                hotel: "",
                status: STATUS.HOLIDAY,
            },
            {
                day: "20.09.2020",
                place: "Krasnobród",
                hotel: "Karczma Zacisze",
                weekDay: WEEK_DAY.SUNDAY,
                status: STATUS.BUSY,
                "blessing": "tak",
                "blessingTime": "noInfo",
                weddingHour: "noInfo",
                information: "przeniesione z 30.05.2020",
            },
            {
                day: "26.09.2020",
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
                day: "03.10.2020",
                place: "Wysokie",
                hotel: "Zajazd \"Alfred\"",
                address: "",
                status: STATUS.BUSY
            },
            {
                day: "10.10.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "17.10.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "24.10.2020",
                place: "Tyszowce",
                hotel: "Szewska Pasja (sala na dole)",
                address: "",
                status: STATUS.BUSY,
                information: "Szupek musi byc koniecznie na tym weselu-->p.młoda z Werbkowic"
            },
            {
                day: "31.10.2020",
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
                day: "07.11.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "14.11.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "21.11.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "19.11.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                "id": 5,
                day: "31.11.2020",
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
                day: "05.12.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "12.12.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "19.12.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            },
            {
                day: "26.12.2020",
                place: "",
                hotel: "",
                status: STATUS.EMPTY
            }
        ]
    }
]
