
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import bg2 from '../../assets/images/bg.png'


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    // Destructuring

    return (
        <div className='mx-5'>
            <header className='my-5'
                style={{
                    background: `url(${bg2})`,
                    backgroundSize: 'cover'

                }}>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="dentist chair" />
                        <div className='mr-10'>
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}

                            />
                            {/* <p> You have Selected Date : {format(selectedDate, 'PP')}</p> */}
                        </div>
                    </div>
                </div>

            </header>
        </div>
    );
};

export default AppointmentBanner;