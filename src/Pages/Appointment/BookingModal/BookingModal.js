import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;//treatment is a appointment name same
    const date = format(selectedDate, 'PP')

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;
        // Note: Send data to the server
        // and once data is saved then close the modal
        // and Display successfully toast
        const booking = {
            appointDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone,
        }
        console.log(booking);
        setTreatment(null);


    }
    return (
        <>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10' >
                        <input type="text" disabled value={date} className="input w-full input-bordered" />
                        <select name='slot' className="select select-bordered w-full">

                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Enter your name" className="input w-full input-bordered" />
                        <input type="text" name="phone" placeholder="Enter your phone" className="input w-full input-bordered" />
                        <input type="text" name="email" placeholder="Enter your email" className="input w-full input-bordered" />

                        <br />
                        <input className='w-full btn btn-secondary' type="submit" value="submit" />
                    </form>
                </div>

            </div></>
    );
};

export default BookingModal;