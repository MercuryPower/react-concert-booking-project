import {useMemo} from "react";
import {TicketListProps} from "../TicketList";
import {ConcertInfo} from "../../data";


// Хук для фильтрации билетов (пока что не реиспользуемый, но всё же)
export const useFilterItems = ({currentArtist, filterCity, concertInfo}:TicketListProps):ConcertInfo[] => {
    return useMemo(() =>{
        if(!currentArtist && !filterCity){ // Проверяем нужна ли фильтрация, если нет, то возвращаем тот же массив
            return concertInfo;
        }
        return concertInfo // Если фильтрация необходима, то мы обращаемся к массиву concertInfo, и...
            .filter((concert) => {
                if (currentArtist && concert.artist !== currentArtist) return false; // если текущий артист есть, но его нет в массиве, то вернуть false

                if (filterCity) { // Если текущий город есть, то фильтруем по текущему городу на 16 строчке
                    return concert.concerts.some( // Используем some() для проверки, есть ли концерт в заданном город
                        (city) => city.city === filterCity // я 16 строчка
                    );
                }
                return true; // Сохраняем все остальные концерты
            })
            .map((concert) => { // Итерируемся по каждому концерту
                if (filterCity) { // Если есть город, то создаём новый объект, чтобы избежать мутабельности...
                    const matchingConcerts = concert.concerts.filter(
                        (city) => city.city === filterCity //  и возвращаем его уже с измененным значением
                    );
                    return {...concert, concerts: matchingConcerts}; // в поле concerts
                }
                return concert;
            });

    }, [currentArtist, filterCity, concertInfo]);
}