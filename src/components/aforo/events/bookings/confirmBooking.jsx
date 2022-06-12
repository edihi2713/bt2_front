import React, { useEffect, useState } from "react";
//import styles from '../../../home/home.module.css'
import { genericGetService, getAuthHeaders } from '../../../../api/externalServices';
import BackdropLoader from '../../../common/backdroploader';
import { B2C_BASE_URL } from '../../../../constants';

export default function ConfirmBooking({ id }) {

    const [bookingId, setBookingId] = useState("");
    const [confirmBookingResponse, setConfirmBookingResponse] = useState(false);
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        setBookingId(params.get("id"));
        setConfirmBookingResponse(confirmBooking());

    }, []);


    const BASE_URL = B2C_BASE_URL;

    const confirmBooking = async () => {
        return await genericGetService(`${BASE_URL}/event/updateBooking/${bookingId}/Confirmado`);
    }


    return (
        <div >
          {confirmBookingResponse ? "Confirmado": "Hubo un error confirmando la reserva."}
        </div>
    );
}