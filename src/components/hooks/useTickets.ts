import {TicketProps} from "../Ticket";
import {useMemo} from "react";

export const useTickets = (tickets:TicketProps[]) => {
    return useMemo(() => {
            return [...tickets];
    }, [tickets])
}