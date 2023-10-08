import poster1 from "./assets/posters/poster1.png";
import poster2 from "./assets/posters/poster22.jpg";
import poster3 from "./assets/posters/poster3.jpg";
import poster4 from "./assets/posters/poster4.jpg";
import poster5 from "./assets/posters/sapraa.png";


export const concertPlaces = [
    'BASE CLUB',
    'MTC CITY HALL',
    'VK STADIUM',
    'HBF ARENA',
    'VTB ARENA',
    'MTC LIVE HALL',
    'LUXURY VILLAGE',
]
export const concertImages = [
    poster1,
    poster2,
    poster3,
    poster4,
    poster5
];
export const concertPerformers = [
    'Kai Angel & 9mice',
    'ALBLAK 52',
    'Big Baby Tape',
    'LIL UZI VERT',
    'SAPRA',
    'LOVV66',
    'SALUKI',
    'Скриптонит',
    '104',
    'PHARAOH',
    'ЛСП',
    'Boulevard Depo',
];
export const concertNames = [
    'SECRET SHOW',
    'FIRMA MUSIC FESTIVAL',
    'ATLANTA FEST',
    'ROLLING LOUD',
    ''
];
export const concertDates = [
    '28.05',
    '29.05',
    '15.06',
    '18.06',
    '03.07',
    '10.07',
    '21.08',
    '10.09',
    '04.12',
    '05.10',
];
export const concertTimes = [
    '21:00',
    '22:00',
    '17:30',
    '20:00',
    '23:00',
    '00:00',
    '18:00',
    '19:00',
    '21:30',
    '21:00',
    '22:00'
]
export const concertCities = [
    'Moscow',
    'Saint-Petersburg',
    'Samara',
    'Ufa',
    'Saratov',
    'Kazan',
    'Novgorod',
    'Irkutsk',
    'Kursk',
    'Tver',
    'Rostov-on-Don',
    'Vladivostok',
    'Volgograd',
    'Krasnodar',
    'Naberezhnyye Chelny',
    'Novosibirsk',
    'Los-Angeles'
]
const allArtists = 'All Artists';
const allCities = 'All Cities';

export const concertPerformersWithAll = [allArtists, ...concertPerformers];
export const concertCitiesWithAll = [allCities, ...concertCities];
class ConcertInformation {
    id: number | undefined;
    name: string[] | undefined;
    concertName: string | undefined;

}
export interface ConcertInfo {
    id: number;
    artist: string;
    concertName: string;
    concerts:{
        city: string;
        time: string;
        place: string;
        poster: string;
        date: string;
    }[];
}
export const concertInfo:ConcertInfo[] = [
    {
        id:1,
        artist: 'Kai Angel & 9mice',
        concertName: 'SECRET SHOW',
        concerts: [
            {
                city: 'Moscow',
                time:'19:00',
                place: concertPlaces[1],
                poster: concertImages[0],
                date: concertDates[0],
            },
            {
                city: 'Saint-Petersburg',
                time:'20:00',
                place: concertPlaces[2],
                poster: concertImages[0],
                date: concertDates[1],
            },
            {
                city: 'Samara',
                time:'20:00',
                place:  concertPlaces[0],
                poster: concertImages[0],
                date: concertDates[2],
            },
            {
                city: 'Kazan',
                time:'21:00',
                place: concertPlaces[4],
                poster: concertImages[0],
                date: concertDates[3],
            }
        ]

    },
    {
        id:2,
        artist: 'ALBLAK 52',
        concertName: concertNames[1],
        concerts: [
            {
                city:'Moscow',
                time:'18:00',
                place: concertPlaces[0],
                poster: concertImages[0],
                date:concertDates[0],
            },
            {
                city:'Saint-Petersburg',
                time:'20:00',
                place:concertPlaces[1],
                poster: concertImages[0],
                date:concertDates[1],
            },
            {
                city:'Tver',
                time:'22:00',
                place: concertPlaces[2],
                poster: concertImages[0],
                date:concertDates[2],
            }
        ]

    },
    // {
    //     id:3,
    //     artist: 'Big Baby Tape',
    //     concertName: concertNames[2],
    //     city: ['Moscow','Saint-Petersburg'],
    //     time:['19:00', '21:00'],
    //     place: [concertPlaces[0], concertPlaces[1]],
    //     poster: concertImages[0],
    //     date:[concertDates[0], concertDates[1]],
    // },
    // {
    //     id:4,
    //     artist: 'LIL UZI VERT',
    //     concertName: concertNames[3],
    //     city: ['Moscow','Saint-Petersburg', 'Ufa', 'Los-Angeles'],
    //     time:['20:00', '22:00', '19:00', '04:00'],
    //     place: [concertCities[0], concertCities[1],concertDates[2], concertDates[3]],
    //     poster: concertImages[0],
    //     date:[concertDates[0], concertDates[1]],
    // },
    // {
    //     id:5,
    //     artist: 'SAPRA',
    //     concertName: concertNames[4],
    //     city: ['Saratov', 'Samara'],
    //     time:['19:00','18:00'],
    //     place: [concertCities[0], concertCities[1]],
    //     poster: concertImages[0],
    //     date:[concertDates[0], concertDates[1]],
    // },
    // {
    //     id:6,
    //     artist: 'LOVV66',
    //     concertName: concertNames[5],
    //     city: ['Moscow','Saint-Petersburg', 'Irkutsk', 'Volgograd'],
    //     time:['19:30', '22:00', '17:00', '20:00'],
    //     place: [concertCities[0], concertCities[1]],
    //     poster: concertImages[0],
    //     date:[concertDates[0], concertDates[1], concertDates[2], concertDates[3]],
    // },

]

console.log(concertInfo)