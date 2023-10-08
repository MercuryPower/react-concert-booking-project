import {useMemo} from "react";
import {TicketListProps} from "../TicketList";
import {ConcertInfo} from "../../consts";

export const useFilterDropdown = ({currentArtist, filterCity, concertInfo}:TicketListProps):ConcertInfo[] => {
    return useMemo(() =>{
        if(currentArtist) {
            if(filterCity){
                return concertInfo.filter((concert) => concert.artist === currentArtist
                    && concert.concerts.some((c) => c.city === filterCity));
            }
            return concertInfo.filter((concert) => concert.artist === currentArtist );
        }
        else if(filterCity){
            return concertInfo.filter((concert) => concert.concerts.some((c) => c.city === filterCity));
        }
        return concertInfo
    }, [currentArtist, filterCity, concertInfo]);
}