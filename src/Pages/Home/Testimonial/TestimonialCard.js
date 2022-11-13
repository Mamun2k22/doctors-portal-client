import React from 'react';

const TestimonialCard = ({ view }) => {
    const { _id, name, img, location, review_user } = view;
    return (
        <div className="card shadow-xl">
            <div className="card-body">

                <p>{review_user}</p>
                <div className="flex items-center">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>

                    </div>

                    <div>
                        <h3 className='text-lg'>{name}</h3>
                        <p className=''>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;