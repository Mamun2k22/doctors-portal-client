import React from 'react';

const AppointOptions = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (

        <div className="mx-5" >
            <div className="card shadow-xl">
                <div className="text-center ">
                    <div className='text-center'>
                        <h2 className="card-title justify-center ">{name}</h2>
                    </div>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                    <div className="card-actions justify-center mt-4">

                        <label onClick={() => setTreatment(option)}
                            htmlFor="booking-modal"
                            className="btn btn-primary bg-gradient-to-r from-primary to secondary text-white mb-8">Book Appointment</label>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default AppointOptions;