import poster1 from "./assets/posters/poster1.png";
import poster2 from "./assets/posters/poster22.jpg";
import poster3 from "./assets/posters/poster3.jpg";
import poster4 from "./assets/posters/poster4.jpg";
import poster5 from "./assets/posters/poster5.png";
import poster6 from "./assets/posters/poster6.jpg";

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
    poster5,
    poster6,
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
export const concertCities = [
    'Moscow',
    'Saint-Petersburg',
    'Samara',
    'Ufa',
    'Saratov',
    'Engels',
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

export const concertCitiesWithAll = [
    allCities,
    ...concertCities.slice(0, 3),
    ...concertCities.slice(3).sort()
];
export interface ConcertInfo {
    id: number;
    artist: string;
    concertName?: string;
    collaborators?:string[];
    concerts:{
        city: string;
        time?: string;
        place: string;
        poster: string;
        date?: string;
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
                date: concertDates[3]
            },
            {
                city: 'Tver',
                time:'21:00',
                place: concertPlaces[4],
                poster: concertImages[0],
                date: '05.09'
            },
            {
                city: 'Novgorod',
                time:'21:00',
                place: concertPlaces[4],
                poster: concertImages[0],
                date: '10.09'
            },
            {
                city: 'Irkutsk',
                time:'21:00',
                place: concertPlaces[4],
                poster: concertImages[0],
                date: '14.09'
            },
            {
                city: 'Vladivostok',
                time:'21:00',
                place: concertPlaces[4],
                poster: concertImages[0],
                date: '19.09'
            },
            {
                city: 'Krasnodar',
                time:'21:00',
                place: concertPlaces[4],
                poster: concertImages[0],
                date: '23.09'
            },
            {
                city: 'Volgograd',
                time:'21:00',
                place: concertPlaces[4],
                poster: concertImages[0],
                date: '26.09'
            },

        ]

    },
    {
        id:2,
        artist: 'ALBLAK 52',
        collaborators: ['Hugo Loud','FRIENDLY THUG 52 NGG'],
        concertName: concertNames[1],
        concerts: [
            {
                city:'Moscow',
                time:'18:00',
                place: concertPlaces[0],
                poster: concertImages[1],
                date:concertDates[0],
            },
            {
                city:'Saint-Petersburg',
                time:'20:00',
                place:concertPlaces[1],
                poster: concertImages[1],
                date:concertDates[1],
            },
            {
                city:'Tver',
                time:'22:00',
                place: concertPlaces[2],
                poster: concertImages[1],
                date: concertDates[2]
            }
        ]
    },
    {
        id:3,
        artist: 'Big Baby Tape',
        concertName: 'BENZO GANG TOUR 2023',
        concerts: [
            {
                city:'Moscow',
                time:'18:00',
                place: concertPlaces[0],
                poster: concertImages[2],
                date:concertDates[0],
            },
            {
                city:'Saint-Petersburg',
                time:'20:00',
                place:concertPlaces[1],
                poster: concertImages[2],
                date:concertDates[1],
            },
            {
                city:'Samara',
                time:'19:00',
                place: concertPlaces[2],
                poster: concertImages[2],
                date:concertDates[3],
            }
        ]
    },
    {
        id:4,
        artist: 'LIL UZI VERT',
        concertName: 'ROLLING LOUD',
        concerts: [
            {
                city:'Moscow',
                time:'18:00',
                place: concertPlaces[0],
                poster: concertImages[3],
                date:concertDates[0],
            },
            {
                city:'Saint-Petersburg',
                time:'20:00',
                place:concertPlaces[1],
                poster: concertImages[3],
                date:concertDates[1],
            },
            {
                city:'Los-Angeles',
                time:'04:00',
                place: concertPlaces[3],
                poster: concertImages[3],
                date:concertDates[3],
            },
            {
                city:'Novgorod',
                time:'18:45',
                place: concertPlaces[2],
                poster: concertImages[3],
                date:concertDates[4],
            }
        ]
    },
    {
        id:5,
        artist: 'SAPRA',
        concerts: [
            {
                city:'Saratov',
                time:'18:00',
                place: 'ONYX CLUB',
                poster: poster5,
                date:concertDates[4],
            },
            {
                city:'Engels',
                place: concertPlaces[0],
                poster: poster4,
                date:concertDates[1],
            },
        ]
    },
    {
        id:6,
        artist: 'ЛСП',
        concertName:'НЕСЧАСТНЫЕ ЛЮДИ ТУР',
        concerts: [
            {
                city:'Moscow',
                time:'18:00',
                place: concertPlaces[0],
                poster: poster6,
                date:concertDates[2],
            },
            {
                city:'Saint-Petersburg',
                time:'19:00',
                place: concertPlaces[1],
                poster: concertImages[5],
                date:concertDates[1],
            },
            {
                city:'Kazan',
                time:'18:00',
                place: 'ONYX CLUB',
                poster: concertImages[4],
                date:concertDates[0],
            },
            {
                city:'Irkutsk',
                time: '19:00',
                place: concertPlaces[0],
                poster: concertImages[4],
                date:concertDates[1],
            },
        ]
    },
]

console.log(concertInfo)