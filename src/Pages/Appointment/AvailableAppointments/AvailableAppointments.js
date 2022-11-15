import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointOptions from './AppointOptions';

const AvailableAppointments = ({ selectedDate }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('AppointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))

    }, [])

    return (
        <section className='my-16'>
            <div className='mt-16'>
                <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
                <div className='grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-y-10'>
                    {
                        appointmentOptions.map(option => <AppointOptions
                            key={option._id}
                            option={option}
                            setTreatment={setTreatment}
                        ></AppointOptions>)
                    }
                </div>
            </div>
            {treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;